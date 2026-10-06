// MEB örnek soruları 63–83 (Kareköklü İfadeler)
(function () {
  const { TK, YK, AB, CB, TC, ON, GS } = KK_KONU;
  const ST = 'stroke="var(--fig-stroke)"';
  const rect = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${ST} stroke-width="1.5" ${extra}/>`;
  const txt = (x, y, t, extra = '') => `<text x="${x}" y="${y}" text-anchor="middle" font-size="14" ${extra}>${t}</text>`;

  const hedef64 = svg(240, 240, (() => {
    const c = 120, R1 = 105, R2 = 50;
    let g = `<circle cx="${c}" cy="${c}" r="${R1}" fill="#e8222e" ${ST}/><circle cx="${c}" cy="${c}" r="${R2}" fill="#fff" ${ST}/>`;
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; g += `<line x1="${c}" y1="${c}" x2="${(c + R1 * Math.sin(a)).toFixed(1)}" y2="${(c - R1 * Math.cos(a)).toFixed(1)}" ${ST}/>`; }
    for (let i = 0; i < 8; i++) {
      const a = (i + .5) * Math.PI / 4;
      g += `<text x="${(c + 32 * Math.sin(a)).toFixed(1)}" y="${(c - 32 * Math.cos(a) + 5).toFixed(1)}" text-anchor="middle" font-size="15" font-weight="700" style="fill:#1f2328">${i + 1}</text>`;
      g += `<text x="${(c + 80 * Math.sin(a)).toFixed(1)}" y="${(c - 80 * Math.cos(a) + 4).toFixed(1)}" text-anchor="middle" font-size="11" style="fill:#fff">K</text>`;
    }
    return g;
  })(), 'Sekiz dilimli hedef tahtası; iç beyaz bölgelerde 1–8, dış kırmızı bölgeler K');

  const kursu65 = svg(260, 150, `
    ${rect(30, 70, 70, 70, '#6a7fd1')}${rect(100, 45, 80, 95, '#6a7fd1')}${rect(180, 90, 55, 50, '#6a7fd1')}
    <text x="65" y="115" text-anchor="middle" font-size="22" font-weight="700" style="fill:#fff">2</text><text x="140" y="100" text-anchor="middle" font-size="22" font-weight="700" style="fill:#fff">1</text><text x="207" y="125" text-anchor="middle" font-size="22" font-weight="700" style="fill:#fff">3</text>
    <line x1="30" y1="12" x2="235" y2="12" stroke="#d6249f" stroke-dasharray="3 3"/><text x="130" y="30" text-anchor="middle" font-size="12">Başların hizası aynı</text>`, 'Derece kürsüsü: 1 en yüksek, 2 ortada, 3 en alçak; sporcuların başları aynı hizada');

  const robot66 = svg(240, 190, (() => {
    const c = 40, o = 30;
    let g = '';
    for (let i = 0; i <= 4; i++) g += `<line x1="${o + i * c}" y1="${o}" x2="${o + i * c}" y2="${o + 3 * c}" stroke="#20a4e0" stroke-width="3"/>`;
    for (let j = 0; j <= 3; j++) g += `<line x1="${o}" y1="${o + j * c}" x2="${o + 4 * c}" y2="${o + j * c}" stroke="#20a4e0" stroke-width="3"/>`;
    g += `<circle cx="${o}" cy="${o + 3 * c}" r="6" fill="var(--fig-stroke)"/><circle cx="${o + 4 * c}" cy="${o}" r="6" fill="#e0187a"/>`;
    g += `<text x="${o}" y="${o + 3 * c + 22}" text-anchor="middle" font-size="12">Başlangıç</text><text x="${o + 4 * c}" y="${o - 10}" text-anchor="middle" font-size="12">Bitiş</text>`;
    return g;
  })(), '4 × 3 birim karelik ızgara; başlangıç sol alt, bitiş sağ üst köşe');

  const kart68 = svg(300, 130, `${rect(20, 10, 260, 110, '#fde2c4')}${rect(32, 22, 90, 86, '#cce7f5')}
    <text x="200" y="42" text-anchor="middle" font-size="12" font-weight="700" style="fill:#2f7fc1">PERSONEL GİRİŞ KARTI</text>
    <text x="140" y="68" font-size="11" style="fill:#1f2328">Adı: Yiğit</text><text x="140" y="86" font-size="11" style="fill:#1f2328">Soyadı: Erol</text><text x="140" y="104" font-size="11" style="fill:#1f2328">Birimi: Destek Hizmetleri</text>`, 'Personel giriş kartı; sol tarafta kare fotoğraf alanı');

  const carklar69 = tablo([['Yeşil çarktaki sayılar (kırmızı üçgen 157\'yi gösteriyor)', 'Turuncu çarktaki sayılar (mavi üçgen 50\'yi gösteriyor)'], ['157, 98, 173, 65, 82, 17, 35', '50, 30, 70']]);

  const direk70 = svg(220, 230, `<line x1="60" y1="10" x2="60" y2="220" stroke="#8a6d3b" stroke-width="5"/>
    <rect x="62" y="85" width="90" height="60" fill="#e30a17"/><circle cx="92" cy="115" r="16" fill="#fff"/><circle cx="97" cy="115" r="13" fill="#e30a17"/><text x="116" y="121" font-size="16" style="fill:#fff">★</text>
    <line x1="170" y1="10" x2="170" y2="85" stroke="var(--red)"/><text x="176" y="52" font-size="12">√32 m</text>
    <line x1="170" y1="145" x2="170" y2="220" stroke="var(--red)"/><text x="176" y="186" font-size="12">√32 m</text>
    <line x1="40" y1="10" x2="40" y2="220" ${ST}/><text x="34" y="120" text-anchor="end" font-size="12">√200 m</text>`, 'Yarıya indirilmiş bayrak: direğin üstüne ve zemine uzaklığı √32 m');

  const kare74 = svg(200, 200, `${rect(20, 20, 160, 160, '#e7c3a5')}<line x1="130" y1="20" x2="130" y2="180" ${ST}/><line x1="20" y1="130" x2="180" y2="130" ${ST}/>
    <text x="75" y="80" text-anchor="middle" font-size="14">A</text><text x="155" y="80" text-anchor="middle" font-size="14">C</text><text x="75" y="160" text-anchor="middle" font-size="14">C</text><text x="155" y="160" text-anchor="middle" font-size="14">B</text>`, 'Kare karton: A ve B kareleri, iki C dikdörtgeni');

  const domino75 = svg(420, 170, (() => {
    let g = '';
    for (let i = 0; i < 15; i++) g += rect(20 + i * 26, 50, 4, 90, '#fff');
    g += `<line x1="20" y1="150" x2="${20 + 14 * 26 + 4}" y2="150" ${ST} stroke-dasharray="3 3"/><circle cx="20" cy="150" r="3" fill="#d6249f"/><circle cx="${20 + 14 * 26 + 4}" cy="150" r="3" fill="#d6249f"/>`;
    g += `<text x="20" y="166" text-anchor="middle" font-size="13">A</text><text x="${20 + 14 * 26 + 4}" y="166" text-anchor="middle" font-size="13">B</text>`;
    return g + `<text x="10" y="40" font-size="12">Taş: √20 × √20 × 0,2 cm (yandan görünüş)</text>`;
  })(), '15 taş eşit aralıklarla dizilmiş; A ilk taşın dış yüzünde, B son taşın dış yüzünde');

  const album76 = svg(420, 220, (() => {
    let g = `<rect x="20" y="10" width="380" height="190" fill="#fbd7b5"/>`;
    const foto = (x, y) => rect(x, y, 34, 45, 'var(--blue-soft)', 'stroke-width="1"');
    [[60, 20], [105, 20], [270, 20], [315, 20], [85, 80], [290, 80], [60, 140], [140, 140], [220, 140], [300, 140]].forEach(p => g += foto(...p));
    return g + `<text x="210" y="216" text-anchor="middle" font-size="12">20√3 cm</text><text x="410" y="105" font-size="12" transform="rotate(90 410 105)" text-anchor="middle">10√3 cm</text>`;
  })(), 'Soy ağacı albümü: kartonda 10 eş fotoğraf');

  const formalar78 = kartlar(['12', '53', '24', '29', '45']) + `<p class="cards-label">Kırmızı takım</p>` + kartlar(['40', '10', '8', '20', '15']) + `<p class="cards-label">Mavi takım</p>`;

  const yuz80 = (() => {
    let s = '<table class="grid small">';
    for (let r = 0; r < 10; r++) { s += '<tr>'; for (let c = 1; c <= 10; c++) s += `<td>${r * 10 + c}</td>`; s += '</tr>'; }
    return s + '</table>';
  })();

  const m83 = svg(280, 330, (() => {
    const cw = 32, ch = 48, o = 20;   // 8 sütun × 6 satır
    let g = '';
    const boya = (pts) => `<polygon points="${pts.map(([x, y]) => `${o + x * cw},${o + y * ch}`).join(' ')}" fill="#f37fc0" stroke="#999"/>`;
    g += boya([[1, 1], [2, 1], [2, 5], [1, 5]]) + boya([[6, 1], [7, 1], [7, 5], [6, 5]]);
    g += boya([[2, 1], [4, 3], [4, 4], [2, 2]]) + boya([[6, 1], [4, 3], [4, 4], [6, 2]]);
    for (let i = 0; i <= 8; i++) g += `<line x1="${o + i * cw}" y1="${o}" x2="${o + i * cw}" y2="${o + 6 * ch}" stroke="#777" stroke-width=".8"/>`;
    for (let j = 0; j <= 6; j++) g += `<line x1="${o}" y1="${o + j * ch}" x2="${o + 8 * cw}" y2="${o + j * ch}" stroke="#777" stroke-width=".8"/>`;
    return g + `<text x="${o + 4 * cw}" y="${o + 6 * ch + 18}" text-anchor="middle" font-size="12">8√3 metre (8 sütun)</text><text x="${o + 8 * cw + 6}" y="${o + 3 * ch}" font-size="12">12√2 m</text>`;
  })(), 'Duvar 8 sütun ve 6 satır eş dikdörtgene bölünmüş; M harfi bazı parçaların tamamı, bazılarının yarısı boyanarak oluşturulmuş');

  KK_ORNEK.push(
  {
    no: 63, konu: YK, sayfa: 33,
    q: `<p>Bir taburenin yerden yüksekliği, oturma bölümünün ok yönünde bir tam tur dönüşünde ${R(3)} cm artmaktadır.</p>`
      + `<p>Bu taburenin yerden yüksekliği en kısa hâlinde 45 cm, en uzun hâlinde ise 60 cm'dir. Eylül bu tabureyi ok yönünde döndürerek en uzun hâline getirmiştir.</p><p class="ask">Buna göre, Eylül tabureyi <u>en çok</u> kaç tam tur döndürmüştür?</p>`,
    opts: ['6', '7', '8', '9'], ans: 2,
    hints: [`En fazla 15 cm yükselebilir. n${R(3)} ≤ 15.`],
    steps: [`60 − 45 = 15 cm`, `n${R(3)} ≤ 15 → n ≤ ${F(15, R(3))} = 5${R(3)} ≈ 8,66`, `En çok <b>8</b> tam tur`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 64, konu: YK, sayfa: 33,
    q: `<p>Aşağıdaki hedef tahtasındaki her daire dilimi kırmızı ve beyaz olmak üzere iki bölgeden oluşmaktadır.</p><div class="fig">${hedef64}</div>`
      + `<p>Bu hedef tahtasına yapılan atışlarda,</p><ul><li>Beyaz bölgeye isabet eden atışlar o dilimdeki sayının kendisi kadar,</li><li>Kırmızı bölgeye isabet eden atışlar o dilimdeki sayı tam kare ise sayının karekökü kadar, değil ise sayının kareköküne en yakın tam sayı kadar</li></ul><p>puan kazandırmaktadır.</p>`
      + `<p>Hedef tahtasına 2 atış yapan bir atıcının atışları, hedef tahtasının aynı dilimindeki farklı renkte olan bölgelerine isabet etmiştir.</p><p class="ask">Buna göre, aşağıdakilerden hangisi bu atıcının aldığı puan <u>olamaz</u>?</p>`,
    opts: ['3', '7', '9', '11'], ans: 2,
    hints: [`Her dilim için puan = n + (${R('n')}'ye en yakın tam sayı). 8 dilimi tek tek hesapla.`],
    steps: [`1 → 1 + 1 = 2 · 2 → 2 + 1 = 3 · 3 → 3 + 2 = 5 · 4 → 4 + 2 = 6`, `5 → 5 + 2 = 7 · 6 → 6 + 2 = 8 · 7 → 7 + 3 = 10 · 8 → 8 + 3 = 11`, `Olası puanlar: 2, 3, 5, 6, 7, 8, 10, 11 → <b>9</b> yok`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 65, konu: TC, sayfa: 34,
    q: `<p>Bir yarışmada ilk üçe girerek madalya almaya hak kazanan üç sporcunun derece kürsülerine çıktıklarında boylarının aynı hizaya geldiği görülmektedir.</p><div class="fig">${kursu65}</div>`
      + `<p>Bu derece kürsüsünde yer alan 1, 2 ve 3 sayılarının yazılı olduğu kare şeklindeki yüzeylerin alanları sırasıyla 980 cm<sup>2</sup>, 720 cm<sup>2</sup> ve 405 cm<sup>2</sup> dir.</p>`
      + `<p class="ask">Buna göre, 1. ve 3. olan sporcular arasındaki boy farkı, 1. ve 2. olan sporcular arasındaki boy farkının kaç katıdır?</p>`,
    opts: ['2', '2,5', '3', '3,5'], ans: 1,
    hints: [`Başlar aynı hizadaysa boy farkı = kürsü yükseklikleri farkı.`],
    steps: [`Kürsüler: ${R(980)} = 14${R(5)}, ${R(720)} = 12${R(5)}, ${R(405)} = 9${R(5)}`, `1 ile 3: 14${R(5)} − 9${R(5)} = 5${R(5)}. 1 ile 2: 14${R(5)} − 12${R(5)} = 2${R(5)}`, `Oran: 5${R(5)} / 2${R(5)} = <b>2,5</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 66, konu: YK, sayfa: 34,
    q: `<p>Aşağıdaki robot, sistemine yüklenen yazılımdan aldığı talimata göre birim kareleri oluşturan çizgiler üzerinde hareket etmektedir.</p><div class="fig">${robot66}</div>`
      + `<p>Sisteme tam sayı olmayan bir kareköklü sayı girildiğinde yazılımın robota verdiği talimat; birim cinsinden, kareköklü sayının en yakın olduğu doğal sayı değeri kadar, kareköklü sayı bu doğal sayıdan büyük ise sağa doğru, küçük ise yukarı doğru hareket etmesi şeklindedir.</p>`
      + `<p class="ask">Buna göre, yazılıma aşağıdaki kareköklü sayılardan hangilerinin girilmesi durumunda robot, başlangıç noktasından bitiş noktasına ulaşır?</p>`,
    opts: [`${R(15)} ile ${R(10)}`, `${R(15)} ile ${R(8)}`, `${R(17)} ile ${R(10)}`, `${R(17)} ile ${R(8)}`], ans: 3,
    hints: [`Bitiş: 4 birim sağ, 3 birim yukarı.`],
    steps: [`${R(15)} ≈ 3,87 → 4'ten küçük → 4 yukarı · ${R(10)} ≈ 3,16 → 3'ten büyük → 3 sağa`, `${R(17)} ≈ 4,12 → 4 sağa · ${R(8)} ≈ 2,83 → 3 yukarı`, `4 sağa + 3 yukarı: <b>${R(17)} ile ${R(8)}</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 67, konu: YK, sayfa: 35,
    q: `<p>Bir yaya geçidinde trafik lambalarının altına, kırmızı ışığın kaç saniye sonra yanacağını gösteren bir tabela konulmuştur. Tabela kalan süreyi tam saniye olarak gösterir.</p>`
      + `<p>Kerem, bu yaya geçidine geldiğinde tabelada 10 yazdığını görmüş ve sabit hızla saniyede 1 m yol alarak kırmızı ışık yanmadan 2 saniye önce karşıya geçmiştir.</p><p class="ask">Buna göre, bu yaya geçidinin metre cinsinden uzunluğu aşağıdakilerden hangisi olabilir?</p>`,
    opts: [R(6, 3), R(5, 4), R(3, 5), R(3, 6)], ans: 0,
    hints: [`Tabelada 10 yazarken kalan süre 9 ile 10 saniye arasındadır.`],
    steps: [`Kalan süre 9 ile 10 saniye arası; Kerem 2 saniye önce geçti → yürüme süresi 7 ile 8 saniye arası`, `Uzunluk 7 ile 8 m arası → 49 < L² ≤ 64`, `3${R(6)} = ${R(54)} ≈ 7,35 ✓ (4${R(5)} = ${R(80)}, 5${R(3)} = ${R(75)}, 6${R(3)} = ${R(108)})`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 68, konu: CB, sayfa: 35,
    q: `<p>Aşağıda bir işyerindeki çalışanlara verilen dikdörtgen şeklindeki personel giriş kartının görseli verilmiştir.</p><div class="fig">${kart68}</div>`
      + `<p>Kenar uzunlukları santimetre cinsinden birer doğal sayı olan bu kart üzerinde resim yapıştırılan kare şeklindeki bölgenin alanı, kartın alanının % 40'ına eşittir.</p>`
      + `<p class="ask">Resim yapıştırılan karenin bir kenarının uzunluğu ${R(5, 2)} cm olduğuna göre kartın çevresi kaç santimetredir?</p>`,
    opts: ['20', '30', '34', '54'], ans: 1,
    hints: [`Resim alanı (2${R(5)})² = 20 → kartın alanı 50.`],
    steps: [`Resim: 20 cm² = kartın % 40'ı → kart 50 cm²`, `Doğal sayı kenarlar: 1 × 50, 2 × 25, 5 × 10. Resmin kenarı 2${R(5)} ≈ 4,47 sığmalı → <b>5 × 10</b>`, `Çevre: 2(5 + 10) = <b>30</b> cm`],
    answer: `Cevap: <b>B</b>`,
    trap: `2 × 25'i seçmek (çevre 54). Kenarı 4,47 cm olan resim 2 cm'lik kenara sığmaz.`
  },
  {
    no: 69, konu: YK, sayfa: 36,
    q: `<p>İç içe geçmiş yeşil ve turuncu çarklardan oluşan bir sistem ile bir oyun oynanıyor. Oyuncunun bu sistemi döndürdükten sonra kazandığı puan; çarklar durduğunda kırmızı üçgenin ucunun gösterdiği yeşil bölgedeki sayının karekökünden büyük en küçük doğal sayı ile mavi üçgenin ucunun gösterdiği turuncu bölgedeki sayının karekökünden küçük en büyük doğal sayı çarpılarak hesaplanır.</p>${carklar69}`
      + `<p>Bu oyunu oynayan Doruk, sistemi döndürdükten sonra çarklar durduğunda kırmızı üçgen yeşil çarkta <b>157</b>'yi, mavi üçgen turuncu çarkta <b>50</b>'yi göstermiştir.</p><p class="ask">Buna göre, Doruk kaç puan kazanır?</p>`,
    opts: ['84', '91', '98', '104'], ans: 1,
    hints: [`12² = 144 < 157 < 169 = 13².`],
    steps: [`${R(157)} ≈ 12,5 → büyük en küçük doğal sayı <b>13</b>`, `${R(50)} ≈ 7,07 → küçük en büyük doğal sayı <b>7</b>`, `Puan: 13 · 7 = <b>91</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 70, konu: CB, sayfa: 36,
    q: `<p>Türk bayrağının boyu, genişliğinin 1,5 katıdır. Aşağıda 10 Kasım Atatürk'ü Anma Programı'nda yarıya indirilmiş bir bayrak gösterilmiştir.</p><div class="fig">${direk70}</div>`
      + `<p>Bayrağın hem direğin üst kısmına, hem de zemine olan uzaklığı ${R(32)} m dir.</p><p class="ask">Bayrak direğinin boyu ${R(200)} m olduğuna göre, bayrağın bir yüzünün alanı kaç metrekaredir?</p>`,
    opts: ['6', '8', '10', '12'], ans: 3,
    hints: [`Bayrağın genişliği = direk − 2 · ${R(32)}.`],
    steps: [`Direk ${R(200)} = 10${R(2)}, ${R(32)} = 4${R(2)} → genişlik 10${R(2)} − 8${R(2)} = 2${R(2)}`, `Boy: 1,5 · 2${R(2)} = 3${R(2)}`, `Alan: 2${R(2)} · 3${R(2)} = <b>12</b> m²`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 71, konu: CB, sayfa: 37,
    q: `<p>Alanı 200 cm<sup>2</sup> olan dikdörtgen şeklindeki bir kartondan hiç parça artmayacak şekilde 10 tane özdeş kare kesiliyor.</p>`
      + `<p class="ask">Buna göre, bu kartonun kesilmeden önceki çevresi <u>en az</u> kaç santimetredir?</p>`,
    opts: [R(5, 24), R(5, 28), R(5, 32), R(5, 36)], ans: 1,
    hints: [`Her karenin alanı 20, kenarı 2${R(5)}. 10 kare 1 × 10 ya da 2 × 5 dizilebilir.`],
    steps: [`Kare: 20 cm² → kenar 2${R(5)}`, `1 × 10: 2(2${R(5)} + 20${R(5)}) = 44${R(5)}`, `2 × 5: 2(4${R(5)} + 10${R(5)}) = <b>${R(5, 28)}</b> → en az`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 72, konu: YK, sayfa: 37,
    q: `<p>Alanı 28 m<sup>2</sup> olan kare şeklindeki bir bahçenin çevresine 2 sıra tel çekilecektir. Telin metre fiyatı satın alınacak miktara göre değişiklik göstermektedir.</p>`
      + tablo([['Tel miktarı', 'Metre fiyatı'], ['20 m\'den az', '15 TL'], ['20 – 39 m', '14,5 TL'], ['40 – 59 m', '14 TL'], ['59 m\'den fazla', '13,5 TL']])
      + `<p class="ask">Bu iş için kullanılacak telin metresi kaç lira olur?</p>`,
    opts: ['13,5', '14', '14,5', '15'], ans: 1,
    hints: [`Kenar ${R(28)} = 2${R(7)}. 2 sıra tel: 2 · 4 · 2${R(7)}.`],
    steps: [`Tel: 2 · 4 · 2${R(7)} = 16${R(7)} = ${R(1792)}`, `42² = 1764 < 1792 < 1849 = 43² → yaklaşık 42,3 m`, `40 – 59 m aralığı → <b>14 TL</b>`],
    answer: `Cevap: <b>B</b>`,
    trap: `Tek sıra tel hesaplamak (≈ 21,2 m → 14,5 TL).`
  },
  {
    no: 73, konu: GS, sayfa: 38,
    q: `<p>Alya Öğretmen tahtaya “İki farklı irrasyonel sayının çarpımı bir rasyonel sayı olabilir.” ifadesini yazıp öğrencilerinden bu ifadeye uygun iki farklı irrasyonel sayı bulmalarını istemiştir.</p>`
      + tablo([['Öğrenci', 'Bulduğu sayılar'], ['Kerem', `${R(24)} ile ${R(54)}`], ['Doruk', `${R(2, 4)} ile ${R(98)}`], ['Tunahan', `${R(45)} ile ${R(5, 4)}`], ['Eylül', `${R(3, 2)} ile ${R(72)}`]])
      + `<p class="ask">Buna göre, hangi öğrencinin bulduğu sayılar verilen ifadeye uygun <u>değildir</u>?</p>`,
    opts: ['Kerem', 'Doruk', 'Tunahan', 'Eylül'], ans: 3,
    hints: [`Her çarpımı hesapla; kökün içi aynı olunca sonuç rasyonel olur.`],
    steps: [`Kerem: ${R(24)} · ${R(54)} = ${R(1296)} = 36 ✓`, `Doruk: 4${R(2)} · 7${R(2)} = 56 ✓ · Tunahan: 3${R(5)} · 4${R(5)} = 60 ✓`, `Eylül: 2${R(3)} · 6${R(2)} = 12${R(6)} → <b>irrasyonel</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 74, konu: CB, sayfa: 38,
    q: `<p>Kare şeklindeki bir karton aşağıdaki gibi 4 parçaya ayrılıyor.</p><div class="fig">${kare74}</div>`
      + `<p><u>Tam kare olmayan</u> A ve B doğal sayıları bulundukları karenin, tam kare olan C doğal sayısı ise bulundukları dikdörtgenlerin alanlarını ifade etmektedir.</p><p class="ask">Buna göre, parçalara ayrılan kartonun alanı <u>en az</u> kaç birim karedir?</p>`,
    opts: ['14', '18', '24', '27'], ans: 1,
    hints: [`C = ${R('A')} · ${R('B')} = ${R('AB')}. C tam kare olduğuna göre AB bir sayının 4. kuvveti olmalı.`],
    steps: [
      `Karton alanı: A + B + 2C, C = ${R('AB')}`,
      `C = 1 → AB = 1 → A = B = 1 tam kare ✗. C = 4 → AB = 16 → A = 2, B = 8 (ikisi de tam kare değil) ✓`,
      `Alan: 2 + 8 + 2 · 4 = <b>18</b> (kenar ${R(2)} + 2${R(2)} = 3${R(2)})`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 75, konu: YK, sayfa: 39,
    q: `<p>Doruk, ayrıtlarının uzunlukları ${R(20)} cm, ${R(20)} cm ve 0,2 cm olan prizma biçimindeki 15 taşı aralarında eşit mesafe olacak şekilde aynı hizada birbirine paralel biçimde dizmiştir. Doruk ilk taşı devirdiğinde son taş hariç her taşın sırasıyla bir sonraki taşı kaydırmadan devirdiğini gözlemlemiştir.</p><div class="fig">${domino75}</div>`
      + `<p class="ask">Ardışık taşlar arasındaki uzaklık bir tam sayıya eşit olduğuna göre, A ile B noktaları arasındaki uzaklık <u>en fazla</u> kaç santimetre olur?</p>`,
    opts: ['57', '59', '61', '63'], ans: 1,
    hints: [`Bir taş, kendi boyundan (${R(20)} ≈ 4,47) daha uzaktaki taşa ulaşamaz.`],
    steps: [`Taşlar arası boşluk < ${R(20)} ≈ 4,47 ve tam sayı → en fazla 4 cm`, `AB: 15 taş kalınlığı + 14 boşluk = 15 · 0,2 + 14 · 4 = 3 + 56 = <b>59</b> cm`],
    answer: `Cevap: <b>B</b>`,
    trap: `Taşların kalınlığını unutmak (56) ya da 15 boşluk saymak.`
  },
  {
    no: 76, konu: CB, sayfa: 40,
    q: `<p>Ahmet ailesinin fotoğraflarını boyutları ${R(3, 10)} cm ve ${R(3, 20)} cm olan dikdörtgen şeklindeki kartona yapıştırarak aşağıdaki soy ağacı albümünü oluşturmuştur.</p><div class="fig">${album76}</div>`
      + `<p>Ahmet'in bu kartona yapıştırdığı tüm fotoğrafların büyüklükleri birbirine eşit olup bir fotoğrafın boyutları ${R(2, 4)} cm ve ${R(2, 3)} cm'dir.</p><p class="ask">Ahmet'in fotoğraf yapıştırdığı alan kartonun bir yüzeyinin yüzde kaçıdır?</p>`,
    opts: ['20', '30', '40', '50'], ans: 2,
    hints: [`Fotoğraf sayısını say: 10. Bir fotoğrafın alanı 4${R(2)} · 3${R(2)}.`],
    steps: [`Karton: 10${R(3)} · 20${R(3)} = 600 cm²`, `Fotoğraf: 4${R(2)} · 3${R(2)} = 24 cm² · 10 fotoğraf = 240 cm²`, `240 / 600 = % <b>40</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 77, konu: TK, sayfa: 40,
    q: `<p>Mete ve Zeynep, her birinde eşit sayıda boncuk bulunan kutulardan 43 adet almışlardır. Mete'nin aldığı kutuların sayısı bir tam kare pozitif tam sayıya eşittir. Zeynep'in aldığı kutularda toplam 3<sup>7</sup> adet boncuk bulunmaktadır.</p>`
      + `<p class="ask">Buna göre, Mete'nin aldığı kutulardaki toplam boncuk sayısı kaçtır?</p>`,
    opts: ['2<sup>6</sup>', '3<sup>4</sup>', '3<sup>7</sup>', '6<sup>4</sup>'], ans: 3,
    hints: [`Zeynep'in kutu sayısı 43 − k² ve 3<sup>7</sup>'yi bölmeli → 3'ün bir kuvveti olmalı.`],
    steps: [`43 − k²: k = 1 → 42, 2 → 39, 3 → 34, 4 → <b>27</b> = 3³ ✓, 5 → 18, 6 → 7`, `Kutu başına boncuk: 3<sup>7</sup> / 3<sup>3</sup> = 3<sup>4</sup> = 81`, `Mete: 16 · 81 = 2<sup>4</sup> · 3<sup>4</sup> = <b>6<sup>4</sup></b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 78, konu: YK, sayfa: 41,
    q: `<p>Aşağıda bir basketbol maçındaki oyuncuların forma numaraları verilmiştir.</p>${formalar78}`
      + `<p>Bu maçta oyuncular forma numaralarının karekökünün en yakın olduğu tam sayı kadar basket atıyorlar.</p><p class="ask">Alp ile aynı sayıda basket atan başka bir oyuncu olmadığına göre, Alp'in forma numarası kaçtır?</p>`,
    opts: ['12', '20', '40', '53'], ans: 2,
    hints: [`Her numara için karekökün en yakın olduğu tam sayıyı bul.`],
    steps: [`12 → 3 · 53 → 7 · 24 → 5 · 29 → 5 · 45 → 7`, `40 → 6 · 10 → 3 · 8 → 3 · 20 → 4 · 15 → 4`, `Tek kalan 6 → Alp'in numarası <b>40</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 79, konu: YK, sayfa: 41,
    q: `<p>1'den 16'ya kadar numaralandırılmış 16 top aşağıdaki kurallara göre 1'den 4'e kadar numaralanmış 4 torbaya atılacaktır.</p><ul><li>Topun üzerindeki sayı bir tam kare sayı ise kareköküne eşit numaralı</li><li>Topun üzerindeki sayı bir tam kare sayı değil ise kareköküne en yakın numaralı</li></ul><p>torbaya atılacaktır. Örneğin 4 numaralı top (${R(4)} = 2) 2. torbaya, 2 numaralı top (${R(2)} ≈ 1) 1. torbaya atılır.</p>`
      + `<p class="ask">Buna göre, tüm toplar torbalara atıldığında 3. torbada kaç top olur?</p>`,
    opts: ['4', '5', '6', '7'], ans: 2,
    hints: [`Karekökü 3'e en yakın sayılar: 2,5 < ${R('n')} < 3,5.`],
    steps: [`6,25 < n < 12,25 → n ∈ {7, 8, 9, 10, 11, 12}`, `3. torbada <b>6</b> top`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 80, konu: TK, sayfa: 42,
    q: `<p>Aşağıda 1'den 100'e kadar olan doğal sayıların yazılı olduğu bir kart verilmiştir.</p>${yuz80}`
      + `<p>Serra, bu kartta 2'nin pozitif tam sayı kuvvetlerinin yazılı olduğu kareleri sarıya, 3'ün pozitif tam sayı kuvvetlerinin yazılı olduğu kareleri maviye ve tam kare sayıların yazılı olduğu kareleri de kırmızıya boyuyor. Sarı boyalı kareler kırmızıya boyandığında turuncu, mavi boyalı kareler kırmızıya boyandığında ise mor renk alıyor.</p>`
      + `<p class="ask">Buna göre, son durumda turuncu ve mor renkli kare sayıları aşağıdaki seçeneklerin hangisinde doğru olarak verilmiştir?</p>`,
    opts: ['Mor 3, Turuncu 3', 'Mor 3, Turuncu 2', 'Mor 2, Turuncu 3', 'Mor 2, Turuncu 2'], ans: 2, long: true,
    hints: [`Turuncu: hem 2'nin kuvveti hem tam kare. Mor: hem 3'ün kuvveti hem tam kare.`],
    steps: [`2'nin kuvvetleri: 2, 4, 8, 16, 32, 64 → tam kare olanlar 4, 16, 64 → <b>3 turuncu</b>`, `3'ün kuvvetleri: 3, 9, 27, 81 → tam kare olanlar 9, 81 → <b>2 mor</b>`],
    answer: `Cevap: <b>C</b>`,
    trap: `1'i de saymak: 1 = 2<sup>0</sup> = 3<sup>0</sup>, ama 0 pozitif bir üs değildir.`
  },
  {
    no: 81, konu: YK, sayfa: 42,
    q: `<p>Aşağıda klavyeden bir sayı girildikten sonra bir bilgisayar programının işlemler zinciri verilmiştir.</p>`
      + `<ol><li>Girilen sayıyı oku.</li><li>Sayının karekökünü al.</li><li>Sonuç tam sayı ise 5. adıma git, değilse 4. adımdan devam et.</li><li>Sonucu birler basamağına yuvarla ve 2. adımdan devam et.</li><li>Sonucu ekrana yaz.</li></ol>`
      + `<p class="ask">Bu programa göre klavyeden 226 sayısı girildiğinde ekranda yazan sayı kaçtır?</p>`,
    opts: ['1', '2', '3', '5'], ans: 1,
    hints: [`15² = 225. ${R(226)} biraz 15'ten büyük.`],
    steps: [`${R(226)} ≈ 15,03 → tam değil → 15'e yuvarla`, `${R(15)} ≈ 3,87 → tam değil → 4'e yuvarla`, `${R(4)} = 2 → tam sayı → ekrana <b>2</b>`],
    answer: `Cevap: <b>B</b>`,
    trap: `Yuvarlamadan sonra 2. adıma dönmeyi unutup 15 ya da 4'te durmak.`
  },
  {
    no: 82, konu: YK, sayfa: 43,
    q: `<p>Uğur Öğretmen öğrencilerine tam kare olmayan kareköklü sayıların değerinin en yakın olduğu doğal sayıyı bulabilmek için bir etkinlik yapmıştır. 1 ve 4 gibi tam kare sayılarla kenarları tam sayı olan kareler elde edilebilirken 2, 3, 5 ve 6 gibi sayılarla elde edilemiyor. Öğretmen; 2 birim karelik şeklin alanı 1 birim kareye daha yakın olduğundan ${R(2)}'nin ${R(1)} = 1'e, 3, 5 ve 6 birim karelik şekillerin alanları 4'e daha yakın olduğundan ${R(3)}, ${R(5)} ve ${R(6)}'nın ${R(4)} = 2'ye daha yakın olduğunu söylemiştir.</p>`
      + `<p>Son olarak öğrencilerine birim karelere bölünmüş bir kâğıt dağıtan Uğur Öğretmen, bu kâğıda karekökünün değerinin en yakın olduğu doğal sayı 3 olan tüm <u>tam kare olmayan</u> sayıları ifade eden birim karelerden oluşan birer şekil çizmelerini istemiştir.</p>`
      + `<p class="ask">Buna göre, öğrencilerin bu kâğıda kaç farklı şekil çizmesi gerekir?</p>`,
    opts: ['3', '5', '7', '9'], ans: 1,
    hints: [`Karekökü 3'e en yakın sayılar: 7'den 12'ye. Bunlardan hangisi tam kare?`],
    steps: [`2,5 < ${R('n')} < 3,5 → n ∈ {7, 8, 9, 10, 11, 12}`, `9 tam kare → çıkar → 7, 8, 10, 11, 12`, `<b>5</b> şekil`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 83, konu: CB, sayfa: 43,
    q: `<p>Kenar uzunlukları ${R(2, 12)} metre ve ${R(3, 8)} metre olan dikdörtgen biçimindeki duvar şekildeki gibi eş dikdörtgen parçalara ayrılmıştır. Bu parçaların bazılarının yarısı, bazılarının tamamı boyanarak şekildeki boyalı alan oluşturulmuştur.</p><div class="fig">${m83}</div>`
      + tablo([['Boya tüpü', 'Boyayabileceği alan (m²)'], ['A', R(6, 2)], ['B', R(6)], ['C', R(6, 4)]])
      + `<p class="ask">Tablodaki boya tüplerinin her birinden kullanıldığına göre, bu iş için <u>en az</u> kaç tüp kullanılmıştır?</p>`,
    opts: ['14', '11', '8', '6'], ans: 2,
    hints: [`Duvar 6 satır, 8 sütun: bir parça 2${R(2)} × ${R(3)}.`, `Boyalı alanı tam parça cinsinden say: iki dikey çubuk ve dört yarım parçalı iki çapraz.`],
    steps: [
      `Parça: ${F(R(2, 12), 6)} × ${F(R(3, 8), 8)} = 2${R(2)} × ${R(3)} → alanı 2${R(6)}`,
      `Dikey çubuklar: 4 + 4 = 8 parça. Çaprazlar: 4 yarım + 4 yarım = 4 parça. Toplam 12 parça → 24${R(6)} m²`,
      `a · 2 + b · 1 + c · 4 = 24 (a, b, c ≥ 1), a + b + c en az: c = 5 → 20, kalan 4 = 2 · 1 + 1 · 2 → a = 1, b = 2`,
      `En az 5 + 1 + 2 = <b>8</b> tüp`
    ],
    answer: `Cevap: <b>C</b>`
  }
  );
})();
