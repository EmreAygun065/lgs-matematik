// LGS çıkmış sorulara benzer, yeni yazılmış sorular (Kareköklü İfadeler). Her soru aynı numaralı çıkmış sorunun mantığını izler.
window.KK_BENZER_CIKMIS = (function () {
  const yil = { 1: 2026, 2: 2025, 3: 2025, 4: 2024, 5: 2024, 6: 2018, 7: 2026, 8: 2026, 9: 2025, 10: 2024, 11: 2023, 12: 2023, 13: 2023, 14: 2023, 15: 2023, 16: 2022, 17: 2022, 18: 2022, 19: 2020, 20: 2021, 21: 2021, 22: 2021, 23: 2021, 24: 2018, 25: 2020, 26: 2018, 27: 2020, 28: 2020, 29: 2020, 30: 2019, 31: 2019 };
  // Konular aynı numaralı çıkmış sorununkiyle aynıdır.
  const konu = {"1":"Tam kare sayılar","2":"Çarpma ve bölme","3":"Çarpma ve bölme","4":"Gerçek sayılar","5":"Toplama ve çıkarma","6":"Karekökün yaklaşık değeri","7":"Toplama ve çıkarma","8":"Çarpma ve bölme","9":"Ondalık sayıların karekökü","10":"Karekökün yaklaşık değeri","11":"a√b biçiminde yazma","12":"Karekökün yaklaşık değeri","13":"Gerçek sayılar","14":"Çarpma ve bölme","15":"Toplama ve çıkarma","16":"Çarpma ve bölme","17":"Karekökün yaklaşık değeri","18":"Karekökün yaklaşık değeri","19":"Karekökün yaklaşık değeri","20":"Tam kare sayılar","21":"Karekökün yaklaşık değeri","22":"Toplama ve çıkarma","23":"Tam kare sayılar","24":"Tam kare sayılar","25":"Ondalık sayıların karekökü","26":"Çarpma ve bölme","27":"Karekökün yaklaşık değeri","28":"Tam kare sayılar","29":"Karekökün yaklaşık değeri","30":"Toplama ve çıkarma","31":"Çarpma ve bölme"};
  const ST = 'stroke="var(--fig-stroke)"';
  const rect = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${ST} stroke-width="1.5" ${extra}/>`;
  const txt = (x, y, t, extra = '') => `<text x="${x}" y="${y}" text-anchor="middle" font-size="14" ${extra}>${t}</text>`;

  const kareli3 = svg(330, 250, (() => {
    const c = 36, o = 20;
    let g = '';
    for (let i = 0; i <= 8; i++) g += `<line x1="${o + i * c}" y1="${o}" x2="${o + i * c}" y2="${o + 6 * c}" stroke="var(--fig-blue)"/>`;
    for (let j = 0; j <= 6; j++) g += `<line x1="${o}" y1="${o + j * c}" x2="${o + 8 * c}" y2="${o + j * c}" stroke="var(--fig-blue)"/>`;
    g += `<rect x="${o + c}" y="${o + c}" width="${6 * c}" height="${4 * c}" fill="none" ${ST} stroke-width="2"/><rect x="${o + 2 * c}" y="${o + c}" width="${3 * c}" height="${3 * c}" fill="none" ${ST} stroke-width="2"/>`;
    const L = (x, y, t) => `<text x="${o + x * c}" y="${o + y * c}" font-size="14" text-anchor="middle">${t}</text>`;
    return g + L(.65, .8, 'D') + L(7.35, .8, 'C') + L(.65, 5.55, 'A') + L(7.35, 5.55, 'B') + L(1.7, 4.4, 'K') + L(5.3, 4.4, 'L') + L(5.3, .8, 'M') + L(1.7, .8, 'N');
  })(), 'Kareli zeminde 6 × 4 hücrelik ABCD dikdörtgeni ve 3 × 3 hücrelik KLMN karesi');

  const dogru6 = svg(380, 90, (() => {
    let g = `<line x1="20" y1="50" x2="360" y2="50" ${ST} stroke-width="1.5"/>`;
    for (let i = 0; i <= 6; i++) g += `<circle cx="${50 + i * 45}" cy="50" r="4" fill="var(--fig-stroke)"/>`;
    const a = 50 + 3.5 * 45;
    return g + `<line x1="${a}" y1="43" x2="${a}" y2="57" ${ST} stroke-width="2"/>` + txt(50, 75, '5') + txt(320, 75, '8') + txt(a, 22, 'A') + `<line x1="${a}" y1="27" x2="${a}" y2="40" ${ST}/>`;
  })(), '5 ile 8 arası 6 eş parçaya ayrılmış sayı doğrusu; A, 3. ve 4. parça işaretleri arasında');

  const yol7 = svg(560, 200, (() => {
    const u = 16;
    let g = `<rect x="10" y="20" width="540" height="120" fill="#9a9a9a"/><line x1="10" y1="80" x2="550" y2="80" stroke="#fff" stroke-width="2" stroke-dasharray="14 10"/>`;
    const araba = x => `<rect x="${x}" y="35" width="${u}" height="22" rx="5" fill="#fff" ${ST}/>`;
    const otobus = x => `<rect x="${x}" y="95" width="${3 * u}" height="30" rx="4" fill="#f2c200" ${ST}/>`;
    g += araba(30) + otobus(30 + u);
    g += araba(30 + 14 * u) + otobus(30 + 11 * u);
    g += txt(110, 165, 'Şekil I', 'font-weight="700"') + txt(370, 165, 'Şekil II', 'font-weight="700"');
    g += `<text x="30" y="14" font-size="12">√3 m</text><text x="${30 + u}" y="190" font-size="12">√27 m</text>`;
    return g;
  })(), 'Şekil I: otomobilin ön ucu otobüsün arka ucu hizasında. Şekil II: otobüsün ön ucu otomobilin arka ucu hizasında');

  const serit9 = svg(470, 120, (() => {
    const s = 90, m = 26;
    const p = (x, y, n) => { let g = '', xx = x; for (let i = 0; i < n; i++) { g += rect(xx, y, m, m, 'var(--fig-blue)') + rect(xx + m, y, s - 2 * m, m, 'var(--card)'); xx += s - m; } return g + rect(xx, y, m, m, 'var(--fig-blue)'); };
    return p(20, 25, 1) + `<text x="65" y="18" text-anchor="middle" font-size="12">√1,96 dm</text>` + p(180, 70, 2) + `<text x="${180 + (2 * s - m) / 2}" y="63" text-anchor="middle" font-size="12">√5,76 dm</text>`;
  })(), 'Bir kâğıt: M B M. İki kâğıt bir mavi kare çakışık: M B M B M');

  const parke14 = svg(420, 180, (() => {
    const k = 12, ox = 20, oy = 30;   // √3 = 12 px: parke 6√3 × 2√3
    const P = (x, y) => rect(ox + x * k, oy + y * k, 6 * k, 2 * k, 'var(--fig-yellow)') + txt(ox + (x + 3) * k, oy + (y + 1.3) * k, 'Parke', 'font-size="12" style="fill:#1f2328"');
    return rect(ox, oy, 11 * k, 6 * k, '#cfd2d4') + P(2.5, 0) + P(5, 2) + P(0, 4)
      + `<text x="${ox + 11 * k + 8}" y="${oy + 3 * k}" font-size="12">Parke: √108 dm × √12 dm</text><text x="${ox + 11 * k + 8}" y="${oy + 3 * k + 18}" font-size="12">Çakışma: √3 dm</text>`;
  })(), 'Zemin, üç özdeş parke; ortadaki ve alttaki parke yatayda √3 dm çakışık');

  const bayrak15 = (dizi, aciklama) => svg(440, 80, (() => {
    let g = `<line x1="10" y1="10" x2="430" y2="10" ${ST} stroke-width="2"/>`, x = 10;
    const sari = 420 / 5, mavi = sari / 2;
    dizi.forEach(t => { const w = t === 'S' ? sari : mavi; g += `<polygon points="${x},10 ${x + w},10 ${x + w / 2},${10 + w * .866}" fill="${t === 'S' ? 'var(--fig-yellow)' : 'var(--fig-blue)'}" ${ST}/>`; x += w; });
    return g;
  })(), aciklama);

  const icIce17 = svg(220, 210, `${rect(20, 15, 170, 170, 'var(--card)')}${rect(20, 46, 139, 139, 'var(--fig-blue)')}${rect(20, 87, 98, 98, 'var(--fig-yellow)')}
    <text x="105" y="35" text-anchor="middle" font-size="13">Beyaz</text><text x="90" y="70" text-anchor="middle" font-size="13" style="fill:#1f2328">Mavi</text><text x="69" y="140" text-anchor="middle" font-size="13" style="fill:#1f2328">Sarı</text>
    <text x="14" y="203" font-size="14">A</text><circle cx="172" cy="185" r="3" fill="var(--fig-stroke)"/><text x="168" y="203" font-size="14">B</text>`, 'A köşesinde çakışan sarı, mavi ve beyaz kareler; B beyaz bölgenin alt kenarında');

  const parkur18 = svg(460, 120, `<rect x="40" y="25" width="410" height="60" fill="var(--yellow-soft)"/>
    <line x1="40" y1="20" x2="40" y2="90" ${ST} stroke-width="2"/><line x1="220" y1="20" x2="220" y2="90" stroke="var(--blue)" stroke-width="3"/>
    <text x="40" y="14" text-anchor="middle" font-size="12">Başlangıç</text><text x="220" y="14" text-anchor="middle" font-size="12">Mavi çizgi</text>
    <line x1="40" y1="104" x2="220" y2="104" ${ST}/><text x="130" y="118" text-anchor="middle" font-size="12">4√5 m</text>`, 'Başlangıç ile mavi çizgi arası 4√5 m');

  const bilye19 = svg(380, 110, (() => {
    let g = `<rect x="20" y="15" width="340" height="60" fill="none" stroke="var(--green)"/><rect x="${20 + 4 * 42.5}" y="15" width="42.5" height="60" fill="var(--fig-blue)"/>`;
    for (let i = 0; i <= 8; i++) { if (i > 0 && i < 8) g += `<line x1="${20 + i * 42.5}" y1="15" x2="${20 + i * 42.5}" y2="75" ${ST} stroke-dasharray="4 4"/>`; g += txt(20 + i * 42.5, 93, i ? i + ' m' : '0', 'font-size="11"'); }
    return g;
  })(), 'Sekiz eş bölgeli parkur; mavi bölge 4 m ile 5 m arası');

  const daire21 = svg(460, 140, (() => {
    let g = `<circle cx="80" cy="70" r="60" fill="var(--fig-yellow)" ${ST}/><line x1="20" y1="70" x2="140" y2="70" ${ST}/><text x="12" y="74" text-anchor="end" font-size="13">K</text><text x="146" y="74" font-size="13">L</text>`;
    g += `<rect x="180" y="45" width="270" height="40" fill="var(--blue-soft)" ${ST}/>`;
    for (let i = 0; i <= 10; i++) g += `<line x1="${195 + i * 24}" y1="45" x2="${195 + i * 24}" y2="57" ${ST}/>` + txt(195 + i * 24, 75, i, 'font-size="11"');
    return g;
  })(), 'KL çaplı daire ve 10 cm\'lik cetvel');

  const tl22 = svg(420, 200, `${rect(30, 20, 120, 30, 'var(--green-soft)')}${rect(75, 50, 30, 120, 'var(--green-soft)')}
    <line x1="160" y1="20" x2="160" y2="170" ${ST}/><text x="166" y="100" font-size="12">√300 cm</text>
    ${rect(250, 50, 30, 120, 'var(--green-soft)')}${rect(280, 140, 120, 30, 'var(--green-soft)')}
    <text x="90" y="192" text-anchor="middle" font-size="12">Şekil I</text><text x="320" y="192" text-anchor="middle" font-size="12">Şekil II</text>`, 'Dört eş dikdörtgenden T ve L şekilleri');

  const hat27 = svg(470, 160, (() => {
    let g = '';
    const hat = (y, n, renk, ad, et) => {
      let s = `<line x1="60" y1="${y}" x2="${60 + n * 30}" y2="${y}" stroke="${renk}" stroke-width="3"/>`;
      for (let i = 0; i <= n; i++) s += `<circle cx="${60 + i * 30}" cy="${y}" r="3.5" fill="var(--fig-stroke)"/>`;
      return s + `<text x="50" y="${y + 5}" text-anchor="end" font-size="13">${ad}</text><text x="75" y="${y - 8}" text-anchor="middle" font-size="11">${et}</text>`;
    };
    return hat(30, 10, 'var(--green)', 'K', '√3 km') + hat(80, 7, 'var(--blue)', 'L', '√6 km') + hat(130, 12, 'var(--red)', 'M', '√2 km');
  })(), 'K treni 10 aralıklık (√3 km), L treni 7 aralıklık (√6 km), M treni 12 aralıklık (√2 km) hatta gidiyor');

  const kareler28 = svg(220, 230, (() => {
    const a = 26, o = 15;
    return rect(o, o, a, a, 'var(--fig-blue)') + rect(o, o + a, a, a, 'var(--fig-blue)') + rect(o + a, o, 2 * a, 2 * a, '#8f8fd8') + rect(o, o + 2 * a, 3 * a, 3 * a, '#f39ad1')
      + txt(o + a / 2, o + a / 2 + 5, 'A', 'style="fill:#1f2328"') + txt(o + a / 2, o + 1.5 * a + 5, 'A', 'style="fill:#1f2328"') + txt(o + 2 * a, o + a + 5, 'B', 'style="fill:#1f2328"') + txt(o + 1.5 * a, o + 3.5 * a + 5, 'C', 'style="fill:#1f2328"');
  })(), 'Dikdörtgen kâğıt: üstte iki A ve bir B karesi, altta C karesi');

  return [
  {
    no: 1,
    q: `<p class="ask">Aşağıdakilerden hangisi bir tam kare pozitif tam sayıdır?</p>`,
    opts: ['10', '18', '32', '49'], ans: 3,
    hints: [`Tam kareler: 1, 4, 9, 16, 25, 36, 49, …`],
    steps: [`7² = <b>49</b>. 10, 18 ve 32 bir tam sayının karesi değildir.`],
    answer: `Cevap: <b>D</b>`,
    trap: `32'yi tam kare sanmak: 32 = 2⁵; 5² = 25 ve 6² = 36 arasındadır.`
  },
  {
    no: 2,
    q: `<p class="ask">Bir kenarının uzunluğu ${R(12)} cm olan karenin çevresinin uzunluğu kaç santimetredir?</p>`,
    opts: [R(3, 8), R(3, 4), R(3, 2), R(48)], ans: 0,
    hints: [`${R(12)}'yi a${R('b')} biçiminde yaz.`],
    steps: [`${R(12)} = 2${R(3)}`, `Çevre: 4 · 2${R(3)} = <b>${R(3, 8)}</b> cm`],
    answer: `Cevap: <b>A</b>`,
    trap: `4 · ${R(12)} = ${R(48)} yazmak. 4, köke girerse 16 olarak girer: 4${R(12)} = ${R(192)}.`
  },
  {
    no: 3,
    q: `<p>Aşağıdaki kareli zeminde verilen ABCD dikdörtgeninin alanı 240 cm<sup>2</sup> dir.</p><div class="fig">${kareli3}</div><p class="ask">Buna göre KLMN karesinin çevresinin uzunluğu kaç santimetredir?</p>`,
    opts: [R(10, 9), R(10, 12), R(10, 16), '36'], ans: 1,
    hints: [`ABCD kaç birim kare? Bir birim karenin alanı ve kenarı kaç?`],
    steps: [`ABCD: 6 · 4 = 24 birim kare → bir birim kare 240 / 24 = 10 cm² → kenar ${R(10)}`, `KLMN kenarı 3 birim = 3${R(10)} → çevre 4 · 3${R(10)} = <b>${R(10, 12)}</b> cm`],
    answer: `Cevap: <b>B</b>`,
    trap: `Birim karenin kenarını 10 alıp 120 bulmak.`
  },
  {
    no: 4,
    q: `<p class="ask">Aşağıdakilerden hangisi bir irrasyonel sayıdır?</p>`,
    opts: [R(20), R('0,49'), '0,<span style="text-decoration:overline">3</span>', R(81)], ans: 0,
    hints: [`Hangi kökün içi tam kare (veya tam kare ondalık) değil?`],
    steps: [`${R('0,49')} = 0,7 · ${R(81)} = 9 · 0,3̅ = 1/3 → rasyonel`, `${R(20)}: 20 tam kare değil → <b>irrasyonel</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 5,
    q: `<p class="ask">${R(200)} − ${R(50)} − ${R(18)} işleminin sonucu aşağıdakilerden hangisidir?</p>`,
    opts: [R(2), R(2, 2), R(2, 3), R(2, 4)], ans: 1,
    hints: [`Hepsini a${R(2)} biçimine getir.`],
    steps: [`${R(200)} = 10${R(2)}, ${R(50)} = 5${R(2)}, ${R(18)} = 3${R(2)}`, `10${R(2)} − 5${R(2)} − 3${R(2)} = <b>${R(2, 2)}</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 6,
    q: `<div class="fig">${dogru6}</div><p>Yukarıdaki sayı doğrusunda 5 ile 8'e karşılık gelen noktaların arası 6 eş parçaya ayrılmıştır.</p><p class="ask">Buna göre A noktasına karşılık gelen sayı aşağıdakilerden hangisi olabilir?</p>`,
    opts: [R(30), R(38), R(42), R(45)], ans: 3,
    hints: [`Bir parça 0,5 birim. A hangi iki işaret arasında?`],
    steps: [`İşaretler: 5 · 5,5 · 6 · 6,5 · 7 · 7,5 · 8. A, 6,5 ile 7 arasında`, `6,5² = 42,25 ve 7² = 49 → A = ${R('x')} ise 42,25 < x < 49`, `Yalnızca <b>${R(45)}</b> (≈ 6,71) uygun`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 7,
    q: `<p>Uzunluğu ${R(3)} m olan bir otomobil ile uzunluğu ${R(27)} m olan bir otobüs Şekil I'deki konumlarındayken aynı yönde bir süre ilerleyip durduklarında son konumları Şekil II'deki gibi olmuştur.</p><div class="fig">${yol7}</div>`
      + `<p class="ask">Bu süre boyunca otobüs ${R(300)} m ilerlediğine göre otomobil kaç metre ilerlemiştir?</p>`,
    opts: [R(3, 12), R(3, 13), R(3, 14), R(3, 15)], ans: 2,
    hints: [`${R(27)} = 3${R(3)}, ${R(300)} = 10${R(3)}. Otomobilin arka ucunun yerini izle.`],
    steps: [`Otomobilin arka ucu 0, ön ucu = otobüsün arka ucu = ${R(3)}, otobüsün ön ucu 4${R(3)}`, `Otobüs 10${R(3)} gitti → ön ucu 14${R(3)} = otomobilin yeni arka ucu`, `Otomobil <b>${R(3, 14)}</b> m ilerledi`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 8,
    q: `<p>Uzunluğu ${R(2, 3)} m olan A yolu ile uzunluğu ${R(3, 2)} m olan B yolu vardır. Şarjı tam dolu olan bir oyuncak tren, B yolunda 8 tam tur attığı anda şarjı bitmektedir.</p>`
      + `<p>B yolunda bulunan bu tren, şarjı tam dolu iken hareket ettirilmiş ve bu yolda 3 tam tur attığı anda durdurulup A yoluna yerleştirilerek tekrar hareket ettirilmiştir.</p><p class="ask">Buna göre bu trenin şarjı, tren A yolunda <u>kaçıncı turu atarken</u> biter?</p>`,
    opts: ['2.', '3.', '4.', '5.'], ans: 3,
    hints: [`Kalan şarjla gidilecek yol: 5 · 2${R(3)}.`],
    steps: [`Toplam: 8 · 2${R(3)} = 16${R(3)}. Kullanılan: 3 · 2${R(3)} = 6${R(3)}. Kalan 10${R(3)}`, `A'da tur: ${F(R(3, 10), R(2, 3))} = ${F(R(6, 10), 6)} = ${F(R(6, 5), 3)} ≈ 4,08`, `4 tur tamamlanır; şarj <b>5.</b> turda biter`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 9,
    q: `<p>İki mavi karesel bölge ile bir beyaz dikdörtgensel bölgeden oluşan, uzun kenarı ${R('1,96')} dm olan iki özdeş kâğıt vardır. Bu kâğıtlar birer mavi bölgeleri çakışacak biçimde yan yana konunca oluşan şeklin uzun kenarı ${R('5,76')} dm olmuştur.</p><div class="fig">${serit9}</div>`
      + `<p class="ask">Buna göre, beyaz bölgelerden birinin uzun kenarı kaç desimetredir?</p>`,
    opts: ['0,2', '0,3', '0,4', '0,6'], ans: 3,
    hints: [`${R('1,96')} = 1,4; ${R('5,76')} = 2,4.`],
    steps: [`Çakışan mavi kare: 2 · 1,4 − 2,4 = 0,4 dm`, `Beyaz: 1,4 − 2 · 0,4 = <b>0,6</b> dm`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 10,
    q: `<p>Bir televizyonda ses seviyesi tam kare ise karekökü, değilse karekökünün en yakın olduğu doğal sayı kadar çizgi ile gösterilir.</p>`
      + tablo([['Ses seviyesi', 'Çizgi sayısı'], ['1 – 2', '1'], ['3 – 6', '2'], ['7 – 12', '3'], ['13 – …', '⋮']])
      + `<p class="ask">Ses göstergesinde 4 çizgi varken ses seviyesi <u>en fazla</u> kaçtır?</p>`,
    opts: ['13', '16', '18', '20'], ans: 3,
    hints: [`4 çizgi → 3,5 < ${R('n')} < 4,5.`],
    steps: [`12,25 < n < 20,25`, `En büyük doğal sayı <b>20</b> (${R(20)} ≈ 4,47); ${R(21)} ≈ 4,58 → 5 çizgi`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 11,
    q: `${kartlar([R(18, 2), R(3, 4), R(6, 5)])}<p>Kartların ön yüzünde birer kareköklü ifade, arka yüzünde ise aynı ifadenin a${R('b')} biçimindeki farklı bir gösterimi yazmaktadır.</p>`
      + `<p class="ask">Aşağıdakilerden hangisi bu kartlardan herhangi birinin arka yüzünde yazılı <u>olamaz</u>?</p>`,
    opts: [R(2, 6), R(12, 2), R(24, 3), R(8, 3)], ans: 2,
    hints: [`Her ifadeyi tek kök hâline getir.`],
    steps: [`Kartlar: 2${R(18)} = ${R(72)}, 4${R(3)} = ${R(48)}, 5${R(6)} = ${R(150)}`, `6${R(2)} = ${R(72)} ✓ · 2${R(12)} = ${R(48)} ✓ · 3${R(8)} = ${R(72)} ✓`, `3${R(24)} = <b>${R(216)}</b> → hiçbiri`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 12,
    q: `<p>Yükseklikleri 7 m ve 9 m olan iki direk arasına boyu 3 m olan bir fidan dikilmiştir. Bir süre sonra fidanın boyu kısa direkten fazla, uzun direkten az olmuştur.</p><p class="ask">Buna göre fidan kaç metre uzamış olabilir?</p>`,
    opts: [R(2, 3), R(3, 2), R(3, 4), R(2, 5)], ans: 1,
    hints: [`7 < 3 + x < 9 → x kaç ile kaç arasında?`],
    steps: [`4 < x < 6 → 16 < x² < 36`, `2${R(3)} = ${R(12)} ✗ · 3${R(2)} = <b>${R(18)}</b> ✓ · 4${R(3)} = ${R(48)} ✗ · 5${R(2)} = ${R(50)} ✗`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 13,
    q: tablo([['÷', R(50), R(120), R(98), R(75)], [R(8), 'K', '', '', ''], [R(10), '', 'L', '', ''], [R(2), '', '', 'M', ''], [R(12), '', '', '', 'N']])
      + `<p>Tabloda her harf, üst satırdaki sayının sol sütundaki sayıya bölümüdür.</p><p class="ask">Buna göre hangi harf bir irrasyonel sayıdır?</p>`,
    opts: ['K', 'L', 'M', 'N'], ans: 1,
    hints: [`${R('a')} ÷ ${R('b')} = ${R('a/b')}; kesri sadeleştir.`],
    steps: [`K = ${R('50/8')} = ${R('25/4')} = 5/2 · M = ${R(49)} = 7 · N = ${R('75/12')} = ${R('25/4')} = 5/2`, `L = ${R('120/10')} = <b>${R(12)}</b> → irrasyonel`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 14,
    q: `<div class="fig">${parke14}</div><p>Dikdörtgen biçimli bir zemine uzun kenarı ${R(108)} dm, kısa kenarı ${R(12)} dm olan üç özdeş parke yukarıdaki gibi döşenmiştir. Ortadaki ve alttaki parke yatayda ${R(3)} dm çakışık hizadadır.</p>`
      + `<p class="ask">Parke döşenmemiş bölgelerin alanları toplamı kaç desimetrekaredir?</p>`,
    opts: ['90', '108', '126', '144'], ans: 0,
    hints: [`${R(108)} = 6${R(3)}, ${R(12)} = 2${R(3)}.`],
    steps: [`Parke: 6${R(3)} · 2${R(3)} = 36 → üç parke 108 dm²`, `Zemin: (6${R(3)} + 6${R(3)} − ${R(3)}) × 3 · 2${R(3)} = 11${R(3)} · 6${R(3)} = 198 dm²`, `Boş: 198 − 108 = <b>90</b> dm²`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 15,
    q: `<p>Çevresi ${R(3, 18)} cm olan eşkenar üçgen biçimindeki 5 sarı bayrak bir ipe Şekil I'deki gibi boşluksuz dizilmiştir.</p><div class="fig">${bayrak15(['S', 'S', 'S', 'S', 'S'], '5 sarı bayrak')}</div>`
      + `<p>Aynı ipe 3 sarı bayrak ve özdeş 4 mavi eşkenar üçgen bayrak Şekil II'deki gibi boşluksuz dizilmiştir.</p><div class="fig">${bayrak15(['S', 'M', 'S', 'M', 'M', 'S', 'M'], '3 sarı ve 4 mavi bayrak')}</div>`
      + `<p class="ask">Bir mavi bayrağın bir kenarı kaç santimetredir?</p>`,
    opts: [R(3, 2), R(3, 3), R(3, 4), F(R(3, 9), 2)], ans: 1,
    hints: [`Sarı kenar = çevre / 3. İp = 5 sarı kenar.`],
    steps: [`Sarı kenar 6${R(3)} → ip 30${R(3)}`, `3 · 6${R(3)} + 4m = 30${R(3)} → 4m = 12${R(3)} → m = <b>${R(3, 3)}</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 16,
    q: `<p>Çevresi ${R(1152)} cm olan dikdörtgen biçimli bir kâğıt, bir kare ve bir dikdörtgen parçaya ayrılıyor. Karenin kenarı ${R(18)} cm'dir ve kâğıdın kısa kenarına eşittir.</p><p class="ask">Dikdörtgen parçanın bir yüzünün alanı kaç santimetrekaredir?</p>`,
    opts: ['18', '24', '27', '36'], ans: 3,
    hints: [`${R(1152)} = 24${R(2)} → kısa + uzun = 12${R(2)}.`],
    steps: [`Kısa kenar ${R(18)} = 3${R(2)} → uzun kenar 12${R(2)} − 3${R(2)} = 9${R(2)}`, `Dikdörtgen parça: (9${R(2)} − 3${R(2)}) · 3${R(2)} = 6${R(2)} · 3${R(2)} = <b>36</b> cm²`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 17,
    q: `<p>Kare biçimli sarı, mavi ve beyaz kartlar A köşesinde çakışacak biçimde üst üste yapıştırılmıştır. Görünen sarı, mavi ve beyaz bölgelerin alanları eşittir ve sarı karenin çevresi 16 cm'dir.</p><div class="fig">${icIce17}</div>`
      + `<p>Beyaz bölgenin alt kenarında, A'ya uzaklığı santimetre cinsinden doğal sayı olan bir B noktası işaretleniyor.</p><p class="ask">AB kaç santimetredir?</p>`,
    opts: ['5', '6', '7', '8'], ans: 1,
    hints: [`Sarı alan 16. Mavi kare 32, beyaz kare 48 cm².`],
    steps: [`Mavi kare kenarı ${R(32)} ≈ 5,66; beyaz kare kenarı ${R(48)} ≈ 6,93`, `B beyaz bölgenin kenarında → 5,66 < AB ≤ 6,93 → AB = <b>6</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 18,
    q: `<p>Bir oyun parkurunda başlangıç çizgisi ile mavi çizgi arası ${R(5, 4)} m'dir. Topu mavi çizgiye en yakın duran kazanır.</p><div class="fig">${parkur18}</div>`
      + `<p>Ali'nin topu mavi çizgiye ${R(5)} m uzakta, Veli'nin topu başlangıç çizgisine ${R(5, 2)} m uzakta durmuştur. Ali birinci, Can ikinci, Veli üçüncü olmuştur.</p><p class="ask">Can'ın topunun başlangıç çizgisine uzaklığı metre cinsinden hangisi olabilir?</p>`,
    opts: ['6', '8', '10', '14'], ans: 0,
    hints: [`Mavi çizgi ≈ 8,94 m. Ali'nin uzaklığı ≈ 2,24; Veli'ninki ≈ 4,47.`],
    steps: [`Can'ın mavi çizgiye uzaklığı 2,24 ile 4,47 arasında olmalı`, `6 → 2,94 ✓ · 8 → 0,94 ✗ (Ali'den iyi olurdu) · 10 → 1,06 ✗ · 14 → 5,06 ✗`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 19,
    q: `<p>Kısa kenarı 1 m olan sekiz eş bölgeden oluşan bir bilye parkurunda bilye mavi bölgede kalmıştır.</p><div class="fig">${bilye19}</div><p class="ask">Bilyenin başlangıç çizgisine uzaklığı metre cinsinden hangisi <u>olamaz</u>?</p>`,
    opts: [R(2, 3), R(5, 2), R(3, 3), R(6, 2)], ans: 2,
    hints: [`Mavi bölge 4 ile 5 m arası: 16 < d² < 25.`],
    steps: [`3${R(2)} = ${R(18)} ✓ · 2${R(5)} = ${R(20)} ✓ · 2${R(6)} = ${R(24)} ✓`, `3${R(3)} = <b>${R(27)}</b> > 5 ✗`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 20,
    q: `<p>Dikdörtgen biçimli bir kâğıt kısa kenarına paralel kesilerek iki dikdörtgen elde ediliyor. Sonra her parça kısa kenarına paralel kesilerek, büyük parçadan iki eş büyük kare, küçük parçadan iki eş küçük kare elde ediliyor. Karelerin kenarları santimetre cinsinden doğal sayıdır.</p>`
      + `<p class="ask">Başlangıçtaki kâğıdın alanı santimetrekare cinsinden hangisi <u>olamaz</u>?</p>`,
    opts: ['10', '40', '90', '120'], ans: 3,
    hints: [`Küçük kare kenarı b → büyük kare kenarı 2b, kâğıt 5b × 2b.`],
    steps: [`Alan 10b²`, `10 = 10 · 1 ✓ · 40 = 10 · 4 ✓ · 90 = 10 · 9 ✓`, `120 = 10 · 12 → 12 tam kare değil ✗`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 21,
    q: `<div class="fig">${daire21}</div><p>KL çaplı dairenin K noktası cetvelde 3'e karşılık gelecek biçimde konulunca L noktası 7 ile 8 arasında, 8'e daha yakın bir noktaya geliyor.</p><p class="ask">KL kaç santimetre olabilir?</p>`,
    opts: [R(5, 2), R(23), R(3, 2), R(7, 2)], ans: 1,
    hints: [`7,5 < L < 8 → KL = L − 3.`],
    steps: [`4,5 < KL < 5 → 20,25 < KL² < 25`, `2${R(5)} = ${R(20)} ✗ · <b>${R(23)}</b> ✓ · 2${R(3)} = ${R(12)} ✗ · 2${R(7)} = ${R(28)} ✗`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 22,
    q: `<p>Dikdörtgen biçimli bir kâğıt dört eş dikdörtgene kesiliyor ve parçalarla Şekil I (T) ve Şekil II (L) oluşturuluyor.</p><div class="fig">${tl22}</div>`
      + `<p>Şekil I'in yüksekliği ${R(300)} cm, Şekil II'nin çevresi ${R(3, 36)} cm'dir.</p><p class="ask">Başlangıçtaki kâğıdın alanı kaç santimetrekaredir?</p>`,
    opts: ['96', '144', '192', '384'], ans: 2,
    hints: [`a + b = ${R(300)}; L'nin çevresi 2(2a + b).`],
    steps: [`a + b = 10${R(3)} ve 2a + b = 18${R(3)} → a = 8${R(3)}, b = 2${R(3)}`, `Kâğıt: 4 · 8${R(3)} · 2${R(3)} = 4 · 48 = <b>192</b> cm²`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 23,
    q: `<p>Hücrelerinde 2'nin birbirinden farklı tam sayı kuvvetleri olan tabloda iki hücre E ve F ile gösterilmiştir.</p>`
      + tablo([['I. Sütun', 'II. Sütun'], ['2<sup>−3</sup>', '2<sup>2</sup>'], ['E', 'F'], ['2<sup>1</sup>', '2<sup>−1</sup>']])
      + `<p>Her sütundaki üç ifadenin çarpımı tam kare pozitif bir tam sayıdır.</p><p class="ask">E + F <u>en az</u> kaçtır?</p>`,
    opts: ['24', '30', '36', '40'], ans: 0,
    hints: [`I. sütun: 2<sup>e − 2</sup>; II. sütun: 2<sup>f + 1</sup>. Üsler çift ve negatif olmamalı.`],
    steps: [`I: e − 2 çift, ≥ 0 → e ∈ {2, 4, …}; 2 tabloda var → e = 4 → E = 16`, `II: f + 1 çift, ≥ 0 → f ∈ {−1, 1, 3, …}; −1 ve 1 tabloda var → f = 3 → F = 8`, `E + F = <b>24</b>`],
    answer: `Cevap: <b>A</b>`,
    trap: `F = 2<sup>1</sup> almak (toplam 18); 2<sup>1</sup> tabloda zaten var.`
  },
  {
    no: 24,
    q: `<p>Ece ve Efe kenarları doğal sayı olan birer kare çiziyor. Ece'nin karesinin alanı 6 cm × 11 cm'lik dikdörtgenin alanından büyük, Efe'ninki küçüktür.</p><p class="ask">İki karenin alanları farkı <u>en az</u> kaçtır?</p>`,
    opts: ['17', '19', '32', '47'], ans: 0,
    hints: [`Dikdörtgen 66 cm². 66'ya en yakın tam kareler?`],
    steps: [`Ece: en az 81 (9²). Efe: en fazla 64 (8²)`, `Fark: 81 − 64 = <b>17</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 25,
    q: `<p>Dört renkte üçer kart var; aynı renkli kartlarda aynı ifade yazılı.</p>` + tablo([['Mavi', 'Kırmızı', 'Yeşil', 'Turuncu'], [R('0,04'), R('0,36'), R('0,81'), R('1,21')]])
      + `<p>Selin seçtiği kartlardaki sayıları topladığında bir doğal sayı elde ediyor.</p><p class="ask">Selin <u>en fazla</u> kaç kart seçmiştir?</p>`,
    opts: ['8', '9', '10', '11'], ans: 2,
    hints: [`Değerler: 0,2 · 0,6 · 0,9 · 1,1. 12 kartın toplamı kaç?`],
    steps: [`12 kartın toplamı: 3 · (0,2 + 0,6 + 0,9 + 1,1) = 8,4`, `Çıkarılacak kartların toplamı …,4 olmalı. Tek kart olmaz; iki kart: 0,2 + 0,2 = 0,4 ✓`, `Kalan 10 kartın toplamı 8 → <b>10</b> kart`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 26,
    q: `<p>Alanı 150 m<sup>2</sup> olan bir evde odalar ve salon dışındaki bölümlerin toplam alanı 40 m<sup>2</sup> dir. Salonun alanı bir tam kare sayıdır ve odaların toplam alanından küçüktür.</p><p class="ask">Salonun kısa kenarı ${R(7)} m olduğuna göre uzun kenarı <u>en fazla</u> kaç metredir?</p>`,
    opts: [R(7, 7), R(7, 8), R(7, 9), R(7, 10)], ans: 0,
    hints: [`Odalar + salon = 110 → salon < 55.`],
    steps: [`55'ten küçük en büyük tam kare 49`, `Uzun kenar: 49 / ${R(7)} = <b>${R(7, 7)}</b> m`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 27,
    q: `<p>Üç trenin gideceği hatlar ve ardışık iki istasyon arasındaki mesafeler aşağıda verilmiştir.</p><div class="fig">${hat27}</div><p class="ask">Trenlerin gittikleri yolların uzunluklarına göre doğru sıralanışı hangisidir?</p>`,
    opts: ['K > L > M', 'L > K > M', 'M > K > L', 'K > M > L'], ans: 0,
    hints: [`Aralık sayısı × aralık uzunluğu; sonra tek kök hâline getir.`],
    steps: [`K: 10${R(3)} = ${R(300)} · L: 7${R(6)} = ${R(294)} · M: 12${R(2)} = ${R(288)}`, `<b>K > L > M</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 28,
    q: `<p>Dikdörtgen biçimli bir kâğıt, alanları 20'den büyük birer tam kare sayı olan karelere ayrılmıştır. Eş kareler aynı harfle gösterilmiştir.</p><div class="fig">${kareler28}</div><p class="ask">Kâğıdın alanı <u>en az</u> kaç santimetrekaredir?</p>`,
    opts: ['240', '375', '540', '735'], ans: 1,
    hints: [`A'nın kenarı a: B = 2a, C = 3a. Kâğıt 3a × 5a.`],
    steps: [`a² > 20 → a ≥ 5`, `Alan: 3a · 5a = 15a² = 15 · 25 = <b>375</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 29,
    q: `<p>Alanı 600 cm<sup>2</sup> olan kare bir panoya, bir kenarı 3'ün, diğer kenarı 2'nin tam sayı kuvveti olan dikdörtgen bir afiş taşmadan asılacaktır.</p><p class="ask">Afişin alanı <u>en fazla</u> kaç santimetrekaredir?</p>`,
    opts: ['64', '96', '128', '144'], ans: 3,
    hints: [`Panonun kenarı ${R(600)}: 24² = 576, 25² = 625.`],
    steps: [`Kenar ≈ 24,5. 3'ün kuvveti en fazla 9 (27 sığmaz), 2'nin kuvveti en fazla 16`, `Alan: 9 · 16 = <b>144</b>`],
    answer: `Cevap: <b>D</b>`,
    trap: `27 · 16 = 432'yi seçmek; 27 cm'lik kenar panoya sığmaz.`
  },
  {
    no: 30,
    q: `<p>Bir vincin tuttuğu malzemenin yerden yüksekliği ${R(180)} m, vincin koluna uzaklığı ${R(20)} m'dir. Kolun yüksekliği değişmeden malzeme ${R(5)} m <u>aşağı</u> indiriliyor.</p><p class="ask">Son durumda malzemenin yerden yüksekliği, kola uzaklığından kaç metre fazladır?</p>`,
    opts: [R(5, 2), R(5, 3), R(5, 4), R(5, 6)], ans: 0,
    hints: [`${R(180)} = 6${R(5)}, ${R(20)} = 2${R(5)}.`],
    steps: [`Yükseklik: 6${R(5)} − ${R(5)} = 5${R(5)}. Kola uzaklık: 2${R(5)} + ${R(5)} = 3${R(5)}`, `Fark: <b>${R(5, 2)}</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 31,
    q: `<p>Dikdörtgen bir kâğıttan bir kare ve bir dikdörtgen kesiliyor. Karenin alanı 48 cm<sup>2</sup> olup dikdörtgenin alanının 2 katıdır.</p><p class="ask">Dikdörtgenin kısa kenarı kaç santimetredir?</p>`,
    opts: [R(3), R(3, 2), R(3, 3), '6'], ans: 1,
    hints: [`Kare kenarı ${R(48)} = 4${R(3)}; dikdörtgenin uzun kenarı da bu.`],
    steps: [`Dikdörtgen alanı 24, uzun kenarı 4${R(3)}`, `Kısa kenar: 24 / 4${R(3)} = ${F(6, R(3))} = <b>${R(3, 2)}</b>`],
    answer: `Cevap: <b>B</b>`
  }
  ].map(q => ({ ...q, konu: konu[q.no], etiket: `Çıkmış ${q.no} (${yil[q.no]}) benzeri` }));
})();
