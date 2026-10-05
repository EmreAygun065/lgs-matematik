// MEB örnek soruları 61–80
(function () {
  const T4 = "10'un kuvvetleri", T5 = 'Bilimsel gösterim';

  const altigenler = svg(560, 150, (() => {
    const s = 34, h = s * Math.sqrt(3) / 2, y = 75;
    const hex = cx => `<polygon points="${[0, 60, 120, 180, 240, 300].map(a => `${(cx + s * Math.cos(a * Math.PI / 180)).toFixed(1)},${(y + s * Math.sin(a * Math.PI / 180)).toFixed(1)}`).join(' ')}" fill="#8a3b2b" stroke="var(--card)"/>`;
    let g = `<rect x="20" y="${y - h}" width="520" height="${2 * h}" fill="none" stroke="var(--fig-stroke)"/>`;
    [0, 1, 2].forEach(i => g += hex(20 + s + i * 2 * s));
    g += `<text x="330" y="${y + 6}" font-size="22">· · ·</text>` + hex(540 - s);
    g += `<text x="14" y="${y + h + 18}" font-size="14">A</text><text x="534" y="${y + h + 18}" font-size="14">B</text>`;
    return g;
  })(), 'Altıgen kutular köşeleri çakışacak biçimde dizilmiş');

  const duvar = svg(300, 270, `
    <rect x="30" y="30" width="140" height="210" fill="var(--card)" stroke="var(--fig-stroke)" stroke-width="1.5"/><text x="100" y="140" text-anchor="middle" font-size="16">A</text>
    <rect x="170" y="30" width="30" height="30" fill="var(--card)" stroke="var(--fig-stroke)" stroke-width="1.5"/><text x="185" y="50" text-anchor="middle" font-size="14">B</text>
    <rect x="200" y="30" width="60" height="30" fill="var(--card)" stroke="var(--fig-stroke)" stroke-width="1.5"/><text x="230" y="50" text-anchor="middle" font-size="14">C</text>
    <rect x="170" y="60" width="90" height="180" fill="var(--card)" stroke="var(--fig-stroke)" stroke-width="1.5"/><text x="215" y="155" text-anchor="middle" font-size="16">D</text>
    <text x="100" y="22" text-anchor="middle" font-size="13">4 m</text><text x="230" y="22" text-anchor="middle" font-size="13">2 m</text>
    <text x="22" y="140" text-anchor="end" font-size="13">7 m</text>`, 'Kare duvar A, B, C, D bölgelerine ayrılmış');

  ORNEK.push(
  {
    no: 61, konu: T4, sayfa: 31,
    q: `<p>Aşağıda üzerinde üslü ifadelerin yazılı olduğu 4 kart verilmiştir.</p>`
      + kartlar(['(−4)<sup>3</sup>', '64<sup>1</sup>', '(−2)<sup>6</sup>', '(−8)<sup>2</sup>'])
      + `<p>Birbirine denk olan üslü ifadelerin yazılı olduğu kartlar bir kutuya atılıyor.</p>`
      + `<p class="ask">Buna göre kutuya <u>atılmayan</u> kart aşağıdakilerden hangisidir?</p>`,
    opts: ['(−4)<sup>3</sup>', '64<sup>1</sup>', '(−2)<sup>6</sup>', '(−8)<sup>2</sup>'], ans: 0,
    hints: [`Negatif tabanın tek kuvveti negatif, çift kuvveti pozitiftir.`],
    steps: [
      `(−4)<sup>3</sup> = <b>−64</b> (tek kuvvet) · 64<sup>1</sup> = 64 · (−2)<sup>6</sup> = 64 · (−8)<sup>2</sup> = 64`,
      `64'e eşit üç kart kutuya atılır; <b>(−4)<sup>3</sup></b> dışarıda kalır.`
    ],
    answer: `Atılmayan kart (−4)<sup>3</sup>. Cevap: <b>A</b>`,
    trap: `(−4)<sup>3</sup>'ü 64 sanmak. Üç tane negatif sayının çarpımı negatiftir.`
  },
  {
    no: 62, konu: T4, sayfa: 31,
    q: `<p>Bir laboratuvardaki 2,048 · 10<sup>6</sup> adet kabın her birinin içerisinde 0,05 · 10<sup>4</sup> mililitre sıvı vardır. Bu kaplardaki sıvıların tamamı; 10 eş bölmeye ayrılmış 1 mililitrelik özdeş tüplere, her birinin 8 bölmesi dolu olacak biçimde paylaştırılıyor.</p>`
      + `<p class="ask">Buna göre, kullanılan toplam tüp sayısı aşağıdakilerden hangisidir?</p>`,
    opts: ['2<sup>7</sup> · 10<sup>7</sup>', '2<sup>8</sup> · 10<sup>7</sup>', '2<sup>7</sup> · 5<sup>7</sup>', '2<sup>9</sup> · 5<sup>7</sup>'], ans: 0,
    hints: [`Bir tüpe kaç mL sıvı konuyor? (10 bölmeden 8'i)`],
    steps: [
      `Toplam sıvı: 2,048 · 10<sup>6</sup> · 0,05 · 10<sup>4</sup> = 2,048 · 10<sup>6</sup> · 500 = <b>1,024 · 10<sup>9</sup> mL</b>`,
      `Bir tüpte 0,8 mL → tüp sayısı ${F('1,024 · 10<sup>9</sup>', '0,8')} = 1,28 · 10<sup>9</sup> = 128 · 10<sup>7</sup>`,
      `128 = 2<sup>7</sup> → <b>2<sup>7</sup> · 10<sup>7</sup></b>`
    ],
    answer: `<b>2<sup>7</sup> · 10<sup>7</sup></b> tüp. Cevap: <b>A</b>`,
    trap: `Tüpe 1 mL konduğunu sanmak: her tüpün sadece 8 bölmesi (0,8 mL) dolu.`
  },
  {
    no: 63, konu: T4, sayfa: 32,
    q: `<p>Çevresinin uzunluğu 0,15 · 10<sup>4</sup> mm olan düzgün altıgen şeklindeki özdeş çikolata kutuları dikdörtgen şeklindeki bir rafa dizilmiştir. Birer köşeleri çakışacak biçimde yerleştirilen kutulardan baştaki ve sondaki kutuların birer köşeleri ile rafın kenarları çakışmaktadır.</p>`
      + `<div class="fig">${altigenler}</div>`
      + `<p class="ask">Bu rafa dizilen kutu sayısı 20 olduğuna göre, A ile B noktaları arasındaki uzaklık kaç milimetredir?</p>`,
    opts: ['5 · 10<sup>3</sup>', '10<sup>4</sup>', '5 · 10<sup>7</sup>', '10<sup>8</sup>'], ans: 1,
    hints: [`Düzgün altıgenin karşılıklı iki köşesi arası, kenarın kaç katıdır?`],
    steps: [
      `Çevre 1500 mm → kenar 1500 / 6 = <b>250 mm</b>`,
      `Köşeden köşeye genişlik = 2 kenar = <b>500 mm</b>`,
      `20 kutu: 20 · 500 = 10 000 = <b>10<sup>4</sup> mm</b>`
    ],
    answer: `AB = <b>10<sup>4</sup> mm</b>. Cevap: <b>B</b>`,
    trap: `Kutunun genişliğini bir kenar (250) almak → 5 · 10<sup>3</sup> (A şıkkı).`
  },
  {
    no: 64, konu: T4, sayfa: 32,
    q: `<p>A, B, C ve D markalı dört yazıcının bir sayfalık tanıtım afişini yazmak için harcadıkları mürekkep miktarları: A: 404 · 10<sup>−9</sup> L, B: 0,44 · 10<sup>−6</sup> L, C: 4 · 10<sup>−7</sup> L, D: 44,4 · 10<sup>−8</sup> L.</p>`
      + `<p>Başlangıçta her birinde eşit miktarlarda mürekkep bulunan bu yazıcıların her biri ile bu afişlerden eşit sayıda yazdırılıyor.</p>`
      + `<p class="ask">Son durumda A, B, C ve D yazıcılarında kalan mürekkep miktarları litre cinsinden sırasıyla a, b, c ve d olmak üzere aşağıdaki sıralamalardan hangisi doğrudur?</p>`,
    opts: ['c > a > b > d', 'd > b > a > c', 'd > a > b > c', 'c > b > a > d'], ans: 0,
    hints: [`Hepsini aynı kuvvete (10<sup>−7</sup>) çevir. Az harcayanda çok mürekkep kalır.`],
    steps: [
      `A: 4,04 · 10<sup>−7</sup> · B: 4,4 · 10<sup>−7</sup> · C: <b>4 · 10<sup>−7</sup></b> · D: 4,44 · 10<sup>−7</sup>`,
      `Harcama: C &lt; A &lt; B &lt; D → kalan ters sırada: <b>c > a > b > d</b>`
    ],
    answer: `c > a > b > d. Cevap: <b>A</b>`,
    trap: `Harcama sıralamasını kalan sıralaması sanmak (D şıkkına benzer ters sıra).`
  },
  {
    no: 65, konu: T4, sayfa: 33,
    q: `<p>Telefon ve bilgisayarlarda çözünürlük o cihazın ekranındaki piksel sayısını belirtmek için kullanılır. Örneğin bir bilgisayarın çözünürlüğü 1920 x 1080 olarak ayarlandığında ekranında oluşan piksel sayısı 1920 x 1080 = 2 073 600 olur.</p>`
      + `<p class="ask">Ahmet bilgisayarının çözünürlüğünü 1400 x 1050 olarak ayarladığında ekranında oluşan piksel sayısı aşağıdakilerden hangisi olur?</p>`,
    opts: ['1,47 · 10<sup>4</sup>', '1,47 · 10<sup>5</sup>', '1,47 · 10<sup>6</sup>', '1,47 · 10<sup>7</sup>'], ans: 2,
    hints: [`1400 = 14 · 10<sup>2</sup>, 1050 = 105 · 10`],
    steps: [
      `1400 · 1050 = 14 · 105 · 10<sup>3</sup> = 1470 · 10<sup>3</sup> = <b>1 470 000</b>`,
      `Bilimsel gösterim: <b>1,47 · 10<sup>6</sup></b>`
    ],
    answer: `<b>1,47 · 10<sup>6</sup></b> piksel. Cevap: <b>C</b>`,
    trap: `Sıfırları sayarken birini kaçırmak. Kontrol: 1920 × 1080 ≈ 2 · 10<sup>6</sup>; 1400 × 1050 de aynı büyüklükte olmalı.`
  },
  {
    no: 66, konu: T4, sayfa: 33,
    q: `<p>Güneş enerjisi panelli sokak lambaları, gün içinde panelde depolanan elektrik enerjisini hava karardığında otomatik olarak yanarak tüketmeye başlamaktadır. Bir sokak lambasının dikdörtgen şeklindeki güneş enerjisi paneli, gün içinde üzerine düşen güneş enerjisinin ${F(1, 3)}'ini elektrik enerjisine dönüştürüp depolamaktadır.</p>`
      + `<p>Yandığında saatte 1,8 · 10<sup>4</sup> joule elektrik enerjisi tüketen bu sokak lambasının bulunduğu bölgede günlük santimetrekareye ortalama 3,24 · 10<sup>2</sup> joule güneş enerjisi düştüğü kabul edilmektedir.</p>`
      + `<p class="ask">Bu sokak lambasının, panelinde depolanan elektrik enerjisini kullanarak tam 9 saat yanması beklendiğine göre bu panelin üst yüzeyinin alanı kaç santimetrekaredir?</p>`,
    opts: ['900', '1200', '1500', '1800'], ans: 2,
    hints: [`9 saatte kaç joule elektrik lazım? Bunun için panele bunun 3 katı güneş enerjisi düşmeli.`],
    steps: [
      `Gerekli elektrik: 9 · 1,8 · 10<sup>4</sup> = <b>1,62 · 10<sup>5</sup> J</b>`,
      `Güneşin ${F(1, 3)}'i elektriğe dönüşür → gereken güneş enerjisi 3 · 1,62 · 10<sup>5</sup> = <b>4,86 · 10<sup>5</sup> J</b>`,
      `Alan: ${F('4,86 · 10<sup>5</sup>', '3,24 · 10<sup>2</sup>')} = 1,5 · 10<sup>3</sup> = <b>1500 cm²</b>`
    ],
    answer: `Panel alanı <b>1500 cm²</b>. Cevap: <b>C</b>`,
    trap: `${F(1, 3)} verimi unutmak (alan 500 çıkar) ya da 3'e bölmek (alan 167 çıkar).`
  },
  {
    no: 67, konu: T4, sayfa: 34,
    q: `<p>Dünyada 1,4 milyar km<sup>3</sup> civarında su vardır. Bu suyun %97,5'i tuzlu su, %2,5'i tatlı sudur. Tatlı suyun %68,9'u buzullar ve kalıcı kar tabakaları, %30,8'i yeraltı suları, toprak nemi, bataklık ve permafrost, %0,3'ü nehirler ve göllerdir.</p>`
      + `<p class="ask">Buna göre nehirler ve gölleri oluşturan su miktarı metreküp cinsinden aşağıdakilerden hangisine eşittir? (1 km<sup>3</sup> = 10<sup>9</sup> m<sup>3</sup>)</p>`,
    opts: ['1,05 · 10<sup>14</sup>', '3,5 · 10<sup>16</sup>', '4,2 · 10<sup>15</sup>', '4,2 · 10<sup>12</sup>'], ans: 0,
    hints: [`Nehir ve göller tatlı suyun %0,3'ü; tatlı su da tüm suyun %2,5'i.`],
    steps: [
      `1,4 milyar km³ = 1,4 · 10<sup>9</sup> km³. Tatlı su: %2,5 → 1,4 · 10<sup>9</sup> · 25 · 10<sup>−3</sup> = <b>3,5 · 10<sup>7</sup> km³</b>`,
      `Nehir–göl: %0,3 → 3,5 · 10<sup>7</sup> · 3 · 10<sup>−3</sup> = <b>1,05 · 10<sup>5</sup> km³</b>`,
      `m³'e çevir: 1,05 · 10<sup>5</sup> · 10<sup>9</sup> = <b>1,05 · 10<sup>14</sup> m³</b>`
    ],
    answer: `<b>1,05 · 10<sup>14</sup> m³</b>. Cevap: <b>A</b>`,
    trap: `%0,3'ü tüm suyun yüzdesi sanmak (4,2 · 10<sup>15</sup> → C). Nehirler, tatlı suyun %0,3'üdür.`
  },
  {
    no: 68, konu: T4, sayfa: 34,
    q: `<p>A, B, C, D mikroorganizmaları mikroskop altında büyütülerek ayrı ayrı incelenmiştir.</p>`
      + tablo([['', 'Gerçek Büyüklük (mm)', 'Mikroskopta Görülen (mm)'], ['A', '2,5·10<sup>−1</sup>', '3,75'], ['B', '3·10<sup>−2</sup>', '3'], ['C', '1·10<sup>−4</sup>', '0,1'], ['D', '2·10<sup>−3</sup>', '2,4']])
      + `<p class="ask">Bu inceleme sırasında hangi canlı için kullanılan büyütme oranı <u>en küçüktür</u>?</p>`,
    opts: ['A mikroorganizması', 'B mikroorganizması', 'C mikroorganizması', 'D mikroorganizması'], ans: 0, long: true,
    hints: [`Büyütme oranı = görülen büyüklük ÷ gerçek büyüklük`],
    steps: [
      `A: 3,75 / 0,25 = <b>15</b> · B: 3 / 0,03 = <b>100</b>`,
      `C: 0,1 / 0,0001 = <b>1000</b> · D: 2,4 / 0,002 = <b>1200</b>`,
      `En küçük oran <b>A</b>`
    ],
    answer: `En küçük büyütme A'da. Cevap: <b>A</b>`,
    trap: `Mikroskopta en küçük görüneni (C) seçmek. Önemli olan görünen boyut değil, büyütme oranı.`
  },
  {
    no: 69, konu: T4, sayfa: 35,
    q: `<p>Bir dönem kullanılan kâğıt paraların arka yüzlerinde Mehmet Akif Ersoy, Fatih Sultan Mehmet, Mimar Sinan, Mevlâna Celaleddin Rumi portrelerinden biri ya da İzmir Saat Kulesi resmi bulunmaktaydı. Mehmet Akif portreli para 100 liradır.</p>`
      + `<p>Barış Manço'nun “Anahtar” şarkısındaki sözlere göre bu paraların değerleri arasında şu ilişkiler vardır: <b>1 Saat Kulesi = 5 Akif</b>, <b>1 Fatih = 2 Saat Kulesi</b>, <b>1 Mevlâna = 5 Fatih</b>, <b>1 Sinan = 2 Mevlâna</b>.</p>`
      + `<p class="note kaynak">Şarkı sözlerinin kendisi için kaynak PDF'in 35. sayfasına bakabilirsiniz.</p>`
      + `<p>Hasan Amca oturduğu evi satın almak için o dönem üzerinde Mimar Sinan portresi olan kâğıt paralardan 2<sup>9</sup> tane ödemiştir.</p>`
      + `<p class="ask">Buna göre Hasan Amca'nın bu evi satın almak için aynı dönemde üzerinde Mehmet Akif Ersoy portresi olan kâğıt paralardan kaç tane ödemesi gerekirdi?</p>`,
    opts: ['5,12 · 10<sup>5</sup>', '2,56 · 10<sup>5</sup>', '5,12 · 10<sup>4</sup>', '2,56 · 10<sup>4</sup>'], ans: 2,
    hints: [`1 Sinan kaç Akif eder? Zinciri adım adım çarp.`],
    steps: [
      `1 Sinan = 2 Mevlâna = 2 · 5 Fatih = 10 · 2 Kule = 20 · 5 Akif = <b>100 Akif</b>`,
      `2<sup>9</sup> Sinan = 512 · 100 = 51 200 Akif`,
      `51 200 = <b>5,12 · 10<sup>4</sup></b>`
    ],
    answer: `<b>5,12 · 10<sup>4</sup></b> tane. Cevap: <b>C</b>`,
    trap: `Para değerlerini TL olarak çarpıp sonucu “adet” sanmak (5,12 · 10<sup>6</sup> lira). Soru Akif'li paranın <b>adedini</b> soruyor.`
  },
  {
    no: 70, konu: T4, sayfa: 35,
    q: `<p>Bir deney düzeneğinde yarıçapları 0,0045 · 10<sup>3</sup>, 0,00485 · 10<sup>3</sup> ve 0,000455 · 10<sup>4</sup> cm olan küre biçiminde üç farklı top kullanılmıştır. Bu toplar ısıtılarak genleşmeleri ve her birinin yarıçapının %20 artması sağlanmıştır.</p>`
      + `<p>Isıtılmadan önce topların üçü de deney düzeneğindeki daire biçimindeki boşluktan geçebilirken ısıtıldıktan sonra bu toplardan sadece iki tanesi boşluktan geçebilmiştir.</p>`
      + `<p class="ask">Bu deney düzeneğindeki boşluğun <u>çapının</u> santimetre cinsinden değeri aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['10', '11', '12', '13'], ans: 1,
    hints: [`Yarıçapları ondalık sayıya çevir ve çapı bul (2 katı).`],
    steps: [
      `Yarıçaplar: 4,5 · 4,85 · 4,55 cm → çaplar <b>9 · 9,7 · 9,1</b>`,
      `%20 artış (×1,2): <b>10,8 · 11,64 · 10,92</b>`,
      `Önce hepsi geçti → boşluk > 9,7. Sonra yalnız iki top geçti → 10,92 &lt; boşluk &lt; 11,64 → <b>11</b>`
    ],
    answer: `Boşluğun çapı 11 cm olabilir. Cevap: <b>B</b>`,
    trap: `Yarıçapları boşluğun çapıyla karşılaştırmak. Soru <u>çap</u> diyor; top çapı = 2 · yarıçap.`
  },
  {
    no: 71, konu: T4, sayfa: 36,
    q: `<p>Harita üzerindeki iki nokta arasındaki uzaklık, bu noktalar arasındaki gerçek uzaklığa bölünerek haritanın ölçeği bulunur. Ölçekleri farklı 4 harita üzerinde aynı cetvelle yapılan ölçümler ve gerçek uzaklıklar aşağıdadır.</p>`
      + tablo([['Harita', 'Noktalar', 'Cetvelle ölçülen', 'Gerçek uzaklık (km)'], ['1', 'A ile B', '3 cm', '0,21 · 10<sup>5</sup>'], ['2', 'C ile D', '2 cm', '1,2 · 10<sup>4</sup>'], ['3', 'E ile F', '5 cm', '0,015 · 10<sup>6</sup>'], ['4', 'G ile H', '4 cm', '0,0008 · 10<sup>7</sup>']])
      + `<p class="note kaynak">Cetvel ölçümleri kaynak PDF'in 36. sayfasındaki haritalardan okunmuştur.</p>`
      + `<p class="ask">Buna göre bu haritalardan hangisinin ölçeği <u>en küçüktür</u>? (1 km = 10<sup>5</sup> cm)</p>`,
    opts: ['1. Harita', '2. Harita', '3. Harita', '4. Harita'], ans: 0,
    hints: [`Gerçek uzaklıkları cm'ye çevir. Ölçek = harita uzunluğu ÷ gerçek uzunluk.`],
    steps: [
      `Gerçek (cm): AB 2,1 · 10<sup>9</sup> · CD 1,2 · 10<sup>9</sup> · EF 1,5 · 10<sup>9</sup> · GH 8 · 10<sup>8</sup>`,
      `Ölçekler: 1. ${F(3, '2,1 · 10<sup>9</sup>')} = ${F(1, '7 · 10<sup>8</sup>')} · 2. ${F(1, '6 · 10<sup>8</sup>')} · 3. ${F(1, '3 · 10<sup>8</sup>')} · 4. ${F(1, '2 · 10<sup>8</sup>')}`,
      `Paydası en büyük olan en küçük ölçektir → <b>1. harita</b>`
    ],
    answer: `En küçük ölçek 1. haritada. Cevap: <b>A</b>`,
    trap: `En küçük gerçek uzaklığa (GH) bakıp 4. haritayı seçmek. Ölçek bir oran; her haritada ölçülen uzunluk da farklı.`
  },
  {
    no: 72, konu: T4, sayfa: 37,
    q: `<p>Dirençlerin ohm değeri üzerlerindeki renkli şeritlerle hesaplanır: soldan ilk iki şeridin rakam karşılıkları yan yana yazılarak iki basamaklı bir sayı oluşturulur, bu sayı üçüncü şeridin çarpanı ile çarpılır. Dördüncü şerit toleransı (olabilecek sapmayı) gösterir.</p>`
      + tablo([['Renk', 'Kahverengi', 'Sarı', 'Yeşil', 'Altın', 'Gümüş'], ['Rakam', '1', '4', '5', '–', '–'], ['Çarpan', '10<sup>1</sup>', '10<sup>4</sup>', '10<sup>5</sup>', '–', '–'], ['Tolerans', '%1', '–', '%0,5', '%5', '%10']])
      + `<p>Örnek: kahverengi-siyah-turuncu-altın → 10 · 10<sup>3</sup> = 10 000 ohm, %5 sapma ile 9500 – 10 500 ohm.</p>`
      + kaynak(37)
      + `<p class="ask">Üzerindeki şeritlerin renkleri soldan sağa doğru sırasıyla yeşil, kahverengi, sarı ve gümüş olan direncin değeri, ohm cinsinden aşağıdakilerden hangisine eşit olabilir?</p>`,
    opts: ['4,3 · 10<sup>4</sup>', '4,9 · 10<sup>4</sup>', '5,2 · 10<sup>5</sup>', '6,2 · 10<sup>5</sup>'], ans: 2,
    hints: [`Yeşil 5, kahverengi 1 → 51. Sarının çarpanı?`],
    steps: [
      `Sayı: yeşil–kahverengi → <b>51</b>; çarpan sarı → 10<sup>4</sup> → 51 · 10<sup>4</sup> = <b>5,1 · 10<sup>5</sup></b> ohm`,
      `Gümüş: %10 → 5,1 · 10<sup>4</sup> ohm sapma → <b>4,59 · 10<sup>5</sup> ile 5,61 · 10<sup>5</sup></b> arası`,
      `Bu aralıktaki şık: <b>5,2 · 10<sup>5</sup></b>`
    ],
    answer: `5,2 · 10<sup>5</sup> ohm olabilir. Cevap: <b>C</b>`,
    trap: `Sarıyı rakam olarak (4) kullanmak: üçüncü şerit çarpandır.`
  },
  {
    no: 73, konu: T4, sayfa: 38,
    q: `<p>Bir spor kompleksinde futbol sahası 44 m × 80 m, basketbol sahası 28 m × 15 m, voleybol sahası 20 m × 12 m boyutlarındadır. Aynı anda 22 kişi futbol, 10 kişi basketbol ve 12 kişi voleybol maçı yapmaktadır.</p>`
      + `<p>Sahaların her birinin alanı, o sahadaki oyuncu sayılarına bölünerek her saha için oyuncu başına düşen santimetrekare cinsinden alanlar hesaplanmıştır.</p>`
      + `<p class="ask">Buna göre aşağıdakilerden hangisi bu hesaplamada bulunması gereken değerlerden biri <u>değildir</u>? (1 m<sup>2</sup> = 10<sup>4</sup> cm<sup>2</sup>)</p>`,
    opts: ['1,6 · 10<sup>6</sup>', '4,2 · 10<sup>5</sup>', '2 · 10<sup>5</sup>', '2,4 · 10<sup>5</sup>'], ans: 3,
    hints: [`Her saha için alan ÷ oyuncu sayısı (m²), sonra × 10<sup>4</sup>.`],
    steps: [
      `Futbol: 44 · 80 / 22 = 160 m² = <b>1,6 · 10<sup>6</sup> cm²</b>`,
      `Basketbol: 28 · 15 / 10 = 42 m² = <b>4,2 · 10<sup>5</sup> cm²</b>`,
      `Voleybol: 20 · 12 / 12 = 20 m² = <b>2 · 10<sup>5</sup> cm²</b> → 2,4 · 10<sup>5</sup> bulunmaz`
    ],
    answer: `2,4 · 10<sup>5</sup> bulunmaz. Cevap: <b>D</b>`,
    trap: `Voleybol sahasının alanını (240 m² = 2,4 · 10<sup>6</sup>) oyuncu sayısına bölmeyi unutmak.`
  },
  {
    no: 74, konu: T4, sayfa: 38,
    q: `<p>Bir ülkede kişi başına düşen tarım alanlarının değişimi ile ilgili bir araştırmanın sonuçları:</p>`
      + `<p>• 100 yıl önce kişi başına düşen tarım alanı miktarı 2,048 · 10<sup>7</sup> metrekaredir.<br>• 100 yıllık süre içerisinde, ülkenin nüfusu her 25 yılda bir 2 katına çıkarken ülkedeki tarım alanlarının miktarı her 50 yılda bir yarıya düşmüştür.</p>`
      + `<p class="ask">Buna göre araştırmanın yapıldığı yıl ülkede kişi başına düşen tarım alanı miktarı kaç metrekaredir?</p>`,
    opts: ['1,6 · 10<sup>3</sup>', '3,2 · 10<sup>5</sup>', '4 · 10<sup>5</sup>', '8 · 10<sup>6</sup>'], ans: 1,
    hints: [`100 yılda nüfus kaç katına, tarım alanı kaçta birine iner?`],
    steps: [
      `Nüfus: 100 / 25 = 4 kez ikiye katlanır → <b>2<sup>4</sup> = 16 katı</b>`,
      `Tarım alanı: 100 / 50 = 2 kez yarıya iner → <b>${F(1, 4)}</b>'üne`,
      `Kişi başı: ${F(1, 4)} ÷ 16 = ${F(1, 64)} → 2,048 · 10<sup>7</sup> / 64 = 0,032 · 10<sup>7</sup> = <b>3,2 · 10<sup>5</sup></b>`
    ],
    answer: `<b>3,2 · 10<sup>5</sup> m²</b>. Cevap: <b>B</b>`,
    trap: `Sadece nüfus artışını (÷16 → 1,28 · 10<sup>6</sup>) ya da sadece tarım azalışını hesaba katmak.`
  },
  {
    no: 75, konu: T4, sayfa: 39,
    q: `<p>Her birinde 10 adet bilye bulunan 6 küre verilmiştir. Bu kürelerin her biri birer kez döndürülüp durdurulduğunda her birinden <u>en fazla</u> 10 bilye altlarındaki kutucuklara düşüyor.</p>`
      + `<p>Kutucuklar sırasıyla ×10<sup>2</sup>, ×10<sup>1</sup>, ×10<sup>0</sup>, ×10<sup>−1</sup>, ×10<sup>−2</sup>, ×10<sup>−3</sup> ile etiketlidir. Bilye düşen kutucuklardaki bilye sayısı, yanlarındaki 10'un kuvveti ile gösterilen üslü ifadelere katsayı olarak yazılıyor. Daha sonra oluşan bu sayılar toplanıp bir ondalık gösterim elde ediliyor.</p>`
      + `<p class="ask">Bu şekilde elde edilen ondalık gösterim 100,1 olduğuna göre kutucuklara düşen toplam bilye sayısı <u>en fazla</u> kaçtır?</p>`,
    opts: ['56', '47', '38', '20'], ans: 1,
    hints: [`Bir kutucuğa 10 bilye düşmesi, bir üst basamağa 1 eklemek demektir (10 · 10<sup>−3</sup> = 10<sup>−2</sup>).`, `En çok bilye için küçük basamakları olabildiğince doldur.`],
    steps: [
      `100,1'i oluştururken küçük basamaklara çok bilye koyup “elde” ile yukarı taşıyabiliriz.`,
      `10<sup>−3</sup>: <b>10</b> bilye (= 0,01) · 10<sup>−2</sup>: <b>9</b> (0,09 → toplam 0,1) · 10<sup>−1</sup>: <b>10</b> (= 1, toplam 1,1)`,
      `10<sup>0</sup>: <b>9</b> (toplam 10,1) · 10<sup>1</sup>: <b>9</b> (toplam 100,1) · 10<sup>2</sup>: <b>0</b>`,
      `Toplam bilye: 10 + 9 + 10 + 9 + 9 + 0 = <b>47</b>`
    ],
    answer: `En fazla <b>47</b> bilye. Cevap: <b>B</b>`,
    trap: `Sadece basamak değerlerini yazmak (1 + 0 + 0 + 1 = 2 bilye). Soru <u>en fazla</u> diyor; her kutucuğa 10 bilyeye kadar düşebilir.`
  },
  {
    no: 76, konu: T5, sayfa: 40,
    q: `<p>Bir çiftçi, uzun kenar uzunluğu 4 ile 5 metre arasında olan dikdörtgen şeklindeki tarlasına, iki farklı damlama borusunu tarlanın uzun kenarına paralel olacak şekilde döşeyerek sulama yapacaktır. Bu borulardan birinde 40 cm aralıklarla, diğerinde 32 cm aralıklarla damlama ucu bulunmaktadır.</p>`
      + `<p>Boruların başında ve sonunda damlama ucu <u>bulunmamakta</u> olup damlama uçlarının her biri her 15 saniyede 0,2 litre su akıtmaktadır.</p>`
      + kaynak(40)
      + `<p class="ask">Buna göre, bu tarlaya 1 saatte akıtılan su miktarının mililitre cinsinden bilimsel gösterimi aşağıdakilerden hangisidir?</p>`,
    opts: ['1,296 · 10<sup>6</sup>', '1,2 · 10<sup>6</sup>', '2 · 10<sup>4</sup>', '1,2 · 10<sup>3</sup>'], ans: 1,
    hints: [`Boru boyu hem 40'ın hem 32'nin katı ve 400–500 cm arasında olmalı.`],
    steps: [
      `EKOK(40, 32) = 160 → 400 ile 500 arasında: <b>480 cm</b>`,
      `Damlatıcılar (uçlarda yok): 480/40 − 1 = <b>11</b> ve 480/32 − 1 = <b>14</b> → toplam <b>25</b>`,
      `Bir uç 1 saatte: 3600/15 = 240 · 0,2 L = <b>48 L</b> → 25 · 48 = 1200 L = 1,2 · 10<sup>6</sup> mL`
    ],
    answer: `<b>1,2 · 10<sup>6</sup> mL</b>. Cevap: <b>B</b>`,
    trap: `Uçlardaki noktaları da damlatıcı saymak (12 + 15 = 27 → 1,296 · 10<sup>6</sup>, A şıkkı).`
  },
  {
    no: 77, konu: T5, sayfa: 40,
    q: `<p>A ve B sayıları 10'un tam sayı kuvvetleri kullanılarak ifade edilmiştir: <b>A = 1003,4 · 10<sup>x</sup></b>, <b>B = 0,121 · 10<sup>x+3</sup></b>.</p>`
      + `<p>Ali ve Ege, B sayısından büyük, A sayısından küçük olacak biçimde birer sayı seçmişlerdir.</p>`
      + `<p class="ask">Ali'nin seçtiği sayının bilimsel gösterimi 1 · 10<sup>23</sup> olduğuna göre, Ege'nin seçtiği sayı aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['102 · 10<sup>22</sup>', '51,6 · 10<sup>22</sup>', '1,004 · 10<sup>23</sup>', '85 · 10<sup>21</sup>'], ans: 3,
    hints: [`A ve B'yi bilimsel gösterimle yaz. 10<sup>23</sup> arada olmalı → x'i bul.`],
    steps: [
      `A = 1,0034 · 10<sup>x+3</sup>, B = 1,21 · 10<sup>x+2</sup>`,
      `B &lt; 10<sup>23</sup> &lt; A → x + 3 = 23 → <b>x = 20</b>: A = 1,0034 · 10<sup>23</sup>, B = 1,21 · 10<sup>22</sup>`,
      `Şıklar: A) 1,02 · 10<sup>24</sup> ✗ · B) 5,16 · 10<sup>23</sup> ✗ · C) 1,004 · 10<sup>23</sup> > 1,0034 · 10<sup>23</sup> ✗ · D) 8,5 · 10<sup>22</sup> ✓`
    ],
    answer: `Ege 85 · 10<sup>21</sup> seçmiş olabilir. Cevap: <b>D</b>`,
    trap: `1,004 ile 1,0034'ü karşılaştırırken basamak sayısına aldanmak: 1,0040 > 1,0034.`
  },
  {
    no: 78, konu: T5, sayfa: 41,
    q: `<p>Magenta, cyan ve sarı boyalar eşit hacimlerde karıştırıldığında: magenta + cyan = mavi, magenta + sarı = kırmızı, cyan + sarı = yeşil, magenta + sarı + cyan = siyah elde edilir.</p>`
      + `<p>Kare biçimindeki bir duvar, kenar uzunlukları metre cinsinden birer doğal sayı olan dört bölgeye aşağıdaki gibi ayrılmıştır. B bölgesi karesel, diğerleri dikdörtgensel bölgelerdir.</p>`
      + `<div class="fig">${duvar}</div>`
      + `<p>Bu duvar her bir bölgesi farklı renk olacak biçimde mavi, kırmızı, yeşil ve siyah renklerinden birine, her 1 metrekare için 3 · 10<sup>−7</sup> metreküp boya kullanılarak boyanacaktır.</p>`
      + `<p class="ask">Bu boyama işlemi en az miktarda sarı boya kullanılarak gerçekleştirileceğine göre, kullanılacak sarı boya miktarının metreküp cinsinden bilimsel gösterimi aşağıdakilerden hangisidir?</p>`,
    opts: ['6,1 · 10<sup>−6</sup>', '6,05 · 10<sup>−6</sup>', '3,25 · 10<sup>−6</sup>', '2,25 · 10<sup>−6</sup>'], ans: 3,
    hints: [`Önce dört bölgenin alanını bul (duvar 7 × 7).`, `Mavide hiç sarı yok; siyahta 1/3, kırmızı ve yeşilde 1/2 sarı var.`],
    steps: [
      `Duvar 7 × 7. A: 4 × 7 = <b>28</b> · B: 1 × 1 = <b>1</b> · C: 2 × 1 = <b>2</b> · D: 3 × 6 = <b>18</b> m²`,
      `En az sarı için en büyük alan (A) <b>mavi</b>, ikinci büyük (D) <b>siyah</b>, küçükler (B, C) kırmızı ve yeşil.`,
      `Sarı boyalı alan karşılığı: 18 · ${F(1, 3)} + (1 + 2) · ${F(1, 2)} = 6 + 1,5 = <b>7,5 m²</b>`,
      `Sarı boya: 7,5 · 3 · 10<sup>−7</sup> = 22,5 · 10<sup>−7</sup> = <b>2,25 · 10<sup>−6</sup> m³</b>`
    ],
    answer: `<b>2,25 · 10<sup>−6</sup> m³</b> sarı boya. Cevap: <b>D</b>`,
    trap: `Siyahı en büyük alana vermek: siyahta da sarı var (1/3). Hiç sarı içermeyen tek renk mavi.`
  },
  {
    no: 79, konu: T5, sayfa: 41,
    q: `<p>Yetişkin bir ağacın bir saatte ortalama 2,3 kg karbondioksit emilimi yaptığı bilinmektedir. 6 Kasım 2018 tarihinde “Fidanlar, Fidanlarla Büyüyor!” projesi kapsamında 81 ilde eş zamanlı olarak 10 milyon fidan dikimi yapılmıştır.</p>`
      + `<p class="ask">Proje kapsamında dikilen 10 milyon fidanın tamamının yetişkinliğe erişmesi durumunda bir saatte yapacağı ortalama karbondioksit emilimi miktarının ton cinsinden bilimsel gösterimi aşağıdakilerden hangisidir? (1 ton = 1000 kg)</p>`,
    opts: ['2,3 · 10<sup>4</sup>', '2,3 · 10<sup>5</sup>', '2,3 · 10<sup>6</sup>', '2,3 · 10<sup>7</sup>'], ans: 0,
    hints: [`10 milyon = 10<sup>7</sup>`],
    steps: [
      `10<sup>7</sup> · 2,3 kg = <b>2,3 · 10<sup>7</sup> kg</b>`,
      `Tona çevir: 2,3 · 10<sup>7</sup> / 10<sup>3</sup> = <b>2,3 · 10<sup>4</sup> ton</b>`
    ],
    answer: `<b>2,3 · 10<sup>4</sup> ton</b>. Cevap: <b>A</b>`,
    trap: `kg'dan tona çevirmeyi unutmak (2,3 · 10<sup>7</sup> → D).`
  },
  {
    no: 80, konu: T5, sayfa: 42,
    q: `<p>“Kutuplar üzerinde keşif uçuşları gerçekleştiren bir ekip, dikdörtgenler prizması görünümünde bir buzdağı keşfetti. Bölgede incelemeler yapan uzmanlar, buzdağının uzunluğunun 1600 metre, genişliğinin 1000 metre, suyun üzerindeki yüksekliğinin 50 metre olduğunu ve buzdağının görünen kısmının buzdağının %20'sini oluşturduğunu tahmin etmektedirler.”</p>`
      + `<p class="ask">Uzmanların tahminlerine göre bu haberdeki buzdağının tamamının hacminin metreküp cinsinden bilimsel gösterimi aşağıdakilerden hangisidir?</p>`,
    opts: ['8·10<sup>7</sup>', '2,4·10<sup>8</sup>', '4·10<sup>8</sup>', '8·10<sup>8</sup>'], ans: 2,
    hints: [`Görünen kısmın hacmini bul. Bu, tamamın %20'si = ${F(1, 5)}'i.`],
    steps: [
      `Görünen kısım: 1600 · 1000 · 50 = 8 · 10<sup>7</sup> m³`,
      `Bu, tamamın ${F(1, 5)}'i → tamamı 5 · 8 · 10<sup>7</sup> = 40 · 10<sup>7</sup> = <b>4 · 10<sup>8</sup> m³</b>`
    ],
    answer: `Buzdağının tamamı <b>4 · 10<sup>8</sup> m³</b>. Cevap: <b>C</b>`,
    trap: `Görünen kısmı (8 · 10<sup>7</sup>) cevap sanmak ya da %20'yi 1/20 alıp 1,6 · 10<sup>9</sup> bulmak.`
  }
  );
})();
