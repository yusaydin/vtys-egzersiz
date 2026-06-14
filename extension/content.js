// VFS Global Content Script - Enhanced with Wizard and Screenshot Flows

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Programmatic siren sound generator (Web Audio API)
function playSiren() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let time = audioCtx.currentTime;
    
    for (let i = 0; i < 6; i++) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(i % 2 === 0 ? 987.77 : 1318.51, time);
      
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.6, time + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.6);
      
      osc.start(time);
      osc.stop(time + 0.6);
      
      time += 0.8;
    }
  } catch (e) {
    console.error('Ses çalınamadı:', e);
  }
}

// Session expired warning tone
function playWarningSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let time = audioCtx.currentTime;
    
    for (let i = 0; i < 3; i++) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, time);
      
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.4, time + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.4);
      
      osc.start(time);
      osc.stop(time + 0.4);
      
      time += 0.6;
    }
  } catch (e) {
    console.error('Uyarı sesi çalınamadı:', e);
  }
}

// Helper: Find input field by its associated label text
function findInputByLabel(labelText) {
  const labels = document.querySelectorAll('label');
  for (const label of labels) {
    if (label.textContent.toLowerCase().includes(labelText.toLowerCase())) {
      const parent = label.parentElement;
      if (parent) {
        const input = parent.querySelector('input');
        if (input) return input;
      }
    }
  }
  return null;
}

// Helper: Find mat-select or select element by label text
function findSelectByLabel(labelText) {
  const labels = document.querySelectorAll('label');
  for (const label of labels) {
    if (label.textContent.toLowerCase().includes(labelText.toLowerCase())) {
      const parent = label.parentElement;
      if (parent) {
        const matSelect = parent.querySelector('mat-select');
        if (matSelect) return { type: 'mat-select', element: matSelect };
        const standardSelect = parent.querySelector('select');
        if (standardSelect) return { type: 'select', element: standardSelect };
      }
    }
  }
  return null;
}

// Helper: Check if a checkbox (mat-checkbox, mat-mdc-checkbox, or standard input) is checked
function isCheckboxChecked(cb) {
  if (!cb) return false;
  
  // If it's a native checkbox input
  if (cb.tagName === 'INPUT' && cb.type === 'checkbox') {
    return cb.checked;
  }
  
  // Check for common Material Design checked classes on the element itself
  if (cb.classList.contains('mat-checkbox-checked') || 
      cb.classList.contains('mat-mdc-checkbox-checked') || 
      cb.classList.contains('mdc-checkbox--selected') ||
      cb.classList.contains('mat-mdc-checkbox-selected')) {
    return true;
  }
  
  // Check the inner native input element if it exists
  const innerInput = cb.querySelector('input[type="checkbox"]');
  if (innerInput) {
    if (innerInput.checked) return true;
    if (innerInput.getAttribute('aria-checked') === 'true') return true;
  }
  
  // Check aria-checked attribute on the element itself
  if (cb.getAttribute('aria-checked') === 'true') {
    return true;
  }
  
  return false;
}

// Helper: Get text associated with a checkbox element (checks textContent, label for, parent labels, aria-labels)
function getCheckboxText(cb) {
  if (!cb) return '';
  
  // 1. Text content of the checkbox element itself
  let text = cb.textContent || '';
  
  // 2. If it's an input element, check its label or surrounding text
  if (cb.tagName === 'INPUT') {
    // Check if nested in a label
    const parentLabel = cb.closest('label');
    if (parentLabel) {
      text += ' ' + parentLabel.textContent;
    }
    
    // Check label element with 'for' attribute matching the input's id
    if (cb.id) {
      const labelFor = document.querySelector(`label[for="${cb.id}"]`);
      if (labelFor) {
        text += ' ' + labelFor.textContent;
      }
    }
    
    // Check aria-label
    const ariaLabel = cb.getAttribute('aria-label');
    if (ariaLabel) {
      text += ' ' + ariaLabel;
    }
  }
  
  return text.trim();
}

// Helper: Safely click a checkbox and dispatch event
function clickCheckbox(cb) {
  if (!cb) return;
  const innerInput = cb.querySelector('input[type="checkbox"]');
  const target = innerInput || cb;
  console.log('Tıklanacak onay kutusu hedefi:', target);
  target.click();
  // Dispatch events to trigger Angular change detection
  target.dispatchEvent(new Event('change', { bubbles: true }));
  target.dispatchEvent(new Event('input', { bubbles: true }));
}

