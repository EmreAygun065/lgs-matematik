// 7. sınıf test soruları için şekil yardımcıları (ortak/yardimci.js'teki svg() ve F() ile birlikte kullanılır).
// Renkler tema değişkenlerinden gelir; açık ve koyu temada okunur. Şekiller .fig içinde ekrana sığacak kadar küçülür.
(function () {
  // Beceri (konu) adları: panelin konu analizi bütün 7. sınıf testlerinde aynı adları kullanır.
  window.YEDI_BECERI = {
    mutlak: 'Tam sayılar ve mutlak değer',
    tanima: 'Rasyonel sayıyı tanıma',
    dogru: 'Sayı doğrusunda rasyonel sayılar',
    kesirOndalik: 'Kesri ondalık gösterimle yazma',
    ondalikKesir: 'Ondalık gösterimi kesre çevirme',
    devirli: 'Devirli ondalık gösterimi kesre çevirme'
  };
  const C = 'var(--fig-stroke)';
  const eksi = v => (v < 0 ? '−' + String(-v) : String(v)).replace('.', ',');
  const yazi = (x, y, t, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.hiza || 'middle'}" font-size="${o.boy || 15}" ${o.kalin ? 'font-weight="700"' : ''} fill="${o.renk || C}">${t}</text>`;
  const sekil = (w, h, ic, etiket) => `<div class="fig">${svg(w, h, ic, etiket)}</div>`;

  // Yatay sayı doğrusu. bas–son arası, her birim "bol" eş parçaya ayrılır.
  // etiket: v → yazı (null ise yazılmaz); varsayılan: tam sayılar yazılır. noktalar: [{ v, ad }]
  window.sayiDogrusu = ({ bas, son, bol = 1, en = 480, noktalar = [], etiket, aciklama }) => {
    const sol = 28, sag = en - 28, x = v => sol + (v - bas) / (son - bas) * (sag - sol);
    const yaz = etiket || (v => (Number.isInteger(v) ? eksi(v) : null));
    let ic = `<line x1="${sol - 18}" y1="50" x2="${sag + 18}" y2="50" stroke="${C}" stroke-width="1.6"/>`
      + `<path d="M${sag + 18} 50 l-8 -4 v8 z M${sol - 18} 50 l8 -4 v8 z" fill="${C}"/>`;
    const adet = Math.round((son - bas) * bol);
    for (let i = 0; i <= adet; i++) {
      const v = bas + i / bol, ana = i % bol === 0;
      ic += `<line x1="${x(v)}" y1="${ana ? 40 : 44}" x2="${x(v)}" y2="${ana ? 60 : 56}" stroke="${C}" stroke-width="${ana ? 1.8 : 1.2}"/>`;
      const t = yaz(Math.round(v * 1000) / 1000);
      if (t != null) ic += yazi(x(v), 80, t);
    }
    noktalar.forEach(n => { ic += `<circle cx="${x(n.v)}" cy="50" r="5.5" fill="var(--accent)"/>` + yazi(x(n.v), 30, n.ad, { kalin: true }); });
    return sekil(en, 90, ic, aciklama || 'Sayı doğrusu');
  };

  // Dikey sayı doğrusu (deniz seviyesi gibi): isaretler: [{ v, ad }]; adim: çentik aralığı, yazAdim: sayı yazılan aralık
  window.dikeyDogru = ({ alt, ust, adim = 1, yazAdim = 1, isaretler = [], birim = '', aciklama, sifirAd }) => {
    const bas = 20, son = 20 + (ust - alt) / adim * 17, y = v => son - (v - alt) / (ust - alt) * (son - bas), w = 330, ox = 90;
    let ic = `<line x1="${ox}" y1="${bas - 10}" x2="${ox}" y2="${son + 10}" stroke="${C}" stroke-width="1.6"/>`;
    for (let v = alt; v <= ust + 1e-9; v += adim) {
      const r = Math.round(v * 100) / 100, yaz = Math.abs(r / yazAdim - Math.round(r / yazAdim)) < 1e-9;
      ic += `<line x1="${ox - (yaz ? 9 : 5)}" y1="${y(r)}" x2="${ox + (yaz ? 9 : 5)}" y2="${y(r)}" stroke="${C}" stroke-width="${yaz ? 1.6 : 1}"/>`;
      if (yaz) ic += yazi(ox - 16, y(r) + 5, eksi(r) + birim, { hiza: 'end', boy: 13 });
    }
    if (sifirAd) ic += `<line x1="${ox + 120}" y1="${y(0)}" x2="${w - 10}" y2="${y(0)}" stroke="var(--blue)" stroke-width="2" stroke-dasharray="6 4"/>` + yazi(w - 12, y(0) - 6, sifirAd, { hiza: 'end', boy: 12, renk: 'var(--blue)' });
    isaretler.forEach(n => { ic += `<circle cx="${ox}" cy="${y(n.v)}" r="5" fill="var(--accent)"/><line x1="${ox + 6}" y1="${y(n.v)}" x2="${ox + 34}" y2="${y(n.v)}" stroke="var(--accent)" stroke-width="1.4"/>` + yazi(ox + 40, y(n.v) + 5, n.ad, { hiza: 'start', kalin: true }); });
    return sekil(w, son + 20, ic, aciklama || 'Dikey sayı doğrusu');
  };

  // Termometreler: [{ ad, v }], ölçek alt–ust; her 1 derecede küçük çentik, her 5 derecede sayı.
  window.termometreler = (liste, { alt = -20, ust = 20 } = {}) => {
    const h = 260, ust0 = 24, alt0 = 210, y = v => alt0 - (v - alt) / (ust - alt) * (alt0 - ust0), aralik = 104, w = liste.length * aralik + 24;
    let ic = '';
    liste.forEach((t, i) => {
      const cx = 52 + i * aralik;
      ic += `<rect x="${cx - 7}" y="${ust0 - 8}" width="14" height="${alt0 - ust0 + 16}" rx="7" fill="none" stroke="${C}" stroke-width="1.5"/>`
        + `<circle cx="${cx}" cy="${alt0 + 18}" r="12" fill="var(--accent)" stroke="${C}" stroke-width="1.5"/>`
        + `<rect x="${cx - 3.5}" y="${y(t.v)}" width="7" height="${alt0 + 8 - y(t.v)}" fill="var(--accent)"/>`;
      for (let v = alt; v <= ust; v++) {
        const bes = v % 5 === 0;
        ic += `<line x1="${cx + 9}" y1="${y(v)}" x2="${cx + (bes ? 20 : 14)}" y2="${y(v)}" stroke="${C}" stroke-width="${bes ? 1.4 : .8}"/>`;
        if (bes) ic += yazi(cx + 23, y(v) + 5, eksi(v), { hiza: 'start', boy: 13 });
      }
      ic += yazi(cx, h - 4, t.ad, { kalin: true, boy: 14 });
    });
    return sekil(w, h, ic, 'Termometreler: ' + liste.map(t => t.ad).join(', '));
  };

  // Bina kesiti: katlar alt–ust (0 zemin kat); isaretler: { kat: 'yazı' }
  window.bina = ({ alt, ust, isaretler = {}, aciklama }) => {
    const kh = 30, w = 400, bx = 100, bw = 150, n = ust - alt + 1, zeminY = 20 + (ust + 1) * kh;
    let ic = '';
    for (let i = 0; i < n; i++) {
      const kat = ust - i, yy = 20 + i * kh;
      ic += `<rect x="${bx}" y="${yy}" width="${bw}" height="${kh}" fill="${kat < 0 ? 'var(--bg)' : 'var(--card)'}" stroke="${C}" stroke-width="1.3"/>`
        + yazi(bx - 10, yy + 20, kat === 0 ? 'zemin kat' : eksi(kat) + '. kat', { hiza: 'end', boy: 13 });
      if (isaretler[kat]) ic += yazi(bx + bw / 2, yy + 20, isaretler[kat], { kalin: true, boy: 13 });
    }
    ic += `<line x1="20" y1="${zeminY}" x2="${w - 6}" y2="${zeminY}" stroke="var(--green)" stroke-width="3"/>` + yazi(bx + bw + 10, zeminY - 7, 'toprak seviyesi', { hiza: 'start', boy: 12, renk: 'var(--green)' });
    return sekil(w, 20 + n * kh + 12, ic, aciklama || 'Bina katları');
  };

  // Hesap makinesi ekranı
  window.ekran = (metin, ust = '') => sekil(320, 96,
    `<rect x="4" y="4" width="312" height="88" rx="12" fill="var(--bg)" stroke="${C}" stroke-width="1.5"/>`
    + `<rect x="18" y="16" width="284" height="64" rx="6" fill="var(--blue-soft)" stroke="${C}" stroke-width="1"/>`
    + (ust ? yazi(292, 34, ust, { hiza: 'end', boy: 13, renk: 'var(--muted)' }) : '')
    + `<text x="292" y="${ust ? 66 : 58}" text-anchor="end" font-size="26" font-family="ui-monospace, Menlo, Consolas, monospace" fill="${C}">${metin}</text>`,
    'Hesap makinesi ekranı: ' + metin);

  // Yüzlük kare(ler): her kare 10 × 10; boyali: her karede boyalı küçük kare sayısı
  window.yuzluk = (...boyalilar) => {
    const k = 13, b = 10 * k, w = boyalilar.length * (b + 24) + 4;
    let ic = '';
    boyalilar.forEach((sayi, i) => {
      const ox = 4 + i * (b + 24);
      for (let j = 0; j < 100; j++) {
        const r = Math.floor(j / 10), c = j % 10;
        ic += `<rect x="${ox + c * k}" y="${4 + r * k}" width="${k}" height="${k}" fill="${j < sayi ? 'var(--blue)' : 'none'}" stroke="${C}" stroke-width=".7"/>`;
      }
      ic += `<rect x="${ox}" y="4" width="${b}" height="${b}" fill="none" stroke="${C}" stroke-width="1.6"/>`;
    });
    return sekil(w, b + 8, ic, 'Yüzlük kare modeli');
  };

  // Şerit modeli: her şerit bir bütün; seritler: [{ parca, boyali }]
  window.seritler = (liste, en = 420) => {
    const h = 34, w = en;
    let ic = '';
    liste.forEach((s, i) => {
      const y = 6 + i * (h + 12), pw = (w - 8) / s.parca;
      for (let j = 0; j < s.parca; j++) ic += `<rect x="${4 + j * pw}" y="${y}" width="${pw}" height="${h}" fill="${j < s.boyali ? 'var(--blue)' : 'none'}" stroke="${C}" stroke-width="1.3"/>`;
    });
    return sekil(w, liste.length * (h + 12) + 2, ic, 'Şerit modeli');
  };

  // Sayı kümeleri şeması: iç içe ℕ ⊂ ℤ ⊂ ℚ; yerler: { N: [...], Z: [...], Q: [...] } (yazılar küme bölgelerine yerleştirilir)
  window.kumeler = yerler => {
    let ic = `<ellipse cx="230" cy="110" rx="220" ry="100" fill="none" stroke="${C}" stroke-width="1.6"/>`
      + `<ellipse cx="270" cy="115" rx="160" ry="74" fill="none" stroke="${C}" stroke-width="1.6"/>`
      + `<ellipse cx="315" cy="118" rx="95" ry="46" fill="none" stroke="${C}" stroke-width="1.6"/>`
      + yazi(78, 66, 'ℚ', { boy: 20, kalin: true }) + yazi(172, 78, 'ℤ', { boy: 20, kalin: true }) + yazi(318, 94, 'ℕ', { boy: 20, kalin: true });
    const yer = { Q: [[70, 120], [62, 160], [125, 180]], Z: [[160, 120], [190, 160], [200, 80]], N: [[290, 125], [345, 128], [318, 150]] };
    // t: yazı ya da [pay, payda] (kesir olarak çizilir)
    Object.keys(yerler).forEach(k => yerler[k].forEach((t, i) => {
      const [px, py] = yer[k][i], st = 'text-anchor="middle" font-size="15" font-weight="700" fill="var(--accent)"';
      ic += Array.isArray(t)
        ? `<text x="${px}" y="${py - 9}" ${st}>${t[0]}</text><line x1="${px - 13}" y1="${py - 4}" x2="${px + 13}" y2="${py - 4}" stroke="var(--accent)" stroke-width="1.6"/><text x="${px}" y="${py + 12}" ${st}>${t[1]}</text>`
        : `<text x="${px}" y="${py}" ${st}>${t}</text>`;
    }));
    return sekil(460, 220, ic, 'Doğal sayılar, tam sayılar ve rasyonel sayılar kümesi şeması');
  };

  // Sayı kartları: içinde kesir ya da devirli sayı olabilir (ortak kartlar() iç içe span'leri de çerçeveler, bu yüzden ayrı).
  window.sayiKartlari = liste => `<div style="display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center;margin:.4rem 0 .8rem">${liste.map(x => `<div style="border:2px solid var(--fig-stroke);border-radius:8px;padding:.35rem .8rem;min-width:3.2rem;min-height:2.6rem;display:flex;align-items:center;justify-content:center;font-weight:600">${x}</div>`).join('')}</div>`;
})();
