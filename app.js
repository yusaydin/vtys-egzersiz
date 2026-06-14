
    // State Variables
    let questions = [];
    let currentLesson = localStorage.getItem('selected_lesson') || 'ders8';
    let currentFilteredQuestions = [];
    let currentIndex = 0;
    let userAnswers = {};

    // Elements
    const lessonFilter = document.getElementById('lesson-filter');
    const categoryFilter = document.getElementById('category-filter');
    const typeFilter = document.getElementById('type-filter');
    const questionsGrid = document.getElementById('questions-grid');
    const questionCategoryEl = document.getElementById('question-category');
    const questionNumberEl = document.getElementById('question-number');
    const questionTextEl = document.getElementById('question-text');
    const codeBlockEl = document.getElementById('code-block');
    const answersContainer = document.getElementById('answers-container');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnCheck = document.getElementById('btn-check');
    const btnExplain = document.getElementById('btn-explain');
    const explanationBox = document.getElementById('explanation-box');
    const explanationText = document.getElementById('explanation-text');
    const progressBar = document.getElementById('progress-bar');
    
    // Header Stats
    const headerCorrect = document.getElementById('header-correct');
    const headerIncorrect = document.getElementById('header-incorrect');
    const headerRemaining = document.getElementById('header-remaining');

    // Dashboard Elements
    const quizArea = document.getElementById('quiz-area');
    const dashboardArea = document.getElementById('dashboard-area');
    const scorePercent = document.getElementById('score-percent');
    const scoreFraction = document.getElementById('score-fraction');
    const dashCorrect = document.getElementById('dash-correct');
    const dashIncorrect = document.getElementById('dash-incorrect');
    const dashEmpty = document.getElementById('dash-empty');
    const dashStatus = document.getElementById('dash-status');
    const btnReset = document.getElementById('btn-reset');

    // Confetti
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    let confettiActive = false;
    let particles = [];

    // SQL Syntax Highlighter Helper
    function highlightSQL(code) {
      if (!code) return '';
      // Escape html
      let html = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      
      const keywords = [
        'CREATE', 'VIEW', 'OR', 'REPLACE', 'TEMPORARY', 'TABLE', 'INDEX', 'UNIQUE', 'FULLTEXT',
        'AS', 'SELECT', 'FROM', 'WHERE', 'JOIN', 'INNER', 'ON', 'GROUP BY', 'HAVING', 'ORDER BY',
        'INSERT', 'INTO', 'UPDATE', 'SET', 'DROP', 'ALTER', 'GRANT', 'ALL', 'TO', 'IDENTIFIED', 'BY',
        'NOT', 'NULL', 'AUTO_INCREMENT', 'PRIMARY', 'KEY', 'LIKE', 'COUNT', 'VARCHAR', 'INT', 'FLOAT', 'DEFAULT',
        'TRANSACTION', 'START', 'BEGIN', 'COMMIT', 'ROLLBACK', 'SAVEPOINT', 'PROCEDURE', 'DECLARE', 'IF', 'THEN',
        'ELSEIF', 'ELSE', 'END', 'CASE', 'WHEN', 'CALL', 'IN', 'OUT', 'INOUT', 'ROW_COUNT', 'POWER'
      ];
      
      // Words boundary highlight
      const pattern = new RegExp('\\b(' + keywords.join('|') + ')\\b', 'gi');
      html = html.replace(pattern, '<span class="sql-keyword">$1</span>');
      
      // Strings highlight
      html = html.replace(/'([^']*)'/g, '<span class="sql-string">\'$1\'</span>');
      
      return html;
    }

    function updateCategoryFilterOptions(lessonId) {
      categoryFilter.innerHTML = '';
      if (lessonId === 'ders8') {
        categoryFilter.innerHTML = `
          <option value="all">Tüm Sorular (100)</option>
          <option value="view">I. Görünüm - VIEW (40)</option>
          <option value="temp">II. Geçici Tablo - TEMPORARY TABLE (30)</option>
          <option value="index">III. Dizin - INDEX (30)</option>
        `;
      } else if (lessonId === 'ders9') {
        categoryFilter.innerHTML = `
          <option value="all">Tüm Sorular (50)</option>
          <option value="tsql">I. Transact-SQL ve Transaction (20)</option>
          <option value="sp">II. Saklı Yordam (STORED PROCEDURE) (30)</option>
        `;
      } else if (lessonId === 'ders10') {
        categoryFilter.innerHTML = `
          <option value="all">Tüm Sorular (75)</option>
          <option value="joins">I. Tablo Birleştirmeleri - JOIN (38)</option>
          <option value="subquery">II. Alt Sorgular ve Gruplama (37)</option>
        `;
      }
    }

    function updateLessonTexts(lessonId) {
      const headerTitle = document.querySelector('header h1');
      const docTitle = document.querySelector('title');
      const dashboardSubtitle = document.querySelector('.dashboard-subtitle');
      
      if (lessonId === 'ders8') {
        headerTitle.innerText = "VTYS Egzersiz (Ders 8)";
        docTitle.innerText = "VTYS Egzersiz - Ders 8";
        if (dashboardSubtitle) {
          dashboardSubtitle.innerText = "Dr. Öğr. Üyesi Hüseyin COŞKUN'un Ders 8 (Görünüm, Geçici Tablo ve Dizin) sunumuna dayalı 100 soruluk sınavı tamamladınız.";
        }
      } else if (lessonId === 'ders9') {
        headerTitle.innerText = "VTYS Egzersiz (Ders 9)";
        docTitle.innerText = "VTYS Egzersiz - Ders 9";
        if (dashboardSubtitle) {
          dashboardSubtitle.innerText = "Dr. Öğr. Üyesi Hüseyin COŞKUN'un Ders 9 (T-SQL ve Saklı Yordamlar) sunumuna dayalı 50 soruluk sınavı tamamladınız.";
        }
      } else if (lessonId === 'ders10') {
        headerTitle.innerText = "VTYS Egzersiz (Market SQL Sorguları)";
        docTitle.innerText = "VTYS Egzersiz - Market SQL Sorguları";
        if (dashboardSubtitle) {
          dashboardSubtitle.innerText = "Market veritabanı üzerindeki JOIN birleştirmeleri ve Alt Sorgular (Subqueries) içeren 75 soruluk uygulamalı sınavı tamamladınız.";
        }
      }
    }

    function loadQuestionsForLesson(lessonId) {
      currentLesson = lessonId;
      localStorage.setItem('selected_lesson', lessonId);
      lessonFilter.value = lessonId;
      
      if (lessonId === 'ders8') {
        questions = questionsDers8;
      } else if (lessonId === 'ders9') {
        questions = questionsDers9;
      } else if (lessonId === 'ders10') {
        questions = questionsDers10;
      }
      
      loadProgress();
      updateCategoryFilterOptions(lessonId);
      updateLessonTexts(lessonId);
      
      currentIndex = 0;
      filterQuestions();
      renderQuestionsGrid();
      loadQuestion();
      updateStats();
    }

    // Initialize Quiz
    function initQuiz() {
      loadQuestionsForLesson(currentLesson);
    }

    // Category Filtering
    function filterQuestions() {
      const category = categoryFilter.value;
      const qtype = typeFilter.value;
      
      let filtered = [...questions];
      
      if (category !== 'all') {
        filtered = filtered.filter(q => q.category === category);
      }
      
      if (qtype !== 'all') {
        if (qtype === 'code') {
          filtered = filtered.filter(q => q.snippet !== undefined);
        } else if (qtype === 'choice') {
          filtered = filtered.filter(q => q.snippet === undefined);
        }
      }
      
      currentFilteredQuestions = filtered;
      currentIndex = 0;
    }

    // Render 100 Sidebar buttons
    function renderQuestionsGrid() {
      questionsGrid.innerHTML = '';
      currentFilteredQuestions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'q-btn';
        btn.innerText = q.id; // Show global ID
        btn.setAttribute('data-index', idx);
        
        // Add classes based on answer status
        const answer = userAnswers[q.id];
        if (answer) {
          if (answer.isCorrect) {
            btn.classList.add('answered-correct');
          } else {
            btn.classList.add('answered-incorrect');
          }
        }
        
        if (idx === currentIndex) {
          btn.classList.add('current');
        }

        btn.addEventListener('click', () => {
          if (idx > currentIndex) {
            for (let i = currentIndex; i < idx; i++) {
              const checkQ = currentFilteredQuestions[i];
              if (!userAnswers[checkQ.id] || !userAnswers[checkQ.id].isCorrect) {
                alert("Soruları sırayla ve doğru cevaplayarak ilerlemelisiniz!");
                return;
              }
            }
          }
          document.querySelectorAll('.q-btn').forEach(b => b.classList.remove('current'));
          currentIndex = idx;
          btn.classList.add('current');
          loadQuestion();
        });

        questionsGrid.appendChild(btn);
      });
    }

    // Display Current Question
    function loadQuestion() {
      // Hide explanation
      explanationBox.style.display = 'none';
      btnExplain.style.display = 'none';
      
      // Check if we finished
      if (currentFilteredQuestions.length === 0) {
        questionTextEl.innerText = "Bu kategoride soru bulunmamaktadır.";
        answersContainer.innerHTML = '';
        codeBlockEl.style.display = 'none';
        return;
      }

      const q = currentFilteredQuestions[currentIndex];

      // Highlight active sidebar item
      document.querySelectorAll('.q-btn').forEach(b => b.classList.remove('current'));
      const activeBtn = document.querySelector(`.q-btn[data-index="${currentIndex}"]`);
      if (activeBtn) activeBtn.classList.add('current');

      // Set category text
      let catText = "";
      if (q.category === 'view') catText = "I. Görünüm (VIEW)";
      else if (q.category === 'temp') catText = "II. Geçici Tablo (TEMPORARY TABLE)";
      else if (q.category === 'index') catText = "III. Dizin (INDEX)";
      else if (q.category === 'tsql') catText = "I. Transact-SQL ve Transaction";
      else if (q.category === 'sp') catText = "II. Saklı Yordam (STORED PROCEDURE)";
      questionCategoryEl.innerText = catText;

      // Set question counts
      questionNumberEl.innerText = `Soru ${currentIndex + 1} / ${currentFilteredQuestions.length}`;
      questionTextEl.innerText = `${q.id}. ${q.question}`;

      // Code block handling
      if (q.snippet) {
        codeBlockEl.innerHTML = highlightSQL(q.snippet);
        codeBlockEl.style.display = 'block';
      } else {
        codeBlockEl.style.display = 'none';
      }

      // Render Answers depending on type
      answersContainer.innerHTML = '';
      const savedAns = userAnswers[q.id];

      if (q.type === 'choice') {
        renderMultipleChoice(q, savedAns);
      } else if (q.type === 'tf') {
        renderTrueFalse(q, savedAns);
      } else if (q.type === 'blank') {
        renderBlankInput(q, savedAns);
      } else if (q.type === 'code') {
        renderCodeQuestion(q, savedAns);
      }

      // Configure Control / Explain Button status
      if (savedAns) {
        if (!savedAns.isCorrect) {
          btnCheck.disabled = false;
          btnCheck.style.display = 'flex';
          btnCheck.innerText = 'Yeniden Dene';
          btnExplain.style.display = 'none';
        } else {
          btnCheck.disabled = true;
          btnCheck.style.display = 'none';
          btnExplain.style.display = 'none';
          showExplanation(q);
          showResultBanner(savedAns.isCorrect, q);
        }
      } else {
        btnCheck.innerText = 'Cevabı Kontrol Et';
        if (q.type === 'blank' || q.type === 'choice' || q.type === 'tf') {
          btnCheck.disabled = false;
          btnCheck.style.display = 'flex';
        } else {
          btnCheck.style.display = 'none';
        }
      }
      // Configure Prev/Next Button status
      btnPrev.disabled = currentIndex === 0;
      if (currentIndex === currentFilteredQuestions.length - 1) {
        btnNext.innerText = "Sonuçları Gör";
      } else {
        btnNext.innerText = "Sonraki \u2192";
      }

      // Update progress bar
      const totalAnswered = Object.keys(userAnswers).length;
      const progressPercent = (totalAnswered / questions.length) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    // Render Multiple Choice Answers
    function renderMultipleChoice(q, savedAns) {
      const list = document.createElement('div');
      list.className = 'options-list';
      
      q.options.forEach((opt, idx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        
        const radio = document.createElement('div');
        radio.className = 'option-radio';
        card.appendChild(radio);

        const span = document.createElement('span');
        span.innerText = opt;
        card.appendChild(span);

        // Selection or correction rendering
        if (savedAns) {
          if (idx === q.answer) {
            card.classList.add('correct-highlight');
          } else if (savedAns.selectedOption === idx) {
            card.classList.add('incorrect-highlight');
          }
        } else {
          card.addEventListener('click', () => {
            document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            card.setAttribute('data-selected-idx', idx);
          });
        }

        // Restore user answer selection if already answered
        if (savedAns && savedAns.selectedOption === idx) {
          card.classList.add('selected');
        }

        list.appendChild(card);
      });

      answersContainer.appendChild(list);
    }

    // Render True False Answers
    function renderTrueFalse(q, savedAns) {
      const container = document.createElement('div');
      container.className = 'tf-container';

      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'tf-btn';
        btn.innerText = opt;

        if (savedAns) {
          if (idx === q.answer) {
            btn.classList.add('correct-highlight');
          } else if (savedAns.selectedOption === idx) {
            btn.classList.add('incorrect-highlight');
          }
        } else {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            btn.setAttribute('data-selected-idx', idx);
          });
        }

        if (savedAns && savedAns.selectedOption === idx) {
          btn.classList.add('selected');
        }

        container.appendChild(btn);
      });

      answersContainer.appendChild(container);
    }

    // Render Blank Coding input
    function renderBlankInput(q, savedAns) {
      const container = document.createElement('div');
      container.className = 'blank-container';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'blank-input';
      input.placeholder = 'Eksik SQL kelimesini yazın...';
      input.id = 'blank-answer-input';
      
      const feedback = document.createElement('div');
      feedback.className = 'blank-feedback';

      if (savedAns) {
        input.value = savedAns.textInput;
        input.disabled = true;
        
        if (savedAns.isCorrect) {
          input.classList.add('correct-highlight');
          feedback.innerText = "Doğru! Doğru kelime: " + q.answer;
          feedback.classList.add('correct');
        } else {
          input.classList.add('incorrect-highlight');
          feedback.innerText = "Yanlış! Doğru cevap: " + q.answer;
          feedback.classList.add('incorrect');
        }
      }

      container.appendChild(input);
      container.appendChild(feedback);
      answersContainer.appendChild(container);
    }


    function renderCodeQuestion(q, savedAns) {
      const wrapper = document.createElement('div');
      
      const snippetDiv = document.createElement('div');
      snippetDiv.className = 'code-question-snippet';
      
      let snippetHTML = q.snippet;
      snippetHTML = snippetHTML
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      
      const sqlKeywords = [
        'CREATE', 'VIEW', 'OR', 'REPLACE', 'TEMPORARY', 'TABLE', 'INDEX', 'UNIQUE', 'FULLTEXT',
        'AS', 'SELECT', 'FROM', 'WHERE', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'ON', 'GROUP BY', 'HAVING', 'ORDER BY',
        'INSERT', 'INTO', 'UPDATE', 'SET', 'DROP', 'ALTER', 'GRANT', 'ALL', 'TO', 'IDENTIFIED', 'BY',
        'NOT', 'NULL', 'AUTO_INCREMENT', 'PRIMARY', 'KEY', 'LIKE', 'COUNT', 'SUM', 'AVG', 'MAX', 'MIN',
        'VARCHAR', 'INT', 'FLOAT', 'DEFAULT', 'WITH', 'CHECK', 'OPTION', 'CASCADE', 'LOCAL',
        'SHOW', 'DESCRIBE', 'ADD', 'IF', 'EXISTS', 'ENGINE', 'USING', 'BTREE', 'HASH',
        'AND', 'IN', 'BETWEEN', 'IS', 'DESC', 'ASC', 'LIMIT', 'DISTINCT', 'PRIVILEGES', 'DELETE',
        'TRANSACTION', 'START', 'BEGIN', 'COMMIT', 'ROLLBACK', 'SAVEPOINT', 'PROCEDURE', 'DECLARE', 'IF', 'THEN',
        'ELSEIF', 'ELSE', 'END', 'CASE', 'WHEN', 'CALL', 'IN', 'OUT', 'INOUT', 'ROW_COUNT', 'POWER'
      ];
      const kwPattern = new RegExp('\\b(' + sqlKeywords.join('|') + ')\\b', 'gi');
      
      const blankPattern = /___([0-9]+)___/g;
      const parts = snippetHTML.split(blankPattern);
      
      let html = '';
      for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 0) {
          let textPart = parts[i];
          textPart = textPart.replace(kwPattern, '<span class="sql-keyword">$1</span>');
          textPart = textPart.replace(/'([^']*)'/g, '<span class="sql-string">\'$1\'</span>');
          html += textPart;
        } else {
          const blankIdx = parseInt(parts[i]) - 1;
          const correctAns = q.blanks[blankIdx] || '';
          const inputWidth = Math.max(correctAns.length * 10 + 20, 60);
          
          if (savedAns) {
            const userVal = savedAns.blankInputs ? savedAns.blankInputs[blankIdx] : '';
            const isBlankCorrect = userVal && userVal.toLowerCase().trim() === correctAns.toLowerCase();
            if (isBlankCorrect) {
              html += `<input type="text" class="code-blank-input blank-correct" value="${correctAns}" disabled style="width:${inputWidth}px">`;
            } else {
              html += `<input type="text" class="code-blank-input blank-incorrect" value="${userVal || ''}" disabled style="width:${inputWidth}px">`;
              html += `<span class="code-correct-answer show"> → ${correctAns}</span>`;
            }
          } else {
            html += `<input type="text" class="code-blank-input" data-blank-idx="${blankIdx}" placeholder="boşluk ${blankIdx+1}" style="width:${inputWidth}px">`;
          }
        }
      }
      
      snippetDiv.innerHTML = html;
      wrapper.appendChild(snippetDiv);
      
      if (!savedAns) {
        // Create custom action buttons row (W3Schools style)
        const actionRow = document.createElement('div');
        actionRow.className = 'code-question-actions';
        actionRow.style.cssText = 'display: flex; gap: 10px; margin-top: 15px;';

        const btnShow = document.createElement('button');
        btnShow.className = 'btn btn-info';
        btnShow.innerText = 'Cevabı Göster';
        btnShow.style.cssText = 'font-size: 14px; padding: 8px 16px;';

        const btnSubmit = document.createElement('button');
        btnSubmit.className = 'btn btn-primary';
        btnSubmit.innerText = 'Cevapla';
        btnSubmit.style.cssText = 'font-size: 14px; padding: 8px 16px;';

        actionRow.appendChild(btnShow);
        actionRow.appendChild(btnSubmit);
        wrapper.appendChild(actionRow);

        let showingAnswerState = false;

        // "Show Answer" toggle behavior
        btnShow.addEventListener('click', () => {
          const inputs = snippetDiv.querySelectorAll('.code-blank-input');
          
          if (!showingAnswerState) {
            showingAnswerState = true;
            btnShow.innerText = 'Cevabı Gizle';
            btnShow.classList.remove('btn-info');
            btnShow.classList.add('btn-secondary');
            
            // Fill blanks with correct answers and disable them
            inputs.forEach((inp, idx) => {
              inp.value = q.blanks[idx];
              inp.disabled = true;
              inp.classList.add('blank-showing-answer');
              inp.style.borderColor = '#2196F3';
            });
            
            btnSubmit.disabled = true;
            showExplanation(q);
          } else {
            showingAnswerState = false;
            btnShow.innerText = 'Cevabı Göster';
            btnShow.classList.remove('btn-secondary');
            btnShow.classList.add('btn-info');
            
            // Clear inputs and enable them
            inputs.forEach((inp, idx) => {
              inp.value = '';
              inp.disabled = false;
              inp.classList.remove('blank-showing-answer');
              inp.style.borderColor = '';
            });
            
            btnSubmit.disabled = false;
            explanationBox.style.display = 'none';
            if (inputs.length > 0) inputs[0].focus();
          }
        });

        // "Submit Answer" behavior
        const submitCodeAnswer = () => {
          const inputs = snippetDiv.querySelectorAll('.code-blank-input');
          let allFilled = true;
          inputs.forEach(i => { if (!i.value.trim()) allFilled = false; });
          if (!allFilled) {
            alert('Lütfen tüm boşlukları doldurun.');
            return;
          }

          // Check if all inputs are correct
          let allCorrect = true;
          inputs.forEach((inp, idx) => {
            if (inp.value.trim().toLowerCase() !== q.blanks[idx].toLowerCase()) {
              allCorrect = false;
            }
          });

          if (allCorrect) {
            // Correct answer behavior
            inputs.forEach((inp) => {
              inp.disabled = true;
              inp.classList.add('blank-correct');
            });
            btnSubmit.disabled = true;
            btnShow.disabled = true;
            
            // Save answer as correct
            userAnswers[q.id] = {
              selectedOption: null,
              textInput: '',
              blankInputs: q.blanks,
              isCorrect: true
            };
            saveProgress();
            updateStats();
            renderQuestionsGrid();
            
            // Show explanation
            showExplanation(q);
            
            // Proceed automatically to the next question after 800ms
            setTimeout(() => {
              handleNext();
            }, 800);
          } else {
            // Incorrect answer behavior - clear all inputs and focus first
            alert('Cevap yanlış! Lütfen tekrar deneyin.');
            inputs.forEach((inp) => {
              inp.value = '';
              inp.classList.add('blank-error-shake');
              setTimeout(() => inp.classList.remove('blank-error-shake'), 500);
            });
            if (inputs.length > 0) inputs[0].focus();
          }
        };

        btnSubmit.addEventListener('click', submitCodeAnswer);

        // Update keypress behavior for Enter and Tab key navigation
        setTimeout(() => {
          const inputs = snippetDiv.querySelectorAll('.code-blank-input');
          inputs.forEach((inp, idx) => {
            inp.addEventListener('keydown', (e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                submitCodeAnswer();
              } else if (e.key === 'Tab') {
                e.preventDefault();
                const allInputs = snippetDiv.querySelectorAll('.code-blank-input');
                const nextIdx = (idx + 1) % allInputs.length;
                allInputs[nextIdx].focus();
              }
            });
          });
          if (inputs.length > 0) inputs[0].focus();
        }, 50);
      } else {
        // Already answered question display
        const summary = document.createElement('div');
        summary.className = 'code-blanks-summary';
        q.blanks.forEach((correctAns, idx) => {
          const userVal = savedAns.blankInputs ? savedAns.blankInputs[idx] : '';
          const isOk = userVal && userVal.toLowerCase().trim() === correctAns.toLowerCase();
          const chip = document.createElement('span');
          chip.className = 'code-blank-result ' + (isOk ? 'result-ok' : 'result-fail');
          chip.innerText = isOk ? `Boşluk ${idx+1}: ✓ ${correctAns}` : `Boşluk ${idx+1}: "${userVal || '-'}" → ${correctAns}`;
          summary.appendChild(chip);
        });
        wrapper.appendChild(summary);

        if (!savedAns.isCorrect) {
          const btnRetry = document.createElement('button');
          btnRetry.className = 'btn btn-primary';
          btnRetry.innerText = 'Yeniden Dene';
          btnRetry.style.cssText = 'font-size: 14px; padding: 8px 16px; margin-top: 15px;';
          btnRetry.addEventListener('click', () => {
            delete userAnswers[q.id];
            saveProgress();
            loadQuestion();
            updateStats();
            renderQuestionsGrid();
          });
          wrapper.appendChild(btnRetry);
        }
      }
      
      answersContainer.appendChild(wrapper);
    }

    function instantCheckCode(q, inputElements) {
      const blankInputs = [];
      let allCorrect = true;
      
      inputElements.forEach((inp, idx) => {
        const val = inp.value.trim();
        blankInputs.push(val);
        if (val.toLowerCase() !== q.blanks[idx].toLowerCase()) {
          allCorrect = false;
        }
      });
      
      userAnswers[q.id] = {
        selectedOption: null,
        textInput: '',
        blankInputs: blankInputs,
        isCorrect: allCorrect
      };
      
      saveProgress();
      loadQuestion();
      updateStats();
      renderQuestionsGrid();
    }


    // Check Answer
    function checkAnswer() {
      const q = currentFilteredQuestions[currentIndex];
      const savedAns = userAnswers[q.id];
      
      if (savedAns && !savedAns.isCorrect) {
        delete userAnswers[q.id];
        saveProgress();
        loadQuestion();
        updateStats();
        renderQuestionsGrid();
        return;
      }
      
      let isCorrect = false;
      let selectedOption = null;
      let textInput = "";

      if (q.type === 'choice') {
        const selected = document.querySelector('.option-card.selected');
        if (!selected) {
          alert('Lütfen bir seçenek seçin.');
          return;
        }
        selectedOption = parseInt(selected.getAttribute('data-selected-idx'));
        isCorrect = selectedOption === q.answer;
        
        if (isCorrect) {
          userAnswers[q.id] = {
            selectedOption,
            textInput,
            isCorrect: true
          };
          saveProgress();
          updateStats();
          renderQuestionsGrid();
          showExplanation(q);
          setTimeout(() => {
            handleNext();
          }, 800);
        } else {
          alert('Cevap yanlış! Lütfen başka bir seçenek deneyin.');
          selected.classList.remove('selected');
        }
        return;
        
      } else if (q.type === 'tf') {
        const selected = document.querySelector('.tf-btn.selected');
        if (!selected) {
          alert('Lütfen bir seçeneğe tıklayın.');
          return;
        }
        selectedOption = parseInt(selected.getAttribute('data-selected-idx'));
        isCorrect = selectedOption === q.answer;
        
        if (isCorrect) {
          userAnswers[q.id] = {
            selectedOption,
            textInput,
            isCorrect: true
          };
          saveProgress();
          updateStats();
          renderQuestionsGrid();
          showExplanation(q);
          setTimeout(() => {
            handleNext();
          }, 800);
        } else {
          alert('Cevap yanlış! Lütfen tekrar deneyin.');
          selected.classList.remove('selected');
        }
        return;

      } else if (q.type === 'blank') {
        const input = document.getElementById('blank-answer-input');
        textInput = input.value.trim();
        if (!textInput) {
          alert('Lütfen boşluğu doldurun.');
          return;
        }
        isCorrect = textInput.toLowerCase() === q.answer.toLowerCase();
        
        if (isCorrect) {
          userAnswers[q.id] = {
            selectedOption,
            textInput,
            isCorrect: true
          };
          saveProgress();
          updateStats();
          renderQuestionsGrid();
          showExplanation(q);
          setTimeout(() => {
            handleNext();
          }, 800);
        } else {
          alert('Cevap yanlış! Lütfen tekrar deneyin.');
          input.value = '';
          input.classList.add('blank-error-shake');
          setTimeout(() => input.classList.remove('blank-error-shake'), 500);
          input.focus();
        }
        return;

      } else if (q.type === 'code') {
        const snippetDiv = document.querySelector('.code-question-snippet');
        const inputs = snippetDiv.querySelectorAll('.code-blank-input');
        let allFilled = true;
        inputs.forEach(i => { if (!i.value.trim()) allFilled = false; });
        if (!allFilled) {
          alert('Lütfen tüm boşlukları doldurun.');
          return;
        }
        instantCheckCode(q, inputs);
        return;
      }
    }

    function showExplanation(q) {
      explanationText.innerText = q.explanation;
      explanationBox.style.display = 'block';
    }

    // Update Stats panel
    function updateStats() {
      let correct = 0;
      let incorrect = 0;
      
      Object.keys(userAnswers).forEach(key => {
        if (userAnswers[key].isCorrect) correct++;
        else incorrect++;
      });

      const totalRemaining = questions.length - Object.keys(userAnswers).length;

      headerCorrect.innerText = correct;
      headerIncorrect.innerText = incorrect;
      headerRemaining.innerText = totalRemaining;
    }

    // Navigation logic
    function handleNext() {
      const q = currentFilteredQuestions[currentIndex];
      const savedAns = userAnswers[q.id];
      if (!savedAns || !savedAns.isCorrect) {
        alert("Bu soruyu doğru cevaplamadan bir sonraki soruya geçemezsiniz!");
        return;
      }
      
      if (currentIndex < currentFilteredQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
      } else {
        // Show dashboard!
        showDashboard();
      }
    }

    function handlePrev() {
      if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
      }
    }

    // Show Results Dashboard
    function showDashboard() {
      quizArea.style.display = 'none';
      dashboardArea.style.display = 'block';

      let correct = 0;
      let incorrect = 0;
      
      Object.keys(userAnswers).forEach(key => {
        if (userAnswers[key].isCorrect) correct++;
        else incorrect++;
      });

      const totalAnswered = Object.keys(userAnswers).length;
      const empty = questions.length - totalAnswered;
      const percent = Math.round((correct / questions.length) * 100);

      scorePercent.innerText = `${percent}%`;
      scoreFraction.innerText = `${correct} / ${questions.length}`;

      dashCorrect.innerText = correct;
      dashIncorrect.innerText = incorrect;
      dashEmpty.innerText = empty;

      // Status text
      let status = "";
      if (percent >= 85) {
        status = "Mükemmel! Konuya Tamamen Hakimsiziniz 🚀";
        triggerConfetti();
      } else if (percent >= 70) {
        status = "Çok İyi! Küçük eksikleriniz var, başarılar 👍";
      } else if (percent >= 50) {
        status = "Orta Seviye. Slaytları tekrar gözden geçirmenizi öneririz.";
      } else {
        status = "Daha Çok Çalışmalısınız. Soruların açıklamalarını inceleyin.";
      }
      dashStatus.innerText = status;
    }

    // Reset Quiz
    function resetQuiz() {
      if (confirm("Tüm cevaplarınızı sıfırlayıp sınava baştan başlamak istediğinize emin misiniz?")) {
        userAnswers = {};
        localStorage.removeItem(`db_quiz_answers_${currentLesson}`);
        quizArea.style.display = 'block';
        dashboardArea.style.display = 'none';
        stopConfetti();
        initQuiz();
      }
    }

    // Save/Load Local Storage
    function saveProgress() {
      localStorage.setItem(`db_quiz_answers_${currentLesson}`, JSON.stringify(userAnswers));
    }

    function loadProgress() {
      const saved = localStorage.getItem(`db_quiz_answers_${currentLesson}`);
      if (saved) {
        userAnswers = JSON.parse(saved);
      } else {
        userAnswers = {};
      }
    }

    // Confetti animation
    function triggerConfetti() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.display = 'block';
      confettiActive = true;
      particles = [];

      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          r: Math.random() * 6 + 4,
          d: Math.random() * canvas.height,
          color: `hsl(${Math.random() * 360}, 80%, 50%)`,
          tilt: Math.random() * 10 - 5,
          tiltAngleIncremental: Math.random() * 0.07 + 0.02,
          tiltAngle: 0
        });
      }

      requestAnimationFrame(drawConfetti);
    }

    function stopConfetti() {
      confettiActive = false;
      canvas.style.display = 'none';
    }

    function drawConfetti() {
      if (!confettiActive) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.x += Math.sin(p.tiltAngle);
        p.tilt = Math.sin(p.tiltAngle - index / 3) * 15;

        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();

        // Recycle particles
        if (p.y > canvas.height) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: -20,
            r: p.r,
            d: p.d,
            color: p.color,
            tilt: p.tilt,
            tiltAngleIncremental: p.tiltAngleIncremental,
            tiltAngle: p.tiltAngle
          };
        }
      });

      requestAnimationFrame(drawConfetti);
    }

    // Window resize handling
    window.addEventListener('resize', () => {
      if (confettiActive) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });

    // Event Listeners
    categoryFilter.addEventListener('change', () => {
      filterQuestions();
      renderQuestionsGrid();
      loadQuestion();
    });

    typeFilter.addEventListener('change', () => {
      filterQuestions();
      renderQuestionsGrid();
      loadQuestion();
    });

    lessonFilter.addEventListener('change', () => {
      loadQuestionsForLesson(lessonFilter.value);
    });

    btnCheck.addEventListener('click', checkAnswer);
    btnNext.addEventListener('click', handleNext);
    btnPrev.addEventListener('click', handlePrev);
    btnExplain.addEventListener('click', () => {
      const q = currentFilteredQuestions[currentIndex];
      showExplanation(q);
    });
    btnReset.addEventListener('click', resetQuiz);

    function showResultBanner(isCorrect, q) {
      console.log("Result banner:", isCorrect, q.id);
    }

    // Run!
    initQuiz();