// Helper: Find a clickable element by its text keywords (extremely robust)
function findClickableByText(targetTextKeywords) {
  // Try common button/link/interactive selectors first
  const selectors = [
    'button', 'a', '.btn', '.mat-button', '.mat-raised-button', 
    '.mat-mdc-button', '.mat-mdc-raised-button', '[role="button"]', 
    '.mat-focus-indicator', '.mdc-button'
  ];
  for (const selector of selectors) {
    const elements = document.querySelectorAll(selector);
    for (const el of elements) {
      const text = (el.textContent || '').trim().toLowerCase();
      for (const keyword of targetTextKeywords) {
        if (text.includes(keyword.toLowerCase())) {
          return el;
        }
      }
    }
  }
  
  // Sibling/parent fallback search for elements containing text
  const allElements = document.querySelectorAll('span, div, p, label');
  for (const el of allElements) {
    const text = (el.textContent || '').trim().toLowerCase();
    for (const keyword of targetTextKeywords) {
      if (text.includes(keyword.toLowerCase()) && el.children.length === 0) {
        // Find closest clickable parent or return the element itself
        const clickable = el.closest('button, a, [role="button"], mat-checkbox, mat-mdc-checkbox');
        if (clickable) return clickable;
        return el;
      }
    }
  }
  return null;
}

// Auto-fill standard select dropdowns
function fillStandardSelect(selectElement, targetText) {
  if (!selectElement || !targetText) return false;
  const options = selectElement.options;
  for (let i = 0; i < options.length; i++) {
    if (options[i].text.toLowerCase().includes(targetText.toLowerCase())) {
      if (selectElement.selectedIndex !== i) {
        selectElement.selectedIndex = i;
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      }
      return true;
    }
  }
  return false;
}

// Auto-fill Angular mat-select dropdowns
async function fillMatSelect(matSelectElement, targetText) {
  if (!matSelectElement || !targetText) return false;
  
  const currentText = matSelectElement.textContent || '';
  if (currentText.toLowerCase().includes(targetText.toLowerCase())) {
    console.log(`Zaten seçili: ${targetText}`);
    return true;
  }

  matSelectElement.click();
  console.log(`Açılır menü tıklandı, seçiliyor: ${targetText}`);
  await delay(1200); // Wait for overlay options

  const options = document.querySelectorAll('mat-option');
  if (options.length === 0) {
    console.log('Dropdown seçenekleri yüklenemedi.');
    return false;
  }

  for (const opt of options) {
    if (opt.textContent.toLowerCase().includes(targetText.toLowerCase())) {
      opt.click();
      console.log(`Seçildi: ${opt.textContent.trim()}`);
      await delay(2000); // Wait for sub-items to reload
      return true;
    }
  }

  // Close dropdown overlay if not found
  const backdrop = document.querySelector('.cdk-overlay-backdrop');
  if (backdrop) backdrop.click();
  return false;
}

// Check and resolve login timeout
function checkSessionTimeout() {
  const currentUrl = window.location.href;
  const isLoginPage = currentUrl.includes('/login') || 
                     !!document.querySelector('input[type="email"]') ||
                     document.body.innerText.includes('Your session has expired') ||
                     document.body.innerText.includes('oturumunuz sona erdi') ||
                     document.body.innerText.includes('oturumunuz sonlandı');
                     
  if (isLoginPage) {
    console.log('Oturum sonlanmış! Takipçi durduruluyor.');
    chrome.storage.local.set({ isTracking: false });
    playWarningSound();
    chrome.runtime.sendMessage({
      action: 'sendTelegram',
      text: '⚠️ *VFS Global Oturumunuz Sonlandı!*\n\nLütfen tarayıcınızdan tekrar giriş yapın. Takip durduruldu.'
    });
    return true;
  }
  return false;
}

