// Ana sayfadaki ilerleme çubukları ve tema düğmesi.
// İlerleme, bu cihazda çözülen test ve denemelerden hesaplanır (gecmis.js'ten önce yüklenmiş olmalı).
// Kullanım: <span class="ilerleme" data-ilerleme="kod1,kod2,..." data-birim="test | deneme"></span>
(function () {
  const gecmis = window.gecmisOku ? gecmisOku() : [];
  const son = {};   // her sınavın en son çözümü
  gecmis.forEach(k => { if (k && k.kod) son[k.kod] = k; });
  const virgullu = x => String(Math.round(x * 100) / 100).replace('.', ',');

  document.querySelectorAll('[data-ilerleme]').forEach(el => {
    const kodlar = el.dataset.ilerleme.split(',');
    const birim = el.dataset.birim || 'test';
    const cozulen = kodlar.map(k => son[k]).filter(Boolean);
    let ayrinti;
    if (!cozulen.length) ayrinti = birim === 'deneme' ? 'Henüz deneme çözmedin' : 'Henüz test çözmedin';
    else if (birim === 'deneme') {
      const enSon = [...cozulen].sort((a, b) => String(a.tarih).localeCompare(String(b.tarih))).pop();
      ayrinti = typeof enSon.net === 'number' ? 'son net ' + virgullu(enSon.net) : '';
    } else {
      const d = cozulen.reduce((t, k) => t + (k.dogru || 0), 0);
      const top = cozulen.reduce((t, k) => t + (k.dogru || 0) + (k.yanlis || 0) + (k.bos || 0), 0);
      ayrinti = top ? 'doğru oranı %' + Math.round(d / top * 100) : '';
    }
    const oran = Math.round(cozulen.length / kodlar.length * 100);
    el.innerHTML = `<span class="cubuk" role="progressbar" aria-label="Çözülen ${birim}" aria-valuemin="0" aria-valuemax="${kodlar.length}" aria-valuenow="${cozulen.length}"><i></i></span>`
      + `<span>${cozulen.length ? `<b>${cozulen.length}/${kodlar.length}</b> ${birim}${ayrinti ? ' · ' + ayrinti : ''}` : ayrinti}</span>`;
    requestAnimationFrame(() => requestAnimationFrame(() => { el.querySelector('.cubuk i').style.width = oran + '%'; }));
  });

  // Tema: açık / koyu (çözüm kartlarıyla aynı ayar)
  const root = document.documentElement, btn = document.getElementById('themeBtn');
  if (btn) btn.onclick = () => {
    const koyu = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = koyu ? 'light' : 'dark';
    try { localStorage.setItem('tema', root.dataset.theme); } catch (e) {}
  };
})();
