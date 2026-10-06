// LGS çıkmış sorular (Kareköklü İfadeler) — çözüm kartı verisi. yardimci.js'ten sonra yüklenir.
window.KK_CIKMIS = (function () {
  const ST = 'stroke="var(--fig-stroke)"';
  const rect = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${ST} stroke-width="1.5" ${extra}/>`;
  const txt = (x, y, t, extra = '') => `<text x="${x}" y="${y}" text-anchor="middle" font-size="15" ${extra}>${t}</text>`;

  // 3 · Kareli zemin, iç içe üç kare/dikdörtgen
  const kareliZemin = svg(330, 290, (() => {
    const c = 36, o = 20;
    let g = '';
    for (let i = 0; i <= 8; i++) g += `<line x1="${o + i * c}" y1="${o}" x2="${o + i * c}" y2="${o + 7 * c}" stroke="var(--fig-blue)" stroke-width="1"/>`;
    for (let j = 0; j <= 7; j++) g += `<line x1="${o}" y1="${o + j * c}" x2="${o + 8 * c}" y2="${o + j * c}" stroke="var(--fig-blue)" stroke-width="1"/>`;
    const sq = (x, y, w, h) => `<rect x="${o + x * c}" y="${o + y * c}" width="${w * c}" height="${h * c}" fill="none" ${ST} stroke-width="2"/>`;
    g += sq(1, 1, 6, 5) + sq(2, 2, 3, 3) + sq(3, 3, 1, 1);
    const L = (x, y, t) => `<text x="${o + x * c}" y="${o + y * c}" font-size="15" text-anchor="middle">${t}</text>`;
    g += L(.65, .8, 'D') + L(7.35, .8, 'C') + L(.65, 6.55, 'A') + L(7.35, 6.55, 'B');
    g += L(1.65, 1.8, 'N') + L(5.35, 1.8, 'M') + L(1.65, 5.55, 'K') + L(5.35, 5.55, 'L');
    g += L(2.7, 2.8, 'T') + L(4.3, 2.8, 'S') + L(2.7, 4.5, 'P') + L(4.3, 4.5, 'R');
    return g;
  })(), 'Kareli zemin üzerinde ABCD dikdörtgeni, içinde KLMN ve PRST kareleri');

  // 6 · Sayı doğrusu
  const sayiDogrusu6 = svg(380, 90, (() => {
    let g = `<line x1="20" y1="50" x2="360" y2="50" ${ST} stroke-width="1.5" marker-end="url(#ok6)" marker-start="url(#ok6)"/>`;
    g += `<defs><marker id="ok6" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--fig-stroke)"/></marker></defs>`;
    for (let i = 0; i <= 6; i++) g += `<circle cx="${50 + i * 45}" cy="50" r="4" fill="var(--fig-stroke)"/>`;
    g += `<line x1="${50 + 2.5 * 45}" y1="43" x2="${50 + 2.5 * 45}" y2="57" ${ST} stroke-width="2"/>`;
    g += txt(50, 75, '7') + txt(320, 75, '10') + txt(50 + 2.5 * 45, 22, 'A') + `<line x1="${50 + 2.5 * 45}" y1="27" x2="${50 + 2.5 * 45}" y2="40" ${ST}/>`;
    return g;
  })(), '7 ile 10 arası 6 eş parçaya ayrılmış sayı doğrusu, A noktası 8 ile 8,5 arasında');

  // 7 · Otomobil ve kamyon
  const yol = svg(620, 230, (() => {
    const u = 28;   // √5 m = 28 px
    let g = `<rect x="10" y="20" width="600" height="130" fill="#9a9a9a"/>`;
    g += `<line x1="10" y1="85" x2="610" y2="85" stroke="#fff" stroke-width="2" stroke-dasharray="14 10"/>`;
    const car = (x) => `<rect x="${x}" y="35" width="${u}" height="22" rx="6" fill="#fff" ${ST}/>`;
    const truck = (x) => `<rect x="${x}" y="100" width="${3 * u}" height="30" rx="3" fill="#555" ${ST}/><rect x="${x + 3 * u - 14}" y="100" width="14" height="30" rx="3" fill="#f2c200" ${ST}/>`;
    g += car(30) + truck(30 + u);
    const sonA = 30 + 11 * u;   // otomobilin son konumu (arka ucu)
    g += car(sonA) + truck(sonA - 3 * u);
    g += `<line x1="30" y1="12" x2="${30 + u}" y2="12" ${ST}/>` + txt(30 + u / 2, 10, '√5 m', 'font-size="12"');
    g += `<line x1="${30 + u}" y1="162" x2="${30 + 4 * u}" y2="162" ${ST}/>` + txt(30 + 2.5 * u, 178, '√45 m', 'font-size="12"');
    g += `<line x1="${sonA}" y1="22" x2="${sonA}" y2="148" stroke="var(--red)" stroke-dasharray="4 3"/>`;
    g += `<line x1="${30 + u}" y1="22" x2="${30 + u}" y2="148" stroke="var(--red)" stroke-dasharray="4 3"/>`;
    g += txt(110, 210, 'Şekil I', 'font-weight="700"') + txt(480, 210, 'Şekil II', 'font-weight="700"');
    g += `<text x="140" y="50" font-size="14">→</text><text x="160" y="120" font-size="14" style="fill:#fff">→</text>`;
    return g;
  })(), 'Şekil I: otomobilin ön ucu kamyonun arka ucu hizasında. Şekil II: kamyonun ön ucu otomobilin arka ucu hizasında');

  // 8 · İki tren yolu
  const trenYolu = svg(360, 170, `
    <ellipse cx="180" cy="85" rx="165" ry="75" fill="none" stroke="var(--fig-stroke)" stroke-width="5" stroke-dasharray="2 3"/>
    <ellipse cx="180" cy="85" rx="120" ry="45" fill="none" stroke="var(--fig-stroke)" stroke-width="5" stroke-dasharray="2 3"/>
    <text x="60" y="20" font-size="14">K yolu</text><text x="140" y="80" font-size="14">L yolu</text>`, 'Dıştaki K yolu ve içteki L yolu');

  // 9 · Mavi kareler ve beyaz dikdörtgen
  const seritMB = svg(470, 170, (() => {
    const s = 90, m = 22;   // 3,24 dm ≈ 1,8 dm → 90 px; mavi kare 0,4 dm → 20 px
    const parca = (x, y) => rect(x, y, m, m, 'var(--fig-blue)') + rect(x + m, y, s - 2 * m, m, 'var(--card)') + rect(x + s - m, y, m, m, 'var(--fig-blue)')
      + txt(x + m / 2, y + 16, 'M', 'font-size="12"') + txt(x + s / 2, y + 16, 'B', 'font-size="12"') + txt(x + s - m / 2, y + 16, 'M', 'font-size="12"');
    let g = parca(30, 30) + parca(30, 60);
    g += `<line x1="30" y1="20" x2="${30 + s}" y2="20" ${ST}/>` + txt(30 + s / 2, 15, '√3,24 dm', 'font-size="13"');
    const x0 = 200, y0 = 115;
    g += rect(x0, y0, m, m, 'var(--fig-blue)') + rect(x0 + m, y0, s - 2 * m, m, 'var(--card)') + rect(x0 + s - m, y0, m, m, 'var(--fig-blue)')
      + rect(x0 + s, y0, s - 2 * m, m, 'var(--card)') + rect(x0 + 2 * s - 2 * m, y0, m, m, 'var(--fig-blue)');
    g += `<line x1="${x0}" y1="105" x2="${x0 + 2 * s - m}" y2="105" ${ST}/>` + txt(x0 + s - m / 2, 100, '√10,24 dm', 'font-size="13"');
    return g;
  })(), 'İki özdeş kâğıt: M B M. Bir mavi kareleri çakıştırılınca M B M B M');

  // 12 · Direkler ve fidan
  const direkler = svg(360, 200, `
    <line x1="20" y1="180" x2="340" y2="180" ${ST} stroke-width="2"/>
    ${rect(70, 55, 12, 125, '#888')}${rect(250, 30, 12, 150, '#888')}
    <text x="76" y="48" text-anchor="middle" font-size="15">A</text><text x="256" y="22" text-anchor="middle" font-size="15">B</text>
    <text x="60" y="120" text-anchor="end" font-size="14">5 m</text><text x="272" y="105" font-size="14">6 m</text>
    <line x1="160" y1="180" x2="160" y2="132" stroke="var(--green)" stroke-width="3"/><circle cx="160" cy="130" r="10" fill="var(--green)"/>
    <text x="176" y="160" font-size="14">2 m</text><text x="320" y="196" font-size="13">Zemin</text>`, 'A direği 5 m, B direği 6 m, aralarında 2 m boyunda fidan');

  // 14 · Parke
  const parke = svg(420, 200, (() => {
    const k = 13;   // √2 dm = 13 px  → 8√2 = 104, 2√2 = 26
    const ox = 20, oy = 40, P = (x, y) => rect(ox + x * k, oy + y * k, 8 * k, 2 * k, 'var(--fig-yellow)') + txt(ox + (x + 4) * k, oy + (y + 1.3) * k, 'Parke', 'font-size="13" style="fill:#1f2328"');
    let g = rect(ox, oy, 15 * k, 6 * k, '#cfd2d4');
    g += P(3.5, 0) + P(7, 2) + P(0, 4);
    g += `<line x1="${ox + 3.5 * k}" y1="${oy - 10}" x2="${ox + 11.5 * k}" y2="${oy - 10}" ${ST}/>` + txt(ox + 7.5 * k, oy - 15, '√128 dm', 'font-size="13"');
    g += `<line x1="${ox - 8}" y1="${oy + 4 * k}" x2="${ox - 8}" y2="${oy + 6 * k}" ${ST}/>`;
    g += `<text x="${ox + 15 * k + 8}" y="${oy + 5.3 * k}" font-size="13">√8 dm (parke eni)</text>`;
    g += `<line x1="${ox + 7 * k}" y1="${oy + 4 * k + 3}" x2="${ox + 8 * k}" y2="${oy + 4 * k + 3}" stroke="var(--red)" stroke-width="2"/>`;
    g += `<text x="${ox + 8 * k + 4}" y="${oy + 4 * k + 16}" font-size="12" style="fill:var(--red)">√2 dm</text>`;
    return g;
  })(), 'Dikdörtgen zemin üzerinde üç özdeş parke, ortadaki ile alttaki parke √2 dm çakışık hizada');

  // 15 · Bayraklar
  const bayrak = (n, mavi) => svg(440, 90, (() => {
    let g = `<line x1="10" y1="10" x2="430" y2="10" ${ST} stroke-width="2"/>`;
    let x = 10;
    const sari = 420 / 6, mv = sari * 2 / 3;
    n.forEach(t => {
      const w = t === 'S' ? sari : mv, h = w * 0.866;
      g += `<polygon points="${x},10 ${x + w},10 ${x + w / 2},${10 + h}" fill="${t === 'S' ? 'var(--fig-yellow)' : 'var(--fig-blue)'}" ${ST} stroke-width="1.2"/>`;
      g += `<text x="${x + w / 2}" y="26" text-anchor="middle" font-size="11" style="fill:#1f2328">${t === 'S' ? 'Sarı' : 'Mavi'}</text>`;
      x += w;
    });
    return g;
  })(), mavi ? 'Şekil II: 4 sarı ve 3 mavi bayrak dönüşümlü' : 'Şekil I: 6 sarı bayrak');

  // 16 · Kare + dikdörtgen
  const kagit16 = svg(300, 100, rect(20, 15, 180, 70, 'var(--fig-yellow)') + rect(200, 15, 70, 70, 'var(--fig-yellow)'), 'Dikdörtgen kâğıt, bir dikdörtgen ve bir kare parçaya ayrılmış');

  // 17 · İç içe kareler
  const icIce = svg(240, 230, `
    ${rect(30, 15, 180, 180, 'var(--card)')}${rect(30, 48, 147, 147, 'var(--fig-blue)')}${rect(30, 91, 104, 104, 'var(--fig-yellow)')}
    <text x="120" y="35" text-anchor="middle" font-size="14">Beyaz</text><text x="105" y="72" text-anchor="middle" font-size="14" style="fill:#1f2328">Mavi</text>
    <text x="82" y="148" text-anchor="middle" font-size="14" style="fill:#1f2328">Sarı</text>
    <text x="24" y="214" font-size="15">A</text><circle cx="195" cy="195" r="3" fill="var(--fig-stroke)"/><text x="190" y="214" font-size="15">B</text>`,
    'A köşesinde çakışan sarı, mavi, beyaz kareler; B beyaz bölgenin alt kenarında');

  // 18 · Oyun parkuru
  const parkur = svg(460, 140, `
    <rect x="40" y="30" width="410" height="70" fill="var(--yellow-soft)"/>
    <line x1="40" y1="25" x2="40" y2="105" ${ST} stroke-width="2"/><line x1="200" y1="25" x2="200" y2="105" stroke="var(--blue)" stroke-width="3"/>
    <line x1="40" y1="65" x2="450" y2="65" ${ST} stroke-dasharray="5 4"/><circle cx="32" cy="65" r="8" fill="var(--card)" ${ST}/>
    <text x="40" y="18" text-anchor="middle" font-size="13">Başlangıç</text><text x="200" y="18" text-anchor="middle" font-size="13">Mavi çizgi</text>
    <line x1="40" y1="118" x2="200" y2="118" ${ST}/><text x="120" y="134" text-anchor="middle" font-size="13">5√3 m</text>`, 'Başlangıç çizgisi ile mavi çizgi arası 5√3 m');

  // 19 · Bilye parkuru
  const bilye = svg(440, 120, (() => {
    let g = `<rect x="20" y="15" width="405" height="70" fill="none" stroke="var(--green)" stroke-width="1.5"/>`;
    g += `<rect x="${20 + 6 * 45}" y="15" width="45" height="70" fill="var(--fig-blue)"/><text x="${20 + 6.5 * 45}" y="55" text-anchor="middle" font-size="12" style="fill:#1f2328">Mavi</text>`;
    for (let i = 0; i <= 9; i++) {
      if (i > 0 && i < 9) g += `<line x1="${20 + i * 45}" y1="15" x2="${20 + i * 45}" y2="85" ${ST} stroke-dasharray="4 4"/>`;
      g += `<text x="${20 + i * 45}" y="103" text-anchor="middle" font-size="12">${i ? i + ' m' : '0'}</text>`;
    }
    return g + `<line x1="20" y1="15" x2="20" y2="85" stroke="var(--red)" stroke-width="2.5"/>`;
  })(), 'Dokuz eş bölgeli parkur, mavi bölge 6 m ile 7 m arası');

  // 20 · Kâğıt kesme
  const kesme20 = svg(420, 200, `
    ${rect(30, 20, 150, 75, 'var(--fig-blue)')}${rect(184, 20, 38, 75, 'var(--fig-blue)')}
    <text x="182" y="112" text-anchor="middle" font-size="16">✂</text>
    ${rect(30, 120, 75, 75, 'var(--fig-blue)')}${rect(108, 120, 75, 75, 'var(--fig-blue)')}${rect(230, 120, 38, 38, 'var(--fig-blue)')}${rect(230, 160, 38, 38, 'var(--fig-blue)')}
    <text x="290" y="70" font-size="13">1. kesim</text><text x="290" y="175" font-size="13">2. kesim: eş kareler</text>`, 'Önce iki dikdörtgen, sonra her biri ikişer eş kareye kesilmiş');

  // 21 · Daire ve cetvel
  const daireCetvel = svg(460, 140, (() => {
    let g = `<circle cx="80" cy="70" r="60" fill="var(--fig-yellow)" ${ST} stroke-width="1.5"/><line x1="20" y1="70" x2="140" y2="70" ${ST} stroke-width="1.5"/>`;
    g += `<text x="12" y="74" text-anchor="end" font-size="14">K</text><text x="146" y="74" font-size="14">L</text>`;
    g += `<rect x="180" y="45" width="270" height="40" fill="var(--blue-soft)" ${ST}/>`;
    for (let i = 0; i <= 10; i++) g += `<line x1="${195 + i * 24}" y1="45" x2="${195 + i * 24}" y2="57" ${ST}/><text x="${195 + i * 24}" y="74" text-anchor="middle" font-size="12">${i}</text>`;
    for (let i = 0; i < 10; i++) g += `<line x1="${207 + i * 24}" y1="45" x2="${207 + i * 24}" y2="51" ${ST}/>`;
    return g;
  })(), 'KL çaplı daire ve 10 cm\'lik cetvel');

  // 22 · T ve L şekilleri
  const tl = svg(420, 200, `
    ${rect(30, 20, 120, 30, 'var(--green-soft)')}${rect(75, 50, 30, 120, 'var(--green-soft)')}
    <line x1="160" y1="20" x2="160" y2="170" ${ST}/><text x="166" y="100" font-size="13">√192 cm</text>
    ${rect(250, 50, 30, 120, 'var(--green-soft)')}${rect(280, 140, 120, 30, 'var(--green-soft)')}
    <line x1="20" y1="170" x2="410" y2="170" ${ST} stroke-dasharray="4 3"/>
    <text x="90" y="192" text-anchor="middle" font-size="13">Şekil I</text><text x="320" y="192" text-anchor="middle" font-size="13">Şekil II</text>`,
    'Dört eş dikdörtgenden T (Şekil I) ve L (Şekil II) şekilleri');

  // 27 · Demir yolu hatları
  const hatlar = svg(610, 300, (() => {
    let g = '<g transform="translate(50,0)">';
    const hat = (pts, renk) => `<polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="${renk}" stroke-width="3"/>`;
    const noktalar = (a, b, n) => { let s = ''; for (let i = 0; i <= n; i++) s += `<circle cx="${a[0] + (b[0] - a[0]) * i / n}" cy="${a[1] + (b[1] - a[1]) * i / n}" r="3.5" fill="var(--fig-stroke)"/>`; return s; };
    const A = [40, 80], T = [200, 30], D = [430, 175], S = [520, 215];
    g += hat([A, T, D, S], 'var(--green)') + noktalar(A, T, 6) + noktalar(T, D, 9) + noktalar(D, S, 3);
    const B = [40, 175];
    g += hat([B, D], 'var(--blue)') + noktalar(B, D, 8);
    const C = [40, 265], E = [40 + 7 * 33, 265];
    g += hat([C, E, D], 'var(--red)') + noktalar(C, E, 7) + noktalar(E, D, 6);
    g += `<text x="30" y="84" text-anchor="end" font-size="14">A (K)</text><text x="30" y="179" text-anchor="end" font-size="14">B (L)</text><text x="30" y="269" text-anchor="end" font-size="14">C (M)</text>`;
    g += `<text x="438" y="168" font-size="14">D</text><text x="526" y="222" font-size="14">S</text>`;
    g += `<text x="85" y="55" font-size="13">√2 km</text><text x="110" y="168" font-size="13">√5 km</text><text x="60" y="255" font-size="13">√3 km</text>`;
    g += `<text x="330" y="95" font-size="13" style="fill:var(--green)">Yeşil hat</text><text x="280" y="195" font-size="13" style="fill:var(--blue)">Mavi hat</text><text x="150" y="285" font-size="13" style="fill:var(--red)">Kırmızı hat</text>`;
    return g + '</g>';
  })(), 'Yeşil hat A–D arası 15 aralık, mavi hat B–D arası 8 aralık, kırmızı hat C–D arası 13 aralık, D–S arası yeşil 3 aralık');

  // 28 · Karelere ayrılmış dikdörtgen
  const kareler28 = svg(300, 170, (() => {
    const a = 22, o = 15;   // A karesinin kenarı
    let g = rect(o, o, a, a, 'var(--fig-blue)') + rect(o, o + a, a, a, 'var(--fig-blue)') + rect(o + a, o, 2 * a, 2 * a, '#8f8fd8');
    g += rect(o, o + 2 * a, 1.5 * a, 1.5 * a, '#f39ad1') + rect(o + 1.5 * a, o + 2 * a, 1.5 * a, 1.5 * a, '#f39ad1') + rect(o + 3 * a, o, 3.5 * a, 3.5 * a, '#c99aa0');
    const t = (x, y, s) => `<text x="${o + x * a}" y="${o + y * a + 5}" text-anchor="middle" font-size="13" style="fill:#1f2328">${s}</text>`;
    return g + t(.5, .5, 'A') + t(.5, 1.5, 'A') + t(2, 1, 'C') + t(.75, 2.75, 'B') + t(2.25, 2.75, 'B') + t(4.75, 1.75, 'D');
  })(), 'Dikdörtgen kâğıt: iki A, bir C, iki B ve bir D karesi');

  // 30 · Vinç
  const vinc = svg(300, 230, `
    ${rect(60, 30, 20, 180, '#bbb')}<line x1="40" y1="35" x2="250" y2="35" ${ST} stroke-width="6"/>
    <line x1="200" y1="38" x2="200" y2="80" ${ST}/>${rect(185, 80, 30, 25, '#666')}
    <line x1="20" y1="210" x2="280" y2="210" ${ST} stroke-width="2"/>
    <line x1="235" y1="38" x2="235" y2="80" stroke="var(--red)"/><text x="240" y="64" font-size="13">√45 m</text>
    <line x1="235" y1="105" x2="235" y2="210" stroke="var(--red)"/><text x="240" y="162" font-size="13">√125 m</text>
    <text x="140" y="26" font-size="13">Vinç kolu</text><text x="150" y="226" font-size="13">Yer</text>`, 'Malzeme yerden √125 m, vinç koluna √45 m uzaklıkta');

  // 31 · Kare ve dikdörtgen kesimi
  const kesme31 = svg(280, 150, `
    ${rect(30, 20, 90, 120, 'var(--card)')}<line x1="30" y1="50" x2="120" y2="50" ${ST} stroke-dasharray="5 4"/><text x="20" y="54" text-anchor="end" font-size="14">✂</text>
    ${rect(160, 20, 90, 28, 'var(--card)')}${rect(160, 52, 90, 90, 'var(--card)')}`, 'Dikdörtgen kâğıttan bir kare ve bir dikdörtgen kesiliyor');

  return [
  {
    no: 1, yil: 2026, konu: 'Tam kare sayılar',
    q: `<p class="ask">Aşağıdakilerden hangisi bir tam kare pozitif tam sayıdır?</p>`,
    opts: ['3', '9', '18', '27'], ans: 1,
    hints: [`Tam kare sayı, bir tam sayının karesi olarak yazılabilen sayıdır: 1, 4, 9, 16, …`],
    steps: [`1² = 1, 2² = 4, 3² = <b>9</b>, 4² = 16, 5² = 25, …`, `3, 18 ve 27 bu listede yok; 9 = 3² tam karedir.`],
    answer: `Cevap: <b>B</b> (9 = 3²)`,
    trap: `27'yi tam kare sanmak: 27 = 3³ bir küp sayıdır, kare değildir.`
  },
  {
    no: 2, yil: 2025, konu: 'Çarpma ve bölme',
    q: `<p>Bir kenarının uzunluğu ${R(8)} cm olan eşkenar üçgenin çevresinin uzunluğu kaç santimetredir?</p>`,
    opts: [R(2, 2), R(11), R(2, 3), R(2, 6)], ans: 3,
    hints: [`Eşkenar üçgenin üç kenarı eşittir. Önce ${R(8)}'i a${R('b')} biçiminde yaz.`],
    steps: [`${R(8)} = ${R('4 · 2')} = ${R(2, 2)}`, `Çevre = 3 · ${R(2, 2)} = <b>${R(2, 6)}</b> cm`],
    answer: `Çevre ${R(2, 6)} cm. Cevap: <b>D</b>`,
    trap: `3 · ${R(8)} işleminde 3'ü kökün içine ekleyip ${R(11)} bulmak. Kat sayılar köke eklenmez, çarpılır.`
  },
  {
    no: 3, yil: 2025, konu: 'Çarpma ve bölme',
    q: `<p>Aşağıdaki kareli zeminde verilen şekillerden ABCD dikdörtgeninin alanı 300 cm<sup>2</sup> dir.</p><div class="fig">${kareliZemin}</div>`
      + `<p class="ask">Buna göre KLMN karesinin çevresinin uzunluğu PRST karesinin çevresinin uzunluğundan kaç santimetre fazladır?</p>`,
    opts: [R(3, 8), R(10, 8), R(3, 16), R(10, 16)], ans: 1,
    hints: [`ABCD kaç kareden oluşuyor? Bir birim karenin alanını bul.`, `Birim karenin kenarı = birim karenin alanının karekökü.`],
    steps: [
      `ABCD: 6 · 5 = 30 birim kare → bir birim kare 300 / 30 = 10 cm²`,
      `Birim karenin kenarı ${R(10)} cm`,
      `KLMN kenarı 3 birim → çevresi 4 · 3${R(10)} = 12${R(10)}. PRST kenarı 1 birim → çevresi 4${R(10)}`,
      `Fark: 12${R(10)} − 4${R(10)} = <b>${R(10, 8)}</b> cm`
    ],
    answer: `Cevap: <b>B</b>`,
    trap: `Birim karenin kenarını 10 sanmak. 10 birim karenin <b>alanı</b>dır; kenar ${R(10)}'dur.`
  },
  {
    no: 4, yil: 2024, konu: 'Gerçek sayılar',
    q: `<p class="ask">Aşağıdakilerden hangisi bir irrasyonel sayıdır?</p>`,
    opts: [R(14), '1,<span style="text-decoration:overline">2</span>', R('1,44'), '12'], ans: 0,
    hints: [`Tam kare olmayan bir doğal sayının karekökü irrasyoneldir. Devirli ondalık sayılar ise rasyoneldir.`],
    steps: [`${R(14)}: 14 tam kare değil → <b>irrasyonel</b>`, `1,2̅ devirli ondalık → kesir olarak yazılır (11/9) → rasyonel`, `${R('1,44')} = 1,2 → rasyonel; 12 → rasyonel`],
    answer: `Cevap: <b>A</b>`,
    trap: `Devirli ondalık sayıyı “bitmiyor” diye irrasyonel sanmak. Devirli sayılar kesre çevrilebilir, rasyoneldir.`
  },
  {
    no: 5, yil: 2024, konu: 'Toplama ve çıkarma',
    q: `<p class="ask">${R(363)} − ${R(75)} − ${R(27)} işleminin sonucu aşağıdakilerden hangisidir?</p>`,
    opts: [R(3, 2), R(3, 3), R(3, 4), R(3, 5)], ans: 1,
    hints: [`Hepsini a${R(3)} biçimine getir: 363 = 121 · 3.`],
    steps: [`${R(363)} = ${R('121 · 3')} = ${R(3, 11)}`, `${R(75)} = ${R(3, 5)} ve ${R(27)} = ${R(3, 3)}`, `11${R(3)} − 5${R(3)} − 3${R(3)} = <b>${R(3, 3)}</b>`],
    answer: `Cevap: <b>B</b>`,
    trap: `Kökün içindekileri çıkarmak (${R('363 − 75 − 27')}) yanlıştır. Önce a${R('b')} biçimine getirip kat sayılar toplanır veya çıkarılır.`
  },
  {
    no: 6, yil: 2018, konu: 'Karekökün yaklaşık değeri',
    q: `<div class="fig">${sayiDogrusu6}</div><p>Yukarıdaki sayı doğrusunda 7 ile 10'a karşılık gelen noktaların arası 6 eş parçaya ayrılmıştır.</p>`
      + `<p class="ask">Buna göre A noktasına karşılık gelen sayı aşağıdakilerden hangisi olabilir?</p>`,
    opts: [R(94), R(88), R(79), R(68)], ans: 3,
    hints: [`Bir parça (10 − 7) / 6 = 0,5 birim. A hangi iki işaret arasında?`, `A, 8 ile 8,5 arasında. Bu sayıların karelerini düşün.`],
    steps: [`Noktalar: 7 · 7,5 · 8 · 8,5 · 9 · 9,5 · 10. A, 8 ile 8,5 arasında.`, `8² = 64, 8,5² = 72,25 → A = ${R('x')} ise 64 < x < 72,25`, `Seçeneklerden yalnızca <b>68</b> bu aralıkta (${R(68)} ≈ 8,25).`],
    answer: `Cevap: <b>D</b>`,
    trap: `Parça uzunluğunu 1 sanmak. 3 birimlik aralık 6 eş parçaya bölündüğü için her parça 0,5'tir.`
  },
  {
    no: 7, yil: 2026, konu: 'Toplama ve çıkarma',
    q: `<p>Uzunluğu ${R(5)} m olan bir otomobil ile uzunluğu ${R(45)} m olan bir kamyon Şekil I'deki konumlarındayken doğrusal bir yol boyunca ok yönünde bir süre ilerledikten sonra durduklarında son konumları Şekil II'deki gibi olmuştur.</p><div class="fig">${yol}</div>`
      + `<p class="ask">Bu süre boyunca kamyon ${R(245)} m ilerlediğine göre otomobil kaç metre ilerlemiştir?</p>`,
    opts: [R(5, 13), R(5, 12), R(5, 11), R(5, 10)], ans: 2,
    hints: [`Hepsini ${R(5)} cinsinden yaz: ${R(45)} = 3${R(5)}, ${R(245)} = 7${R(5)}.`, `Otomobilin arka ucunun başlangıçtaki ve sondaki yerini bul.`],
    steps: [
      `Otomobilin arka ucunu 0 al. Şekil I: otomobilin ön ucu = kamyonun arka ucu = ${R(5)}, kamyonun ön ucu = ${R(5)} + 3${R(5)} = 4${R(5)}`,
      `Kamyon 7${R(5)} ilerledi → kamyonun ön ucu 4${R(5)} + 7${R(5)} = 11${R(5)}`,
      `Şekil II: kamyonun ön ucu otomobilin arka ucuyla aynı hizada → otomobilin arka ucu 11${R(5)}'te`,
      `Otomobil 0'dan 11${R(5)}'e gitti → <b>${R(5, 11)}</b> m`
    ],
    answer: `Cevap: <b>C</b>`,
    trap: `Araçların uzunluklarını hesaba katmadan iki aracın aynı yolu gittiğini sanmak (7${R(5)}).`
  },
  {
    no: 8, yil: 2026, konu: 'Çarpma ve bölme',
    q: `<p>Uzunluğu ${R(2, 4)} m olan K yolu ile uzunluğu ${R(6, 2)} m olan L yolu aşağıda verilmiştir.</p><div class="fig">${trenYolu}</div>`
      + `<p>Şarjı tam dolu olan bir oyuncak tren, L yolunda 6 tam tur attığı anda şarjı bitmektedir. L yolunda bulunan bu tren, şarjı tam dolu iken hareket ettirilmiş ve bu yolda 2 tam tur attığı anda durdurulup, K yoluna yerleştirilerek tekrar hareket ettirilmiştir.</p>`
      + `<p class="ask">Buna göre bu trenin şarjı, tren K yolunda <u>kaçıncı turu atarken</u> biter?</p>`,
    opts: ['1.', '2.', '3.', '4.'], ans: 3,
    hints: [`Şarjın toplam yol miktarı = 6 · ${R(6, 2)} m.`],
    steps: [
      `Şarj ile gidilebilen yol: 6 · ${R(6, 2)} = ${R(6, 12)} m`,
      `L'de 2 tur: 2 · ${R(6, 2)} = ${R(6, 4)} m → kalan ${R(6, 8)} m`,
      `K'de tur sayısı: ${F(R(6, 8), R(2, 4))} = 2${R(3)} ≈ 3,46`,
      `3 tam tur atılır, şarj <b>4.</b> turun ortasında biter.`
    ],
    answer: `Cevap: <b>D</b>`,
    trap: `3,46'yı görüp “3. turda biter” demek. 3 tur tamamlandıktan sonra hâlâ şarj var; biten tur 4.'dür.`
  },
  {
    no: 9, yil: 2025, konu: 'Ondalık sayıların karekökü',
    q: `<p>Mavi renkli iki karesel bölge ile beyaz renkli bir dikdörtgensel bölgeden oluşan ve uzun kenarının uzunluğu ${R('3,24')} dm olan dikdörtgen şeklindeki iki özdeş kâğıt aşağıda verilmiştir. Bu kâğıtlar; birer mavi bölgeleri çakışacak biçimde yerleştirildiğinde oluşan dikdörtgen şeklin uzun kenarının uzunluğu ${R('10,24')} dm olmuştur.</p><div class="fig">${seritMB}</div>`
      + `<p class="ask">Buna göre, beyaz bölgelerden birinin uzun kenarının uzunluğu kaç desimetredir?</p>`,
    opts: ['0,5', '0,8', '1', '1,2'], ans: 2,
    hints: [`${R('3,24')} ve ${R('10,24')}'ü ondalık sayı olarak hesapla.`, `İki kâğıt yan yana konunca bir mavi kare iki kez sayılır.`],
    steps: [
      `${R('3,24')} = 1,8 dm (18² = 324). ${R('10,24')} = 3,2 dm (32² = 1024)`,
      `Çakışan uzunluk: 2 · 1,8 − 3,2 = 0,4 dm → mavi karenin kenarı 0,4 dm`,
      `Beyaz bölge: 1,8 − 2 · 0,4 = <b>1</b> dm`
    ],
    answer: `Cevap: <b>C</b>`,
    trap: `Çakışan mavi kareyi unutup 3,2 / 2 = 1,6 almak.`
  },
  {
    no: 10, yil: 2024, konu: 'Karekökün yaklaşık değeri',
    q: `<p>Bir televizyonun ses seviyesi ile ses göstergesi arasındaki ilişkide, ses seviyesini gösteren sayı tam kare ise karekök değeri, tam kare değil ise karekök değerinin en yakın olduğu doğal sayı değeri, hoparlör sembolünün yanındaki <u>çizgi sayısı</u> ile gösterilmiştir.</p>`
      + tablo([['Ses seviyesi', 'Ses göstergesi'], ['1, 2', '🔈 )'], ['3, 4, 5, 6', '🔈 ) )'], ['7, 8, 9, …', '⋮']])
      + `<p class="ask">Bu televizyonun ses göstergesi 🔈 ) ) ) iken, ses seviyesi <u>en fazla</u> kaçtır?</p>`,
    opts: ['10', '11', '12', '13'], ans: 2,
    hints: [`3 çizgi: karekökü 3'e en yakın olan sayılar.`, `Hangi sayıların karekökü 3,5'ten küçüktür?`],
    steps: [`3 çizgi → ${R('n')}'nin en yakın olduğu doğal sayı 3 → 2,5 < ${R('n')} < 3,5`, `Kareleri: 6,25 < n < 12,25`, `En büyük doğal sayı <b>12</b> (${R(12)} ≈ 3,46). ${R(13)} ≈ 3,61 → 4 çizgi olur.`],
    answer: `Cevap: <b>C</b>`,
    trap: `“3'e en yakın” sınırını 3,5 yerine 4 sanıp 15'i ya da 16'yı seçmek.`
  },
  {
    no: 11, yil: 2023, konu: 'a√b biçiminde yazma',
    q: `<p class="cards-label">Kartlar</p>${kartlar([R(12, 3), R(5, 6), R(7, 10)])}`
      + `<p>Yukarıdaki kartların ön yüzlerinde birer kareköklü ifade verilmiştir. Her bir kartın arka yüzünde ise ön yüzünde yazan kareköklü ifadenin a${R('b')} biçimindeki farklı bir gösterimi yazmaktadır.</p>`
      + `<p class="ask">Buna göre, aşağıdakilerden hangisi bu kartlardan herhangi birinin arka yüzünde yazılı <u>olamaz</u>?</p>`,
    opts: [R(28, 5), R(27, 2), R(70, 2), R(20, 3)], ans: 2,
    hints: [`Her ifadeyi katsayısını köke sokarak tek kök hâline getir: a${R('b')} = ${R('a²b')}.`],
    steps: [
      `Kartlar: 3${R(12)} = ${R(108)} · 6${R(5)} = ${R(180)} · 10${R(7)} = ${R(700)}`,
      `A) 5${R(28)} = ${R(700)} ✓ · B) 2${R(27)} = ${R(108)} ✓ · D) 3${R(20)} = ${R(180)} ✓`,
      `C) 2${R(70)} = ${R(280)} → hiçbir karta eşit değil`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 12, yil: 2023, konu: 'Karekökün yaklaşık değeri',
    q: `<p>Yükseklikleri 5 m ve 6 m olan A ile B direkleri arasına, boyu 2 m olan bir fidan dikilmiştir.</p><div class="fig">${direkler}</div>`
      + `<p>Bir süre sonra bu fidanın boyu A direğinin yüksekliğinden fazla, B direğinin yüksekliğinden az olmuştur.</p><p class="ask">Buna göre bu fidan, dikildikten sonra kaç metre uzamış olabilir?</p>`,
    opts: [R(2, 2), R(3, 2), R(2, 3), R(6, 2)], ans: 1,
    hints: [`Fidanın yeni boyu 5 ile 6 arasında. Uzama miktarı kaç ile kaç arasında?`],
    steps: [`5 < 2 + x < 6 → <b>3 < x < 4</b>`, `Kareleri: 9 < x² < 16`, `2${R(2)} = ${R(8)} · 2${R(3)} = ${R(12)} ✓ · 3${R(2)} = ${R(18)} · 2${R(6)} = ${R(24)}`],
    answer: `Fidan 2${R(3)} m uzamış olabilir. Cevap: <b>B</b>`,
    trap: `Fidanın ilk boyunu (2 m) unutup 5 ile 6 arasında bir değer aramak (${R(18)} değil, uzama 3 ile 4 arasında olmalı).`
  },
  {
    no: 13, yil: 2023, konu: 'Gerçek sayılar',
    q: tablo([['÷', R(45), R(72), R(100), R(150)], [R(80), 'K', '', '', ''], [R(18), '', 'L', '', ''], [R(36), '', '', 'M', ''], [R(30), '', '', '', 'N']])
      + `<p>Yukarıdaki bölme işlemi tablosunda K, L, M ve N harflerine karşılık gelen sayılar, bu harflerle aynı sütunda bulunan mavi kutucuktaki (üst satır) kareköklü ifadenin bu harflerle aynı satırda bulunan sarı kutucuktaki (sol sütun) kareköklü ifadeye bölünmesiyle elde edilmiştir.</p>`
      + `<p class="ask">Buna göre, bu harflerden hangisi bir irrasyonel sayı belirtmektedir?</p>`,
    opts: ['K', 'L', 'M', 'N'], ans: 3,
    hints: [`${R('a')} ÷ ${R('b')} = ${R('a ÷ b')}. Kesri sadeleştir, tam kare mi bak.`],
    steps: [
      `K = ${R('45 / 80')} = ${R('9 / 16')} = 3/4 → rasyonel`,
      `L = ${R('72 / 18')} = ${R(4)} = 2 → rasyonel · M = ${R(100)} / ${R(36)} = 10/6 → rasyonel`,
      `N = ${R('150 / 30')} = <b>${R(5)}</b> → irrasyonel`
    ],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 14, yil: 2023, konu: 'Çarpma ve bölme',
    q: `<div class="fig">${parke}</div><p>Yukarıda verilen dikdörtgen şeklindeki bir zemine parke döşenmektedir. Zeminde döşeli dikdörtgen biçiminde üç özdeş parke ile ilgili bazı ölçüler şekilde verilmiştir. Parkelerin uzun kenarı ${R(128)} dm, kısa kenarı ${R(8)} dm'dir; ortadaki parke ile alttaki parke yatayda ${R(2)} dm üst üste gelecek hizadadır.</p>`
      + `<p class="ask">Buna göre, parke <u>döşenmemiş</u> bölgelerin alanları toplamı kaç desimetrekaredir?</p>`,
    opts: ['72', '84', '96', '148'], ans: 1,
    hints: [`${R(128)} = 8${R(2)}, ${R(8)} = 2${R(2)}.`, `Zeminin genişliği: alttaki parke + ortadaki parke − çakışan ${R(2)}.`],
    steps: [
      `Parke: 8${R(2)} × 2${R(2)} → alanı 8 · 2 · 2 = 32 dm². Üç parke: 96 dm²`,
      `Zeminin eni: 8${R(2)} + 8${R(2)} − ${R(2)} = 15${R(2)}. Boyu: 3 · 2${R(2)} = 6${R(2)}`,
      `Zeminin alanı: 15${R(2)} · 6${R(2)} = 180 dm²`,
      `Boş alan: 180 − 96 = <b>84</b> dm²`
    ],
    answer: `Cevap: <b>B</b>`,
    trap: `Parkelerin toplam alanını (96) cevap sanmak. Soru döşenmemiş bölgeleri soruyor.`
  },
  {
    no: 15, yil: 2023, konu: 'Toplama ve çıkarma',
    q: `<p>Her birinin çevresinin uzunluğu ${R(2, 24)} cm olan eşkenar üçgen şeklindeki 6 adet sarı bayrak, köşeleri birbirleriyle, kenarları ise iple çakışacak biçimde Şekil I'deki gibi bir ipe dizildiğinde ipin iki ucunda da boşluk kalmamıştır.</p><div class="fig">${bayrak(['S', 'S', 'S', 'S', 'S', 'S'])}</div>`
      + `<p>Aynı ipe, Şekil I'de verilen bayraklardan 4 tanesi ve eşkenar üçgen biçimindeki özdeş 3 mavi bayrak, Şekil II'deki gibi dizildiğinde ipin her iki ucunda da boşluk kalmamıştır.</p><div class="fig">${bayrak(['S', 'M', 'S', 'M', 'S', 'M', 'S'], true)}</div>`
      + `<p class="ask">Buna göre, mavi bayraklardan birinin bir kenarının uzunluğu kaç santimetredir?</p>`,
    opts: [R(2, 2), F(R(2, 8), 3), R(2, 4), F(R(2, 16), 3)], ans: 3,
    hints: [`Sarı bayrağın bir kenarı = çevre / 3. İpin uzunluğu 6 sarı kenar kadardır.`],
    steps: [
      `Sarı bayrak kenarı: ${R(2, 24)} / 3 = ${R(2, 8)} cm. İp: 6 · ${R(2, 8)} = ${R(2, 48)} cm`,
      `Şekil II: 4 · ${R(2, 8)} + 3m = ${R(2, 48)} → 3m = ${R(2, 16)}`,
      `m = <b>${F(R(2, 16), 3)}</b> cm`
    ],
    answer: `Cevap: <b>D</b>`,
    trap: `Çevreyi kenar sanmak ya da 3m yerine m bulup durmak (${R(2, 16)}).`
  },
  {
    no: 16, yil: 2022, konu: 'Çarpma ve bölme',
    q: `<div class="fig">${kagit16}</div><p>Çevresinin uzunluğu ${R(800)} cm olan dikdörtgen şeklindeki kâğıt, yukarıdaki gibi dikdörtgen ve kare şeklinde iki parçaya ayrılıyor.</p>`
      + `<p class="ask">Kare şeklindeki parçanın bir kenarının uzunluğu ${R(8)} cm olduğuna göre dikdörtgen şeklindeki parçanın bir yüzünün alanı kaç santimetrekaredir?</p>`,
    opts: ['16', '24', '32', '40'], ans: 1,
    hints: [`${R(800)} = 20${R(2)}. Kısa kenar + uzun kenar = çevrenin yarısı.`],
    steps: [
      `Çevre ${R(800)} = 20${R(2)} → kısa + uzun = 10${R(2)}`,
      `Kısa kenar = karenin kenarı = ${R(8)} = 2${R(2)} → uzun kenar 8${R(2)}`,
      `Dikdörtgen parça: (8${R(2)} − 2${R(2)}) × 2${R(2)} = 6${R(2)} · 2${R(2)} = <b>24</b> cm²`
    ],
    answer: `Cevap: <b>B</b>`,
    trap: `Kâğıdın tamamının alanını (8${R(2)} · 2${R(2)} = 32) hesaplamak.`
  },
  {
    no: 17, yil: 2022, konu: 'Karekökün yaklaşık değeri',
    q: `<p>Kare şeklindeki sarı, mavi ve beyaz kartlar, ikişer kenarları ve birer köşeleri A noktasında çakışacak biçimde üst üste yapıştırılarak aşağıdaki şekil elde edilmiştir.</p><div class="fig">${icIce}</div>`
      + `<p>Şekilde görünen farklı renkteki bölgelerin alanları birbirine eşit ve sarı bölgenin çevresinin uzunluğu 20 cm'dir. A noktasına uzaklığı santimetre cinsinden doğal sayı olacak biçimde, beyaz bölgenin kenarında şekildeki gibi bir B noktası işaretleniyor.</p>`
      + `<p class="ask">Buna göre, A ve B noktaları arasındaki uzaklık kaç santimetredir?</p>`,
    opts: ['9', '8', '7', '6'], ans: 1,
    hints: [`Sarı kare: kenar 5, alan 25. Her renkli bölge 25 cm² ise mavi ve beyaz karelerin alanları kaç?`],
    steps: [
      `Sarı: kenar 20/4 = 5, alan 25. Mavi kare 25 + 25 = 50 → kenar ${R(50)} ≈ 7,07`,
      `Beyaz kare 75 → kenar ${R(75)} ≈ 8,66`,
      `B, beyaz bölgenin alt kenarında: ${R(50)} < AB ≤ ${R(75)} → 7,07 < AB ≤ 8,66`,
      `Doğal sayı: <b>8</b>`
    ],
    answer: `Cevap: <b>B</b>`,
    trap: `Mavi karenin alanını 25 sanmak. Mavi kare sarının altında da devam eder; görünen mavi bölge 25 ise mavi karenin tamamı 50'dir.`
  },
  {
    no: 18, yil: 2022, konu: 'Karekökün yaklaşık değeri',
    q: `<p>Aşağıdaki oyun parkurunda birbirine paralel olan başlangıç çizgisi ve mavi çizgi arasındaki uzaklık ${R(3, 5)} m'dir. Başlangıç çizgisinden Fatih, Yavuz ve Mehmet doğrusal bir çizgi boyunca top yuvarlayacaklardır. Topu, mavi çizgiye en yakın mesafede duran kişi oyunu kazanacaktır.</p><div class="fig">${parkur}</div>`
      + `<p>Oyunun sonunda Fatih'in yuvarladığı topun durduğu noktanın mavi çizgiye uzaklığı ${R(3)} m, Yavuz'un yuvarladığı topun durduğu noktanın başlangıç çizgisine uzaklığı ise ${R(3, 3)} m'dir. Bu durumda Fatih birinci, Mehmet ikinci ve Yavuz üçüncü olmuştur.</p>`
      + `<p class="ask">Buna göre, Mehmet'in yuvarladığı topun durduğu noktanın başlangıç çizgisine uzaklığının metre cinsinden değeri aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['5', '7', '10', '12'], ans: 3,
    hints: [`Yavuz mavi çizgiye ne kadar uzak? Mehmet'in uzaklığı Fatih ile Yavuz'unkiler arasında olmalı.`],
    steps: [
      `Mavi çizgi: 5${R(3)} ≈ 8,66 m. Fatih mavi çizgiye ${R(3)} ≈ 1,73 m uzak`,
      `Yavuz 3${R(3)}'te → mavi çizgiye 2${R(3)} ≈ 3,46 m uzak`,
      `Mehmet'in mavi çizgiye uzaklığı 1,73 ile 3,46 arasında olmalı`,
      `5 → 3,66 ✗ · 7 → 1,66 ✗ (Fatih'ten iyi olurdu) · 10 → 1,34 ✗ · 12 → 3,34 ✓`
    ],
    answer: `Mehmet'in topu 12 m'de olabilir. Cevap: <b>D</b>`,
    trap: `Topun mavi çizgiyi geçebileceğini unutmak. 12 m, mavi çizginin ötesindedir ama ona 3,34 m uzaktır.`
  },
  {
    no: 19, yil: 2020, konu: 'Karekökün yaklaşık değeri',
    q: `<p>Bir bilye atma oyununa ait, kısa kenar uzunluğu 1 m olan dokuz eş dikdörtgensel bölgeden oluşan oyun parkuru aşağıda verilmiştir.</p><div class="fig">${bilye}</div>`
      + `<p>Başlangıç çizgisinden atış yapan bir oyuncunun attığı bilye, parkurda gösterilen mavi bölgede kalmıştır.</p><p class="ask">Buna göre bu bilyenin başlangıç çizgisine uzaklığı metre cinsinden aşağıdakilerden hangisi <u>olamaz</u>?</p>`,
    opts: [R(10, 2), R(5, 3), R(3, 4), R(13, 2)], ans: 3,
    hints: [`Mavi bölge 6 m ile 7 m arası. Seçenekleri tek kök hâline getirip 36 ile 49 arasında mı bak.`],
    steps: [`2${R(10)} = ${R(40)} ✓ · 3${R(5)} = ${R(45)} ✓ · 4${R(3)} = ${R(48)} ✓`, `2${R(13)} = <b>${R(52)}</b> > ${R(49)} = 7 → mavi bölgenin dışında`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 20, yil: 2021, konu: 'Tam kare sayılar',
    q: `<p>Dikdörtgen şeklindeki bir kâğıt kısa kenarlarına paralel olarak kesildiğinde dikdörtgen şeklinde iki parça elde edilmiştir. Elde edilen bu parçalar kısa kenarlarına paralel olarak tekrar kesildiğinde aşağıdaki gibi birbirine eş ikişer kare oluşmuştur. Bu karelerden her birinin bir kenar uzunluğu santimetre cinsinden birer doğal sayıdır.</p><div class="fig">${kesme20}</div>`
      + `<p class="ask">Buna göre başlangıçtaki kâğıdın bir yüzünün alanı santimetrekare cinsinden aşağıdakilerden hangisi <u>olamaz</u>?</p>`,
    opts: ['40', '90', '160', '240'], ans: 3,
    hints: [`Küçük karenin kenarı b ise büyük karenin kenarı kaç? (Küçük parça dik duruyor: yüksekliği 2b.)`],
    steps: [
      `Küçük kare kenarı b → küçük parça b × 2b. Büyük kareler aynı yükseklikte: kenar 2b`,
      `Kâğıt: eni 2 · 2b + b = 5b, boyu 2b → alan <b>10b²</b>`,
      `b = 2 → 40 · b = 3 → 90 · b = 4 → 160 · 240 / 10 = 24 tam kare değil ✗`
    ],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 21, yil: 2021, konu: 'Karekökün yaklaşık değeri',
    q: `<div class="fig">${daireCetvel}</div><p>Yukarıda, çapı KL doğru parçası olan daire şeklinde bir karton ve eş bölmelere ayrılmış 10 santimetrelik bir cetvel verilmiştir. KL doğru parçası, K noktası 2'ye karşılık gelecek şekilde cetvelin kenarı ile çakıştırıldığında L noktası 6 ile 7 arasında, 7'ye daha yakın bir noktaya karşılık gelmektedir.</p>`
      + `<p class="ask">Buna göre KL doğru parçasının uzunluğu, santimetre cinsinden aşağıdakilerden hangisi olabilir?</p>`,
    opts: [R(5, 2), R(6, 2), R(3, 3), R(3, 4)], ans: 1,
    hints: [`L, 6,5 ile 7 arasında. KL = L − 2.`],
    steps: [`6,5 < L < 7 → 4,5 < KL < 5 → 20,25 < KL² < 25`, `2${R(5)} = ${R(20)} ✗ · 2${R(6)} = <b>${R(24)}</b> ✓ · 3${R(3)} = ${R(27)} ✗ · 4${R(3)} = ${R(48)} ✗`],
    answer: `Cevap: <b>B</b>`,
    trap: `K'nin 0'da değil 2'de olduğunu unutup KL'yi 6,5 ile 7 arasında aramak.`
  },
  {
    no: 22, yil: 2021, konu: 'Toplama ve çıkarma',
    q: `<p>Dikdörtgen şeklindeki bir kâğıt, kesilerek dikdörtgen şeklinde dört eş parça elde edilmiştir. Bu parçaların kısa kenarları ile uzun kenarları çakıştırılarak aşağıdaki gibi iki farklı şekil oluşturulmuştur.</p><div class="fig">${tl}</div>`
      + `<p>Şekil I'in yüksekliği ${R(192)} cm ve Şekil II'nin çevresinin uzunluğu ${R(3, 28)} cm'dir.</p><p class="ask">Buna göre başlangıçta verilen dikdörtgen şeklindeki kâğıdın bir yüzünün alanı kaç santimetrekaredir?</p>`,
    opts: ['288', '144', '96', '72'], ans: 1,
    hints: [`Parçanın uzun kenarı a, kısa kenarı b olsun. Şekil I'in yüksekliği a + b.`, `L şeklinin çevresi, onu çevreleyen dikdörtgenin çevresine eşittir.`],
    steps: [
      `Şekil I: a + b = ${R(192)} = 8${R(3)}`,
      `Şekil II'yi çevreleyen dikdörtgen: eni a + b, boyu a → çevre 2(2a + b) = 28${R(3)} → 2a + b = 14${R(3)}`,
      `Çıkarırsak a = 6${R(3)}, b = 2${R(3)}`,
      `Kâğıt 4 parça: 4 · 6${R(3)} · 2${R(3)} = 4 · 36 = <b>144</b> cm²`
    ],
    answer: `Cevap: <b>B</b>`,
    trap: `Bir parçanın alanını (36) ya da iki parçanın alanını (72) cevap sanmak.`
  },
  {
    no: 23, yil: 2021, konu: 'Tam kare sayılar',
    q: `<p>Aşağıda, her bir hücresinde 2'nin birbirinden farklı tam sayı kuvvetlerinin yazılı olduğu iki sütunlu bir tablo verilmiştir. Tabloda bu üslü ifadelerden ikisi E ve F harfleriyle gösterilmiştir.</p>`
      + tablo([['I. Sütun', 'II. Sütun'], ['2<sup>−1</sup>', '2<sup>−2</sup>'], ['E', 'F'], ['2<sup>3</sup>', '2<sup>1</sup>']])
      + `<p>I. sütundaki üç üslü ifadenin çarpımı tam kare pozitif bir tam sayıya ve II. sütundaki üç üslü ifadenin çarpımı da tam kare pozitif bir tam sayıya eşittir.</p><p class="ask">Buna göre E + F <u>en az</u> kaçtır?</p>`,
    opts: ['33', '17', '9', '3'], ans: 0,
    hints: [`E = 2<sup>e</sup>, F = 2<sup>f</sup>. 2'nin bir kuvveti tam kare tam sayı ise üssü çift ve negatif olmayan bir sayıdır.`],
    steps: [
      `I. sütun: 2<sup>−1 + e + 3</sup> = 2<sup>e + 2</sup> → e + 2 çift ve ≥ 0 → e ∈ {−2, 0, 2, …}. −2 II. sütunda var → en küçük e = 0 → E = 1`,
      `II. sütun: 2<sup>−2 + f + 1</sup> = 2<sup>f − 1</sup> → f tek ve ≥ 1 → f ∈ {1, 3, 5, …}. 1 ve 3 tabloda var → f = 5 → F = 32`,
      `E + F = 1 + 32 = <b>33</b>`
    ],
    answer: `Cevap: <b>A</b>`,
    trap: `Tablodaki kuvvetlerin birbirinden farklı olması koşulunu unutup F = 2<sup>1</sup> veya 2<sup>3</sup> almak.`
  },
  {
    no: 24, yil: 2018, konu: 'Tam kare sayılar',
    q: `<p>Altan ve Can, defterlerine kenar uzunlukları santimetre cinsinden doğal sayı olan birer kare çiziyorlar. Altan'ın çizdiği karenin alanı kenar uzunlukları 7 cm ve 9 cm olan bir dikdörtgenin alanından büyük, Can'ın çizdiği karenin alanı ise bu dikdörtgenin alanından küçüktür.</p>`
      + `<p class="ask">Buna göre Altan ile Can'ın çizdiği karelerin alanları arasındaki fark <u>en az</u> kaç santimetrekaredir?</p>`,
    opts: ['8', '15', '32', '39'], ans: 1,
    hints: [`Dikdörtgenin alanı 63. 63'e en yakın tam kareler hangileri?`],
    steps: [`Dikdörtgen: 7 · 9 = 63`, `Altan: 63'ten büyük en küçük tam kare <b>64</b>. Can: 63'ten küçük en büyük tam kare <b>49</b>`, `Fark: 64 − 49 = <b>15</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 25, yil: 2020, konu: 'Ondalık sayıların karekökü',
    q: `<p>Aşağıda dört farklı renkteki kartların her birinden üçer adet verilmiştir. Aynı renkteki kartların üzerinde aynı kareköklü ifade yazmaktadır.</p>`
      + tablo([['Mavi (3 kart)', 'Kırmızı (3 kart)', 'Yeşil (3 kart)', 'Turuncu (3 kart)'], [R('0,09'), R('0,25'), R('0,64'), R('1,44')]])
      + `<p>Eymen, bu kartlardan seçerek üstlerinde yazan kareköklü ifadeleri topladığında bir doğal sayı elde etmektedir.</p><p class="ask">Buna göre Eymen <u>en fazla</u> kaç kart seçmiştir?</p>`,
    opts: ['8', '9', '10', '11'], ans: 1,
    hints: [`Önce değerleri bul: ${R('0,09')} = 0,3, …`, `12 kartın hepsinin toplamından başla; toplamı doğal sayı yapmak için en az kaç kart çıkarmalısın?`],
    steps: [
      `Değerler: mavi 0,3 · kırmızı 0,5 · yeşil 0,8 · turuncu 1,2`,
      `12 kartın toplamı: 3 · (0,3 + 0,5 + 0,8 + 1,2) = 3 · 2,8 = 8,4`,
      `Çıkarılacak kartların toplamının ondalık kısmı 0,4 olmalı. Tek kart: 0,3; 0,5; 0,8; 1,2 → olmaz. İki kart: 0,6; 0,8; 1,1; 1,5; 1,0; 1,3; 1,7; 1,6; 2,0; 2,4 → olmaz`,
      `Üç kart: 0,3 + 0,3 + 0,8 = 1,4 ✓ → kalan 9 kartın toplamı 8,4 − 1,4 = 7`,
      `En fazla <b>9</b> kart`
    ],
    answer: `Cevap: <b>B</b>`,
    trap: `Kartların hepsini aynı anda kullanılabilir sanmak ya da tek bir kart çıkararak sonuca ulaşılabileceğini düşünmek.`
  },
  {
    no: 26, yil: 2018, konu: 'Çarpma ve bölme',
    q: `<p>Alanı 118 m<sup>2</sup> olan bir evin dikdörtgen biçimindeki odaları ve salonu dışındaki bölümlerinin toplam alanı 34 m<sup>2</sup> dir. Salonun alanı, metrekare cinsinden bir tam kare sayıdır ve odaların alanları toplamından küçüktür.</p>`
      + `<p class="ask">Bu salonun kısa kenarının uzunluğu ${R(18)} m olduğuna göre uzun kenarının uzunluğu <u>en fazla</u> kaç metredir?</p>`,
    opts: [R(2, 7), R(2, 6), R(2, 4), R(2, 3)], ans: 1,
    hints: [`Odalar + salon = 118 − 34. Salon, odaların toplamından küçükse salon en fazla kaç olabilir?`],
    steps: [
      `Odalar + salon = 118 − 34 = 84 m². Salon < odalar → salon < 42`,
      `42'den küçük en büyük tam kare: <b>36</b>`,
      `Uzun kenar: 36 / ${R(18)} = 36 / 3${R(2)} = ${F(12, R(2))} = <b>${R(2, 6)}</b> m`
    ],
    answer: `Cevap: <b>B</b>`,
    trap: `Salonun alanını 84'ten küçük en büyük tam kare (81) almak. Salon, odaların toplamından da küçük olmalı.`
  },
  {
    no: 27, yil: 2020, konu: 'Karekökün yaklaşık değeri',
    q: `<p>Bir şehrin demir yolu hatları üzerindeki istasyonlar aşağıdaki şekilde noktalar ile gösterilmiştir. Aynı hat üzerinde bulunan ardışık iki istasyon arasındaki mesafeler birbirine eşittir.</p><div class="fig">${hatlar}</div>`
      + `<p>A, B, C istasyonlarından hareket eden K, L ve M trenleri ortak olan D istasyonundan sonra yeşil hattı kullanarak S istasyonuna ulaşıyorlar.</p><p class="ask">Bu trenlerin gittikleri yolların uzunluğuna göre doğru sıralanışı aşağıdakilerden hangisidir?</p>`,
    opts: ['K > L > M', 'K > M > L', 'M > L > K', 'M > K > L'], ans: 3,
    hints: [`D'den S'ye kadar olan yol üç tren için de aynıdır; yalnızca D'ye kadar olan yolları karşılaştır.`, `Aralıkları say ve sonucu tek kök hâline getir.`],
    steps: [
      `K: A'dan D'ye 6 + 9 = 15 aralık → 15${R(2)} = ${R(450)}`,
      `L: B'den D'ye 8 aralık → 8${R(5)} = ${R(320)}`,
      `M: C'den D'ye 7 + 6 = 13 aralık → 13${R(3)} = ${R(507)}`,
      `${R(507)} > ${R(450)} > ${R(320)} → <b>M > K > L</b>`
    ],
    answer: `Cevap: <b>D</b>`,
    trap: `Yalnızca aralık sayısına bakmak (K'nin 15 aralığı en çok) ya da yalnızca bir aralığın uzunluğuna bakmak (${R(5)} en büyük).`
  },
  {
    no: 28, yil: 2020, konu: 'Tam kare sayılar',
    q: `<p>Dikdörtgen şeklindeki bir kâğıt, alanları santimetrekare cinsinden 10'dan büyük birer tam kare pozitif tam sayıya eşit olan karesel bölgelere aşağıdaki gibi ayrılmıştır.</p><div class="fig">${kareler28}</div>`
      + `<p class="ask">Eşit alanlı bölgeler aynı harf ile gösterildiğine göre dikdörtgen şeklindeki bu kâğıdın bir yüzünün alanı <u>en az</u> kaç santimetrekaredir?</p>`,
    opts: ['168', '255', '364', '392'], ans: 2,
    hints: [`A'nın kenarını a al; C, B ve D'nin kenarlarını a cinsinden yaz.`, `Bütün kenarlar doğal sayı olmalı.`],
    steps: [
      `A: a. C: 2a (iki A'nın yüksekliği). İki B yan yana A + C kadar: 3a → B: 1,5a. D: 2a + 1,5a = 3,5a`,
      `Kenarlar doğal sayı → a çift. Alanlar 10'dan büyük → a² > 10 → a ≥ 4`,
      `a = 4: kâğıt (3a + 3,5a) × 3,5a = 26 × 14 = <b>364</b> cm²`
    ],
    answer: `Cevap: <b>C</b>`,
    trap: `a = 2 almak (A'nın alanı 4 olur, 10'dan büyük değil) ya da a = 3 almak (1,5a doğal sayı olmaz).`
  },
  {
    no: 29, yil: 2020, konu: 'Karekökün yaklaşık değeri',
    q: `<p>Alanı 1050 cm<sup>2</sup> olan kare şeklindeki bir panoya kenarlarından birinin uzunluğu 5'in tam sayı kuvveti, diğerinin uzunluğu 2'nin tam sayı kuvveti olan dikdörtgen şeklindeki bir afiş, pano yüzeyinden taşmayacak şekilde asılacaktır.</p>`
      + `<p class="ask">Buna göre afişin bir yüzünün alanı <u>en fazla</u> kaç santimetrekaredir?</p>`,
    opts: ['1000', '800', '640', '400'], ans: 1,
    hints: [`Panonun kenarı ${R(1050)}. Bu sayı hangi iki doğal sayı arasında?`],
    steps: [`32² = 1024 < 1050 < 1089 = 33² → panonun kenarı yaklaşık 32,4 cm`, `Kenarlar 32,4'ü geçemez: 5'in kuvveti en fazla 25, 2'nin kuvveti en fazla 32`, `Alan: 25 · 32 = <b>800</b> cm²`],
    answer: `Cevap: <b>B</b>`,
    trap: `Afişin alanının panonunkinden küçük olmasına bakıp 1000'i seçmek. 1000 = 125 · 8 olur; 125 cm panoya sığmaz.`
  },
  {
    no: 30, yil: 2019, konu: 'Toplama ve çıkarma',
    q: `<p>Aşağıdaki şekildeki gibi bir vincin havada tuttuğu inşaat malzemesinin yerden yüksekliği ${R(125)} m ve malzemenin vincin koluna uzaklığı ${R(45)} m'dir.</p><div class="fig">${vinc}</div>`
      + `<p>Vincin kolunun yerden yüksekliği sabit kalmak üzere malzeme şekildeki konumdayken ${R(5)} m yukarı çekiliyor.</p><p class="ask">Buna göre son durumda malzemenin yerden yüksekliği, malzemenin vincin koluna uzaklığından kaç metre fazladır?</p>`,
    opts: [R(5, 2), R(5, 3), R(5, 4), R(5, 5)], ans: 2,
    hints: [`${R(125)} = 5${R(5)}, ${R(45)} = 3${R(5)}. Yukarı çekilince biri artar, diğeri azalır.`],
    steps: [`Yerden yükseklik: 5${R(5)} + ${R(5)} = 6${R(5)}`, `Kola uzaklık: 3${R(5)} − ${R(5)} = 2${R(5)}`, `Fark: 6${R(5)} − 2${R(5)} = <b>${R(5, 4)}</b>`],
    answer: `Cevap: <b>C</b>`,
    trap: `Yalnızca yerden yüksekliği değiştirmek; kola olan uzaklığın da ${R(5)} azaldığını unutmak (3${R(5)} bulunur).`
  },
  {
    no: 31, yil: 2019, konu: 'Çarpma ve bölme',
    q: `<p>Dikdörtgen şeklindeki bir kâğıt aşağıdaki gibi kesilerek kare ve dikdörtgen şeklinde iki kâğıt elde ediliyor. Elde edilen kare şeklindeki kâğıdın bir yüzünün alanı 27 cm<sup>2</sup> olup dikdörtgen şeklindeki kâğıdın bir yüzünün alanının 3 katına eşittir.</p><div class="fig">${kesme31}</div>`
      + `<p class="ask">Buna göre elde edilen dikdörtgen şeklindeki kâğıdın kısa kenarının uzunluğu kaç santimetredir?</p>`,
    opts: ['9', R(3, 2), '3', R(3)], ans: 3,
    hints: [`Karenin kenarı ${R(27)}. Dikdörtgenin uzun kenarı karenin kenarına eşit.`],
    steps: [`Kare: kenar ${R(27)} = 3${R(3)} cm`, `Dikdörtgen alanı 27 / 3 = 9 cm². Uzun kenarı 3${R(3)}`, `Kısa kenar: ${F(9, R(3, 3))} = ${F(3, R(3))} = <b>${R(3)}</b> cm`],
    answer: `Cevap: <b>D</b>`,
    trap: `Dikdörtgenin alanını 27 · 3 = 81 almak. Karenin alanı dikdörtgeninkinin 3 katıdır, tersi değil.`
  }
  ];
})();