// Show a premium floating status badge in the VFS page to show the user the assistant is active
function showStatusBadge(isTracking) {
  let badge = document.getElementById('vfs-assistant-status-badge');
  if (!isTracking) {
    if (badge) badge.remove();
    return;
  }
  
  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'vfs-assistant-status-badge';
    badge.style.position = 'fixed';
    badge.style.top = '15px';
    badge.style.right = '15px';
    badge.style.zIndex = '999999';
    badge.style.padding = '10px 18px';
    badge.style.borderRadius = '30px';
    badge.style.background = 'rgba(15, 23, 42, 0.95)';
    badge.style.color = '#fff';
    badge.style.fontFamily = 'system-ui, -apple-system, sans-serif';
    badge.style.fontSize = '13px';
    badge.style.fontWeight = '600';
    badge.style.display = 'flex';
    badge.style.alignItems = 'center';
    badge.style.gap = '10px';
    badge.style.boxShadow = '0 12px 30px -5px rgba(0,0,0,0.4)';
    badge.style.border = '1px solid rgba(255,255,255,0.15)';
    badge.style.backdropFilter = 'blur(12px)';
    badge.style.transition = 'all 0.3s ease';
    
    const dot = document.createElement('span');
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.borderRadius = '50%';
    dot.style.background = '#10b981';
    dot.style.boxShadow = '0 0 12px #10b981';
    dot.style.display = 'inline-block';
    dot.style.animation = 'vfsPulse 1.5s infinite alternate';
    
    if (!document.getElementById('vfs-pulse-style')) {
      const style = document.createElement('style');
      style.id = 'vfs-pulse-style';
      style.textContent = `
        @keyframes vfsPulse {
          0% { transform: scale(0.85); opacity: 0.6; }
          100% { transform: scale(1.25); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }
    
    badge.appendChild(dot);
    const textNode = document.createTextNode('🟢 VFS Asistanı Aktif (Takip Ediyor)');
    badge.appendChild(textNode);
    document.body.appendChild(badge);
  }
}

// Main runner
async function runAssistant() {
  chrome.storage.local.get([
    'isTracking',
    'visaCategory',
    'visaSubCategory',
    'visaCenter',
    'autoWizard',
    'firstName',
    'lastName',
    'gender',
    'nationality',
    'passportNumber'
  ], async (data) => {
    showStatusBadge(!!data.isTracking);
    if (!data.isTracking) return;

    // 1. Session timeout check
    if (checkSessionTimeout()) return;

    const currentUrl = window.location.href;

    // 2. Wizard Step: Dashboard (Screenshot 5)
    // Find if the "Yeni Rezervasyon Başlat" / "Start New Booking" button is present on the page.
    const startBookingBtn = findClickableByText(['Yeni Rezervasyon Başlat', 'Start New Booking']);

    const isAutoWizardEnabled = data.autoWizard !== false; // Default to true if undefined

    if (isAutoWizardEnabled && currentUrl.includes('/dashboard') && startBookingBtn) {
      // Find all checkboxes first and click if unchecked
      const checkboxes = Array.from(document.querySelectorAll('mat-checkbox, mat-mdc-checkbox, .mat-checkbox, .mat-mdc-checkbox, input[type="checkbox"], [role="checkbox"]'))
        .filter(cb => {
          if (cb.tagName === 'INPUT' && cb.closest('mat-checkbox, mat-mdc-checkbox, .mat-checkbox, .mat-mdc-checkbox')) {
            return false;
          }
          return true;
        });

      let clickedAny = false;
      let pendingCheckboxesCount = 0;

      for (const cb of checkboxes) {
        const text = getCheckboxText(cb).toLowerCase();
        const shouldBeChecked = text.includes('okuyacağımı onaylıyorum') || 
                                text.includes('sorumlu olduğumu onaylıyorum') || 
                                text.includes('onaylıyorum') || 
                                text.includes('onayliyorum') || 
                                text.includes('confirm') || 
                                text.includes('agree');
        
        if (shouldBeChecked) {
          if (!isCheckboxChecked(cb)) {
            pendingCheckboxesCount++;
            if (!clickedAny) {
              console.log('İşaretleniyor:', text.trim());
              clickCheckbox(cb);
              clickedAny = true;
              await delay(800);
            }
          }
        }
      }

      if (clickedAny) {
        return;
      }

      if (pendingCheckboxesCount > 0) {
        console.log(`Bekleyen ${pendingCheckboxesCount} onay kutusu var, işaretlenmesi bekleniyor...`);
        return;
      }

      const isDisabled = startBookingBtn.disabled || 
                         startBookingBtn.classList.contains('mat-button-disabled') || 
                         startBookingBtn.classList.contains('mat-mdc-button-disabled') ||
                         startBookingBtn.getAttribute('aria-disabled') === 'true';
      if (!isDisabled) {
        console.log('Yeni Rezervasyon Başlat tıklandığında...');
        startBookingBtn.click();
      } else {
        console.log('Yeni Rezervasyon Başlat butonu devredışı (onay kutularının tam algılanması bekleniyor olabilir).');
      }
      return;
    }

    // Wizard Step: Terms & Conditions Accordion page (Screenshot 4)
    // Find the continue button
    const continueBtn = findClickableByText(['devam et', 'continue']);

    if (isAutoWizardEnabled && (currentUrl.includes('/dashboard') || document.body.innerText.includes('Şartlar ve Koşullar') || document.body.innerText.includes('Terms and Conditions')) && continueBtn && !startBookingBtn) {
      const checkboxes = Array.from(document.querySelectorAll('mat-checkbox, mat-mdc-checkbox, .mat-checkbox, .mat-mdc-checkbox, input[type="checkbox"], [role="checkbox"]'))
        .filter(cb => {
          if (cb.tagName === 'INPUT' && cb.closest('mat-checkbox, mat-mdc-checkbox, .mat-checkbox, .mat-mdc-checkbox')) {
            return false;
          }
          return true;
        });

      const termsCheckbox = checkboxes.find(cb => {
        const text = getCheckboxText(cb).toLowerCase();
        return text.includes('onaylıyorum') || 
               text.includes('onayliyorum') || 
               text.includes('şartlar ve koşullar') || 
               text.includes('sartlar ve kosullar') || 
               text.includes('terms') || 
               text.includes('agree') ||
               text.includes('accept');
      });

      let clickedTerms = false;
      if (termsCheckbox) {
        if (!isCheckboxChecked(termsCheckbox)) {
          console.log('Koşullar onay kutusu işaretleniyor...');
          clickCheckbox(termsCheckbox);
          clickedTerms = true;
          await delay(1000);
        }
      }

      if (clickedTerms) {
        return;
      }

      const isDisabled = continueBtn.disabled || 
                         continueBtn.classList.contains('mat-button-disabled') || 
                         continueBtn.classList.contains('mat-mdc-button-disabled') ||
                         continueBtn.getAttribute('aria-disabled') === 'true';
      if (!isDisabled) {
        console.log('Devam et tıklanıyor...');
        continueBtn.click();
      }
      return;
    }

    // 3. Wizard Step: Applicant Details Form (Screenshot 3)
    if (data.autoWizard && (currentUrl.includes('/details') || currentUrl.includes('/applicantdetails') || document.body.innerText.includes('Başvuru Sahibi 1'))) {
      console.log('Kişisel Bilgiler formu algılandı, dolduruluyor...');
      
      let changed = false;

      // Fill First Name
      const fNameInput = findInputByLabel('İsim*');
      if (fNameInput && !fNameInput.value && data.firstName) {
        fNameInput.value = data.firstName;
        fNameInput.dispatchEvent(new Event('input', { bubbles: true }));
        changed = true;
      }

      // Fill Last Name
      const lNameInput = findInputByLabel('Soyisim*');
      if (lNameInput && !lNameInput.value && data.lastName) {
        lNameInput.value = data.lastName;
        lNameInput.dispatchEvent(new Event('input', { bubbles: true }));
        changed = true;
      }

      // Fill Passport
      const passportInput = findInputByLabel('Pasaport Numarası*');
      if (passportInput && !passportInput.value && data.passportNumber) {
        passportInput.value = data.passportNumber;
        passportInput.dispatchEvent(new Event('input', { bubbles: true }));
        changed = true;
      }

      if (changed) {
        await delay(1000);
      }

      // Fill Gender select
      const genderSelect = findSelectByLabel('Cinsiyet*');
      if (genderSelect && data.gender) {
        if (genderSelect.type === 'mat-select') {
          await fillMatSelect(genderSelect.element, data.gender);
        } else {
          fillStandardSelect(genderSelect.element, data.gender);
        }
      }

      // Fill Nationality select
      const natSelect = findSelectByLabel('Uyruk*');
      if (natSelect && data.nationality) {
        if (natSelect.type === 'mat-select') {
          await fillMatSelect(natSelect.element, data.nationality);
        } else {
          fillStandardSelect(natSelect.element, data.nationality);
        }
      }

      // Click "Kaydet" / "Save" button
      const saveBtn = Array.from(document.querySelectorAll('button, a, .btn, .mat-raised-button'))
        .find(b => b.textContent.toLowerCase().includes('kaydet') || b.textContent.toLowerCase().includes('save'));
      if (saveBtn && !saveBtn.disabled && saveBtn.getAttribute('aria-disabled') !== 'true') {
        console.log('Kaydet butonu tıklanıyor...');
        saveBtn.click();
      }
      return;
    }

    // 4. Wizard Step: Application Details / Category Page (Screenshot 1 / 2)
    if (currentUrl.includes('/applicationdetails') || document.body.innerText.includes('Randevu kategorinizi seçin')) {
      console.log('Başvuru Detayları sayfası algılandı. Dropdown doldurmaları deneniyor...');

      // Find Category selector
      const catSelect = findSelectByLabel('Randevu kategorinizi seçin');
      if (catSelect && data.visaCategory) {
        if (catSelect.type === 'mat-select') {
          await fillMatSelect(catSelect.element, data.visaCategory);
        } else {
          fillStandardSelect(catSelect.element, data.visaCategory);
        }
      }

      // Find Subcategory selector
      const subSelect = findSelectByLabel('Alt kategorinizi seçin');
      if (subSelect && data.visaSubCategory) {
        if (subSelect.type === 'mat-select') {
          await fillMatSelect(subSelect.element, data.visaSubCategory);
        } else {
          fillStandardSelect(subSelect.element, data.visaSubCategory);
        }
      }

      await delay(2000); // Wait for background slots check

      // Check slot availability result
      const bodyText = document.body.innerText || '';
      
      const negativePhrases = [
        'seçilen alt kategori için herhangi bir merkezde randevu müsaitliği bulunamadı',
        'no appointment slots are available',
        'no slots available',
        'uygun randevu saati bulunmamaktadır',
        'uygun randevu bulunmamaktadır'
      ];
      
      const hasNoSlots = negativePhrases.some(phrase => bodyText.toLowerCase().includes(phrase));
      
      // If VFS shows the red message "herhangi bir merkezde randevu müsaitliği bulunamadı"
      if (hasNoSlots) {
        console.log('Randevu bulunamadı. Eklenti bir sonraki sorgulama döngüsünü bekleyecek.');
        return;
      }

      // If warning is NOT shown, let's see if the center dropdown is active
      const centerSelect = findSelectByLabel('Uygulama merkezinizi seçin');
      if (centerSelect) {
        // If centerSelect exists and is enabled, OR contains option values
        const centerElement = centerSelect.element;
        const isDisabled = centerElement.getAttribute('aria-disabled') === 'true' || centerElement.disabled;
        
        if (!isDisabled) {
          console.log('🎉 Uygulama merkezi aktif! Randevu açılmış olabilir.');
          
          // Try to select user's preferred center if configured
          if (data.visaCenter) {
            if (centerSelect.type === 'mat-select') {
              await fillMatSelect(centerElement, data.visaCenter);
            } else {
              fillStandardSelect(centerElement, data.visaCenter);
            }
          }

          // Trigger Alarm
          playSiren();
          chrome.runtime.sendMessage({
            action: 'sendTelegram',
            text: `🎉 *VFS GLOBAL RANDEVU BULUNDU!*\n\nKategori: ${data.visaCategory}\nAlt Kategori: ${data.visaSubCategory}\n\nRandevu kanalı açıldı ve Uygulama Merkezi seçilebilir durumda! Acilen tarayıcınıza dönüp işleminizi tamamlayın!`
          });

          // Continuously alert
          setInterval(playSiren, 15000);

          // Stop tracking loop
          chrome.storage.local.set({ isTracking: false });
          chrome.runtime.sendMessage({ action: 'stopTracking' });
        }
      }
    }
  });
}

// Global active loop interval for robust element detection (essential for SPAs like Angular)
let assistantLoop = null;

function startLoop() {
  if (assistantLoop) clearInterval(assistantLoop);
  
  // Run immediately
  runAssistant();
  
  // Poll page state every 1.5 seconds to interact as elements render dynamically
  assistantLoop = setInterval(() => {
    chrome.storage.local.get(['isTracking'], (data) => {
      if (data.isTracking) {
        runAssistant();
      } else {
        clearInterval(assistantLoop);
        assistantLoop = null;
      }
    });
  }, 1500);
}

// Start checking on load
startLoop();

// Listen for storage tracking toggles to reactivate loop instantly
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local' && changes.isTracking) {
    if (changes.isTracking.newValue === true) {
      console.log('Takip başlatıldı, periyodik tarama döngüsü başlatılıyor...');
      startLoop();
    } else {
      console.log('Takip durduruldu, döngü sonlandırılıyor.');
      if (assistantLoop) {
        clearInterval(assistantLoop);
        assistantLoop = null;
      }
    }
  }
});
