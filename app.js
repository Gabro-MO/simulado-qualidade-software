(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const screens = ['start-screen', 'quiz-screen', 'result-screen', 'review-screen'];
  const state = { questions: [], index: 0, selected: null, answers: [], reviewOnly: false, originalResults: [] };
  const letters = ['A', 'B', 'C', 'D'];
  const topicOrder = ['PSM', 'GQM', 'Introdução à Medição e Análise'];

  function showScreen(id) {
    screens.forEach((screen) => $(screen).classList.toggle('hidden', screen !== id));
  }
  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function startQuiz(questionSet = window.QUESTION_BANK, reviewOnly = false) {
    state.questions = shuffle(questionSet).map((q) => ({ ...q, options: shuffle(q.options) }));
    state.index = 0;
    state.selected = null;
    state.answers = [];
    state.reviewOnly = reviewOnly;
    $('progress-total').textContent = String(state.questions.length).padStart(2, '0');
    showScreen('quiz-screen');
    renderQuestion();
  }
  function renderQuestion() {
    const q = state.questions[state.index];
    state.selected = null;
    $('progress-current').textContent = String(state.index + 1).padStart(2, '0');
    $('question-index').textContent = `QUESTÃO ${String(state.index + 1).padStart(2, '0')}`;
    $('progress-fill').style.width = `${(state.index / state.questions.length) * 100}%`;
    $('category-tag').textContent = q.topicLabel;
    $('question-text').textContent = q.question;
    $('question-instruction').textContent = 'Selecione uma alternativa.';
    $('answer-status').textContent = 'Sua resposta ainda não foi enviada.';
    $('check-btn').classList.remove('hidden');
    $('next-btn').classList.add('hidden');
    $('check-btn').disabled = true;
    $('feedback-box').className = 'feedback-box hidden';
    $('feedback-box').textContent = '';
    const list = $('options-list');
    list.innerHTML = '';
    q.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option';
      button.dataset.index = String(index);
      const key = document.createElement('span');
      key.className = 'option-key';
      key.textContent = letters[index];
      const label = document.createElement('span');
      label.textContent = option.text;
      button.append(key, label);
      button.addEventListener('click', () => selectOption(index));
      list.appendChild(button);
    });
    updateStats();
  }
  function selectOption(index) {
    if (state.answers[state.index]) return;
    state.selected = index;
    [...$('options-list').children].forEach((button, i) => button.classList.toggle('selected', i === index));
    $('check-btn').disabled = false;
    $('answer-status').textContent = `Alternativa ${letters[index]} selecionada.`;
  }
  function checkAnswer() {
    if (state.selected === null || state.answers[state.index]) return;
    const q = state.questions[state.index];
    const selected = q.options[state.selected];
    const correctOption = q.options.find((o) => o.correct);
    const isCorrect = selected.correct;
    state.answers[state.index] = { question: q, selected, correctOption, isCorrect };
    [...$('options-list').children].forEach((button, i) => {
      const option = q.options[i];
      button.disabled = true;
      if (option.correct) button.classList.add('correct');
      if (i === state.selected && !option.correct) button.classList.add('incorrect');
      button.classList.remove('selected');
    });
    const box = $('feedback-box');
    box.className = `feedback-box${isCorrect ? '' : ' wrong'}`;
    const heading = document.createElement('strong');
    heading.textContent = isCorrect ? 'Resposta correta. ' : 'Resposta incorreta. ';
    const message = document.createElement('span');
    message.textContent = `${q.explanation} Sua escolha: ${selected.text}. Resposta esperada: ${correctOption.text}`;
    box.replaceChildren(heading, message);
    $('answer-status').textContent = isCorrect ? 'Você acertou esta questão.' : 'Revise a justificativa antes de continuar.';
    $('check-btn').classList.add('hidden');
    $('next-btn').classList.remove('hidden');
    $('next-btn').textContent = state.index === state.questions.length - 1 ? 'Ver resultado →' : 'Próxima questão →';
    updateStats();
  }
  function updateStats() {
    const completed = state.answers.filter(Boolean);
    $('correct-count').textContent = String(completed.filter((a) => a.isCorrect).length);
    $('wrong-count').textContent = String(completed.filter((a) => !a.isCorrect).length);
  }
  function nextQuestion() {
    if (!state.answers[state.index]) return;
    if (state.index < state.questions.length - 1) {
      state.index++;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }
  function finishQuiz() {
    const answers = state.answers.filter(Boolean);
    if (!answers.length) {
      showScreen('start-screen');
      return;
    }
    const correct = answers.filter((a) => a.isCorrect).length;
    const wrong = answers.length - correct;
    const score = Math.round((correct / answers.length) * 100);
    state.originalResults = answers;
    $('progress-fill').style.width = '100%';
    $('final-score').textContent = `${score}%`;
    $('final-correct').textContent = String(correct);
    $('final-wrong').textContent = String(wrong);
    $('final-total').textContent = String(answers.length);
    $('result-title').textContent = score >= 85 ? 'Excelente desempenho!' : score >= 65 ? 'Bom trabalho!' : 'Continue praticando!';
    $('result-subtitle').textContent = score >= 85 ? 'Você demonstrou domínio dos conceitos cobrados.' : score >= 65 ? 'Você já domina parte do conteúdo. Revise os pontos que geraram dúvida.' : 'Use a revisão para reforçar os conceitos e tente novamente.';
    const best = Math.max(score, Number(localStorage.getItem('qs-best-score') || 0));
    localStorage.setItem('qs-best-score', String(best));
    $('best-score').textContent = `${best}%`;
    const topics = topicOrder.map((topic) => {
      const group = answers.filter((a) => a.question.topic === topic);
      const hits = group.filter((a) => a.isCorrect).length;
      return { topic, hits, total: group.length, pct: group.length ? Math.round(hits / group.length * 100) : 0 };
    }).filter((x) => x.total > 0);
    const target = $('topic-results');
    target.innerHTML = '';
    topics.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'topic-result';
      const name = document.createElement('span'); name.textContent = item.topic;
      const bar = document.createElement('div'); bar.className = 'topic-bar';
      const fill = document.createElement('span'); fill.style.width = `${item.pct}%`; bar.appendChild(fill);
      const stat = document.createElement('strong'); stat.textContent = `${item.hits}/${item.total}`;
      row.append(name, bar, stat); target.appendChild(row);
    });
    $('review-btn').disabled = wrong === 0;
    $('review-btn').textContent = wrong === 0 ? 'Nenhum erro para revisar' : `Revisar ${wrong} questão(ões) errada(s)`;
    $('result-icon').textContent = score >= 65 ? '✓' : '↗';
    showScreen('result-screen');
  }
  function showReview() {
    const wrong = state.originalResults.filter((a) => !a.isCorrect);
    $('review-count').textContent = `${wrong.length} QUESTÃO(ÕES)`;
    const list = $('review-list'); list.innerHTML = '';
    if (!wrong.length) {
      const p = document.createElement('p'); p.textContent = 'Você acertou todas as questões!'; list.appendChild(p);
    }
    wrong.forEach((answer, i) => {
      const card = document.createElement('article'); card.className = 'review-item';
      const title = document.createElement('h3'); title.textContent = `${i + 1}. ${answer.question.question}`;
      const chosen = document.createElement('p'); chosen.textContent = `Sua resposta: ${answer.selected.text}`;
      const correct = document.createElement('p'); correct.className = 'review-answer'; correct.textContent = `Resposta esperada: ${answer.correctOption.text}`;
      const explanation = document.createElement('p'); explanation.textContent = answer.question.explanation;
      const source = document.createElement('p'); source.textContent = `Referência: ${answer.question.source}`;
      card.append(title, chosen, correct, explanation, source); list.appendChild(card);
    });
    showScreen('review-screen');
  }
  $('start-btn').addEventListener('click', () => startQuiz());
  $('check-btn').addEventListener('click', checkAnswer);
  $('next-btn').addEventListener('click', nextQuestion);
  $('quit-btn').addEventListener('click', () => finishQuiz());
  $('restart-btn').addEventListener('click', () => startQuiz());
  $('review-retry-btn').addEventListener('click', () => startQuiz());
  $('review-btn').addEventListener('click', showReview);
  $('back-results-btn').addEventListener('click', () => showScreen('result-screen'));
  $('question-count').textContent = String(window.QUESTION_BANK.length);
  $('progress-total').textContent = String(window.QUESTION_BANK.length);
  $('best-score').textContent = `${Number(localStorage.getItem('qs-best-score') || 0)}%`;
})();