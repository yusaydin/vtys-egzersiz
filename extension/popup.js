document.addEventListener('DOMContentLoaded', () => {
  // Tab Switcher
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

  // UI Elements
  const visaCategorySelect = document.getElementById('visaCategory');
  const customVisaCategoryInput = document.getElementById('customVisaCategory');
  const visaSubCategorySelect = document.getElementById('visaSubCategory');
  const customVisaSubCategoryInput = document.getElementById('customVisaSubCategory');
  const visaCenterSelect = document.getElementById('visaCenter');
  const customVisaCenterInput = document.getElementById('customVisaCenter');
  
  const telegramTokenInput = document.getElementById('telegramToken');
  const telegramChatIdInput = document.getElementById('telegramChatId');
  const btnTestTelegram = document.getElementById('btnTestTelegram');
  
  const refreshIntervalInput = document.getElementById('refreshInterval');
  const enableSoundInput = document.getElementById('enableSound');
  const autoWizardInput = document.getElementById('autoWizard');

  // Personal Info UI Elements
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const genderSelect = document.getElementById('gender');
  const nationalityInput = document.getElementById('nationality');
  const passportNumberInput = document.getElementById('passportNumber');

  const btnAction = document.getElementById('btnAction');
  const statusBadge = document.getElementById('statusBadge');
  const statusText = document.getElementById('statusText');
  const liveIndicator = document.getElementById('liveIndicator');

  // Toggle helper for custom inputs
  function setupSelectToggler(selectEl, customEl) {
    selectEl.addEventListener('change', () => {
      if (selectEl.value === 'custom') {
        customEl.style.display = 'block';
      } else {
        customEl.style.display = 'none';
      }
    });
  }
  setupSelectToggler(visaCategorySelect, customVisaCategoryInput);
  setupSelectToggler(visaSubCategorySelect, customVisaSubCategoryInput);
  setupSelectToggler(visaCenterSelect, customVisaCenterInput);

  // Load value helper for custom select layout
  function loadSelectVal(selectEl, customEl, val) {
    if (!val) return;
    let exists = false;
    for (let i = 0; i < selectEl.options.length; i++) {
      if (selectEl.options[i].value === val) {
        exists = true;
        break;
      }
    }
    if (exists) {
      selectEl.value = val;
      customEl.style.display = 'none';
    } else {
      selectEl.value = 'custom';
      customEl.value = val;
      customEl.style.display = 'block';
    }
  }

  // Get value helper for custom select layout
  function getSelectVal(selectEl, customEl) {
    if (selectEl.value === 'custom') {
      return customEl.value.trim();
    }
    return selectEl.value;
  }

  // Load Settings from Chrome Storage
  chrome.storage.local.get([
    'isTracking',
    'visaCategory',
    'visaSubCategory',
    'visaCenter',
    'telegramToken',
    'telegramChatId',
    'refreshInterval',
    'enableSound',
    'autoWizard',
    'firstName',
    'lastName',
    'gender',
    'nationality',
    'passportNumber'
  ], (data) => {
    loadSelectVal(visaCategorySelect, customVisaCategoryInput, data.visaCategory);
    loadSelectVal(visaSubCategorySelect, customVisaSubCategoryInput, data.visaSubCategory);
    loadSelectVal(visaCenterSelect, customVisaCenterInput, data.visaCenter);
    
    if (data.telegramToken) telegramTokenInput.value = data.telegramToken;
    if (data.telegramChatId) telegramChatIdInput.value = data.telegramChatId;
    
    if (data.refreshInterval) refreshIntervalInput.value = data.refreshInterval;
    if (data.enableSound !== undefined) enableSoundInput.checked = data.enableSound;
    if (data.autoWizard !== undefined) autoWizardInput.checked = data.autoWizard;

    // Load Personal Details
    if (data.firstName) firstNameInput.value = data.firstName;
    if (data.lastName) lastNameInput.value = data.lastName;
    if (data.gender) genderSelect.value = data.gender;
    if (data.nationality) nationalityInput.value = data.nationality;
    if (data.passportNumber) passportNumberInput.value = data.passportNumber;
    
    if (data.isTracking) {
      setTrackingUI(true);
    } else {
      setTrackingUI(false);
    }
  });

  // Save Settings helper to keep storage synchronized on any input/change event
  function saveAllSettings(isTrackingOverridden = null) {
    chrome.storage.local.get(['isTracking'], (data) => {
      const activeState = (isTrackingOverridden !== null) ? isTrackingOverridden : !!data.isTracking;
      const settings = {
        isTracking: activeState,
        visaCategory: getSelectVal(visaCategorySelect, customVisaCategoryInput),
        visaSubCategory: getSelectVal(visaSubCategorySelect, customVisaSubCategoryInput),
        visaCenter: getSelectVal(visaCenterSelect, customVisaCenterInput),
        telegramToken: telegramTokenInput.value.trim(),
        telegramChatId: telegramChatIdInput.value.trim(),
        refreshInterval: parseInt(refreshIntervalInput.value, 10) || 3,
        enableSound: enableSoundInput.checked,
        autoWizard: autoWizardInput.checked,
        
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        gender: genderSelect.value,
        nationality: nationalityInput.value.trim(),
        passportNumber: passportNumberInput.value.trim()
      };
      chrome.storage.local.set(settings);
    });
  }

  // Bind keyup/change/input event listeners to all inputs to auto-save immediately
  const inputsToWatch = [
    customVisaCategoryInput,
    customVisaSubCategoryInput,
    customVisaCenterInput,
    telegramTokenInput,
    telegramChatIdInput,
    refreshIntervalInput,
    firstNameInput,
    lastNameInput,
    passportNumberInput,
    nationalityInput
  ];

  const selectsAndChecksToWatch = [
    visaCategorySelect,
    visaSubCategorySelect,
    visaCenterSelect,
    genderSelect,
    enableSoundInput,
    autoWizardInput
  ];

  inputsToWatch.forEach(input => {
    input.addEventListener('input', () => saveAllSettings());
  });

  selectsAndChecksToWatch.forEach(select => {
    select.addEventListener('change', () => saveAllSettings());
  });

  // Action Button (Start/Stop)
  btnAction.addEventListener('click', () => {
    chrome.storage.local.get(['isTracking'], (data) => {
      const currentlyTracking = !!data.isTracking;
      const nextTrackingState = !currentlyTracking;

      saveAllSettings(nextTrackingState);

      if (nextTrackingState) {
        setTrackingUI(true);
        chrome.runtime.sendMessage({ action: 'startTracking' });
      } else {
        setTrackingUI(false);
        chrome.runtime.sendMessage({ action: 'stopTracking' });
      }
    });
  });

  // Test Telegram Notification
  btnTestTelegram.addEventListener('click', () => {
    const token = telegramTokenInput.value.trim();
    const chatId = telegramChatIdInput.value.trim();

    if (!token || !chatId) {
      alert('Lütfen önce Telegram Token ve Chat ID bilgilerini doldurun.');
      return;
    }

    btnTestTelegram.disabled = true;
    btnTestTelegram.textContent = 'Gönderiliyor...';

    const testUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    const payload = {
      chat_id: chatId,
      text: '🔔 *VFS Global Asistanı Test Mesajı*\n\nTelegram bağlantınız başarıyla sağlandı! Randevu açıldığında bu kanal üzerinden anlık olarak uyarılacaksınız.',
      parse_mode: 'Markdown'
    };

    fetch(testUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(result => {
      if (result.ok) {
        alert('Test mesajı başarıyla gönderildi! Telefonunuzu kontrol edin.');
      } else {
        alert(`Hata: ${result.description}`);
      }
    })
    .catch(error => {
      alert(`Bağlantı hatası: ${error.message}`);
    })
    .finally(() => {
      btnTestTelegram.disabled = false;
      btnTestTelegram.textContent = 'Telegram Test Mesajı Gönder';
    });
  });

  function setTrackingUI(active) {
    if (active) {
      statusBadge.className = 'status-badge active';
      statusText.textContent = 'Aktif';
      liveIndicator.style.display = 'flex';
      btnAction.className = 'btn btn-danger';
      btnAction.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect></svg>
        Takibi Durdur
      `;
    } else {
      statusBadge.className = 'status-badge inactive';
      statusText.textContent = 'Pasif';
      liveIndicator.style.display = 'none';
      btnAction.className = 'btn btn-primary';
      btnAction.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        Takibi Başlat
      `;
    }
  }
});
