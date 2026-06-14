// Background Service Worker

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'sendTelegram') {
    sendTelegramMessage(request.text);
    sendResponse({ success: true });
  } else if (request.action === 'startTracking') {
    setupAlarm();
    sendResponse({ success: true });
  } else if (request.action === 'stopTracking') {
    chrome.alarms.clear('vfsCheckAlarm');
    sendResponse({ success: true });
  }
  return true;
});

// Setup alarm based on user interval
function setupAlarm() {
  chrome.storage.local.get(['refreshInterval'], (data) => {
    const interval = data.refreshInterval || 3;
    chrome.alarms.clear('vfsCheckAlarm', () => {
      chrome.alarms.create('vfsCheckAlarm', {
        periodInMinutes: interval
      });
      console.log(`VFS Takip alarmı kuruldu: her ${interval} dakikada bir.`);
    });
  });
}

// Listen for alarm triggers
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'vfsCheckAlarm') {
    chrome.storage.local.get(['isTracking'], (data) => {
      if (data.isTracking) {
        reloadVFSTabs();
      }
    });
  }
});

// Find and reload VFS Global tabs to trigger a fresh check
function reloadVFSTabs() {
  chrome.tabs.query({ url: '*://*.vfsglobal.com/*' }, (tabs) => {
    if (tabs.length === 0) {
      console.log('Açık VFS Global sekmesi bulunamadı.');
      return;
    }
    
    // Reload the first matching tab
    const targetTab = tabs[0];
    chrome.tabs.reload(targetTab.id);
    console.log(`VFS sekmesi yenilendi (Tab ID: ${targetTab.id})`);
  });
}

// Send telegram message
function sendTelegramMessage(text) {
  chrome.storage.local.get(['telegramToken', 'telegramChatId'], (data) => {
    const token = data.telegramToken;
    const chatId = data.telegramChatId;

    if (!token || !chatId) {
      console.log('Telegram ayarları eksik. Bildirim gönderilemedi.');
      return;
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const payload = {
      chat_id: chatId,
      text: text,
      parse_mode: 'Markdown'
    };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(result => {
      if (result.ok) {
        console.log('Telegram bildirimi başarıyla gönderildi.');
      } else {
        console.error('Telegram hata:', result.description);
      }
    })
    .catch(error => {
      console.error('Telegram bağlantı hatası:', error);
    });
  });
}
