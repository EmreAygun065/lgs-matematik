// Çözüm kartı motoru. Sayfa, bu dosyadan önce window.KART_SETI'ni tanımlar:
// { baslik, vurgu, sorular: [{ no, yil?, konu?, etiket?, sayfa?, q, opts, ans, long?, hints, steps, answer, trap? }] }
// konu: üstteki konu filtresinde listelenir; etiket: yalnızca sorunun yanında gösterilir.
(function () {
  const SET = window.KART_SETI;
  const QUESTIONS = SET.sorular;
  const LETTERS = ['A', 'B', 'C', 'D'];
  const konular = [...new Set(QUESTIONS.map(q => q.konu).filter(Boolean))];

  document.title = SET.baslik + ' ' + SET.vurgu;
  document.body.innerHTML = `
<header>
  <a class="home" href="../index.html" title="Ana sayfa">⌂</a>
  <h1>${SET.baslik} · <span>${SET.vurgu}</span></h1>
  ${konular.length > 1 ? `<select id="konu" aria-label="Konu seç"><option value="">Tüm konular (${QUESTIONS.length})</option>${konular.map(k => `<option>${k}</option>`).join('')}</select>` : ''}
  <button class="theme-btn" id="themeBtn" title="Açık / koyu tema">◐ Tema</button>
  <nav id="nav"></nav>
</header>
<main>
  <section class="panel" id="qpanel"></section>
  <section class="panel">
    <div class="controls">
      <button id="hintBtn">💡 İpucu</button>
      <button id="stepBtn" class="primary">▶ Sonraki adım</button>
      <button id="allBtn">Tümünü göster</button>
      <button id="resetBtn">↺ Sıfırla</button>
    </div>
    <div id="hints"></div>
    <ol class="steps" id="steps"></ol>
    <div id="after"></div>
    <p class="empty" id="emptyMsg">Öğrencilere önce soruyu düşünmeleri için zaman verin. Takılırlarsa “İpucu”, çözerken “Sonraki adım” düğmesini kullanın.</p>
    <p class="keys"><kbd>→</kbd> / <kbd>Boşluk</kbd> sonraki adım · <kbd>←</kbd> bir adım geri · <kbd>İ</kbd> ipucu · <kbd>Page Up</kbd>/<kbd>Page Down</kbd> önceki/sonraki soru</p>
  </section>
</main>`;

  const $ = id => document.getElementById(id);
  let list = QUESTIONS.map((_, i) => i);   // seçili konudaki soruların indeksleri
  let cur = 0, shownSteps = 0, shownHints = 0;

  function renderNav() {
    $('nav').innerHTML = list.map(i => {
      const q = QUESTIONS[i];
      const tip = [q.yil && q.yil + ' LGS', q.konu].filter(Boolean).join(' · ');
      return `<button class="${i === cur ? 'active' : ''}" data-i="${i}" title="${tip}">${q.no}${q.yil ? `<small>${String(q.yil).slice(2)}</small>` : ''}</button>`;
    }).join('');
    $('nav').querySelectorAll('button').forEach(b => b.onclick = () => go(+b.dataset.i));
    const act = $('nav').querySelector('.active');
    if (act) $('nav').scrollLeft = act.offsetLeft - $('nav').offsetLeft - $('nav').clientWidth / 2 + act.offsetWidth / 2;
  }

  function renderQuestion() {
    const q = QUESTIONS[cur];
    const tags = [q.yil && `${q.yil} LGS`, q.konu, q.etiket, false].filter(Boolean);
    $('qpanel').innerHTML =
      `<div class="qhead"><span class="qno">${q.no}</span>${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`
      + `<div class="qtext">${q.q}</div>`
      + `<div class="opts ${q.long ? 'long' : ''}">${q.opts.map((o, i) => `<button class="opt" data-i="${i}"><b>${LETTERS[i]})</b>${o}</button>`).join('')}</div>`
      + `<div class="feedback" id="fb"></div>`;
    $('qpanel').querySelectorAll('.opt').forEach(b => b.onclick = () => choose(+b.dataset.i, b));
  }

  function choose(i, btn) {
    const q = QUESTIONS[cur], fb = $('fb');
    if (i === q.ans) {
      btn.classList.add('right');
      fb.className = 'feedback ok'; fb.textContent = 'Doğru! 🎉';
    } else {
      btn.classList.add('wrong');
      fb.className = 'feedback no'; fb.textContent = 'Bu değil, tekrar düşünelim. İpucu ister misin?';
    }
  }

  function renderSolution(scroll = true) {
    const q = QUESTIONS[cur];
    $('hints').innerHTML = q.hints.slice(0, shownHints).map(h => `<div class="hint">${h}</div>`).join('');
    $('steps').innerHTML = q.steps.slice(0, shownSteps).map(s => `<li>${s}</li>`).join('');
    const done = shownSteps === q.steps.length;
    $('after').innerHTML = done ? `<div class="answer">${q.answer}</div>${q.trap ? `<div class="trap">${q.trap}</div>` : ''}` : '';
    $('emptyMsg').style.display = shownSteps || shownHints ? 'none' : '';
    $('hintBtn').disabled = shownHints >= q.hints.length;
    $('hintBtn').textContent = `💡 İpucu (${Math.min(shownHints + 1, q.hints.length)}/${q.hints.length})`;
    $('stepBtn').disabled = done;
    $('stepBtn').textContent = shownSteps ? `▶ Sonraki adım (${shownSteps}/${q.steps.length})` : '▶ Çözüme başla';
    $('allBtn').disabled = done;
    if (!scroll) return;
    const target = done ? $('after') : $('steps').lastElementChild;
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function go(i, opts = {}) {
    cur = i;
    shownSteps = opts.all ? QUESTIONS[cur].steps.length : 0;
    shownHints = opts.all ? QUESTIONS[cur].hints.length : 0;
    renderNav(); renderQuestion(); renderSolution(false);
    try { history.replaceState(null, '', '#' + QUESTIONS[cur].no); } catch (e) {}
    if (!opts.all) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function step(d) {
    const pos = list.indexOf(cur);
    go(list[(pos + d + list.length) % list.length]);
  }

  $('hintBtn').onclick = () => { shownHints = Math.min(shownHints + 1, QUESTIONS[cur].hints.length); renderSolution(); };
  $('stepBtn').onclick = () => { shownSteps = Math.min(shownSteps + 1, QUESTIONS[cur].steps.length); renderSolution(); };
  $('allBtn').onclick = () => { shownSteps = QUESTIONS[cur].steps.length; renderSolution(); };
  $('resetBtn').onclick = () => { shownSteps = 0; shownHints = 0; renderQuestion(); renderSolution(false); };

  if ($('konu')) $('konu').onchange = e => {
    const k = e.target.value;
    list = QUESTIONS.map((_, i) => i).filter(i => !k || QUESTIONS[i].konu === k);
    go(list[0]);
  };

  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    const n = QUESTIONS[cur].steps.length;
    const key = e.key.toLocaleLowerCase('tr');
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); shownSteps = Math.min(shownSteps + 1, n); renderSolution(); }
    else if (e.key === 'ArrowLeft') { shownSteps = Math.max(shownSteps - 1, 0); renderSolution(); }
    else if (e.key === 'PageDown') { e.preventDefault(); step(1); }
    else if (e.key === 'PageUp') { e.preventDefault(); step(-1); }
    else if (key === 'i' || key === 'ı') { $('hintBtn').click(); }
  });

  // Tema: açık / koyu / sistem
  const root = document.documentElement;
  try { const t = localStorage.getItem('tema'); if (t) root.dataset.theme = t; } catch (e) {}
  $('themeBtn').onclick = () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('tema', root.dataset.theme); } catch (e) {}
  };

  // Adres çubuğundaki #numara ile o soruyu aç (#13). "?cozum" eklenirse çözüm açık gelir.
  const fromHash = QUESTIONS.findIndex(q => '#' + q.no === location.hash);
  go(fromHash >= 0 ? fromHash : 0, { all: location.search.includes('cozum') });
})();
