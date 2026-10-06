// MEB örnek sorularına benzer yeni sorular 22–42 (Kareköklü İfadeler)
(function () {
  const { TK, YK, AB, CB, TC, ON, GS } = KK_KONU;
  const ST = 'stroke="var(--fig-stroke)"';
  const rect = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${ST} stroke-width="1.5" ${extra}/>`;

  const kareli25 = svg(400, 110, (() => {
    const c = 23, o = 10;
    let g = '';
    for (let i = 0; i <= 16; i++) g += `<line x1="${o + i * c}" y1="${o}" x2="${o + i * c}" y2="${o + 4 * c}" stroke="var(--muted)" stroke-dasharray="2 2"/>`;
    for (let j = 0; j <= 4; j++) g += `<line x1="${o}" y1="${o + j * c}" x2="${o + 16 * c}" y2="${o + j * c}" stroke="var(--muted)" stroke-dasharray="2 2"/>`;
    g += `<line x1="${o + 2 * c}" y1="${o + 2 * c}" x2="${o + 15 * c}" y2="${o + 2 * c}" stroke="var(--blue)" stroke-width="2.5"/>`;
    [[2, 'A'], [4, 'B'], [9, 'C'], [15, 'D']].forEach(([k, t]) => g += `<circle cx="${o + k * c}" cy="${o + 2 * c}" r="3.5" fill="var(--fig-stroke)"/><text x="${o + k * c + 4}" y="${o + 2 * c + 16}" font-size="13">${t}</text>`);
    return g;
  })(), '16 × 4 kareli kâğıt; A 2., B 4., C 9., D 15. dikey çizgide');

  const firildak28 = svg(220, 220, `${rect(10, 10, 200, 200, 'var(--yellow-soft)')}${rect(90, 10, 20, 100, 'var(--fig-blue)')}${rect(110, 90, 100, 20, 'var(--fig-blue)')}${rect(10, 110, 100, 20, 'var(--fig-blue)')}${rect(110, 110, 20, 100, 'var(--fig-blue)')}`, 'Kare kâğıtta fırıldak biçiminde dört eş mavi dikdörtgen');

  const cerceve29 = svg(360, 210, (() => {
    const L = 160, w = 26.7, o = 15;
    let g = rect(o, o, L, w, 'var(--green-soft)') + rect(o + L, o, L, w, 'var(--green-soft)') + rect(o, o + w + L, L, w, 'var(--green-soft)') + rect(o + L, o + w + L, L, w, 'var(--green-soft)');
    for (let i = 0; i < 12; i++) g += rect(o + i * w, o + w, w, L, 'var(--green-soft)', 'stroke-width="1"');
    return g;
  })(), 'Üstte ve altta ikişer yatay levha, aralarında 12 dikey levha');

  const logo32 = svg(420, 220, `
    ${rect(80, 10, 260, 70, '#fbe3c8')}<line x1="80" y1="80" x2="340" y2="10" ${ST} stroke-dasharray="5 4"/>
    <polygon points="130,10 160,10 145,36" fill="var(--fig-blue)" ${ST}/><polygon points="260,80 290,80 275,54" fill="var(--fig-blue)" ${ST}/>
    <polygon points="60,170 220,120 220,170" fill="#fbe3c8" ${ST}/><polygon points="140,170 300,170 140,215" fill="#fbe3c8" ${ST}/>
    <polygon points="165,170 195,170 180,144" fill="var(--fig-blue)" ${ST}/><polygon points="165,170 195,170 180,196" fill="var(--fig-blue)" ${ST}/>`,
    'Dikdörtgen kâğıt köşegenden kesilip iki parça, eşkenar üçgenlerin tabanları çakışacak biçimde birleştiriliyor');

  KK_BENZER_ORNEK.push(
  {
    no: 22, konu: TC,
    q: `<p>Başlığı yukarı-aşağı çevrilebilen, ayağı uzatılıp kısaltılabilen bir lamba, bir yüzünün alanı 4000 cm<sup>2</sup> olan küp biçimindeki masaya konunca aşağı bakan başlığın masaya uzaklığı ${R(10, 8)} cm oluyor (Şekil I). Ayağı ayarlanıp lamba zemine konunca kol aynı yükseklikte kalıyor ve yukarı çevrilmiş başlığın zemine uzaklığı ${R(10, 40)} cm oluyor (Şekil II).</p>`
      + `<p class="ask">Şekil I'de lambanın ayağı kaç santimetredir?</p>`,
    opts: [R(10, 14), R(10, 16), R(10, 18), R(10, 20)], ans: 0,
    hints: [`Küp kenarı ${R(4000)} = 20${R(10)}. Ayak x, başlık b: Şekil I'de x − b, Şekil II'de 20${R(10)} + x + b.`],
    steps: [`x − b = 8${R(10)}`, `20${R(10)} + x + b = 40${R(10)} → x + b = 20${R(10)}`, `2x = 28${R(10)} → x = <b>${R(10, 14)}</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 23, konu: YK,
    q: `<p>Üzerlerinde ${R(1)}, ${R(2)}, …, ${R(100)} yazan 100 karttan Ece iki kart seçiyor.</p><ul><li>Sayılardan biri ${R(40)}'tan büyük, diğeri küçüktür.</li><li>Sayılardan her biri ile ${R(40)} arasında <u>hiç</u> tam kare doğal sayı yoktur.</li></ul><p class="ask">Seçilen sayıların çarpımının alabileceği en büyük doğal sayı değeri kaçtır?</p>`,
    opts: ['48', '54', '63', '72'], ans: 1,
    hints: [`${R(40)} ≈ 6,32. Küçük sayı 4 ile 6,32, büyük sayı 6,32 ile 9 arasında olmalı.`],
    steps: [`Küçük ${R('a')}: 4 ≤ ${R('a')} < 6,32 → a ∈ {16, …, 39}. Büyük ${R('b')}: 6,32 < ${R('b')} ≤ 9 → b ∈ {41, …, 81}`, `ab tam kare ve en büyük: b = 81, a = 36 → 6 · 9 = <b>54</b>`, `Kontrol: 72 · 32 → 48 · 75 · 27 → 45`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 24, konu: TC,
    q: `<p>Çevresi ${R(3, 36)} cm olan dikdörtgen masa, eş basamaklarla merdiven biçiminde ikiye kesiliyor; masa 5 yatay, 4 dikey basamak ölçüsündedir ve kesim çizgisi 4 dikey ile 3 yatay basamaktan oluşur. Araya merdiven biçimli cam konunca masanın uzunluğu ${R(3, 16)} cm oluyor.</p><p class="ask">Camın çevresi kaç santimetredir?</p>`,
    opts: [R(3, 28), R(3, 34), R(3, 40), R(3, 46)], ans: 2,
    hints: [`Basamak s: 2(5s + 4s) = 18s.`],
    steps: [`18s = 36${R(3)} → s = 2${R(3)}; masa 10${R(3)} × 8${R(3)}`, `Camın eni 16${R(3)} − 10${R(3)} = 6${R(3)}`, `Bir merdiven kenarı 7s = 14${R(3)}`, `Cam çevresi 2 · 6${R(3)} + 2 · 14${R(3)} = <b>${R(3, 40)}</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 25, konu: CB,
    q: `<p>Eş karelere ayrılmış kâğıt önce kısa kenarları çakışacak biçimde, sonra A ile B çakışacak biçimde katlanıp açılıyor. Katlama çizgilerinin [AD] ile kesiştiği noktalar E ve F'dir.</p><div class="fig">${kareli25}</div><p class="ask">|EF| = ${R(200)} cm ise |CD| kaç santimetredir?</p>`,
    opts: [R(2, 6), R(2, 8), R(2, 10), R(2, 12)], ans: 3,
    hints: [`Kâğıt 16 kare: E 8. çizgide. F, A ile B'nin ortasında (3. çizgi).`],
    steps: [`EF = 5 kare = ${R(200)} = 10${R(2)} → bir kare 2${R(2)}`, `CD = 15 − 9 = 6 kare = <b>${R(2, 12)}</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 26, konu: YK,
    q: `<p>Dokuz karta birbirinden farklı ifadeler yazılmıştır: ${R('x')}, ${R(2, 3)}, ${R(6, 2)}, ${R(10)}, ${R('y')}, ${R(7, 2)}, ${R(30)}, ${R(12)}, ${R('z')}. 3 ile 4 arasındakiler A, 4 ile 5 arasındakiler B, 5 ile 6 arasındakiler C kutusuna konacak.</p><p>Sonunda C'deki kart sayısı A'dakinden, A'daki de B'dekinden fazladır.</p><p class="ask">x + y + z <u>en az</u> kaçtır?</p>`,
    opts: ['55', '58', '61', '64'], ans: 3,
    hints: [`Bilinenleri yerleştir: A: ${R(10)}, ${R(12)} · B: ${R(18)}, ${R(24)} · C: ${R(28)}, ${R(30)}.`],
    steps: [`C > A > B ve toplam 9, B en az 2 → B = 2, A = 3, C = 4`, `A'ya bir kart: en küçük ${R(11)}. C'ye iki kart: ${R(26)}, ${R(27)}`, `x + y + z = 11 + 26 + 27 = <b>64</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 27, konu: YK,
    q: `<p>Sayı doğrusunda 1 ile 4 arasında bir K, 4 ile 9 arasında bir L, 9 ile 16 arasında bir M tam sayısı işaretleniyor. ${R('K')} ve ${R('L')} 2'ye, ${R('M')} 4'e daha yakındır. ${R('K')} · ${R('L')} · ${R('M')} bir doğal sayıdır.</p><p class="ask">Bu doğal sayı kaçtır?</p>`,
    opts: ['15', '18', '20', '24'], ans: 0,
    hints: [`2'ye yakın: 2,25 < n < 6,25. 4'e yakın: 12,25 < n < 16.`],
    steps: [`K = 3 · L ∈ {5, 6} · M ∈ {13, 14, 15}`, `3 · 5 · 15 = 225 = 15² ✓`, `Sonuç <b>15</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 28, konu: CB,
    q: `<p>Bir yüzünün alanı 432 cm<sup>2</sup> olan kare kâğıda dört eş mavi dikdörtgen fırıldak biçiminde çizilmiştir.</p><div class="fig">${firildak28}</div><p class="ask">Boyanmayan dikdörtgenlerden birinin alanı 72 cm<sup>2</sup> ise mavi dikdörtgenin kısa kenarı kaçtır?</p>`,
    opts: [R(3), R(3, 2), R(3, 3), R(3, 4)], ans: 1,
    hints: [`Mavilerin toplamı 432 − 4 · 72.`],
    steps: [`Bir mavi: (432 − 288) / 4 = 36 → L · w = 36`, `L(L − w) = 72 → L² = 108 → L = 6${R(3)}`, `w = 36 / 6${R(3)} = <b>${R(3, 2)}</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 29, konu: CB,
    q: `<p>Uzun kenarı ${R(3, 18)} cm olan 16 özdeş levha boşluksuz dizilerek aşağıdaki dikdörtgen elde edilmiştir.</p><div class="fig">${cerceve29}</div><p class="ask">Dikdörtgenin çevresi kaç santimetredir?</p>`,
    opts: [R(3, 108), R(3, 114), R(3, 120), R(3, 126)], ans: 2,
    hints: [`Genişlik 2 · 18${R(3)}; 12 dikey levha bu genişliği doldurur.`],
    steps: [`Genişlik 36${R(3)} → kısa kenar 3${R(3)}`, `Yükseklik 18${R(3)} + 6${R(3)} = 24${R(3)}`, `Çevre 2(36${R(3)} + 24${R(3)}) = <b>${R(3, 120)}</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 30, konu: TC,
    q: `<p>Alanı ${R(3, 196)} cm<sup>2</sup> olan bir panoya kısa kenarı 2 cm olan 7 resim yan yana (K, M, S, B, S, M, K sırasıyla) alt kenarları aynı hizada dizilmiştir. Bu durumda beyaz (B) resmin üstü panonun üst kenarından ${R(3)} cm aşağıdadır ve mavi (M) resim kırmızıdan (K) ${R(3, 3)} cm uzundur.</p>`
      + `<p>Kırmızılar yerinde kalmak üzere resimler kaydırılıyor: beyaz resim panonun üst kenarına değiyor, beyaz ile mavilerin alt kenarları panonun alt kenarından ${R(3, 5)} cm yukarıda aynı hizada, mavilerin üstü panonun üstünden ${R(3, 4)} cm aşağıda; sarıların üstü kırmızıların üstüyle aynı hizada, altı panonun alt kenarına değiyor.</p>`
      + `<p class="ask">Sarı resimlerin uzun kenarı kaç santimetredir?</p>`,
    opts: [R(3, 5), R(3, 6), R(3, 7), R(3, 8)], ans: 1,
    hints: [`Pano 14 cm genişlikte: yüksekliği 196${R(3)} / 14 = 14${R(3)}.`],
    steps: [`Beyaz: 14${R(3)} − 5${R(3)} = 9${R(3)}. Mavi: 14${R(3)} − 4${R(3)} − 5${R(3)} = 5${R(3)}`, `İlk dizilişte alt çizgi: 14${R(3)} − ${R(3)} − 9${R(3)} = 4${R(3)} yukarıda. Kırmızı: 5${R(3)} − 3${R(3)} = 2${R(3)}`, `Sarı: kırmızının üstü (4${R(3)} + 2${R(3)}) ile panonun altı arası = <b>${R(3, 6)}</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 31, konu: CB,
    q: `<p>Mavi kartta ${R(12)}, kırmızı kartta ${R(50)} yazıyor. Sarı kartlarda 3, ${R(2)}, ${R(3)}, ${R(6)}, ${R(5)}, ${R(5, 2)} yazıyor. İki sarı kart seçilip biri maviyle, diğeri kırmızıyla çarpılıyor; kalan dört sarıdan ikisi de birbiriyle çarpılıyor. Sonuçlar x, 6 ve 10'dur.</p><p class="ask">x, 7 ile 8 arasında olduğuna göre x'i elde etmek için kullanılan kartlardan biri hangisidir?</p>`,
    opts: [R(5), R(5, 2), R(6), R(3)], ans: 2,
    hints: [`Kırmızı kartla yapılan çarpımlardan hangisi 6, 10 veya 7–8 arası olabilir?`],
    steps: [`Kırmızı (5${R(2)}) yalnızca ${R(2)} ile 10 verir. 6 ancak ${R(3)} · ${R(12)} ile elde edilir`, `Kalan sarılar 3, ${R(6)}, ${R(5)}, 2${R(5)}: 3${R(6)} = ${R(54)} ≈ 7,35 ✓`, `x'i veren kartlar 3 ve <b>${R(6)}</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 32, konu: CB,
    q: `<p>Kısa kenarı ${R(3, 2)} cm olan dikdörtgen kâğıda iki eş eşkenar üçgen çiziliyor: üstteki üçgenin tabanı sol kenardan, alttakinin tabanı sağ kenardan ${R(3, 2)} cm içeride. Kâğıt köşegeninden kesilip aşağıdaki gibi üçgen tabanları çakışacak, birer köşe diğer parçanın uzun kenarının ortasına gelecek biçimde birleştiriliyor.</p><div class="fig">${logo32}</div><p class="ask">Mavi eşkenar dörtgenin çevresi ${R(48)} cm ise logonun alanı kaç santimetrekaredir?</p>`,
    opts: ['30', '45', '54', '60'], ans: 3,
    hints: [`Üçgen kenarı ${R(48)} / 4 = ${R(3)}.`],
    steps: [`Parçaların dik köşeleri arası: 2${R(3)} + ${R(3)} + 2${R(3)} = 5${R(3)} = uzun kenarın yarısı → uzun kenar 10${R(3)}`, `Logo alanı = kâğıt alanı: 10${R(3)} · 2${R(3)} = <b>60</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 33, konu: GS,
    q: `<p>Ayrıtı ${R(8)} cm olan küplere şu sayılar yazılmıştır:</p>${kartlar([R('0,<span style="text-decoration:overline">1</span>'), R(7), R(16), F(3, 4), R('2,25'), 'π', R('0,09'), R('0,9'), R(12), F(R(98), R(2))])}`
      + `<p>Rasyonel sayılı küpler bir kule, irrasyonel sayılı küpler ayrı bir kule yapıyor.</p><p class="ask">Kulelerin yükseklik farkı hangi ardışık iki doğal sayı arasındadır?</p>`,
    opts: ['5 ile 6', '6 ile 7', '7 ile 8', '8 ile 9'], ans: 0,
    hints: [`0,1̅ = 1/9.`],
    steps: [`Rasyonel: ${R('1/9')} = 1/3, 4, 3/4, 1,5, 0,3, ${R(49)} = 7 → 6 küp`, `İrrasyonel: ${R(7)}, π, ${R('0,9')}, ${R(12)} → 4 küp`, `Fark 2 · 2${R(2)} = 4${R(2)} = ${R(32)} → <b>5 ile 6</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 34, konu: YK,
    q: `<p>Paralel iki yol arasındaki üç şeritte birer kare arazi var; alanları 8, 18 ve 50 hm<sup>2</sup> ve her karenin kenarı bulunduğu şeridin genişliğine eşit.</p><p class="ask">İki yolu birleştiren en kısa yolun uzunluğuna en yakın doğal sayı kaçtır?</p>`,
    opts: ['13', '14', '15', '16'], ans: 1,
    hints: [`Şerit genişliklerini topla.`],
    steps: [`2${R(2)} + 3${R(2)} + 5${R(2)} = 10${R(2)} = ${R(200)}`, `14² = 196, 14,5² = 210,25 → en yakın <b>14</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 35, konu: TC,
    q: `<p>Uzunluğu ${R(800)} m olan parkurda A başlangıca ${R(200)} m, B bitişe ${R(8)} m uzakta. C, A ile B arasında ve B'ye daha yakın.</p><p class="ask">C'nin bitişe uzaklığı hangisi olabilir?</p>`,
    opts: [R(6), R(7), R(50), R(98)], ans: 2,
    hints: [`Her şeyi ${R(2)} cinsinden yaz.`],
    steps: [`Parkur 20${R(2)}, A bitişe 10${R(2)}, B bitişe 2${R(2)} → orta nokta 6${R(2)}`, `2${R(2)} < C < 6${R(2)} → ${R(8)} < C < ${R(72)} → <b>${R(50)}</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 36, konu: TC,
    q: `<p>Mavi bilyeler ${R(3)} g, kırmızılar ${R(3, 2)} g. Alınan bilyelerin toplam kütlesi 17 g ile 18 g arasında ve 17'ye daha yakın.</p><p class="ask">Mavi bilye sayısı hangisi <u>olamaz</u>?</p>`,
    opts: ['2', '4', '6', '7'], ans: 3,
    hints: [`Toplam n${R(3)}, 17 < n${R(3)} < 17,5.`],
    steps: [`n = 10 (10${R(3)} ≈ 17,32)`, `m + 2k = 10 → m çift: 0, 2, 4, 6, 8, 10`, `<b>7</b> olamaz`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 37, konu: CB,
    q: `<p>A fidesi ${R(3)} cm, B fidesi ${R(5)} cm boyunda dikiliyor. Her yıl A'nın boyu ${R(3)} katına, B'ninki ${R(5)} katına çıkıyor.</p><p class="ask">A'nın boyu ${R(3, 9)} cm olduğu yıl B kaç santimetredir?</p>`,
    opts: [R(5, 5), R(5, 15), R(5, 25), R(5, 125)], ans: 2,
    hints: [`A: ${R(3)}, 3, 3${R(3)}, 9, 9${R(3)}.`],
    steps: [`A 4 yılda 9${R(3)} olur`, `B: ${R(5)}, 5, 5${R(5)}, 25, <b>25${R(5)}</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 38, konu: TC,
    q: `<p>50 dam<sup>2</sup> ve 128 dam<sup>2</sup> lik iki kare bahçe bir köşede birleşiyor. Havuzların alanı 2 dam<sup>2</sup>; küçük bahçedeki havuz A köşesinin karşı köşesinde, büyük bahçedeki havuz ortak köşeye bir kenarla komşu köşede. A, küçük bahçede ortak köşeye komşu bir köşedir. Kanal bahçe kenarları boyunca açılacak.</p><p class="ask">Kanal en az kaç dekametredir?</p>`,
    opts: [R(2, 12), R(2, 16), R(2, 20), R(2, 24)], ans: 1,
    hints: [`Kenarlar 5${R(2)}, 8${R(2)}, havuz ${R(2)}.`],
    steps: [`A → ortak köşe: 5${R(2)}`, `Ortak köşe → küçük havuz: 5${R(2)} − ${R(2)} = 4${R(2)} · → büyük havuz: 8${R(2)} − ${R(2)} = 7${R(2)}`, `Toplam <b>${R(2, 16)}</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 39, konu: TC,
    q: `<p>A çubuğu ${R(2, 8)} cm; B, C'nin ${R(2)} katı; A, B'nin ${R(2)} katıdır. Bu çubuklardan 10 tanesi uç uca eklenerek (24 + ${R(2, 48)}) cm'lik çubuk yapılıyor.</p><p class="ask">Kaç tane C kullanılmıştır?</p>`,
    opts: ['2', '3', '4', '5'], ans: 0,
    hints: [`B = 8, C = 4${R(2)}.`],
    steps: [`Rasyonel kısım 24 → 3 tane B`, `a + c = 7 ve 8a + 4c = 48 → 2a + c = 12 → a = 5, c = <b>2</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 40, konu: CB,
    q: `<p>Kenarları ${R(72)} hm ve ${R(32)} hm olan bahçe dörde ayrılmıştır: C'nin eni ${R(8)} hm, D'nin boyu ${R(2)} hm. A sol üstte, C sağ üstte, D sol altta, B sağ alttadır. A ve B Eren'in, C ve D Ali'nindir. İkisi bahçelerini alanları değişmeden boyu ${R(32)} hm olan birer dikdörtgene dönüştürüyor.</p><p class="ask">Eren'in yeni bahçesinin çevresi kaç hektometredir?</p>`,
    opts: [R(2, 9), R(2, 11), R(2, 13), R(2, 15)], ans: 3,
    hints: [`A: (6${R(2)} − 2${R(2)}) × (4${R(2)} − ${R(2)}).`],
    steps: [`A = 4${R(2)} · 3${R(2)} = 24 · B = 2${R(2)} · ${R(2)} = 4 → Eren 28`, `Eni 28 / 4${R(2)} = ${F(7, R(2))} = 3,5${R(2)}`, `Çevre 2(4${R(2)} + 3,5${R(2)}) = <b>${R(2, 15)}</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 41, konu: YK,
    q: `<p>12 cm'lik kalem ucunun 2 cm'si dışarıda. Her basışta ${R(3)} cm daha çıkıyor ve 4 kez basılıyor.</p><p class="ask">İçeride kalan kısım hangi ardışık iki doğal sayı arasındadır?</p>`,
    opts: ['1 ile 2', '2 ile 3', '3 ile 4', '4 ile 5'], ans: 2,
    hints: [`4${R(3)} = ${R(48)} ≈ 6,93.`],
    steps: [`İçeride 10 cm; 4${R(3)} ≈ 6,93 çıkar`, `Kalan ≈ 3,07 → <b>3 ile 4</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 42, konu: YK,
    q: `<p>Alanı ${R(2, 48)} cm<sup>2</sup> olan dikdörtgen kâğıdın iki köşesi, kısa kenarlar uzun kenarla çakışacak biçimde katlanıyor: sol alt köşe yukarı katlanır, sağ üst köşe aşağı katlanır. İki mavi üçgen arasında turuncu bir dikdörtgen kalır; [AB] bu dikdörtgenin üst kenarıdır. Mavi bölgelerin toplam alanı 18 cm<sup>2</sup>.</p><p class="ask">|AB| hangi ardışık iki doğal sayı arasındadır?</p>`,
    opts: ['7 ile 8', '8 ile 9', '9 ile 10', '10 ile 11'], ans: 0,
    hints: [`k² = 18 → k = 3${R(2)}.`],
    steps: [`Uzun kenar 48${R(2)} / 3${R(2)} = 16`, `AB = 16 − 6${R(2)} ≈ 16 − 8,49 = 7,51 → <b>7 ile 8</b>`],
    answer: `Cevap: <b>A</b>`
  }
  );
})();
