// MEB örnek sorularına benzer, yeni yazılmış sorular (Kareköklü İfadeler). Her soru aynı numaralı örnek sorunun mantığını izler.
// Sorular karekok-benzer-ornek-1.js … 4.js dosyalarında window.KK_BENZER_ORNEK dizisine eklenir. 1–21:
window.KK_BENZER_ORNEK = window.KK_BENZER_ORNEK || [];
window.KK_KONU = window.KK_KONU || {
  TK: 'Tam kare sayılar', YK: 'Karekökün yaklaşık değeri', AB: 'a√b biçiminde yazma',
  CB: 'Çarpma ve bölme', TC: 'Toplama ve çıkarma', ON: 'Ondalık sayıların karekökü', GS: 'Gerçek sayılar'
};
(function () {
  const { TK, YK, AB, CB, TC, ON, GS } = KK_KONU;
  const ST = 'stroke="var(--fig-stroke)"';
  const rect = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${ST} stroke-width="1.5" ${extra}/>`;
  const txt = (x, y, t, extra = '') => `<text x="${x}" y="${y}" text-anchor="middle" font-size="13" ${extra}>${t}</text>`;
  const cetvel = (x0, y0, n, u) => {
    let g = rect(x0, y0, n * u, 32, 'var(--yellow-soft)');
    for (let i = 0; i <= n; i++) g += `<line x1="${x0 + i * u}" y1="${y0}" x2="${x0 + i * u}" y2="${y0 + 11}" ${ST}/>` + txt(x0 + i * u, y0 + 26, i, 'font-size="11"');
    for (let i = 0; i < n; i++) g += `<line x1="${x0 + (i + .5) * u}" y1="${y0}" x2="${x0 + (i + .5) * u}" y2="${y0 + 6}" ${ST}/>`;
    return g;
  };

  const arti1 = svg(150, 150, [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]].map(([x, y]) => rect(25 + x * 33, 25 + y * 33, 33, 33, 'var(--fig-blue)')).join(''), 'Beş özdeş kareden artı biçimli şekil');

  const kalem9 = svg(400, 110, cetvel(30, 60, 10, 32) + `<polygon points="${30 + 1.5 * 32},40 ${30 + 6.6 * 32},40 ${30 + 7.16 * 32},48 ${30 + 6.6 * 32},56 ${30 + 1.5 * 32},56" fill="#f2c200" ${ST}/>`
    + `<line x1="${30 + 1.5 * 32}" y1="30" x2="${30 + 1.5 * 32}" y2="60" stroke="var(--red)" stroke-dasharray="3 3"/>`, 'Kalem: arka ucu 1,5 cm işaretinde, ucu 7 ile 7,5 arasında');

  const kartlar12 = svg(340, 130, rect(70, 10, 200, 34, '#fbd5b5') + rect(45, 44, 250, 34, '#fbd5b5') + rect(20, 78, 300, 34, '#fbd5b5')
    + txt(170, 32, 'C', 'style="fill:#1f2328"') + txt(170, 66, 'B', 'style="fill:#1f2328"') + txt(170, 100, 'A', 'style="fill:#1f2328"'), 'Üst üste C, B, A kâğıtları');

  const cetvel13 = svg(470, 80, (() => {
    const u = 29, x0 = 15;
    const n = (v, t) => `<circle cx="${x0 + v * u}" cy="34" r="3" fill="var(--blue)"/><text x="${x0 + v * u}" y="22" text-anchor="middle" font-size="12" style="fill:var(--blue)">${t}</text>`;
    return cetvel(x0, 30, 15, u) + n(3, 'A') + n(9.25, 'K') + n(9.75, 'L') + n(10.25, 'M') + n(10.75, 'N');
  })(), 'Cetvel: A 3\'te; K 9–9,5, L 9,5–10, M 10–10,5, N 10,5–11 arasında');

  const park17 = svg(330, 200, `${rect(20, 45, 150, 145, '#8fd16a')}${rect(170, 10, 120, 35, '#bfe6b0')}${rect(170, 45, 120, 145, '#6cbf4c')}
    <text x="95" y="125" text-anchor="middle" font-size="14" style="fill:#1f2328">240 m²</text><text x="230" y="33" text-anchor="middle" font-size="13" style="fill:#1f2328">40 m²</text><text x="230" y="125" text-anchor="middle" font-size="14" style="fill:#1f2328">160 m²</text>
    <polyline points="20,190 170,190 170,45 290,45 290,10" fill="none" stroke="var(--red)" stroke-width="4"/>
    <line x1="162" y1="10" x2="162" y2="45" ${ST}/><text x="156" y="32" text-anchor="end" font-size="12">2√5 m</text>`, 'Üç dikdörtgensel bölge ve kırmızı şerit');

  const v20 = svg(420, 200, `<polygon points="210,20 210,75 75,190 30,190 85,135" fill="#fbe8a6" ${ST}/><polygon points="210,20 210,75 345,190 390,190 335,135" fill="#fbe8a6" ${ST}/>
    <line x1="85" y1="135" x2="122" y2="190" ${ST}/><line x1="335" y1="135" x2="298" y2="190" ${ST}/>`, 'İki yamuk ve iki üçgenden oluşan ters V şekli');

  const teller11 = svg(460, 150, `
    <rect x="10" y="10" width="200" height="130" fill="var(--yellow-soft)"/><rect x="250" y="10" width="200" height="130" fill="var(--yellow-soft)"/>
    <polyline points="125,30 60,30 60,120 150,120" fill="none" stroke="var(--blue)" stroke-width="3"/><polyline points="125,30 150,30 150,120" fill="none" stroke="var(--green)" stroke-width="3"/>
    <text x="45" y="80" text-anchor="end" font-size="12">Mavi</text><text x="156" y="80" font-size="12">Yeşil</text><text x="110" y="148" text-anchor="middle" font-size="12">Şekil I (kare)</text>
    <polyline points="340,55 270,55 270,85 430,85" fill="none" stroke="var(--blue)" stroke-width="3"/><polyline points="340,55 430,55 430,85" fill="none" stroke="var(--green)" stroke-width="3"/>
    <text x="350" y="148" text-anchor="middle" font-size="12">Şekil II (dikdörtgen)</text>`, 'Mavi tel üst kenarın bir kısmı, sol kenar ve alt kenar; yeşil tel üst kenarın kalanı ve sağ kenar');

  const dogru14 = svg(460, 80, (() => {
    const x = i => 40 + i * 54;
    let g = `<rect x="${x(0)}" y="15" width="${2.5 * 54}" height="50" fill="#ee3b3b"/><rect x="${x(2.5)}" y="15" width="${3 * 54}" height="50" fill="#b6e3b6"/><rect x="${x(5.5)}" y="15" width="${1.5 * 54}" height="50" fill="#e05cc0"/>`;
    g += `<line x1="15" y1="40" x2="445" y2="40" ${ST} stroke-width="1.5"/>`;
    for (let i = 0; i <= 7; i++) g += `<circle cx="${x(i)}" cy="40" r="4" fill="var(--fig-stroke)"/>`;
    return g + txt(x(1.25), 11, 'Kırmızı') + txt(x(4), 11, 'Yeşil') + txt(x(6.25), 11, 'Pembe');
  })(), 'Kırmızı ilk 2,5 aralık, yeşil sonraki 3 aralık, pembe son 1,5 aralık');

  const ayna19 = svg(350, 150, (() => {
    const h = 70, y = 75, P = pts => `<polygon points="${pts.map(p => p.map(v => v.toFixed(1)).join(',')).join(' ')}" fill="#d6d6d6" ${ST}/>`;
    const a = 10 + h, m = a + h / 3 + h, c = m + h + h / 3;
    return P([[10, y], [a, y - h], [a + 2 * h / 3, y - h / 3], [a + h / 3, y], [a + 2 * h / 3, y + h / 3], [a, y + h]])
      + P([[m - h, y], [m, y - h], [m + h, y], [m, y + h]])
      + P([[c + h, y], [c, y - h], [c - 2 * h / 3, y - h / 3], [c - h / 3, y], [c - 2 * h / 3, y + h / 3], [c, y + h]]);
  })(), 'Ortadaki aynanın köşeleri yan aynalardaki çentiklere oturuyor');

  const sekil21 = svg(420, 160, `${rect(20, 15, 360, 120, 'var(--card)')}${rect(20, 15, 120, 120, 'var(--blue-soft)')}${rect(300, 75, 60, 60, '#ee3b3b')}${rect(330, 15, 30, 30, 'var(--green-soft)')}${rect(330, 45, 30, 30, 'var(--green-soft)')}
    <text x="80" y="80" text-anchor="middle" font-size="14">M</text><text x="330" y="110" text-anchor="middle" font-size="14" style="fill:#fff">K</text><text x="345" y="35" text-anchor="middle" font-size="11">Y</text><text x="345" y="65" text-anchor="middle" font-size="11">Y</text>
    <circle cx="140" cy="135" r="3" fill="var(--fig-stroke)"/><circle cx="300" cy="135" r="3" fill="var(--fig-stroke)"/><circle cx="330" cy="75" r="3" fill="var(--fig-stroke)"/>
    <text x="140" y="152" text-anchor="middle" font-size="13">A</text><text x="300" y="152" text-anchor="middle" font-size="13">B</text><text x="322" y="70" font-size="13" text-anchor="end">C</text>`, 'Dikdörtgen içinde M, K ve iki Y karesi');

  KK_BENZER_ORNEK.push(  {
    no: 1, konu: TK,
    q: `<p>Aşağıdaki şekil, kenarları santimetre cinsinden doğal sayı olan 5 özdeş kareden oluşmuştur. Şeklin çevresi santimetre cinsinden bir tam kare doğal sayıdır.</p><div class="fig">${arti1}</div>`
      + `<p class="ask">Karelerin bir kenarı kaç santimetre olabilir?</p>`,
    opts: ['2', '4', '5', '12'], ans: 3,
    hints: [`Artı şeklinin çevresinde kaç kare kenarı var?`],
    steps: [`Çevre 12 kare kenarı → 12a`, `12a tam kare: a = 3 → 36, a = 12 → 144 ✓`, `Seçeneklerde <b>12</b> var (2 → 24, 4 → 48, 5 → 60 tam kare değil)`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 2, konu: YK,
    q: `<p class="ask">${R(40)} sayısı hangi ardışık iki doğal sayı arasındadır?</p>`,
    opts: ['4 ile 5', '5 ile 6', '6 ile 7', '7 ile 8'], ans: 2,
    hints: [`40'ın altındaki ve üstündeki tam kareler?`],
    steps: [`36 < 40 < 49 → <b>6 < ${R(40)} < 7</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 3, konu: CB,
    q: `<p>x, 20'den küçük bir pozitif tam sayı olmak üzere ${R(27)} ile ${R('x')}'in çarpımı bir doğal sayıdır.</p><p class="ask">x'in alabileceği değerlerin toplamı kaçtır?</p>`,
    opts: ['6', '9', '12', '15'], ans: 3,
    hints: [`${R('27x')} doğal sayı → 27x tam kare. 27 = 9 · 3.`],
    steps: [`27x = 9 · 3x → 3x tam kare olmalı → x = 3k²`, `x < 20: x = 3 ve x = 12`, `Toplam: <b>15</b>`],
    answer: `Cevap: <b>D</b>`,
    trap: `Yalnızca x = 3'ü bulmak; 3 · 4 = 12 de olur.`
  },
  {
    no: 4, konu: CB,
    q: `<p>■▲ iki basamaklı doğal sayı olmak üzere ${R('■▲')} ifadesi 8 ile 9 arasındadır ve ${R(180)} ile çarpımı bir doğal sayıdır.</p><p class="ask">■ + ▲ kaçtır?</p>`,
    opts: ['8', '9', '10', '11'], ans: 0,
    hints: [`64 < ■▲ < 81. ${R(180)} = 6${R(5)}.`],
    steps: [`${R('■▲')} · 6${R(5)} doğal sayı → ■▲ = 5k²`, `5 · 16 = 80 aralıkta ✓`, `■ + ▲ = 8 + 0 = <b>8</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 5, konu: ON,
    q: `<p class="ask">${F(R('2,25') + ' − ' + R('0,25'), R('0,04'))} işleminin sonucu kaçtır?</p>`,
    opts: ['5', '2', '1', '0,5'], ans: 0,
    hints: [`${R('2,25')} = 1,5.`],
    steps: [`${R('2,25')} = 1,5 · ${R('0,25')} = 0,5 · ${R('0,04')} = 0,2`, `${F('1,5 − 0,5', '0,2')} = ${F(1, '0,2')} = <b>5</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 6, konu: YK,
    q: `<p>20 cm'lik bir cetvelin bir doğal sayı işaretine bir ipin ucu sabitlenmiştir. İp cetvel boyunca gergin tutulunca diğer ucu 15 ile 16 arasında 16'ya daha yakın bir noktaya veya 2 ile 3 arasında 2'ye daha yakın bir noktaya gelmektedir.</p><p class="ask">İpin uzunluğu santimetre cinsinden hangisi olabilir?</p>`,
    opts: [R(10, 2), R(13, 2), R(2, 5), R(5, 3)], ans: 3,
    hints: [`İki uç arasının ortası, sabitlenen nokta.`],
    steps: [`Uçlar: 15,5 ile 16 arası ve 2 ile 2,5 arası → orta nokta 9`, `İp: 6,5 ile 7 arası → 42,25 < ip² < 49`, `3${R(5)} = <b>${R(45)}</b> ✓ (${R(40)}, ${R(52)}, ${R(50)} olmaz)`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 7, konu: TK,
    q: `<p>Kenarları doğal sayı olan sarı ve mavi iki dikdörtgen kâğıdın uzun kenarları çakıştırılınca bir kare oluşuyor. Kâğıtlardan birinin alanı 48 cm<sup>2</sup> dir.</p><p class="ask">Diğer kâğıdın alanı hangisi <u>olamaz</u>?</p>`,
    opts: ['16', '96', '148', '208'], ans: 2,
    hints: [`Karenin kenarı s, 48'i böler ve s² > 48. Diğer alan s² − 48.`],
    steps: [`s ∈ {8, 12, 16, 24, 48} → diğer alan 16, 96, 208, 528, 2256`, `148 + 48 = 196 = 14², ama 14, 48'i bölmez → <b>148 olamaz</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 8, konu: CB,
    q: `<p>Eş kareli zeminde verilen 4, 5, 3 ve 4 birim karelik dört şekilden kare olanın (2 × 2) alanı 72 cm<sup>2</sup> dir. Dört şekil boşluksuz ve üst üste gelmeden birleştirilip bir kare oluşturuluyor.</p><p class="ask">Bu karenin çevresi kaç santimetredir?</p>`,
    opts: [R(2, 48), R(2, 36), R(2, 24), R(2, 96)], ans: 0,
    hints: [`Birim kare: 72 / 4 = 18 cm².`],
    steps: [`Birim kare kenarı ${R(18)} = 3${R(2)}`, `16 birim kare → 4 × 4 → kenar 12${R(2)}`, `Çevre: <b>${R(2, 48)}</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 9, konu: YK,
    q: `<p>Bir kalemin boyu cetvel ile aşağıdaki gibi ölçülüyor.</p><div class="fig">${kalem9}</div><p class="ask">Kalemin boyu santimetre cinsinden hangisi olabilir?</p>`,
    opts: [R(6, 2), R(2, 4), R(5, 3), R(3, 4)], ans: 1,
    hints: [`Arka uç 1,5'te, uç 7 ile 7,5 arasında → boy 5,5 ile 6 arası.`],
    steps: [`30,25 < boy² < 36`, `2${R(6)} = ${R(24)} ✗ · 4${R(2)} = <b>${R(32)}</b> ✓ · 3${R(5)} = ${R(45)} ✗ · 4${R(3)} = ${R(48)} ✗`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 10, konu: YK,
    q: `<p>Bir şifrelemede alfabedeki 29 harf, sırasının karekökü tam sayıysa o sayı, değilse karekökünün en yakın olduğu tam sayı ile kodlanıyor. (A = 1, B = 2, C = 3, Ç = 4, D = 5, E = 6, F = 7, G = 8, Ğ = 9, H = 10, I = 11, İ = 12, J = 13, K = 14, L = 15, …)</p><p class="ask">ELİF isminin kodu nedir?</p>`,
    opts: ['2343', '3433', '2433', '2434'], ans: 2,
    hints: [`E = 6, L = 15, İ = 12, F = 7.`],
    steps: [`${R(6)} ≈ 2,45 → 2 · ${R(15)} ≈ 3,87 → 4`, `${R(12)} ≈ 3,46 → 3 · ${R(7)} ≈ 2,65 → 3`, `Kod: <b>2433</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 11, konu: TC,
    q: `<p>Uçları birleştirilmiş mavi ve yeşil iki tel, Şekil I'de alanı 108 cm<sup>2</sup> olan bir kare, Şekil II'de bir dikdörtgen oluşturuyor.</p><div class="fig">${teller11}</div><p>Şekil I'de iki telin bulunduğu kenarda mavi tel yeşilden ${R(3, 2)} cm uzun; Şekil II'de iki telin bulunduğu kenarda yeşil tel maviden ${R(3, 2)} cm uzundur.</p><p class="ask">Şekil II'deki dikdörtgenin alanı kaç santimetrekaredir?</p>`,
    opts: ['60', '72', '84', '96'], ans: 0,
    hints: [`Kare kenarı ${R(108)} = 6${R(3)}. Önce tellerin boylarını bul.`],
    steps: [
      `Üst kenar: mavi + yeşil = 6${R(3)}, mavi − yeşil = 2${R(3)} → mavi 4${R(3)}, yeşil 2${R(3)}`,
      `Mavi tel: 4${R(3)} + 6${R(3)} + 6${R(3)} = 16${R(3)} · yeşil tel: 2${R(3)} + 6${R(3)} = 8${R(3)}`,
      `Şekil II: a + b = 12${R(3)}; mavi: m + b + a = 16${R(3)} → m = 4${R(3)}; g = m + 2${R(3)} = 6${R(3)} → a = 10${R(3)}, b = 2${R(3)}`,
      `Alan: 10${R(3)} · 2${R(3)} = <b>60</b>`
    ],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 12, konu: YK,
    q: `<p>A kâğıdının uzun kenarı ${R(2, 8)} cm, C kâğıdının uzun kenarı ${R(3, 3)} cm, B kâğıdının kısa kenarı 3 cm'dir. B'nin uzun kenarı, C'ninkinden uzun A'nınkinden kısadır.</p><div class="fig">${kartlar12}</div>`
      + `<p>B, kısa kenarına paralel kesilerek alanı doğal sayı olan eş karelere ayrılacaktır.</p><p class="ask">Elde edilebilecek kare sayısı hangisi olabilir?</p>`,
    opts: ['1', '3', '4', '5'], ans: 1,
    hints: [`Karelerin kenarı 3. B'nin uzun kenarı 3n.`],
    steps: [`3${R(3)} ≈ 5,20 < 3n < 8${R(2)} ≈ 11,31 → n = 2 veya 3`, `Seçeneklerde <b>3</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 13, konu: YK,
    q: `<div class="fig">${cetvel13}</div><p>Pergelin sivri ucu 3'teki A noktasına batırılıp alanı 150 cm<sup>2</sup> olan bir daire çiziliyor.</p><p class="ask">Pergelin diğer ucu hangi noktaya gelebilir? (π = 3)</p>`,
    opts: ['K', 'L', 'M', 'N'], ans: 2,
    hints: [`3r² = 150 → r² = 50.`],
    steps: [`r = ${R(50)} = 5${R(2)} ≈ 7,07`, `Diğer uç ≈ 3 + 7,07 = 10,07 → 10 ile 10,5 arası → <b>M</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 14, konu: YK,
    q: `<p>7 eş parçaya ayrılmış sayı doğrusunun 8 noktasına ardışık tam sayılar yazılacaktır. İlk 2,5 aralık kırmızı, sonraki 3 aralık yeşil, son 1,5 aralık pembedir.</p><div class="fig">${dogru14}</div><p>${R(5)} her durumda kırmızı, ${R(17)} her durumda yeşil bölgededir.</p><p class="ask">Hangisi her durumda pembe bölgededir?</p>`,
    opts: [R(45), R(52), R(56), R(60)], ans: 0,
    hints: [`İlk sayı n: kırmızı [n, n + 2,5], yeşil [n + 2,5; n + 5,5], pembe [n + 5,5; n + 7].`],
    steps: [`${R(5)} ≈ 2,24 → n ∈ {0, 1, 2}. ${R(17)} ≈ 4,12 → n ∈ {−1, 0, 1}. Ortak: n = 0 veya 1`, `Pembe [5,5; 7] veya [6,5; 8] → her durumda 6,5 ile 7 arası`, `<b>${R(45)}</b> ≈ 6,71 ✓`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 15, konu: YK,
    q: `<p>Kısa kenarı 9 cm olan bir zarfa, ortadan katlanmış bir kart hangi kenarıyla konursa konsun 1 cm'si dışarıda kalıyor. Katlı kart, açık kenarından 4 cm içeriden kesilip açılınca zarfın uzun kenarlarından taşıyor.</p><p class="ask">Zarfın uzun kenarı hangisi olabilir?</p>`,
    opts: [R(10, 3), R(30, 2), R(10, 4), R(6, 5)], ans: 1,
    hints: [`Katlı kart 10 × 10 kare. Kesip açınca genişlik 2 · 6.`],
    steps: [`Katlı kart sığıyor → uzun kenar ≥ 10. Açılan kart 12 cm → taşıyor → uzun kenar < 12`, `100 ≤ L² < 144 → 2${R(30)} = <b>${R(120)}</b> ✓`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 16, konu: YK,
    q: `<p>Zemine uzaklıkları eşit dört lambanın ip uzunlukları ve uzama oranları:</p>`
      + tablo([['Lamba', 'İp', 'Uzama'], ['Mavi', R(2, 30) + ' cm', '% 10'], ['Kırmızı', R(3, 20) + ' cm', '% 5'], ['Pembe', R(5, 40) + ' cm', '% 2'], ['Sarı', R(6, 25) + ' cm', '% 4']])
      + `<p class="ask">Son durumda hangi lamba zemine en yakın olur?</p>`,
    opts: ['Mavi', 'Kırmızı', 'Pembe', 'Sarı'], ans: 0,
    hints: [`Uzama miktarlarını karşılaştır.`],
    steps: [`Mavi: 3${R(2)} = ${R(18)} · Kırmızı: ${R(3)} · Pembe: 0,8${R(5)} = ${R('3,2')} · Sarı: ${R(6)}`, `En çok uzayan <b>Mavi</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 17, konu: TC,
    q: `<p>Bir park, alanları verilen üç dikdörtgensel bölgeye ayrılmış ve bazı kenarlarına kırmızı şerit çekilmiştir.</p><div class="fig">${park17}</div><p class="ask">Şeritlerin toplam uzunluğu kaç metredir?</p>`,
    opts: [R(5, 20), R(5, 22), R(5, 24), R(5, 26)], ans: 0,
    hints: [`40 m²'lik bölgenin kısa kenarı 2${R(5)}.`],
    steps: [`40 / 2${R(5)} = 4${R(5)} · 160 / 4${R(5)} = 8${R(5)} · 240 / 8${R(5)} = 6${R(5)}`, `Şerit: 6${R(5)} + 8${R(5)} + 4${R(5)} + 2${R(5)} = <b>${R(5, 20)}</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 18, konu: ON,
    q: `<p>Uzunluğu 3 dm olan bir şerit A ve B'den kesilerek üç parçaya ayrılıyor. B sol uca ${R('2,89')} dm, A sağ uca ${R('4,84')} dm uzaktadır.</p><p class="ask">Parçalardan birinin uzunluğu hangisi <u>olamaz</u>?</p>`,
    opts: [R('0,64'), '0,9', R('1,69'), '1,5'], ans: 3,
    hints: [`${R('2,89')} = 1,7 · ${R('4,84')} = 2,2.`],
    steps: [`A sol uçtan 3 − 2,2 = 0,8; B 1,7'de`, `Parçalar: 0,8 · 0,9 · 1,3`, `<b>1,5</b> yok`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 19, konu: TC,
    q: `<p>Alanı 270 cm<sup>2</sup> olan üç özdeş kare aynadan ikisinin birer köşesinden, kenarı aynanın kenarının ${F(1, 3)}'i olan kareler kesiliyor ve aynalar aşağıdaki gibi birleştiriliyor.</p><div class="fig">${ayna19}</div><p class="ask">Dekoratif aynanın çevresi kaç santimetredir?</p>`,
    opts: [R(30, 24), R(30, 28), R(30, 32), R(30, 36)], ans: 1,
    hints: [`Kenar ${R(270)} = 3${R(30)}, kesilen kare ${R(30)}.`],
    steps: [`Üç aynanın çevresi: 3 · 4 · 3${R(30)} = 36${R(30)}`, `Her birleşmede 2 · 2${R(30)} = 4${R(30)} çevreden çıkar; iki birleşme 8${R(30)}`, `Çevre: <b>${R(30, 28)}</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 20, konu: TC,
    q: `<p>Kenarları ${R(450)} cm ve 8 cm olan kâğıt uzun kenarına paralel iki eş şeride kesiliyor; her şeridin bir köşesinden ${R(32)} cm hipotenüslü ikizkenar dik üçgen kesiliyor. Dört parçayla aşağıdaki şekil yapılıyor.</p><div class="fig">${v20}</div><p class="ask">Şeklin çevresi kaç santimetredir?</p>`,
    opts: [R(2, 56), R(2, 60), R(2, 64), R(2, 68)], ans: 3,
    hints: [`Şerit 15${R(2)} × 4; üçgenin dik kenarları 4.`],
    steps: [`Bir kol: 15${R(2)} + (15${R(2)} − 4) + 4 + 4${R(2)} = 34${R(2)}`, `Çevre: <b>${R(2, 68)}</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 21, konu: YK,
    q: `<p>Uzun kenarı kısa kenarının 3 katı olan dikdörtgenin içine mavi M, kırmızı K ve iki yeşil Y karesi çizilmiştir.</p><div class="fig">${sekil21}</div><p> Yeşil karelerin alanı 6 cm<sup>2</sup> ve C, kırmızı karenin üst kenarının orta noktasıdır.</p><p class="ask">|AB| hangi ardışık iki tam sayı arasındadır?</p>`,
    opts: ['13 ile 14', '14 ile 15', '15 ile 16', '16 ile 17'], ans: 1,
    hints: [`Yeşil kenar ${R(6)}, kırmızı kenar 2${R(6)}.`],
    steps: [`Kısa kenar 4${R(6)}, uzun kenar 12${R(6)}, mavi kenar 4${R(6)}`, `AB = 12${R(6)} − 4${R(6)} − 2${R(6)} = 6${R(6)} = ${R(216)}`, `14² = 196 < 216 < 225 → <b>14 ile 15</b>`],
    answer: `Cevap: <b>B</b>`
  }
  );
})();
