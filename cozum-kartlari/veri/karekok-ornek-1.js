// MEB LGS örnek soruları (Kareköklü İfadeler) — çözüm kartı verisi. Sorular karekok-ornek-1.js … 4.js dosyalarında window.KK_ORNEK dizisine eklenir.
window.KK_ORNEK = window.KK_ORNEK || [];
window.KK_KONU = {
  TK: 'Tam kare sayılar', YK: 'Karekökün yaklaşık değeri', AB: 'a√b biçiminde yazma',
  CB: 'Çarpma ve bölme', TC: 'Toplama ve çıkarma', ON: 'Ondalık sayıların karekökü', GS: 'Gerçek sayılar'
};
// Sorular 1–21
(function () {
  const { TK, YK, AB, CB, TC, ON, GS } = KK_KONU;
  const ST = 'stroke="var(--fig-stroke)"';
  const rect = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${ST} stroke-width="1.5" ${extra}/>`;
  const txt = (x, y, t, extra = '') => `<text x="${x}" y="${y}" text-anchor="middle" font-size="14" ${extra}>${t}</text>`;
  const cetvel = (x0, y0, n, u, h = 34, fill = 'var(--yellow-soft)') => {
    let g = rect(x0, y0, n * u, h, fill);
    for (let i = 0; i <= n; i++) g += `<line x1="${x0 + i * u}" y1="${y0}" x2="${x0 + i * u}" y2="${y0 + 12}" ${ST}/>` + txt(x0 + i * u, y0 + 28, i, 'font-size="12"');
    for (let i = 0; i < n; i++) g += `<line x1="${x0 + (i + .5) * u}" y1="${y0}" x2="${x0 + (i + .5) * u}" y2="${y0 + 7}" ${ST}/>`;
    return g;
  };

  const sekil1 = svg(170, 190, [[0, 0], [1, 0], [0, 1], [1, 1], [1, 2], [2, 2], [2, 3], [2, 4]].map(([x, y]) => rect(30 + x * 34, 10 + y * 34, 34, 34, 'var(--fig-blue)')).join(''), 'Sekiz özdeş kareden oluşan şekil');

  const ip6 = svg(420, 110, cetvel(50, 50, 30, 10.5, 34, '#e9b04a') + `<path d="M${50 + 12 * 10.5} 50 C 160 20, 200 30, 190 8" fill="none" ${ST} stroke-width="1.5"/><circle cx="${50 + 12 * 10.5}" cy="50" r="3.5" fill="var(--fig-stroke)"/>`
    .replace(/>(\d+)<\/text>/g, (m, n) => (+n % 5 === 0 ? m : '></text>')), 'Ucu 12 cm işaretine sabitlenmiş ip ve 30 cm\'lik cetvel');

  const kare7 = svg(200, 170, rect(40, 10, 90, 150, 'var(--yellow-soft)') + rect(130, 10, 60, 150, 'var(--blue-soft)'), 'Sarı ve mavi dikdörtgenlerin uzun kenarları birleşip kare oluşturuyor');

  const sekiller8 = svg(450, 170, (() => {
    const c = 30, o = 15;
    let g = '';
    for (let i = 0; i <= 14; i++) g += `<line x1="${o + i * c}" y1="${o}" x2="${o + i * c}" y2="${o + 5 * c}" stroke="var(--muted)" stroke-dasharray="2 3"/>`;
    for (let j = 0; j <= 5; j++) g += `<line x1="${o}" y1="${o + j * c}" x2="${o + 14 * c}" y2="${o + j * c}" stroke="var(--muted)" stroke-dasharray="2 3"/>`;
    const k = (x, y) => rect(o + x * c, o + y * c, c, c, 'var(--fig-blue)');
    [[1, 1], [1, 2], [1, 3], [2, 3]].forEach(p => g += k(...p));
    [[4, 1], [5, 1], [6, 1], [5, 2], [5, 3]].forEach(p => g += k(...p));
    [[9, 2], [9, 3], [8, 3]].forEach(p => g += k(...p));
    [[11, 1], [12, 1], [11, 2], [12, 2]].forEach(p => g += k(...p));
    return g;
  })(), 'Kareli zeminde dört şekil: 4, 5, 3 ve 4 birim kareden');

  const araba9 = svg(400, 130, (() => {
    const u = 32, x0 = 30;
    let g = cetvel(x0, 80, 10, u, 36, '#f6d6b5');
    g += `<rect x="${x0 + 2.1 * u}" y="35" width="${6.32 * u}" height="34" rx="16" fill="var(--fig-blue)" ${ST}/>`;
    g += `<circle cx="${x0 + 3.2 * u}" cy="70" r="10" fill="#555"/><circle cx="${x0 + 7.3 * u}" cy="70" r="10" fill="#555"/>`;
    g += `<line x1="${x0 + 2.1 * u}" y1="25" x2="${x0 + 2.1 * u}" y2="80" stroke="var(--red)" stroke-dasharray="3 3"/>`;
    return g;
  })(), 'Oyuncak araba: arka ucu cetvelin yaklaşık 2,1 işaretinde, ön ucu 8 ile 8,5 arasında');

  const harfler = 'A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z'.split(' ');
  const alfabe = `<table class="grid small"><tr>${harfler.map(h => `<td class="b">${h}</td>`).join('')}</tr><tr>${harfler.map((_, i) => `<td class="y">${i + 1}</td>`).join('')}</tr></table>`;

  const teller = svg(460, 150, `
    <rect x="10" y="10" width="200" height="130" fill="var(--yellow-soft)"/><rect x="250" y="10" width="200" height="130" fill="var(--yellow-soft)"/>
    <polyline points="135,30 60,30 60,120 135,120" fill="none" stroke="var(--blue)" stroke-width="3"/>
    <polyline points="135,30 160,30 160,120 135,120" fill="none" stroke="var(--green)" stroke-width="3"/>
    <text x="45" y="80" text-anchor="end" font-size="13">Mavi</text><text x="166" y="80" font-size="13">Yeşil</text><text x="110" y="148" text-anchor="middle" font-size="13">Şekil I</text>
    <polyline points="355,50 270,50 270,90 430,90" fill="none" stroke="var(--blue)" stroke-width="3"/>
    <polyline points="355,50 430,50 430,90" fill="none" stroke="var(--green)" stroke-width="3"/>
    <text x="350" y="148" text-anchor="middle" font-size="13">Şekil II</text>
    <circle cx="135" cy="30" r="3" fill="var(--green)"/><circle cx="355" cy="50" r="3" fill="var(--green)"/>`, 'Mavi ve yeşil tel: Şekil I kare, Şekil II dikdörtgen');

  const abc12 = svg(360, 140, rect(80, 10, 200, 38, '#fbd5b5') + rect(55, 48, 250, 38, '#fbd5b5') + rect(30, 86, 300, 38, '#fbd5b5')
    + txt(180, 34, 'C', 'style="fill:#1f2328"') + txt(180, 72, 'B', 'style="fill:#1f2328"') + txt(180, 110, 'A', 'style="fill:#1f2328"'), 'Üst üste A, B, C kâğıtları; B, A ile C arasında uzunlukta');

  const cetvel13 = svg(470, 80, (() => {
    const u = 29, x0 = 15;
    let g = cetvel(x0, 30, 15, u);
    const nokta = (v, t) => `<circle cx="${x0 + v * u}" cy="34" r="3" fill="var(--blue)"/><text x="${x0 + v * u}" y="22" text-anchor="middle" font-size="12" style="fill:var(--blue)">${t}</text>`;
    return g + nokta(2, 'A') + nokta(9.3, 'K') + nokta(9.85, 'L') + nokta(10.35, 'M') + nokta(10.85, 'N');
  })(), 'Cetvel: A 2\'de; K 9 ile 9,5; L 9,5 ile 10; M 10 ile 10,5; N 10,5 ile 11 arasında');

  const dogru14 = svg(460, 80, (() => {
    const x = i => 40 + i * 54;
    let g = `<rect x="${x(0)}" y="15" width="${2.5 * 54}" height="50" fill="#ee3b3b"/><rect x="${x(2.5)}" y="15" width="${3 * 54}" height="50" fill="#b6e3b6"/><rect x="${x(5.5)}" y="15" width="${1.5 * 54}" height="50" fill="#e05cc0"/>`;
    g += `<line x1="15" y1="40" x2="445" y2="40" ${ST} stroke-width="1.5"/>`;
    for (let i = 0; i <= 7; i++) g += `<circle cx="${x(i)}" cy="40" r="4" fill="var(--fig-stroke)"/>`;
    return g + txt(x(1.25), 11, 'Kırmızı', 'font-size="12"') + txt(x(4), 11, 'Yeşil', 'font-size="12"') + txt(x(6.25), 11, 'Pembe', 'font-size="12"');
  })(), '8 işaretli nokta; kırmızı ilk 2,5 aralık, yeşil sonraki 3 aralık, pembe son 1,5 aralık');

  const zarf15 = svg(460, 140, `
    ${rect(20, 30, 120, 70, '#f2c200')}<polyline points="20,30 80,70 140,30" fill="none" ${ST}/>
    <text x="80" y="122" text-anchor="middle" font-size="12">Zarf (kısa kenar 7 cm)</text>
    ${rect(170, 30, 160, 80, 'var(--blue-soft)')}<line x1="250" y1="25" x2="250" y2="115" stroke="var(--red)" stroke-dasharray="4 3"/>
    <text x="250" y="130" text-anchor="middle" font-size="12">Kart (ortadan katlanıyor)</text>
    ${rect(360, 30, 80, 80, 'var(--blue-soft)')}<text x="400" y="130" text-anchor="middle" font-size="12">Katlanmış kart</text>`, 'Zarf, kart ve katlanmış kart');

  const avize = svg(420, 170, (() => {
    let g = `<rect x="20" y="10" width="380" height="14" fill="#f6dcc4" ${ST}/>`;
    [[60, 57, 'Mavi', 'var(--fig-blue)', 22, '40√2'], [150, 87, 'Kırmızı', 'var(--fig-red)', 16, '50√3'], [250, 45, 'Pembe', '#f39ad1', 36, '20√5'], [350, 122, 'Sarı', '#f2c200', 12, '50√6']]
      .forEach(([x, ip, ad, renk, r, et]) => {
        g += `<line x1="${x}" y1="24" x2="${x}" y2="${24 + ip}" stroke="#6b3b1f" stroke-width="3"/><circle cx="${x}" cy="${24 + ip + r}" r="${r}" fill="${renk}"/>`;
        g += `<text x="${x + 6}" y="${24 + ip / 2}" font-size="12">${et} cm</text><text x="${x}" y="${24 + ip + r + 4}" text-anchor="middle" font-size="10" style="fill:#1f2328">${ad}</text>`;
      });
    return g + `<line x1="20" y1="166" x2="400" y2="166" stroke="var(--red)" stroke-dasharray="4 3"/>`;
  })(), 'Dört lamba; iplerin uzunlukları farklı, lambaların zemine uzaklıkları eşit');

  const park17 = svg(330, 200, `
    ${rect(20, 50, 170, 140, '#8fd16a')}${rect(190, 10, 110, 40, '#bfe6b0')}${rect(190, 50, 110, 140, '#6cbf4c')}
    <text x="105" y="125" text-anchor="middle" font-size="15" style="fill:#1f2328">240 m²</text>
    <text x="245" y="36" text-anchor="middle" font-size="14" style="fill:#1f2328">54 m²</text>
    <text x="245" y="125" text-anchor="middle" font-size="15" style="fill:#1f2328">144 m²</text>
    <polyline points="20,190 190,190 190,50 300,50 300,10" fill="none" stroke="var(--red)" stroke-width="4"/>
    <line x1="182" y1="10" x2="182" y2="50" ${ST}/><text x="176" y="34" text-anchor="end" font-size="13">3√3 m</text>`, 'Üç dikdörtgensel bölge ve kırmızı şerit');

  const serit18 = svg(420, 110, `
    ${rect(30, 30, 360, 40, 'var(--yellow-soft)')}
    <line x1="120" y1="30" x2="120" y2="70" ${ST} stroke-dasharray="3 3"/><line x1="246" y1="30" x2="246" y2="70" ${ST} stroke-dasharray="3 3"/>
    <circle cx="120" cy="70" r="3" fill="var(--fig-stroke)"/><circle cx="246" cy="30" r="3" fill="var(--fig-stroke)"/>
    <text x="126" y="64" font-size="12">A</text><text x="250" y="44" font-size="12">B</text>
    <line x1="30" y1="20" x2="246" y2="20" ${ST}/><text x="138" y="15" text-anchor="middle" font-size="12">√1,44 dm</text>
    <line x1="120" y1="82" x2="390" y2="82" ${ST}/><text x="255" y="96" text-anchor="middle" font-size="12">√2,25 dm</text>
    <text x="396" y="55" font-size="12">0,3 dm</text><text x="210" y="108" text-anchor="middle" font-size="12">Toplam uzunluk 2 dm</text>`, 'Uzunluğu 2 dm şerit; A ve B noktalarından kesilecek');

  const ayna19 = svg(350, 150, (() => {
    // Kare aynalar 45° döndürülmüş; h yarım köşegen. Kesilen kare kenarın 1/3'ü → çentik derinliği 2h/3.
    const h = 70, y = 75, P = pts => `<polygon points="${pts.map(p => p.map(v => v.toFixed(1)).join(',')).join(' ')}" fill="#d6d6d6" ${ST} stroke-width="1.5"/>`;
    const a = 10 + h, m = a + h / 3 + h;
    const sol = [[10, y], [a, y - h], [a + 2 * h / 3, y - h / 3], [a + h / 3, y], [a + 2 * h / 3, y + h / 3], [a, y + h]];
    const orta = [[m - h, y], [m, y - h], [m + h, y], [m, y + h]];
    const c = m + h + h / 3;   // sağ aynanın merkezi (çentiğin dibi ortadaki aynanın sağ köşesinde)
    const sag = [[c + h, y], [c, y - h], [c - 2 * h / 3, y - h / 3], [c - h / 3, y], [c - 2 * h / 3, y + h / 3], [c, y + h]];
    return P(sol) + P(orta) + P(sag);
  })(), 'Ortada tam kare ayna; sağ ve soldaki aynaların birer köşesinden kesilen karelerin yerine ortadaki aynanın köşeleri oturuyor');

  const v20 = svg(420, 200, `
    <polygon points="210,20 210,75 75,190 30,190 85,135" fill="#fbe8a6" ${ST} stroke-width="1.5"/>
    <polygon points="210,20 210,75 345,190 390,190 335,135" fill="#fbe8a6" ${ST} stroke-width="1.5"/>
    <line x1="85" y1="135" x2="122" y2="190" ${ST}/><line x1="335" y1="135" x2="298" y2="190" ${ST}/>`, 'İki yamuk ve iki üçgenden oluşan ters V şekli');

  const sekil21 = svg(420, 160, `
    ${rect(20, 15, 360, 120, 'var(--card)')}${rect(20, 15, 120, 120, 'var(--blue-soft)')}${rect(300, 75, 60, 60, '#ee3b3b')}
    ${rect(330, 15, 30, 30, 'var(--green-soft)')}${rect(330, 45, 30, 30, 'var(--green-soft)')}
    <text x="80" y="80" text-anchor="middle" font-size="14">M</text><text x="330" y="110" text-anchor="middle" font-size="14" style="fill:#fff">K</text>
    <text x="345" y="35" text-anchor="middle" font-size="12">Y</text><text x="345" y="65" text-anchor="middle" font-size="12">Y</text>
    <circle cx="140" cy="135" r="3" fill="var(--fig-stroke)"/><circle cx="300" cy="135" r="3" fill="var(--fig-stroke)"/><circle cx="330" cy="75" r="3" fill="var(--fig-stroke)"/>
    <text x="140" y="152" text-anchor="middle" font-size="13">A</text><text x="300" y="152" text-anchor="middle" font-size="13">B</text><text x="322" y="70" font-size="13" text-anchor="end">C</text>`, 'Dikdörtgen içinde mavi M karesi, kırmızı K karesi ve iki yeşil Y karesi');

  KK_ORNEK.push(
  {
    no: 1, konu: TK, sayfa: 1,
    q: `<p>Aşağıdaki şekil, kenarlarının uzunlukları santimetre cinsinden bir doğal sayı olan özdeş kareler kullanılarak oluşturulmuştur.</p><div class="fig">${sekil1}</div>`
      + `<p>Bu şeklin çevresinin uzunluğu santimetre cinsinden bir tam kare doğal sayıdır.</p><p class="ask">Buna göre, özdeş karelerin bir kenarının santimetre cinsinden uzunluğu aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['2', '3', '4', '6'], ans: 2,
    hints: [`Şeklin çevresinde kaç tane kare kenarı var? Say.`],
    steps: [`Şeklin çevresi <b>16</b> kare kenarından oluşur → çevre 16a`, `16 = 4² tam kare; 16a'nın tam kare olması için a da tam kare olmalı`, `a = 2 → 32 · a = 3 → 48 · a = <b>4</b> → 64 = 8² ✓ · a = 6 → 96`],
    answer: `Cevap: <b>C</b>`,
    trap: `Kare sayısını (8) çevre sanmak. Çevre, şeklin dış sınırındaki kenarların sayısıdır.`
  },
  {
    no: 2, konu: YK, sayfa: 1,
    q: `<p class="ask">${R(15)} sayısı hangi ardışık iki doğal sayı arasındadır?</p>`,
    opts: ['1 ile 2', '2 ile 3', '3 ile 4', '4 ile 5'], ans: 2,
    hints: [`15'in hemen altındaki ve üstündeki tam kareleri bul.`],
    steps: [`9 < 15 < 16`, `${R(9)} < ${R(15)} < ${R(16)} → <b>3 < ${R(15)} < 4</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 3, konu: CB, sayfa: 1,
    q: `<p>x, bir basamaklı pozitif tam sayı olmak üzere, ${R(8)} ile ${R('x')} ifadelerinin çarpımı bir doğal sayıdır.</p><p class="ask">Buna göre, x'in alabileceği değerlerin toplamı kaçtır?</p>`,
    opts: ['10', '9', '8', '7'], ans: 0,
    hints: [`${R(8)} · ${R('x')} = ${R('8x')}. 8x hangi x değerleri için tam kare olur?`],
    steps: [`${R(8)} · ${R('x')} = ${R('8x')} → 8x tam kare olmalı (x: 1, …, 9)`, `8 · 2 = 16 = 4² ✓ · 8 · 8 = 64 = 8² ✓ · diğerleri tam kare değil`, `Toplam: 2 + 8 = <b>10</b>`],
    answer: `Cevap: <b>A</b>`,
    trap: `Yalnızca x = 2'yi bulup durmak. 8 · 8 = 64 de tam karedir.`
  },
  {
    no: 4, konu: CB, sayfa: 2,
    q: `<p>■▲ iki basamaklı doğal sayı olmak üzere</p><ul><li>${R('■▲')} ifadesi 7 ile 8 arasındadır.</li><li>${R('■▲')} ifadesinin ${R(448)} ile çarpımı bir doğal sayıdır.</li></ul><p class="ask">Buna göre ■ + ▲'nın değeri kaçtır?</p>`,
    opts: ['9', '10', '11', '12'], ans: 0,
    hints: [`7 < ${R('n')} < 8 → 49 < n < 64.`, `448'i 64 · 7 olarak yaz.`],
    steps: [`49 < ■▲ < 64`, `${R(448)} = ${R(7, 8)} → ${R('■▲')} · 8${R(7)} doğal sayı ise ■▲ = 7 · k² olmalı`, `7 · 9 = <b>63</b> aralıkta ✓ (7 · 4 = 28 küçük, 7 · 16 = 112 büyük)`, `■ + ▲ = 6 + 3 = <b>9</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 5, konu: ON, sayfa: 2,
    q: `<p class="ask">${F(R('1,44') + ' + ' + R('0,16'), R('0,64'))} işleminin sonucu kaçtır?</p>`,
    opts: ['1', '1,2', '2', '2,4'], ans: 2,
    hints: [`Her ondalık sayının karekökünü ayrı ayrı al: ${R('1,44')} = 1,2.`],
    steps: [`${R('1,44')} = 1,2 · ${R('0,16')} = 0,4 · ${R('0,64')} = 0,8`, `${F('1,2 + 0,4', '0,8')} = ${F('1,6', '0,8')} = <b>2</b>`],
    answer: `Cevap: <b>C</b>`,
    trap: `${R('0,16')}'yı 0,04 sanmak. 0,4 · 0,4 = 0,16'dır.`
  },
  {
    no: 6, konu: YK, sayfa: 2,
    q: `<p>Aşağıda santimetre cinsinden eş bölmelere ayrılmış 30 cm'lik bir cetvel verilmiştir. Esnemeyen bir ipin uçlarından biri, bu cetvelin üzerindeki santimetre cinsinden bir doğal sayıya karşılık gelen bir noktaya şekildeki gibi sabitlenmiştir.</p><div class="fig">${ip6}</div>`
      + `<p>İp, cetvelin kenarı ile çakışacak biçimde gergin olarak tutulduğunda ipin diğer ucu 19 ile 20 arasında 20'ye daha yakın bir noktaya veya 4 ile 5 arasında 4'e daha yakın bir noktaya karşılık gelmektedir.</p>`
      + `<p class="ask">Buna göre, bu ipin santimetre cinsinden uzunluğu aşağıdakilerden hangisi olabilir?</p>`,
    opts: [R(3, 5), R(7, 3), R(6, 3), R(2, 5)], ans: 1,
    hints: [`İp hangi doğal sayıya bağlı? Sağa ve sola aynı uzunlukta uzanıyor.`],
    steps: [
      `Sağa: ucu 19,5 ile 20 arasında. Sola: ucu 4 ile 4,5 arasında. İki uç arası 15'ten 16'ya; bağlantı noktası tam ortada → <b>12</b>`,
      `İpin uzunluğu: 20 − 12 = 8'den az, 19,5 − 12 = 7,5'ten çok → 7,5 < ip < 8`,
      `Kareleri: 56,25 < ip² < 64 → 3${R(7)} = ${R(63)} ✓ (5${R(3)} = ${R(75)}, 3${R(6)} = ${R(54)}, 5${R(2)} = ${R(50)})`
    ],
    answer: `Cevap: <b>B</b>`,
    trap: `Uçlardan yalnızca birini kullanmak; iki koşul birlikte bağlantı noktasını (12) belirler.`
  },
  {
    no: 7, konu: TK, sayfa: 3,
    q: `<p>Kenar uzunlukları santimetre cinsinden birer doğal sayı olan dikdörtgen şeklindeki sarı ve mavi renkli kâğıtların uzun kenarları aşağıdaki gibi çakıştırıldığında bir kare elde edilmiştir.</p><div class="fig">${kare7}</div>`
      + `<p>Bu kâğıtlardan birinin bir yüzünün alanı 60 cm<sup>2</sup> dir.</p><p class="ask">Buna göre diğer kâğıdın bir yüzünün santimetrekare cinsinden alanı aşağıdakilerden hangisi <u>olamaz</u>?</p>`,
    opts: ['40', '84', '136', '340'], ans: 2,
    hints: [`Karenin kenarı a ise diğer kâğıdın alanı a² − 60 olur.`, `a, 60'ın 60'tan büyük karesi olan bir böleni olmalı.`],
    steps: [
      `Karenin kenarı a = iki kâğıdın ortak uzun kenarı. a, 60'ı böler ve a² > 60`,
      `a ∈ {10, 12, 15, 20, 30, 60} → diğer alan a² − 60 ∈ {40, 84, 165, 340, 840, 3540}`,
      `136 bu listede yok → 136 + 60 = 196 = 14², ama 14, 60'ı bölmez`
    ],
    answer: `Cevap: <b>C</b>`,
    trap: `Yalnızca “toplam alan tam kare mi?” diye bakmak. 196 tam kare olsa da 60 cm²'lik kâğıdın bir kenarı 14 olamaz.`
  },
  {
    no: 8, konu: CB, sayfa: 3,
    q: `<p>Aşağıda eş kareli zeminde verilen dört şekilden, kare olanın alanı 288 cm<sup>2</sup> dir. Bu dört şekil üst üste gelmeyecek ve aralarında boşluk kalmayacak biçimde birleştirilerek bir kare oluşturuluyor.</p><div class="fig">${sekiller8}</div>`
      + `<p class="ask">Buna göre, oluşturulan bu karenin çevresinin uzunluğu kaç santimetredir?</p>`,
    opts: [R(2, 36), R(2, 48), R(2, 72), R(2, 96)], ans: 3,
    hints: [`Kare şekil 4 birim kareden oluşuyor. Bir birim karenin alanını bul.`, `Dört şekil toplam kaç birim kare?`],
    steps: [
      `Birim kare: 288 / 4 = 72 cm² → kenar ${R(72)} = 6${R(2)} cm`,
      `Birim kare sayısı: 4 + 5 + 3 + 4 = 16 → büyük kare 4 × 4`,
      `Büyük karenin kenarı 4 · 6${R(2)} = 24${R(2)} → çevre <b>${R(2, 96)}</b> cm`
    ],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 9, konu: YK, sayfa: 4,
    q: `<p>Kerem oyuncak arabasının boyunu 10 santimetrelik bir cetvel ile aşağıdaki gibi ölçüyor.</p><div class="fig">${araba9}</div>`
      + `<p class="ask">Buna göre oyuncak arabanın boyu santimetre cinsinden aşağıdakilerden hangisi olabilir?</p>`,
    opts: [R(2, 4), R(10, 2), R(3, 5), R(2, 7)], ans: 1,
    hints: [`Arabanın arka ucu 2'nin biraz sağında, ön ucu 8 ile 8,5 arasında. Boy yaklaşık kaç?`],
    steps: [`Arka uç ≈ 2,1 · ön uç ≈ 8,4 → boy 6 ile 6,5 arasında`, `Kareleri 36 ile 42,25 arasında`, `4${R(2)} = ${R(32)} · 2${R(10)} = <b>${R(40)}</b> ✓ · 5${R(3)} = ${R(75)} · 7${R(2)} = ${R(98)}`],
    answer: `Cevap: <b>B</b>`,
    trap: `Arabanın ön ucunu okuyup (≈ 8,4) boy sanmak. Arka uç 0'da değil, 2'nin hemen sağında.`
  },
  {
    no: 10, konu: YK, sayfa: 4,
    q: `<p>Bir şifreleme yönteminde alfabemizdeki 29 harf bulundukları sıranın karekökü bir tam sayı ise o tam sayı olarak, değil ise karekökünün en yakın olduğu tam sayı değeri olarak kodlanmaktadır.</p>${alfabe}`
      + `<p>Bir kelimedeki harfler sırasıyla yukarıdaki yönteme göre kodlanıp, bulunan kodlar yine aynı sırayla yan yana yazıldığında kelime kodlanmış olur. Örneğin A (1. harf, ${R(1)} = 1) → 1, L (15. harf, ${R(15)} ≈ 4) → 4, İ (12. harf, ${R(12)} ≈ 3) → 3 olduğundan ALİ ismi 143 olarak kodlanır.</p>`
      + `<p class="ask">Bu şifreleme yöntemine göre AHMET isminin kodu nedir?</p>`,
    opts: ['12435', '13425', '13452', '14235'], ans: 1,
    hints: [`Önce harflerin sırasını tablodan bul: H = 10, M = 16, …`],
    steps: [`A = 1 → ${R(1)} = 1 · H = 10 → ${R(10)} ≈ 3,16 → 3`, `M = 16 → ${R(16)} = 4 · E = 6 → ${R(6)} ≈ 2,45 → 2`, `T = 24 → ${R(24)} ≈ 4,90 → 5`, `Kod: <b>13425</b>`],
    answer: `Cevap: <b>B</b>`,
    trap: `Alfabede Ç, Ğ, İ, Ö, Ş, Ü harflerini atlayıp sıraları yanlış saymak (H'yi 8. harf almak gibi).`
  },
  {
    no: 11, konu: TC, sayfa: 5,
    q: `<p>Bir karton üzerinde uçları birleştirilen mavi ve yeşil renkli iki tel; Şekil I'deki gibi yerleştirildiğinde alanı 192 cm<sup>2</sup> olan bir kare, Şekil II'deki gibi yerleştirildiğinde ise bir dikdörtgen elde edilmektedir.</p><div class="fig">${teller}</div>`
      + `<p>Şekil I'de farklı iki telin bulunduğu kenarda mavi telin uzunluğu, yeşil telin uzunluğundan ${R(3, 4)} cm fazla, Şekil II'de farklı iki telin bulunduğu kenarda ise yeşil telin uzunluğu, mavi telin uzunluğundan ${R(3, 2)} cm fazladır.</p>`
      + `<p class="ask">Buna göre Şekil II'deki dikdörtgenin alanı kaç santimetrekaredir?</p>`,
    opts: ['72', '80', '84', '94'], ans: 2,
    hints: [`Karenin kenarı ${R(192)} = 8${R(3)}. Önce mavi ve yeşil tellerin toplam uzunluklarını bul.`],
    steps: [
      `Kare kenarı 8${R(3)}. Üst kenarda mavi + yeşil = 8${R(3)}, mavi − yeşil = 4${R(3)} → mavi 6${R(3)}, yeşil 2${R(3)}`,
      `Mavi tel: 6${R(3)} + 8${R(3)} + 8${R(3)} = 22${R(3)}. Yeşil tel: 2${R(3)} + 8${R(3)} = 10${R(3)}`,
      `Şekil II: en a, boy b. Üst kenarda yeşil g, mavi m: g − m = 2${R(3)}. Yeşil: g + b = 10${R(3)}, mavi: m + b + a = 22${R(3)}, a = g + m`,
      `Çevre 2(a + b) = 32${R(3)} → a + b = 16${R(3)} → m = 6${R(3)}, g = 8${R(3)} → a = 14${R(3)}, b = 2${R(3)}`,
      `Alan: 14${R(3)} · 2${R(3)} = <b>84</b> cm²`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 12, konu: YK, sayfa: 5,
    q: `<p>Aşağıda dikdörtgen şeklindeki A, B ve C kâğıtları verilmiştir. A kâğıdının uzun kenar uzunluğu ${R(2, 9)} cm, C kâğıdının uzun kenar uzunluğu ${R(3, 4)} cm ve B kâğıdının kısa kenar uzunluğu 2 cm'dir.</p><div class="fig">${abc12}</div>`
      + `<p>B kâğıdı, kısa kenarlarına paralel olacak biçimde kesilerek alanı santimetrekare cinsinden doğal sayı olan eş kareler elde edilecektir.</p><p class="ask">Buna göre, elde edilebilecek karelerin sayısı aşağıdakilerden hangisi <u>olamaz</u>?</p>`,
    opts: ['3', '4', '5', '6'], ans: 0,
    hints: [`Kısa kenara paralel kesilince karelerin kenarı 2 cm olur. B'nin uzun kenarı kaç ile kaç arasında?`],
    steps: [`Karelerin kenarı 2 cm → n kare için B'nin uzun kenarı 2n`, `Şekle göre 4${R(3)} < 2n < 9${R(2)} → 6,93 < 2n < 12,73`, `n = 4, 5, 6 olabilir; n = <b>3</b> → 6 < 6,93 olamaz`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 13, konu: YK, sayfa: 6,
    q: `<p>Uzunluğu 15 cm olan bir cetvel üzerinde A, K, L, M ve N noktaları aşağıdaki gibi işaretlenmiştir.</p><div class="fig">${cetvel13}</div>`
      + `<p>Belli bir açıklıktaki bir pergelin sivri ucu, bu cetvel üzerindeki 2 sayısına karşılık gelen A noktasına batırılmıştır. Daha sonra merkezi A noktası ve alanı 225 cm<sup>2</sup> olan bir daire çizilmiştir.</p>`
      + `<p class="ask">Buna göre, pergelin diğer ucunun bu cetvelde karşılık geldiği nokta aşağıdakilerden hangisi olabilir? (π yerine 3 alınız.)</p>`,
    opts: ['K', 'L', 'M', 'N'], ans: 3,
    hints: [`3 · r² = 225 → r² = 75.`],
    steps: [`πr² = 225 → 3r² = 225 → r² = 75 → r = ${R(75)} = 5${R(3)} ≈ 8,66`, `Diğer uç: 2 + 8,66 ≈ <b>10,66</b>`, `Bu değer 10,5 ile 11 arasında → <b>N</b>`],
    answer: `Cevap: <b>D</b>`,
    trap: `Yarıçapı 2'den değil 0'dan ölçmek (8,66 → K ile L arası).`
  },
  {
    no: 14, konu: YK, sayfa: 6,
    q: `<p>Aşağıda verilen 7 eş parçaya ayrılmış sayı doğrusunun işaretlenmiş noktalarının her birine ardışık tam sayılar yazılacaktır. Bu sayı doğrusu aşağıdaki gibi kırmızı, yeşil ve pembe dikdörtgensel bölgelere ayrılmıştır. Kırmızı ve pembe dikdörtgenin birer kenarları işaretlenmiş noktalardan, yeşil dikdörtgenin kenarları ise işaretlenmiş noktaların orta noktasından geçmektedir.</p><div class="fig">${dogru14}</div>`
      + `<p>Bu sayı doğrusuna ardışık tam sayılar ${R(10)} sayısı her durumda kırmızı, ${R(24)} sayısı her durumda yeşil bölgede olacak biçimde farklı şekillerde yazılabilmektedir.</p>`
      + `<p class="ask">Buna göre, aşağıdaki kareköklü ifadelerden hangisi her durumda pembe bölgededir?</p>`,
    opts: [R(45), R(50), R(60), R(65)], ans: 2,
    hints: [`İlk noktaya n yazılırsa: kırmızı [n, n + 2,5], yeşil [n + 2,5, n + 5,5], pembe [n + 5,5, n + 7].`],
    steps: [
      `${R(10)} ≈ 3,16 kırmızıda: n ≤ 3,16 ≤ n + 2,5 → n ∈ {1, 2, 3}`,
      `${R(24)} ≈ 4,90 yeşilde: n + 2,5 ≤ 4,90 ≤ n + 5,5 → n ∈ {0, 1, 2}`,
      `Birlikte n = 1 veya 2 → pembe [6,5; 8] veya [7,5; 9]. Her durumda pembe: 7,5 ile 8 arası`,
      `${R(60)} ≈ 7,75 ✓ (${R(45)} ≈ 6,71, ${R(50)} ≈ 7,07, ${R(65)} ≈ 8,06)`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 15, konu: YK, sayfa: 7,
    q: `<p>Aşağıda dikdörtgen şeklinde bir kart ve kısa kenarının uzunluğu 7 cm olan dikdörtgen şeklinde bir zarf verilmiştir. Bu kart kısa kenarları çakışacak biçimde ortadan katlandıktan sonra herhangi bir kenarı zarfın uzun kenarı ile çakıştırılarak yerleştirildiğinde her zaman 1 santimetrelik kısmı dışarıda kalıyor.</p><div class="fig">${zarf15}</div>`
      + `<p>Bu kart; katlanmış olarak katlama yerinin karşısındaki kenarından 3,5 cm içeriden kenara paralel kesildikten sonra açılarak, aynı zarfa yerleştirilmek istendiğinde zarfın uzun kenarlarından taşmaktadır.</p>`
      + `<p class="ask">Buna göre, bu zarfın uzun kenarının uzunluğu aşağıdakilerden hangisi olabilir?</p>`,
    opts: [R(15, 2), R(2, 6), R(10, 3), R(6, 4)], ans: 1,
    hints: [`Katlanmış kart hangi kenarıyla konsa 1 cm dışarıda kalıyor → katlanmış kart kare ve kenarı 7 + 1 = 8 cm.`],
    steps: [
      `Katlanmış kart 8 × 8 kare; zarfa sığdığına göre zarfın uzun kenarı en az 8 cm`,
      `3,5 cm kesilince katlı parça 4,5 × 8 olur; açılınca 9 × 8 → zarftan taşıyor → uzun kenar 9'dan küçük`,
      `8 ≤ L < 9 → 64 ≤ L² < 81 → 6${R(2)} = <b>${R(72)}</b> ✓ (${R(60)}, ${R(90)}, ${R(96)} olmaz)`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 16, konu: YK, sayfa: 8,
    q: `<p>Aşağıda verilen farklı büyüklükteki lambalardan oluşan bir avizenin lambalarının iplerinin uzunluğu istenilen oranda uzatılıp kısaltılabilmektedir. Bu avize aşağıdaki durumda iken lambaların zemine olan uzaklıkları birbirine eşittir.</p><div class="fig">${avize}</div>`
      + `<p>Bu lambaların iplerinin uzunluğu aşağıda verilen oranlarda artırılarak avizenin görünümü değiştirilecektir.</p>`
      + tablo([['Lamba', 'Uzama oranı'], ['Mavi', '% 5'], ['Kırmızı', '% 4'], ['Pembe', '% 5'], ['Sarı', '% 2']])
      + `<p class="ask">Buna göre, son durumda hangi lamba zemine <u>en yakın</u> olur?</p>`,
    opts: ['Pembe', 'Sarı', 'Mavi', 'Kırmızı'], ans: 3,
    hints: [`Lambalar başta aynı yükseklikte. İpi en çok uzayan lamba zemine en çok yaklaşır.`],
    steps: [
      `Mavi: 40${R(2)} · ${F(5, 100)} = 2${R(2)} = ${R(8)} · Kırmızı: 50${R(3)} · ${F(4, 100)} = 2${R(3)} = ${R(12)}`,
      `Pembe: 20${R(5)} · ${F(5, 100)} = ${R(5)} · Sarı: 50${R(6)} · ${F(2, 100)} = ${R(6)}`,
      `En büyük uzama ${R(12)} → <b>Kırmızı</b>`
    ],
    answer: `Cevap: <b>D</b>`,
    trap: `En uzun ipe (sarı) ya da en büyük orana (% 5) bakmak. Önemli olan uzama miktarıdır.`
  },
  {
    no: 17, konu: TC, sayfa: 9,
    q: `<p>Bir çocuk parkı, şekilde alanları verilen üç dikdörtgensel bölgeye ayrılmıştır. Bu bölgelerin bazı kenarları boyunca şekildeki gibi kırmızı şeritler çekilmiştir.</p><div class="fig">${park17}</div>`
      + `<p class="ask">Buna göre, şerit çekilen kenarların uzunlukları toplamı kaç metredir?</p>`,
    opts: [R(3, 41), R(3, 35), R(3, 30), R(3, 27)], ans: 3,
    hints: [`54 m²'lik bölgenin kısa kenarı 3${R(3)}. Önce onun uzun kenarını bul.`],
    steps: [
      `54 m²: 54 / 3${R(3)} = 6${R(3)} (eni)`,
      `144 m²: eni 6${R(3)} → boyu 144 / 6${R(3)} = 8${R(3)}`,
      `240 m²: boyu 8${R(3)} → eni 240 / 8${R(3)} = 10${R(3)}`,
      `Şerit: 10${R(3)} + 8${R(3)} + 6${R(3)} + 3${R(3)} = <b>${R(3, 27)}</b> m`
    ],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 18, konu: ON, sayfa: 9,
    q: `<p>Uzunluğu 2 dm olan dikdörtgen şeklindeki kâğıt A ve B noktalarından kesilerek aşağıdaki gibi üç dikdörtgene ayrılıyor.</p><div class="fig">${serit18}</div>`
      + `<p class="ask">Buna göre, elde edilen dikdörtgenlerden birinin uzun kenar uzunluğunun desimetre cinsinden değeri aşağıdakilerden hangisi <u>olamaz</u>?</p>`,
    opts: ['0,5', R('0,36'), R('0,49'), '0,8'], ans: 1,
    hints: [`${R('1,44')} = 1,2 ve ${R('2,25')} = 1,5. A ve B'nin sol uca uzaklığını bul.`],
    steps: [`B sol uçtan 1,2 dm. A sağ uçtan 1,5 dm → sol uçtan 2 − 1,5 = 0,5 dm`, `Parçalar: 0,5 · 1,2 − 0,5 = 0,7 · 2 − 1,2 = 0,8 (eni 0,3)`, `${R('0,36')} = <b>0,6</b> hiçbirine eşit değil; ${R('0,49')} = 0,7 ✓`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 19, konu: TC, sayfa: 10,
    q: `<p>Üst yüzünün alanı 360 cm<sup>2</sup> olan kare şeklinde üç özdeş ayna vardır. Bu aynalardan iki tanesinin birer köşesinden eş karesel bölgeler kesilerek atıldıktan sonra bu üç ayna kenarları çakışacak biçimde birleştirilerek dekoratif bir ayna elde edilecektir.</p><div class="fig">${ayna19}</div>`
      + `<p>Kesilen karesel bölgelerden birinin kenar uzunluğu, başlangıçtaki bir aynanın kenar uzunluğunun ${F(1, 3)}'üne eşittir.</p><p class="ask">Buna göre, elde edilen dekoratif aynanın çevresinin uzunluğu kaç santimetredir?</p>`,
    opts: [R(10, 36), R(10, 40), R(10, 56), R(10, 64)], ans: 2,
    hints: [`Bir köşeden kare kesmek çevreyi değiştirmez. Birleşen kenarlar ise çevreden çıkar.`],
    steps: [
      `Ayna kenarı ${R(360)} = 6${R(10)}; kesilen kare kenarı 2${R(10)}`,
      `Üç aynanın çevreleri toplamı: 3 · 4 · 6${R(10)} = 72${R(10)}`,
      `Her birleşmede 2 · 2${R(10)} uzunluk iki aynada da iç kenar olur: 2 · 4${R(10)} = 8${R(10)} çıkar. İki birleşme: 16${R(10)}`,
      `Çevre: 72${R(10)} − 16${R(10)} = <b>${R(10, 56)}</b> cm`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 20, konu: TC, sayfa: 11,
    q: `<p>Kenarlarının uzunlukları ${R(338)} cm ve 10 cm olan dikdörtgen şeklindeki kâğıt uzun kenarına paralel kesilerek iki eş dikdörtgene ayrılıyor. Daha sonra bu dikdörtgenler, bir köşesinden ikizkenar dik üçgen elde edecek biçimde uzunluğu ${R(50)} cm olan doğru parçası boyunca kesiliyor.</p>`
      + `<p>Bu dört parçanın kenarları çakıştırılarak aşağıdaki gibi bir şekil elde edilmiştir.</p><div class="fig">${v20}</div>`
      + `<p class="ask">Buna göre, elde edilen bu şeklin çevresinin uzunluğu kaç santimetredir?</p>`,
    opts: [R(2, 52), R(2, 52) + ' + 10', R(2, 62), R(2, 62) + ' + 10'], ans: 2,
    hints: [`Her şerit 13${R(2)} × 5. Kesilen üçgenin dik kenarları 5, hipotenüsü 5${R(2)}.`],
    steps: [
      `${R(338)} = 13${R(2)}. Şeritler 13${R(2)} × 5. Üçgen: dik kenarlar 5 ve 5, hipotenüs ${R(50)} = 5${R(2)}`,
      `Yamuk: uzun kenar 13${R(2)}, karşı kenar 13${R(2)} − 5. Tepede iki yamuğun 5${R(2)}'lik kesik kenarları birleşiyor; alt uçlarda üçgenler 5'lik kenarlarla yapışıyor`,
      `Bir kol: 13${R(2)} + (13${R(2)} − 5) + 5 + 5${R(2)} = 31${R(2)}`,
      `Çevre: 2 · 31${R(2)} = <b>${R(2, 62)}</b> cm`
    ],
    answer: `Cevap: <b>C</b>`,
    trap: `Birleşen kenarları (5${R(2)} ve 5) da çevreye eklemek.`
  },
  {
    no: 21, konu: YK, sayfa: 11,
    q: `<p>Uzun kenar uzunluğu kısa kenar uzunluğunun 3 katı olan bir dikdörtgensel bölgenin içine aşağıdaki gibi mavi, kırmızı ve yeşil renkli kareler çizilmiştir.</p><div class="fig">${sekil21}</div>`
      + `<p>Yeşil renkli karelerden her birinin alanı 10 cm<sup>2</sup> ve C noktası bulunduğu kenarın orta noktasıdır.</p><p class="ask">Buna göre, [AB]'nın uzunluğunun santimetre cinsinden değeri hangi ardışık iki tam sayı arasındadır?</p>`,
    opts: ['17 ile 18', '18 ile 19', '19 ile 20', '20 ile 21'], ans: 1,
    hints: [`Yeşil kare kenarı ${R(10)}. C orta nokta olduğuna göre kırmızı karenin kenarı kaç?`],
    steps: [
      `Yeşil kenar ${R(10)}; C orta nokta → kırmızı kenar 2${R(10)}`,
      `Kısa kenar: 2${R(10)} + 2${R(10)} = 4${R(10)} → uzun kenar 12${R(10)}; mavi kare kenarı 4${R(10)}`,
      `AB = 12${R(10)} − 4${R(10)} − 2${R(10)} = 6${R(10)} = ${R(360)}`,
      `18² = 324 < 360 < 361 = 19² → <b>18 ile 19</b>`
    ],
    answer: `Cevap: <b>B</b>`
  }
  );
})();
