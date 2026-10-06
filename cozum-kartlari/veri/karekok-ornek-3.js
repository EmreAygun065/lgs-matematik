// MEB örnek soruları 43–62 (Kareköklü İfadeler)
(function () {
  const { TK, YK, AB, CB, TC, ON, GS } = KK_KONU;
  const ST = 'stroke="var(--fig-stroke)"';
  const rect = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${ST} stroke-width="1.5" ${extra}/>`;
  const txt = (x, y, t, extra = '') => `<text x="${x}" y="${y}" text-anchor="middle" font-size="14" ${extra}>${t}</text>`;

  const levha43 = svg(300, 170, (() => {
    const o = 30, a = 140, r = 40;
    return `<path d="M${o + r} ${o} L${o + a - r} ${o} A${r} ${r} 0 0 0 ${o + a} ${o + r} L${o + a} ${o + a - r} A${r} ${r} 0 0 0 ${o + a - r} ${o + a} L${o + r} ${o + a} A${r} ${r} 0 0 0 ${o} ${o + a - r} L${o} ${o + r} A${r} ${r} 0 0 0 ${o + r} ${o} Z" fill="#bdbdbd" ${ST} stroke-width="1.5"/>`
      + `<rect x="${o}" y="${o}" width="${a}" height="${a}" fill="none" ${ST} stroke-dasharray="4 3"/><text x="${o + a + 8}" y="${o + a / 2}" font-size="13">√147 m</text><text x="${o + 4}" y="${o + 14}" font-size="11">√12</text>`;
  })(), 'Kare levhanın dört köşesinden çeyrek daire dilimleri kesilmiş');

  const terazi44 = svg(360, 170, `
    <rect x="160" y="110" width="40" height="50" fill="#d9534f"/><circle cx="180" cy="105" r="10" fill="#fff" ${ST}/>
    <line x1="80" y1="70" x2="290" y2="110" stroke="#d9534f" stroke-width="8"/>
    <rect x="30" y="58" width="110" height="8" fill="#999"/><rect x="230" y="98" width="110" height="8" fill="#999"/>
    ${rect(60, 30, 40, 28, '#c77dd6')}<text x="80" y="49" text-anchor="middle" font-size="11" style="fill:#1f2328">√128 g</text>
    ${rect(245, 50, 50, 48, 'var(--blue-soft)')}<text x="270" y="78" text-anchor="middle" font-size="11">100 g</text>
    ${rect(300, 80, 34, 18, '#b6e08a')}<text x="317" y="93" text-anchor="middle" font-size="10" style="fill:#1f2328">6√3 g</text>
    <text x="80" y="90" text-anchor="middle" font-size="12">Sol kefe</text><text x="290" y="130" text-anchor="middle" font-size="12">Sağ kefe</text>`, 'Sol kefede √128 g, sağ kefede 100 g ve 6√3 g; sağ kefe aşağıda');

  const tahta45 = svg(460, 210, `
    <rect x="45" y="20" width="370" height="16" fill="#5bc0eb"/><text x="230" y="14" text-anchor="middle" font-size="12">Mavi: 120 dm</text>
    <rect x="20" y="44" width="420" height="16" fill="#9b2335"/><text x="230" y="76" text-anchor="middle" font-size="12">Bordo: 150 dm</text>
    <rect x="60" y="95" width="10" height="100" fill="#5bc0eb" ${ST}/><rect x="150" y="95" width="10" height="100" fill="#5bc0eb" ${ST}/>
    <rect x="70" y="105" width="80" height="6" fill="#9b2335"/><rect x="70" y="140" width="80" height="6" fill="#9b2335"/><rect x="70" y="175" width="80" height="6" fill="#9b2335"/>
    <text x="54" y="150" text-anchor="end" font-size="11">2√15 dm</text><text x="110" y="207" text-anchor="middle" font-size="11">3√5 dm</text>
    <text x="260" y="150" font-size="13">Bir kitaplık: 2 mavi yan parça, 3 bordo raf</text>`, 'Mavi ve bordo tahtalar; bir kitaplıkta 2 mavi yan, 3 bordo raf');

  const taslar46 = svg(330, 200, (() => {
    const c = 14;
    let g = '';
    const kare = (x, y) => rect(x, y, c, c, '#b03030', 'stroke-width="1"');
    for (let i = 0; i < 4; i++) { g += kare(40 + i * c, 20); g += kare(250 - i * c, 20); g += kare(40 + i * c, 166); g += kare(250 - i * c, 166); }
    for (let j = 1; j < 3; j++) { g += kare(40, 20 + j * c); g += kare(250, 20 + j * c); g += kare(40, 166 - j * c); g += kare(250, 166 - j * c); }
    g += `<text x="165" y="32" text-anchor="middle" font-size="14">· · ·</text><text x="165" y="178" text-anchor="middle" font-size="14">· · ·</text>`;
    g += `<text x="47" y="105" text-anchor="middle" font-size="14">⋮</text><text x="257" y="105" text-anchor="middle" font-size="14">⋮</text>`;
    g += `<text x="36" y="16" font-size="13">A</text><text x="266" y="16" font-size="13">B</text><text x="36" y="196" font-size="13">D</text><text x="266" y="196" font-size="13">C</text>`;
    return g;
  })(), 'Havuz çevresine tek sıra dizilmiş kare taşlar; dış köşeler A, B, C, D');

  const raf47 = svg(470, 120, (() => {
    const u = 6.2;   // 12√5 ≈ 26,8 cm → 4√5 px birimi
    const L = 12 * 2.236 * 1.5, S = 4 * 2.236 * 1.5;
    let g = `<rect x="10" y="20" width="450" height="${3 * S + 8}" fill="#666"/>`;
    let x = 14;
    const yatik = () => { let s = ''; for (let k = 0; k < 3; k++) s += rect(x, 24 + k * S, L, S, '#c98c4a', 'stroke-width="1"'); x += L; return s; };
    const dik = () => { const s = rect(x, 24, S, 3 * S, '#c98c4a', 'stroke-width="1"'); x += S; return s; };
    g += yatik() + dik() + yatik() + dik();
    g += `<text x="${x + 40}" y="${24 + 1.6 * S}" font-size="18" style="fill:#fff">· · ·</text>`;
    x = 460 - 4 - L - S;
    g += dik() + yatik();
    g += `<line x1="14" y1="${30 + 3 * S + 10}" x2="${14 + L}" y2="${30 + 3 * S + 10}" ${ST}/><text x="${14 + L / 2}" y="${30 + 3 * S + 24}" text-anchor="middle" font-size="11">12√5 cm</text>`;
    g += `<text x="235" y="14" text-anchor="middle" font-size="12">Raf: 3,2 metre</text>`;
    return g;
  })(), 'Rafta kutular: üçlü yatık grup, tek dik kutu, üçlü yatık grup, … , dik kutu, üçlü yatık grup');

  const levha48 = svg(360, 200, (() => {
    const m = 26.5, s = 22.4;   // √7 ve √5 ölçeği (1 dm ≈ 10 px)
    const x0 = 60, y0 = 40, W = 180, H = 80;
    let g = `<rect x="${x0}" y="${y0}" width="${W}" height="${H}" fill="#999"/>`;
    for (let i = 0; i < 7; i++) g += rect(x0 + i * m, y0 - m, m, m, '#2f5fb3', 'stroke-width="1"');
    for (let j = 0; j < 3; j++) g += rect(x0 - m, y0 + j * m, m, m, '#2f5fb3', 'stroke-width="1"');
    for (let j = 0; j < 4; j++) g += rect(x0 + W, y0 + j * s, s, s, '#e9b84a', 'stroke-width="1"');
    for (let i = 0; i < 8; i++) g += rect(x0 + i * s, y0 + H, s, s, '#e9b84a', 'stroke-width="1"');
    return g + `<text x="${x0 + W / 2}" y="${y0 + H / 2 + 5}" text-anchor="middle" font-size="13" style="fill:#fff">Levha</text>`;
  })(), 'Levhanın üstünde 7 mavi, solunda 3 mavi, sağında 4 sarı, altında 8 sarı karton');

  const karton50 = svg(300, 190, (() => {
    const c = 32, o = 10;
    const kirmizi = new Set(['3,0', '0,1', '2,1', '3,2', '1,3', '0,4', '2,4']);
    let g = '';
    for (let y = 0; y < 5; y++) for (let x = 0; x < 7; x++) {
      if (x >= 5 && y >= 2) continue;
      if (x === 6 && y >= 1) continue;
      g += rect(o + x * c, o + y * c, c, c, kirmizi.has(`${x},${y}`) ? '#e8222e' : '#f2cf9b', 'stroke-width="1"');
    }
    return g + `<path d="M${o + 7 * c} ${o} L${o + 6 * c} ${o + 2 * c} L${o + 5 * c + 10} ${o + 3 * c} L${o + 4 * c} ${o + 5 * c}" fill="none" stroke="#a0703c" stroke-width="2"/>`;
  })(), 'Yırtılmış kartonun kalan kısmı: 5 satır, görünen 7 boyalı kare');

  const ayakkabi52 = svg(460, 70, `<line x1="10" y1="50" x2="450" y2="50" ${ST} stroke-width="2"/>
    ${[0, 1, 2, 3, 4].map(i => `<rect x="${20 + i * 30}" y="35" width="28" height="14" rx="6" fill="#ee6a4a"/>`).join('')}
    ${[0, 1, 2, 3, 4].map(i => `<rect x="${412 - i * 27}" y="35" width="26" height="14" rx="6" fill="#d6338a"/>`).join('')}
    <text x="10" y="66" font-size="13">A</text><text x="446" y="66" font-size="13">B</text><text x="230" y="40" text-anchor="middle" font-size="16">· · ·</text>`, 'A\'dan Bora, B\'den Işıl ayakkabılarını uç uca koyarak ilerliyor');

  const katla53 = svg(360, 150, `
    <polygon points="40,20 300,20 330,120 70,120" fill="var(--yellow-soft)" ${ST}/><polygon points="20,40 280,40 300,120 40,120" fill="var(--yellow-soft)" ${ST} opacity=".9"/>
    <rect x="245" y="90" width="55" height="30" fill="none" ${ST} stroke-dasharray="4 3"/>
    <text x="304" y="108" font-size="12">√8 cm</text><text x="272" y="138" text-anchor="middle" font-size="12">√18 cm</text>
    <text x="150" y="146" text-anchor="middle" font-size="12">Katlama yeri alt kenar</text>`, 'Ortadan katlanmış kare karton; katlama kenarındaki köşeden √18 × √8 dikdörtgen kesiliyor');

  const lambalar55 = svg(260, 150, `<rect x="10" y="10" width="240" height="10" fill="#e6e0c8"/>
    <line x1="90" y1="20" x2="90" y2="70" ${ST}/><rect x="80" y="70" width="20" height="30" fill="#c0392b"/><text x="90" y="115" text-anchor="middle" font-size="13">K</text>
    <line x1="130" y1="20" x2="130" y2="45" ${ST}/><rect x="120" y="45" width="20" height="30" fill="#c0392b"/><text x="130" y="90" text-anchor="middle" font-size="13">L</text>
    <line x1="170" y1="20" x2="170" y2="95" ${ST}/><rect x="160" y="95" width="20" height="30" fill="#c0392b"/><text x="170" y="140" text-anchor="middle" font-size="13">M</text>`, 'Tavana asılı özdeş K, L, M lambaları; L en yüksekte, M en alçakta');

  const kalemtiras58 = svg(460, 80, (() => {
    const u = 20.5, sag = 420;
    let g = `<rect x="${sag - 17.17 * u}" y="18" width="${17.17 * u + 25}" height="44" fill="#f5821f"/>`;
    g += `<rect x="${sag - 20 * u - 4}" y="26" width="${20 * u + 8}" height="30" fill="#f8d7b8" ${ST} stroke-width=".8"/>`;
    for (let i = 0; i <= 20; i++) g += `<line x1="${sag - i * u}" y1="26" x2="${sag - i * u}" y2="34" ${ST}/><text x="${sag - i * u}" y="50" text-anchor="middle" font-size="10">${i}</text>`;
    g += `<rect x="${sag + 4}" y="30" width="${2.83 * u - 4}" height="22" rx="3" fill="#f6e000" ${ST}/>`;
    return g;
  })(), 'Kalem kutusu, kapağı olan 20 cm\'lik cetvel ve kutunun sağ kenarı ile cetvelin 0 ucu arasında kalemtıraş');

  const atlama60 = svg(440, 120, `<rect x="20" y="30" width="250" height="70" fill="#f08068"/><rect x="270" y="20" width="12" height="80" fill="#aaa" ${ST}/><rect x="282" y="30" width="140" height="70" fill="#e9a050"/>
    <line x1="422" y1="20" x2="422" y2="105" ${ST} stroke-width="2"/><text x="276" y="14" text-anchor="middle" font-size="12">Sıçrama tahtası</text><text x="422" y="14" text-anchor="middle" font-size="12">Pist sonu</text>
    <circle cx="345" cy="55" r="4" fill="#222"/><circle cx="362" cy="62" r="4" fill="#222"/><circle cx="353" cy="78" r="4" fill="#222"/>
    <text x="140" y="70" text-anchor="middle" font-size="12">Koşu yolu</text><text x="350" y="45" text-anchor="middle" font-size="12">Kum pist</text>`, 'Uzun atlama pisti; üç sporcunun düştüğü noktalar kum pistte');

  const dolap62 = svg(300, 230, (() => {
    const cx = 150, cy = 100, r = 80;
    let g = `<rect x="80" y="200" width="140" height="20" fill="#bbb"/><line x1="${cx}" y1="${cy}" x2="110" y2="205" stroke="#3a6fd8" stroke-width="8"/><line x1="${cx}" y1="${cy}" x2="190" y2="205" stroke="#3a6fd8" stroke-width="8"/>`;
    g += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#c0392b" stroke-width="3"/>`;
    for (let i = 0; i < 12; i++) {
      const a = i * Math.PI / 6, x = cx + r * Math.sin(a), y = cy - r * Math.cos(a);
      const renk = i === 0 ? '#2e8b57' : i === 2 ? '#e8a020' : i === 5 ? '#8e44ad' : '#ccc';
      g += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="9" fill="${renk}" ${ST}/>`;
    }
    g += `<text x="${cx}" y="10" text-anchor="middle" font-size="12">Ali</text><text x="${cx + r * 0.87 + 14}" y="${cy - r * .5}" font-size="12">Çınar</text><text x="${cx + r * .5 + 14}" y="${cy + r * .87 + 6}" font-size="12">Kuzey</text>`;
    return g + `<line x1="20" y1="220" x2="280" y2="220" ${ST} stroke-width="2"/><text x="30" y="214" font-size="12">Zemin</text>`;
  })(), 'Dönme dolap: Ali en üstte, Çınar sağ üstte, Kuzey sağ altta');

  KK_ORNEK.push(
  {
    no: 43, konu: TC, sayfa: 22,
    q: `<p>Aşağıda bir kenar uzunluğu ${R(147)} m olan kare şeklinde bir levha verilmiştir.</p><div class="fig">${levha43}</div>`
      + `<p>Bu levhanın köşelerini merkez kabul eden ve yarıçap uzunluğu ${R(12)} m olan dört tane çeyrek daire dilimi levhadan kesilerek atılacak ve kalan parça tabela tasarımında kullanılacaktır.</p>`
      + `<p class="ask">Tabela tasarımında kullanılacak bu parçanın çevresinin uzunluğu kaç metredir? (π yerine 3 alınız.)</p>`,
    opts: [R(3, 16), R(3, 20), R(3, 24), R(3, 28)], ans: 2,
    hints: [`Dört çeyrek daire yayı bir tam çemberin çevresi kadardır.`],
    steps: [
      `Kenar ${R(147)} = 7${R(3)}, yarıçap ${R(12)} = 2${R(3)}`,
      `Düz kısımlar: 4 · (7${R(3)} − 2 · 2${R(3)}) = 4 · 3${R(3)} = 12${R(3)}`,
      `Yaylar: 2πr = 2 · 3 · 2${R(3)} = 12${R(3)}`,
      `Çevre: 12${R(3)} + 12${R(3)} = <b>${R(3, 24)}</b> m`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 44, konu: YK, sayfa: 23,
    q: `<p>Kütleleri ${R(128)} g, 100 g ve ${R(3, 6)} g olan kutular, bir teraziye aşağıdaki gibi yerleştirildiğinde terazinin kefelerinin konumu şekildeki gibi olmaktadır.</p><div class="fig">${terazi44}</div>`
      + `<p>Terazinin kefeleri şekildeki konumdayken sol kefesine kütleleri 10 g olan kutulardan belirli sayıda yerleştirildiğinde; sol kefedeki toplam kütle, sağ kefedeki toplam kütleden fazla olmaktadır.</p>`
      + `<p class="ask">Buna göre, terazinin sol kefesine kütlesi 10 gram olan bu kutulardan <u>en az</u> kaç tane yerleştirilmiştir?</p>`,
    opts: ['8', '9', '10', '11'], ans: 2,
    hints: [`${R(128)} ≈ 11,3 ve 6${R(3)} ≈ 10,4.`],
    steps: [`Sol: ${R(128)} = 8${R(2)} ≈ 11,31 g. Sağ: 100 + 6${R(3)} ≈ 110,39 g`, `Fark ≈ 99,08 g → 10n > 99,08 → n ≥ 10`, `En az <b>10</b> kutu`],
    answer: `Cevap: <b>C</b>`,
    trap: `Sol kefedeki ${R(128)} g'ı unutup 110,39 / 10 → 12 kutu demek.`
  },
  {
    no: 45, konu: YK, sayfa: 23,
    q: `<p>Uzunluğu 120 dm olan mavi tahta ile uzunluğu 150 dm olan bordo tahta vardır. Bir marangoz tahtaların kalınlıklarını değiştirmeden mavi tahtadan ${R(15, 2)} dm, bordo tahtadan ise ${R(5, 3)} dm uzunluğunda eş parçalar kesmiştir. Marangoz sadece kestiği bu parçaları kullanarak aşağıdaki eş kitaplıkları yapmıştır.</p><div class="fig">${tahta45}</div>`
      + `<p class="ask">Buna göre, marangozun yapmış olduğu kitaplık sayısı <u>en çok</u> kaçtır?</p>`,
    opts: ['6', '7', '8', '9'], ans: 1,
    hints: [`2${R(15)} ≈ 7,75 ve 3${R(5)} ≈ 6,71. Her tahtadan kaç parça çıkar?`],
    steps: [
      `Mavi: 2${R(15)} = ${R(60)} ≈ 7,75 → 120 / 7,75 ≈ 15,5 → <b>15</b> parça → 15 / 2 → 7 kitaplık`,
      `Bordo: 3${R(5)} = ${R(45)} ≈ 6,71 → 150 / 6,71 ≈ 22,4 → <b>22</b> parça → 22 / 3 → 7 kitaplık`,
      `En çok <b>7</b> kitaplık`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 46, konu: ON, sayfa: 24,
    q: `<p>Bir havuzun etrafına her birinin alanı ${R('0,0625')} m<sup>2</sup> olan kare biçimindeki 200 tane taş tek sıra hâlinde, aralarında boşluk olmadan dizilmiştir.</p><div class="fig">${taslar46}</div>`
      + `<p class="ask">Buna göre, köşeleri A, B, C, D olarak isimlendirilen dikdörtgen biçimindeki bölgenin çevresinin uzunluğu kaç metredir?</p>`,
    opts: ['98', '100', '102', '104'], ans: 2,
    hints: [`${R('0,0625')} = 0,25 → taşın alanı 0,25 m², kenarı 0,5 m.`, `Dış çevrede uzun kenarda m, kısa kenarda n taş varsa: 2m + 2n − 4 = 200.`],
    steps: [
      `Taş alanı ${R('0,0625')} = 0,25 m² → kenar ${R('0,25')} = 0,5 m`,
      `2m + 2n − 4 = 200 → m + n = 102`,
      `ABCD çevresi: 2(m + n) · 0,5 = <b>102</b> m`
    ],
    answer: `Cevap: <b>C</b>`,
    trap: `200 taşın her birini dış çevreye 0,5 m eklenmiş saymak (100 m). Köşe taşları iki kenara birden katkı yapar.`
  },
  {
    no: 47, konu: YK, sayfa: 24,
    q: `<p>Her birinin genişliği ${R(5, 12)} cm olan özdeş kutular, uzunluğu 3,2 metre olan bir rafa aşağıdaki gibi dizilmiştir. Kutular ya üçlü gruplar hâlinde yatık ya da tek tek dik durmaktadır; dik duran bir kutu, yatık üç kutunun yüksekliği kadar uzundur.</p><div class="fig">${raf47}</div>`
      + `<p class="ask">Buna göre, bu rafa dizilen kutu sayısı <u>en çok</u> kaçtır? (1 m = 100 cm)</p>`,
    opts: ['31', '35', '36', '39'], ans: 1,
    hints: [`Dik kutunun boyu 12${R(5)} ise bir kutunun kalınlığı 12${R(5)} / 3 = 4${R(5)}.`, `Dizilim: yatık üçlü, dik, yatık üçlü, …, dik, yatık üçlü.`],
    steps: [
      `Kutu 12${R(5)} × 4${R(5)}. Yatık üçlü 12${R(5)} ≈ 26,83 cm yer kaplar, dik kutu 4${R(5)} ≈ 8,94 cm`,
      `k yatık grup, k − 1 dik kutu: 12${R(5)}k + 4${R(5)}(k − 1) = 16${R(5)}k − 4${R(5)} ≤ 320`,
      `35,78k − 8,94 ≤ 320 → k ≤ 9,19 → k = 9`,
      `Kutu sayısı: 9 · 3 + 8 = <b>35</b>`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 48, konu: YK, sayfa: 25,
    q: `<p>Kare biçimindeki yüzeylerinin alanları 5 dm<sup>2</sup> olan sarı renkli ve 7 dm<sup>2</sup> olan mavi renkli kartonlar vardır. Bu kartonlar dikdörtgen biçimindeki bir levhanın etrafına aşağıdaki gibi dizilmiştir.</p><div class="fig">${levha48}</div>`
      + `<p>Üstteki 7 mavi karton levhanın sol kenarından başlayıp sağ kenarını biraz geçmekte, alttaki 8 sarı karton ise sağ kenara biraz yetişmemektedir. Soldaki 3 mavi karton levhanın kısa kenarına yetişmemekte, sağdaki 4 sarı karton ise kısa kenarı biraz geçmektedir.</p>`
      + `<p class="ask">Bu levhanın eni ve boyu desimetre cinsinden birer tam sayı olduğuna göre çevresi kaç desimetredir?</p>`,
    opts: ['54', '52', '50', '48'], ans: 1,
    hints: [`Sarı kenar ${R(5)}, mavi kenar ${R(7)}. Uzun kenar 8${R(5)} ile 7${R(7)} arasında.`],
    steps: [
      `Uzun kenar: 8${R(5)} = ${R(320)} ≈ 17,9 < x < 7${R(7)} = ${R(343)} ≈ 18,5 → <b>x = 18</b>`,
      `Kısa kenar: 3${R(7)} = ${R(63)} ≈ 7,9 < y < 4${R(5)} = ${R(80)} ≈ 8,9 → <b>y = 8</b>`,
      `Çevre: 2(18 + 8) = <b>52</b> dm`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 49, konu: YK, sayfa: 25,
    q: `<p>Kaan ve Doruk kuralları aşağıda verilen bir sayı oyununu oynuyorlar.</p><ul><li>Oyuna başlayan oyuncu bir rakam söyler.</li><li>Diğer oyuncu arkadaşının söylediği sayının ${R(2)} katının en yakın olduğu doğal sayı değerini bulup söyler.</li><li>Sıra tekrar oyuna başlayan oyuncuya geldiğinde, o da arkadaşının söylediği sayının ${R(2)} katının en yakın olduğu doğal sayı değerini bulup söyler.</li><li>Oyun bu şekilde oyunculardan biri yanlış bir sayı söyleyene kadar devam eder.</li></ul>`
      + `<p>Kaan oyuna 3 rakamını söyleyerek başlamış ve Doruk üçüncü kez sayı söylediğinde oyun bitmiştir.</p><p class="ask">Buna göre, aşağıdakilerden hangisi Doruk'un söylediği sayılardan biri <u>olamaz</u>?</p>`,
    opts: ['4', '8', '15', '16'], ans: 3,
    hints: [`Doğru oyunu yaz: 3 → ? → ? → …`, `Oyun Doruk'un üçüncü sayısında bittiyse o sayı yanlıştır.`],
    steps: [
      `Kaan 3 → Doruk: 3${R(2)} ≈ 4,24 → <b>4</b> → Kaan: 4${R(2)} ≈ 5,66 → 6 → Doruk: 6${R(2)} ≈ 8,49 → <b>8</b>`,
      `Kaan: 8${R(2)} ≈ 11,31 → 11 → Doruk'un doğru cevabı 11${R(2)} ≈ 15,56 → 16 olmalıydı`,
      `Oyun Doruk'un 3. sayısında bittiğine göre Doruk yanlış söyledi → 16 diyemez`
    ],
    answer: `Cevap: <b>D</b>`,
    trap: `16'yı Doruk'un üçüncü sayısı sanmak. 16 doğru cevap olurdu ve oyun bitmezdi.`
  },
  {
    no: 50, konu: CB, sayfa: 26,
    q: `<p>Çevresi ${R(2, 60)} cm olan dikdörtgen biçiminde bir karton 50 eş kareye bölünüp, bu karelerden bazıları kırmızıya boyanmıştır. Aşağıda yanlışlıkla bir kısmı yırtılan bu kartonun kalan bölümü verilmiştir. Kartonda 5 sıra kare vardır.</p><div class="fig">${karton50}</div>`
      + `<p class="ask">Karton üzerinde boyanan tüm karelerin alanları toplamı 160 cm<sup>2</sup> olduğuna göre, kartonun yırtılan kısmında kaç tane boyanmış kare vardır?</p>`,
    opts: ['3', '9', '11', '13'], ans: 3,
    hints: [`5 sıra × 10 sütun = 50 kare. Bir karenin kenarı a ise çevre 2(10a + 5a).`],
    steps: [
      `Çevre 30a = 60${R(2)} → a = 2${R(2)} → bir karenin alanı 8 cm²`,
      `Boyalı kare sayısı: 160 / 8 = 20`,
      `Görünen boyalı kare: 7 → yırtılan kısımda 20 − 7 = <b>13</b>`
    ],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 51, konu: YK, sayfa: 26,
    q: `<p>pH değeri bir çözeltinin asidik veya bazik olma derecesini gösteren bir ölçüttür. pH değerinin 7 olması asitlik ve bazlık açısından nötr olarak tanımlanırken pH değeri küçüldükçe asidik, büyüdükçe bazik özellik gösterir.</p>`
      + tablo([['Madde', 'Bulaşık deterjanı', 'Portakal suyu', 'Çay', 'Süt'], ['pH değeri', R(2, 5), R(2, 2), R(3, 3), R(35)]])
      + `<p class="ask">Buna göre, yukarıda verilen maddelerden kaç tanesi asidik özelliğe sahiptir?</p>`,
    opts: ['1', '2', '3', '4'], ans: 2,
    hints: [`Her değeri ${R(49)} = 7 ile karşılaştır.`],
    steps: [`5${R(2)} = ${R(50)} > 7 → bazik`, `2${R(2)} = ${R(8)}, 3${R(3)} = ${R(27)}, ${R(35)} → hepsi ${R(49)}'dan küçük → asidik`, `Asidik: <b>3</b> madde`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 52, konu: YK, sayfa: 27,
    q: `<p>Bora ve Işıl, “Aldım, verdim, ben seni yendim” tekerlemesiyle oynanan oyun için aralarında belli bir mesafe bırakıp karşılıklı durmuşlardır. Oyunun kuralları:</p>`
      + `<ul><li>Oyuna ilk başlayan oyuncu topuğunu A ve B noktalarından birine koyarak, tekerlemenin her kelimesinde ayağının uç noktasına diğer ayağının topuğunu değdirerek tekerleme bitene kadar ilerlemeye başlar.</li><li>İlk oyuncu tekerlemeyi bitirdiğinde diğer oyuncu aynı şekilde rakibine doğru ilerler.</li><li>Tekerlemenin herhangi bir kelimesinde diğer oyuncunun ayağının uç noktasına ilk değen ya da ayağının üstüne ilk basan oyuncu oyunu kazanır.</li></ul><div class="fig">${ayakkabi52}</div>`
      + `<p>A noktasından oyuna ilk başlayan Bora'nın ayakkabısının uzunluğu ${R(512)} cm, sonrasında B noktasından oyuna başlayan Işıl'ın ayakkabısının uzunluğu ise ${R(450)} santimetredir. Oyunu 11. adımında ayakkabısı Bora'nın ayakkabısına ilk basan Işıl kazanmıştır. A ve B noktaları arasındaki mesafe desimetre cinsinden bir tam sayıdır.</p>`
      + `<p class="ask">Buna göre, A ve B noktaları arasındaki mesafe desimetre cinsinden aşağıdakilerden hangisi olabilir? (1 dm = 10 cm)</p>`,
    opts: ['51', '56', '61', '66'], ans: 1,
    hints: [`Tekerleme 5 kelime: her turda 5 adım. Işıl'ın 11. adımı onun 3. turunun ilk adımıdır.`],
    steps: [
      `Bora ${R(512)} = 16${R(2)}, Işıl ${R(450)} = 15${R(2)}`,
      `Işıl 11. adımı atarken Bora 3 tur (15 adım) atmış: 15 · 16${R(2)} = 240${R(2)}. Işıl 10 adım atmış: 150${R(2)}`,
      `Aralarında hâlâ boşluk vardı: AB > 390${R(2)} ≈ 551,5 cm. 11. adımda bastı: AB < 405${R(2)} ≈ 572,8 cm`,
      `55,15 dm < AB < 57,28 dm → <b>56</b> olabilir`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 53, konu: TC, sayfa: 27,
    q: `<p>Hayat, bir yüzeyinin alanı 200 cm<sup>2</sup> olan kare şeklindeki bir kartonu aşağıda gösterildiği gibi ortadan ikiye katlayıp, kesikli çizgiyle gösterilen yerlerden kesiyor. Kesilen dikdörtgen, katlama kenarına ve kartonun bir kenarına değiyor.</p><div class="fig">${katla53}</div>`
      + `<p class="ask">Hayat kestiği parçayı atıp kalan parçayı açtığında oluşan şeklin çevresi kaç santimetredir?</p>`,
    opts: [R(2, 34), R(2, 44), R(2, 46), R(2, 50)], ans: 2,
    hints: [`Açılınca kesik, kartonun bir kenarının ortasında bir çentik olur: derinliği ${R(18)}, genişliği 2${R(8)}.`],
    steps: [
      `Kare kenarı ${R(200)} = 10${R(2)} → çevre 40${R(2)}`,
      `Açılınca çentik: derinlik ${R(18)} = 3${R(2)}, genişlik 2 · ${R(8)} = 4${R(2)}`,
      `Çentik, kenardan 4${R(2)} çıkarır ama içte 4${R(2)} + 2 · 3${R(2)} ekler → +6${R(2)}`,
      `Çevre: 40${R(2)} + 6${R(2)} = <b>${R(2, 46)}</b> cm`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 54, konu: YK, sayfa: 28,
    q: `<p>Fotoğraf çekerken net olarak görebildiğimiz en yakın nesne ile en uzak nesne arasındaki mesafeye net alan derinliği denir.</p>`
      + `<p>Volkan fotoğraf makinesine ${R(180)} m uzaklıkta bulunan bir ağaca göre fotoğraf makinesinin net alan derinliğini ayarlamıştır. Bu ayarlamada;</p><ul><li>Net alan derinliği, makine ile netleme yapılan ağaç arasındaki mesafenin yarısı kadardır.</li><li>Netleme yapılan ağaç ile fotoğraf makinesi arasındaki net olan bölge, net alan derinliğinin ${F(1, 3)}'ü kadardır.</li></ul>`
      + `<p class="ask">Buna göre, net olan bölgede yer alan bir nesne ile fotoğraf makinesi arasındaki uzaklığın metre cinsinden alabileceği en küçük ve en büyük tam sayı değerleri aşağıdakilerden hangisidir?</p>`,
    opts: ['11 ve 18', '11 ve 17', '12 ve 17', '12 ve 18'], ans: 2,
    hints: [`${R(180)} = 6${R(5)}. Net alan derinliği 3${R(5)}; ağacın önünde ${R(5)}, arkasında 2${R(5)}.`],
    steps: [
      `Ağaç: 6${R(5)}. Net alan derinliği 3${R(5)}: ağaç ile makine arası ${R(5)}, ağacın arkası 2${R(5)}`,
      `Net bölge: 5${R(5)} ile 8${R(5)} arası → ${R(125)} ≈ 11,18 ile ${R(320)} ≈ 17,89`,
      `Tam sayılar: en küçük <b>12</b>, en büyük <b>17</b>`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 55, konu: YK, sayfa: 28,
    q: `<p>Aşağıda aynı tavana sabitlenmiş özdeş K, L, M lambaları verilmiştir.</p><div class="fig">${lambalar55}</div>`
      + `<p>Bu lambalardan yerden yüksekliği en fazla olan L, en az olan M'dir. L ve M lambalarının yerden yükseklikleri sırasıyla 3 m ve 2 m'dir. L lambasının yerden yüksekliği ile K lambasının yerden yüksekliği arasındaki fark, K lambasının yerden yüksekliği ile M lambasının yerden yüksekliği arasındaki farktan büyüktür.</p>`
      + `<p class="ask">Buna göre, K lambasının yerden yüksekliği metre cinsinden aşağıdakilerden hangisi olabilir?</p>`,
    opts: [R(3), R(6), R(7), R(11)], ans: 1,
    hints: [`3 − K > K − 2 → K < 2,5. Ayrıca 2 < K < 3.`],
    steps: [`2 < K < 3 ve 3 − K > K − 2 → K < 2,5`, `2 < K < 2,5 → 4 < K² < 6,25`, `${R(6)} ✓ (${R(3)} < 2, ${R(7)} ≈ 2,65, ${R(11)} ≈ 3,32)`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 56, konu: CB, sayfa: 29,
    q: `<p>Bir matematik öğretmeni birbirine bağlanabilen oyuncakların bağlantı yerlerine birer kareköklü ifade yazmıştır:</p>`
      + tablo([['Oyuncak', 'Bağlantı yerleri'], ['Kırmızı', `${R(80)}, ${R(45)}, ${R(20)}`], ['Mavi', `${R(48)}, ${R(75)}, ${R(12)}`], ['Sarı', `${R(112)}, ${R(63)}`], ['Yeşil üçgen', `${R(32)}, ${R(8)}, ${R(27)}, ${R(125)}, ${R(200)}, ${R(28)}`]])
      + `<p>Bu oyuncakları Sevilay'a veren öğretmen ondan, oyuncakları üstünde yazılı kareköklü ifadelerin çarpımı rasyonel sayı olan bağlantı yerlerinden birbirine bağlayarak bir yapı oluşturmasını istemiştir. Aşağıda dört yapıda, yeşil üçgenin hangi noktasına hangi oyuncağın hangi noktasının bağlandığı verilmiştir.</p>`
      + `<p class="ask">Sevilay oyuncakları öğretmeninin istediği şekilde bağladığına göre, aşağıdakilerden hangisi Sevilay'ın oluşturduğu yapı olabilir?</p>`,
    opts: [`${R(125)}–${R(45)} (kırmızı), ${R(27)}–${R(12)} (mavi), ${R(28)}–${R(63)} (sarı)`, `${R(32)}–${R(20)} (kırmızı), ${R(125)}–${R(75)} (mavi), ${R(28)}–${R(63)} (sarı)`, `${R(32)}–${R(63)} (sarı), ${R(27)}–${R(48)} (mavi), ${R(125)}–${R(45)} (kırmızı)`, `${R(32)}–${R(45)} (kırmızı), ${R(125)}–${R(75)} (mavi), ${R(28)}–${R(112)} (sarı)`], ans: 0, long: true,
    hints: [`${R('a')} · ${R('b')} rasyonel ise a · b tam kare olmalı. Sayıları a${R('b')} biçiminde yazınca kökün içi aynı olmalı.`],
    steps: [
      `Gruplar: ${R(5)}'li → ${R(80)}, ${R(45)}, ${R(20)}, ${R(125)} · ${R(3)}'lü → ${R(48)}, ${R(75)}, ${R(12)}, ${R(27)}`,
      `${R(7)}'li → ${R(112)}, ${R(63)}, ${R(28)} · ${R(2)}'li → ${R(32)}, ${R(8)}, ${R(200)}`,
      `A: ${R(125)}·${R(45)} ✓, ${R(27)}·${R(12)} ✓, ${R(28)}·${R(63)} ✓ → <b>uygun</b>`,
      `B: ${R(32)}·${R(20)} ✗ · C: ${R(32)}·${R(63)} ✗ · D: ${R(32)}·${R(45)} ✗`
    ],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 57, konu: TC, sayfa: 30,
    q: `<p>Duatlon, koşu etabı ile başlayıp bisiklet etabı ile devam eden ve tekrar koşu etabı ile biten bir spordur. Bu yarışı, etapları tamamlama sürelerinin toplamı en az olan sporcu kazanmaktadır. Aşağıda bu yarışı tamamlamayı başaran 4 sporcunun, etapların her birini tamamlama süreleri (dakika) verilmiştir.</p>`
      + tablo([['Sporcu', 'Harun', 'Erdem', 'Mustafa', 'Bülent'], ['1. etap', R(8), R(3), R(5), R(7)], ['2. etap', R(50), R(48), R(45), R(63)], ['3. etap', R(32), R(48), R(45), R(28)]])
      + `<p class="ask">Buna göre, bu yarışı hangi sporcu kazanmıştır?</p>`,
    opts: ['Harun', 'Erdem', 'Mustafa', 'Bülent'], ans: 0,
    hints: [`Her sporcunun sürelerini a${R('b')} biçiminde topla, sonra tek kök hâline getirip karşılaştır.`],
    steps: [
      `Harun: 2${R(2)} + 5${R(2)} + 4${R(2)} = 11${R(2)} = ${R(242)}`,
      `Erdem: ${R(3)} + 4${R(3)} + 4${R(3)} = 9${R(3)} = ${R(243)}`,
      `Mustafa: ${R(5)} + 3${R(5)} + 3${R(5)} = 7${R(5)} = ${R(245)} · Bülent: ${R(7)} + 3${R(7)} + 2${R(7)} = 6${R(7)} = ${R(252)}`,
      `En kısa süre ${R(242)} → <b>Harun</b>`
    ],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 58, konu: YK, sayfa: 30,
    q: `<p>Aşağıdaki görselde, ahşap kalem kutusunun kenarı ile bu kutunun kapağı olan 20 santimetrelik cetvelin arasına yerleştirilmiş bir kalemtıraş görülmektedir. Kapak tamamen kapalıyken cetvelin 20 ucu kutunun sol kenarıyla aynı hizadadır.</p><div class="fig">${kalemtiras58}</div>`
      + `<p class="ask">Buna göre, bu kalemtıraşın uzunluğu santimetre cinsinden aşağıdakilerden hangisi olabilir?</p>`,
    opts: [R(2, 3), R(3, 2), R(2, 2), R(6)], ans: 2,
    hints: [`Kutunun sol kenarı cetvelde kaça denk geliyor? Kapak, kalemtıraşın uzunluğu kadar kaymıştır.`],
    steps: [`Kutunun sol kenarı cetvelde 17 ile 17,5 arasında → kapak 20 − 17,5 = 2,5 ile 20 − 17 = 3 arasında kaymış`, `2,5 < uzunluk < 3 → 6,25 < uzunluk² < 9`, `2${R(2)} = ${R(8)} ≈ 2,83 ✓ (${R(6)} ≈ 2,45, 2${R(3)} ≈ 3,46, 3${R(2)} ≈ 4,24)`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 59, konu: CB, sayfa: 31,
    q: `<p>Kare tekerlekli bisikletler düz bir yolda hareket edemeseler de bu bisikletlere özel olarak üretilen platformlar üzerinde hareket edebilmektedirler. Eş tekerleklerinin bir yüzlerinin alanı 1125 cm<sup>2</sup> olan kare tekerlekli bir bisiklet için bir platform hazırlanmıştır.</p>`
      + `<p>Bu platform, bisikletin tekerleklerinin kenar uzunluğu; üzerinden geçtiği yarım silindirlerin, yarım daire biçimindeki yüzeyinin uzunluğuna eşit olacak şekilde ayarlanmıştır. Bu sayede bisiklet, 30 tane eş yarım silindirden oluşan bu platformun üzerinde AB doğru parçasına paralel olarak ileri geri hareket edebilmektedir.</p>`
      + `<p class="ask">Buna göre, platform üzerindeki A ve B noktaları arasındaki uzaklık kaç santimetredir? (π = 3 alınız.)</p>`,
    opts: [R(5, 75), R(5, 150), R(5, 225), R(5, 300)], ans: 3,
    hints: [`Tekerlek kenarı ${R(1125)} = 15${R(5)} = yarım çemberin uzunluğu πr.`],
    steps: [`Kenar ${R(1125)} = 15${R(5)}`, `πr = 15${R(5)} → 3r = 15${R(5)} → r = 5${R(5)}, çap 10${R(5)}`, `AB = 30 çap = 30 · 10${R(5)} = <b>${R(5, 300)}</b> cm`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 60, konu: YK, sayfa: 31,
    q: `<p>Bir uzun atlama pistinde koşmaya başlayan Hayat, Zeynep ve Sude isimli üç sporcunun tahtadan sıçradıktan sonra kum piste düştüğü yerler aşağıdaki noktalar ile gösterilmiştir.</p><div class="fig">${atlama60}</div>`
      + `<p>Düştüğü nokta sıçrama tahtasına en yakın olan Sude, en uzak olan ise Zeynep'tir. Sude'nin düştüğü noktanın pist sonuna olan uzaklığı 5 metre, Zeynep'in ise 4,5 metredir.</p>`
      + `<p class="ask">Buna göre, Hayat'ın düştüğü noktanın pist sonuna olan uzaklığı metre cinsinden aşağıdakilerden hangisi olabilir?</p>`,
    opts: [R(3, 2), R(2, 3), R(6, 2), R(3, 3)], ans: 2,
    hints: [`Hayat ikisinin arasında: 4,5 < uzaklık < 5.`],
    steps: [`4,5 < d < 5 → 20,25 < d² < 25`, `2${R(6)} = ${R(24)} ✓ (2${R(3)} = ${R(12)}, 3${R(2)} = ${R(18)}, 3${R(3)} = ${R(27)})`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 61, konu: CB, sayfa: 32,
    q: `<p>Dikdörtgenler prizması şeklindeki bir kutunun üstte görünen kapağının uzun kenarı, kısa kenarının uzunluğunun 6 katıdır.</p>`
      + `<p>Kutunun kapağı uzun kenarı boyunca bu kenarın ${F(1, 3)}'i kadar açıldığında (Şekil 1), kutunun iç bölgesini gösteren dikdörtgensel bölgenin alanı 24 cm<sup>2</sup> olmaktadır. Daha sonra açık durumda olan kapak, uzun kenarı boyunca ${R(3, 3)} cm kadar kapatılıyor (Şekil 2).</p>`
      + `<p class="ask">Buna göre, Şekil 2'deki gibi açık durumda bulunan kapağın, <u>dışarıda kalan kısmının</u> kısa kenarı kaç santimetredir?</p>`,
    opts: [R(3), R(3, 2), R(3, 4), R(3, 11)], ans: 0,
    hints: [`Kısa kenar a, uzun kenar 6a. Açılan kısım a × 2a.`],
    steps: [`Açılan bölge: a × (6a / 3) = 2a² = 24 → a² = 12 → a = 2${R(3)}, uzun kenar 12${R(3)}`, `Açık kısım 4${R(3)}; ${R(3, 3)} kapatılınca dışarıda ${R(3)} kalır`, `Dışarıdaki parça 2${R(3)} × ${R(3)} → kısa kenarı <b>${R(3)}</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 62, konu: YK, sayfa: 32,
    q: `<p>Kuzey, Çınar ve Ali birlikte lunaparka gidip bir dönme dolabın farklı kabinlerine binerler.</p><div class="fig">${dolap62}</div>`
      + `<p>Ali'nin bulunduğu kabinin zeminden yüksekliği 12 metre, Kuzey'in bulunduğu kabinin zeminden yüksekliği ise 4 metredir. Ali en üst kabinde, Kuzey ise en alt kabinin bir yanındaki kabindedir; Çınar dolabın merkezinden daha yüksekte, Ali'den alçaktadır.</p>`
      + `<p class="ask">Buna göre, Çınar'ın bulunduğu kabinin zeminden yüksekliği metre cinsinden aşağıdakilerden hangisi olabilir?</p>`,
    opts: [R(5, 3), R(15, 2), R(5, 4), R(3, 7)], ans: 2,
    hints: [`Kuzey en altta değil → merkez, Ali ile Kuzey'in tam ortasından (8 m) yüksektedir.`],
    steps: [`Merkezin yüksekliği 8 m'den fazla. Çınar merkezden yüksek, Ali'den (12 m) alçak → 8 < h < 12`, `64 < h² < 144`, `4${R(5)} = ${R(80)} ≈ 8,94 ✓ (3${R(5)} = ${R(45)}, 2${R(15)} = ${R(60)}, 7${R(3)} = ${R(147)})`],
    answer: `Cevap: <b>C</b>`
  }
  );
})();
