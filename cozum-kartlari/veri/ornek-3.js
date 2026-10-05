// MEB örnek soruları 41–60
(function () {
  const T2 = 'Temel kurallar', T3 = 'Ondalık çözümleme', T4 = "10'un kuvvetleri";

  // Sıramatik ekranı: '_' yanmayan hane
  const ekran = (gise, sira) => {
    const hane = c => `<span class="seg ${c === '_' ? 'off' : ''}">${c === '_' ? '8' : c}</span>`;
    return `<span class="ekran"><small>Gişe</small>${[...gise].map(hane).join('')}<small>Sıra</small>${[...sira].map(hane).join('')}</span>`;
  };

  const kart2 = svg(170, 130, `
    <rect x="60" y="5" width="50" height="40" fill="#8b6a35" stroke="var(--fig-stroke)"/>
    <rect x="10" y="45" width="50" height="40" fill="#8b6a35" stroke="var(--fig-stroke)"/><rect x="60" y="45" width="50" height="40" fill="#8b6a35" stroke="var(--fig-stroke)"/><rect x="110" y="45" width="50" height="40" fill="#8b6a35" stroke="var(--fig-stroke)"/>
    <rect x="10" y="85" width="50" height="40" fill="#8b6a35" stroke="var(--fig-stroke)"/><rect x="60" y="85" width="50" height="40" fill="#8b6a35" stroke="var(--fig-stroke)"/><rect x="110" y="85" width="50" height="40" fill="#8b6a35" stroke="var(--fig-stroke)"/>`, '2. kart: 7 kareden oluşan şekil');

  ORNEK.push(
  {
    no: 41, konu: T2, sayfa: 20,
    q: `<p>Her ay yayımlanan dijital bir derginin bir aylık dosya boyutu 2<sup>8</sup> MB'tır. Orhan, bu dijital derginin 2018-2019 yıllarına ait yayınlarının <u>tamamını</u> 8 GB'lık boş bir belleğe yükleyerek arşivlemiştir.</p>`
      + `<p class="ask">Buna göre, bu arşivleme işleminden sonra bellekteki boş alan MB cinsinden aşağıdakilerden hangisine eşittir? (1 GB = 2<sup>10</sup> MB)</p>`,
    opts: ['2<sup>9</sup>', '2<sup>10</sup>', '2<sup>11</sup>', '2<sup>12</sup>'], ans: 2,
    hints: [`2018-2019 = 2 yıl = kaç ay?`],
    steps: [
      `24 ay · 2<sup>8</sup> MB = 3 · 2<sup>3</sup> · 2<sup>8</sup> = <b>3 · 2<sup>11</sup> MB</b>`,
      `Bellek: 8 GB = 2<sup>3</sup> · 2<sup>10</sup> = <b>2<sup>13</sup> MB</b> = 4 · 2<sup>11</sup>`,
      `Boş alan: 4 · 2<sup>11</sup> − 3 · 2<sup>11</sup> = <b>2<sup>11</sup> MB</b>`
    ],
    answer: `Boş alan <b>2<sup>11</sup> MB</b>. Cevap: <b>C</b>`,
    trap: `2018-2019'u tek yıl (12 ay) saymak ya da 2<sup>13</sup> − 2<sup>11</sup>'i 2<sup>2</sup> sanmak. Çıkarmada üsler çıkarılmaz!`
  },
  {
    no: 42, konu: T2, sayfa: 21,
    q: `<p>Kare biçimindeki bir karton 25 eş kareye bölünüp bu karelerden 4 tanesi aşağıdaki gibi boyanmıştır.</p>`
      + izgara([['y:Sarı', '', '', '', 'b:Mavi'], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['b:Mavi', '', '', '', 'b:Mavi']])
      + `<p>Bu karelerin her birine aşağıdaki adımlara göre birer üslü ifade yazılacaktır.</p>`
      + `<p>1. Adım: Sarı renkli karenin içine bir üslü ifade yazın.<br>2. Adım: 1. satırdaki karelerin her birine, tabanları birbirine eşit ve kuvvetleri soldan sağa doğru azalan ardışık doğal sayılar olacak şekilde birer üslü ifade yazın.<br>3. Adım: Diğer karelerin her birine, her sütunda kuvvetleri birbirine eşit ve tabanları yukarıdan aşağıya doğru azalan ardışık doğal sayılar olacak şekilde birer üslü ifade yazın.</p>`
      + `<p class="ask">Buna göre sarı renkli karenin içine 8<sup>10</sup> yazılması durumunda mavi renkli karelerin içine yazılması gereken üslü ifadelerin çarpımının sonucu aşağıdakilerden hangisine eşit olur?</p>`,
    opts: ['32<sup>10</sup>', '16<sup>12</sup>', '8<sup>15</sup>', '4<sup>20</sup>'], ans: 0,
    hints: [`1. satırı yaz: 8<sup>10</sup>, 8<sup>9</sup>, … Sonra sütunlarda taban azalır, üs aynı kalır.`],
    steps: [
      `1. satır: 8<sup>10</sup>, 8<sup>9</sup>, 8<sup>8</sup>, 8<sup>7</sup>, <b>8<sup>6</sup></b> → sağ üst mavi 8<sup>6</sup>`,
      `1. sütun aşağı: 8<sup>10</sup>, 7<sup>10</sup>, 6<sup>10</sup>, 5<sup>10</sup>, <b>4<sup>10</sup></b> · 5. sütun aşağı: 8<sup>6</sup>, 7<sup>6</sup>, 6<sup>6</sup>, 5<sup>6</sup>, <b>4<sup>6</sup></b>`,
      `Çarpım: 8<sup>6</sup> · 4<sup>10</sup> · 4<sup>6</sup> = 2<sup>18</sup> · 2<sup>20</sup> · 2<sup>12</sup> = 2<sup>50</sup> = (2<sup>5</sup>)<sup>10</sup> = <b>32<sup>10</sup></b>`
    ],
    answer: `Çarpım <b>32<sup>10</sup></b>. Cevap: <b>A</b>`,
    trap: `Satırda tabanı, sütunda üssü değiştirmek. Satırda <b>üs</b> azalır, sütunda <b>taban</b> azalır.`
  },
  {
    no: 43, konu: T2, sayfa: 21,
    q: `<p>Elektronik cihazların bataryalarının depoladığı elektrik enerjisi miktarı mAh birimi ile gösterilir. Güney'in tabletinin bataryası tam dolu iken yapmaya başlayıp bataryası tamamen boşalana kadar yaptığı işler aşağıda verilmiştir.</p>`
      + tablo([['Başlama ve Bitiş', 'Yapılan İş', '1 dakikada tüketim (mAh)'], ['10.00 – 12.08', 'Ders takibi', '2<sup>3</sup>'], ['12.08 – 14.16', 'Bekleme', '2<sup>2</sup>'], ['14.16 – 14.48', 'Oyun oynama', '2<sup>4</sup>']])
      + `<p class="ask">Buna göre bu tabletin bataryasının tam dolu iken depoladığı elektrik enerjisi miktarı mAh cinsinden aşağıdakilerden hangisine eşittir?</p>`,
    opts: ['2<sup>10</sup>', '2<sup>11</sup>', '2<sup>12</sup>', '2<sup>13</sup>'], ans: 1,
    hints: [`Her işin süresini dakika olarak bul. 128 ve 32 2'nin kuvveti!`],
    steps: [
      `10.00–12.08 = 128 dk = 2<sup>7</sup> → 2<sup>7</sup> · 2<sup>3</sup> = <b>2<sup>10</sup></b>`,
      `12.08–14.16 = 128 dk → 2<sup>7</sup> · 2<sup>2</sup> = <b>2<sup>9</sup></b> · 14.16–14.48 = 32 dk → 2<sup>5</sup> · 2<sup>4</sup> = <b>2<sup>9</sup></b>`,
      `Toplam: 2<sup>10</sup> + 2<sup>9</sup> + 2<sup>9</sup> = 2<sup>10</sup> + 2<sup>10</sup> = <b>2<sup>11</sup></b>`
    ],
    answer: `Batarya <b>2<sup>11</sup> mAh</b>. Cevap: <b>B</b>`,
    trap: `2<sup>10</sup> + 2<sup>9</sup> + 2<sup>9</sup>'u 2<sup>28</sup> yapmak. Aynı kuvvetler toplanınca katsayı artar: 2<sup>9</sup> + 2<sup>9</sup> = 2 · 2<sup>9</sup> = 2<sup>10</sup>.`
  },
  {
    no: 44, konu: T2, sayfa: 22,
    q: `<p>a<sup>−5</sup>, a<sup>−3</sup>, a<sup>3</sup>, a<sup>4</sup>, a<sup>5</sup> ve a<sup>6</sup> üslü ifadelerinin tamamı aşağıdaki tabloda mavi boyalı her bir hücreye bir üslü ifade gelecek şekilde yazılacaktır.</p>`
      + izgara([['x:', 'b:', 'b:', 'b:'], ['b:', 'B', '', ''], ['b:', '', 'C', ''], ['b:', '', '', 'A']])
      + `<p>A, B ve C hücrelerindeki sayıların her biri bulunduğu hücrenin aynı satır ve sütununda bulunan mavi boyalı hücrelerdeki üslü ifadelerin çarpımına eşittir.</p>`
      + `<p class="ask">A ve B hücrelerine yazılacak olan üslü ifadelerin çarpımı a<sup>9</sup> olduğuna göre C hücresine yazılacak olan ifade aşağıdakilerden hangisidir?</p>`,
    opts: ['a', 'a<sup>3</sup>', 'a<sup>7</sup>', 'a<sup>9</sup>'], ans: 0,
    hints: [`A, B, C farklı satır ve sütunlarda. Üçünün çarpımı neye eşit?`],
    steps: [
      `A, B ve C her satırı ve her sütunu birer kez kullanır → A · B · C = <b>tüm mavi ifadelerin çarpımı</b>`,
      `Tüm maviler: a<sup>−5 − 3 + 3 + 4 + 5 + 6</sup> = <b>a<sup>10</sup></b>`,
      `C = a<sup>10</sup> / a<sup>9</sup> = <b>a</b>`
    ],
    answer: `C hücresi <b>a</b>. Cevap: <b>A</b>`,
    trap: `İfadeleri tek tek yerleştirmeye çalışıp zaman kaybetmek. Çarpım her durumda a<sup>10</sup>'dur.`
  },
  {
    no: 45, konu: T2, sayfa: 22,
    q: `<p>Başak ve Esra bir mama firmasının sokakta yaşayan köpeklere mama bağışında bulunmak için düzenlediği yürüyüş etkinliğine katılmıştır. Bu mama firması, etkinliğe katılıp 6000'den az adım atanların adına her 25<sup>2</sup> adım için bir mama paketi, 6000'den fazla adım atanların adına ise her 5<sup>3</sup> adım için bir mama paketi bağışı yapmıştır.</p>`
      + `<p>Bu etkinlikte Esra 5000 adım, Başak ise 6000'den fazla adım atmıştır.</p>`
      + `<p class="ask">Bu mama firmasının Başak adına bağış yaptığı mama paketi sayısı, Esra adına bağış yaptığı mama paketi sayısının 10 katı olduğuna göre Başak'ın atmış olduğu adım sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['2<sup>4</sup> · 5<sup>4</sup>', '2<sup>5</sup> · 5<sup>4</sup>', '2<sup>4</sup> · 5<sup>5</sup>', '2<sup>5</sup> · 5<sup>5</sup>'], ans: 0,
    hints: [`Esra'nın paket sayısını bul: 5000 / 625`],
    steps: [
      `Esra: 5000 / 25<sup>2</sup> = 5000 / 625 = <b>8 paket</b> → Başak: <b>80 paket</b>`,
      `Başak her 5<sup>3</sup> = 125 adımda 1 paket → en az 80 · 125 = <b>10 000 adım</b>`,
      `10 000 = 10<sup>4</sup> = <b>2<sup>4</sup> · 5<sup>4</sup></b>`
    ],
    answer: `En az <b>2<sup>4</sup> · 5<sup>4</sup></b> adım. Cevap: <b>A</b>`,
    trap: `İki kişi için aynı kuralı kullanmak: Başak 6000'den fazla adım attığı için ona 5<sup>3</sup>'lük kural uygulanır.`
  },
  {
    no: 46, konu: T2, sayfa: 23,
    q: `<p>Laboratuvar ortamındaki boş iki farklı deney tüpünden birine 2<sup>9</sup>, diğerine 8<sup>4</sup> tane bakteri yerleştiriliyor. Bir saat sonunda I. tüpteki bakteri sayısı 4 katına, II. tüpteki bakteri sayısı 8 katına çıkıyor.</p>`
      + `<p class="ask">Bir saatin sonunda I. tüpteki bakterinin yarısı, II. tüpteki bakterinin ${F(1, 4)}'i alındığına göre II. tüpten alınan bakteri sayısı I. tüpten alınan bakteri sayısının <u>en az</u> kaç katıdır?</p>`,
    opts: [F(1, 8), F(1, 16), F(1, 32), F(1, 64)], ans: 0,
    hints: [`Hangi tüpe kaç bakteri konduğu belli değil! İki durumu da dene.`],
    steps: [
      `8<sup>4</sup> = 2<sup>12</sup>. I. tüp ×4 = ×2<sup>2</sup>, sonra yarısı → net ×2. II. tüp ×8 = ×2<sup>3</sup>, sonra çeyreği → net ×2.`,
      `Durum 1: I'de 2<sup>9</sup>, II'de 2<sup>12</sup> → alınanlar 2<sup>10</sup> ve 2<sup>13</sup> → oran 2<sup>3</sup> = 8`,
      `Durum 2: I'de 2<sup>12</sup>, II'de 2<sup>9</sup> → alınanlar 2<sup>13</sup> ve 2<sup>10</sup> → oran 2<sup>−3</sup> = <b>${F(1, 8)}</b>`,
      `En az: <b>${F(1, 8)}</b>`
    ],
    answer: `En az <b>${F(1, 8)}</b> katı. Cevap: <b>A</b>`,
    trap: `“Birine … diğerine …” ifadesini sırayla I ve II sanmak. Bu durumda oran 8 çıkar ve şıklarda yoktur.`
  },
  {
    no: 47, konu: T2, sayfa: 23,
    q: `<p>Aşağıda eş karesel bölgelerden oluşan iki farklı kart verilmiştir.</p>`
      + `<div class="fig" style="gap:2rem;align-items:center">${izgara([['8<sup>10</sup>', '27<sup>10</sup>', '4<sup>15</sup>'], ['25<sup>20</sup>', '81<sup>15</sup>', '125<sup>10</sup>'], ['27<sup>10</sup>', '25<sup>10</sup>', '9<sup>15</sup>']])}${kart2}</div>`
      + `<p>Barış 2. Kartı, 1. Kartın üzerine kenarları çakışacak biçimde koymuştur.</p>`
      + `<p class="ask">Bu durumda 1. Kart üzerindeki üslü ifadelerden sadece iki tanesi görülebildiğine göre bu üslü ifadelerin çarpımının sonucu <u>en çok</u> kaçtır?</p>`,
    opts: ['5<sup>70</sup>', '6<sup>30</sup>', '3<sup>60</sup>', '2<sup>60</sup>'], ans: 2,
    hints: [`2. kart döndürülebilir. Hangi iki kare açıkta kalır?`],
    steps: [
      `2. kart 7 kare kaplar; açıkta kalan 2 kare her zaman <b>aynı kenardaki iki köşe</b>dir.`,
      `Köşeler: sol üst 8<sup>10</sup> = 2<sup>30</sup>, sağ üst 4<sup>15</sup> = 2<sup>30</sup>, sol alt 27<sup>10</sup> = 3<sup>30</sup>, sağ alt 9<sup>15</sup> = 3<sup>30</sup>`,
      `Kenar çiftleri: üst 2<sup>60</sup>, alt <b>3<sup>60</sup></b>, sol ve sağ 2<sup>30</sup> · 3<sup>30</sup> = 6<sup>30</sup> → en çok <b>3<sup>60</sup></b>`
    ],
    answer: `En çok <b>3<sup>60</sup></b>. Cevap: <b>C</b>`,
    trap: `En büyük iki ifadeyi (25<sup>20</sup> = 5<sup>40</sup> ve 81<sup>15</sup> = 3<sup>60</sup>) seçmek: bunlar ortada ve 2. kartla her zaman örtülür.`
  },
  {
    no: 48, konu: T2, sayfa: 24,
    q: `<p>Zehra çoktan seçmeli 45 sorudan oluşan bir sınava girmiştir. Bu sınava giren öğrencilerin aldıkları puan, doğru cevapladıkları soru sayısından yanlış cevapladıkları soru sayısının üçte biri çıkartılarak bulunan sonuç, 9 ile çarpılarak hesaplanmaktadır.</p>`
      + `<p>Zehra'nın bu sınavda doğru cevapladığı, yanlış cevapladığı ve boş bıraktığı soru sayılarının her biri 3'ün bir doğal sayı kuvvetine eşittir.</p>`
      + `<p class="ask">Buna göre Zehra'nın bu sınavdan aldığı puan <u>en çok</u> aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['3<sup>6</sup>', '3<sup>5</sup>', '6<sup>3</sup>', '6<sup>2</sup>'], ans: 2,
    hints: [`3'ün kuvvetleri: 1, 3, 9, 27. Toplamı 45 olan üç tanesini bul.`],
    steps: [
      `D + Y + B = 45 ve hepsi 3'ün kuvveti → tek yol: <b>27 + 9 + 9</b>`,
      `En çok puan için D = 27, Y = 9 (B = 9): puan = 9 · (27 − 9/3) = 9 · 24 = <b>216</b>`,
      `216 = 6<sup>3</sup>`
    ],
    answer: `En çok <b>6<sup>3</sup></b> puan. Cevap: <b>C</b>`,
    trap: `3<sup>0</sup> = 1'i unutmak ya da puan formülünde yanlışın üçte birini çıkarmadan hesaplamak.`
  },
  {
    no: 49, konu: T2, sayfa: 24,
    q: `<p>Dikdörtgen biçimindeki 2<sup>6</sup> tane kâğıt köşeleri çakışacak biçimde üst üste konuluyor. Üst üste konulan tüm kâğıtlar ortadan ikiye katlanıyor ve tam ortadan zımbalanarak bir not defteri elde ediliyor.</p>`
      + `<p>Son olarak not defterinin tüm sayfalarına, en dıştaki sayfadan başlanarak 1, 2, 2<sup>2</sup>, 2<sup>3</sup>, … şeklinde sırasıyla 2'nin doğal sayı kuvvetlerinden biri sayfa numarası olarak veriliyor.</p>`
      + kaynak(24)
      + `<p class="ask">Buna göre not defterinin tam ortasındaki kâğıdın, 4 sayfasına verilen sayfa numaralarının çarpımının sonucu aşağıdakilerden hangisine eşittir?</p>`,
    opts: ['4<sup>260</sup>', '4<sup>255</sup>', '8<sup>143</sup>', '8<sup>135</sup>'], ans: 1,
    hints: [`64 kâğıt ikiye katlanınca kaç yaprak, kaç sayfa olur?`, `n. sayfanın numarası 2<sup>n−1</sup>.`],
    steps: [
      `64 kâğıt katlanınca 128 yaprak, <b>256 sayfa</b> olur. n. sayfaya 2<sup>n − 1</sup> yazılır.`,
      `Ortadaki kâğıt 64. ve 65. yaprakları oluşturur → <b>127, 128, 129, 130.</b> sayfalar`,
      `Çarpım: 2<sup>126</sup> · 2<sup>127</sup> · 2<sup>128</sup> · 2<sup>129</sup> = 2<sup>510</sup> = (2<sup>2</sup>)<sup>255</sup> = <b>4<sup>255</sup></b>`
    ],
    answer: `Çarpım <b>4<sup>255</sup></b>. Cevap: <b>B</b>`,
    trap: `İlk sayfanın numarası 1 = 2<sup>0</sup>. n. sayfayı 2<sup>n</sup> almak (2<sup>514</sup> = 4<sup>257</sup>) yanlış sonuç verir.`
  },
  {
    no: 50, konu: T2, sayfa: 25,
    q: `<p>İpek böceğinden elde edilen yaş koza, bekletilip kuru kozaya dönüştürülür. Ardından kuru koza işlenerek ipliğe dönüşür. Paraşüt ipi üreten bir fabrikada; yaş koza kurutulurken kütlesinin %87,5'ini kaybetmekte, kuru kozadan kütlesinin %25'i kadar iplik üretilmektedir.</p>`
      + `<p>Bu fabrika, bir üreticiden 2<sup>11</sup> kg yaş koza, başka bir üreticiden ise 2<sup>8</sup> kg kuru koza satın almıştır. Fabrika kozaların tamamını işleyip iplik elde etmiş ve elde ettiği ipliğin tamamını kilosu 2<sup>11</sup> TL'den satmıştır.</p>`
      + `<p class="ask">Buna göre fabrikanın ipliklerin satışından elde ettiği gelir TL cinsinden aşağıdakilerden hangisine eşittir?</p>`,
    opts: ['16<sup>5</sup>', '8<sup>6</sup>', '4<sup>7</sup>', '2<sup>13</sup>'], ans: 1,
    hints: [`%87,5 kaybedilirse %12,5 = ${F(1, 8)} kalır. %25 = ${F(1, 4)}.`],
    steps: [
      `Yaş koza kuruyunca ${F(1, 8)}'i kalır: 2<sup>11</sup> / 2<sup>3</sup> = <b>2<sup>8</sup> kg</b> kuru koza`,
      `Toplam kuru koza: 2<sup>8</sup> + 2<sup>8</sup> = <b>2<sup>9</sup> kg</b> → iplik ${F(1, 4)}'ü: <b>2<sup>7</sup> kg</b>`,
      `Gelir: 2<sup>7</sup> · 2<sup>11</sup> = 2<sup>18</sup> = (2<sup>3</sup>)<sup>6</sup> = <b>8<sup>6</sup></b>`
    ],
    answer: `Gelir <b>8<sup>6</sup> TL</b>. Cevap: <b>B</b>`,
    trap: `%87,5'i kalan miktar sanmak. Kaybedilen %87,5, kalan %12,5'tir.`
  },
  {
    no: 51, konu: T2, sayfa: 25,
    q: `<p>Bir kenar uzunluğu 2<sup>3</sup> · 10<sup>−2</sup> metre ve kalınlığı 1 · 10<sup>−4</sup> metre olan kare biçimindeki özdeş kâğıtlardan 5 · 10<sup>−2</sup> metre yükseklikteki bir bloknot oluşturulmuştur.</p>`
      + `<p class="ask">Kullanılan kâğıdın bir metrekaresinin kütlesi 80 gram olduğuna göre oluşan bloknotun kütlesi kaç gramdır?</p>`,
    opts: ['2<sup>6</sup>', '2<sup>7</sup>', '2<sup>8</sup>', '2<sup>9</sup>'], ans: 2,
    hints: [`Bloknotta kaç kâğıt var? (yükseklik ÷ kalınlık)`],
    steps: [
      `Kâğıt sayısı: ${F('5 · 10<sup>−2</sup>', '10<sup>−4</sup>')} = 5 · 10<sup>2</sup> = <b>500</b>`,
      `Bir kâğıdın alanı: (8 · 10<sup>−2</sup>)<sup>2</sup> = 64 · 10<sup>−4</sup> m² → toplam 500 · 64 · 10<sup>−4</sup> = <b>3,2 m²</b>`,
      `Kütle: 3,2 · 80 = 256 = <b>2<sup>8</sup> g</b>`
    ],
    answer: `Bloknot <b>2<sup>8</sup> g</b>. Cevap: <b>C</b>`,
    trap: `Kenar uzunluğunu alan sanmak: alan için kenarın <b>karesi</b> alınmalı.`
  },
  {
    no: 52, konu: T2, sayfa: 26,
    q: `<p>Her çubuğunda 10 tane renkli boncuk bulunan 5 çubuklu bir abaküs verilmiştir. Arhan bu abaküsün her çubuğu için; sol tarafa bitişik boncuk sayısını −1 ile çarparak bulduğu sonuç taban, sağ tarafa bitişik boncuk sayısı ise kuvvet olacak şekilde farklı birer üslü ifade tanımlamıştır. Örneğin 7 boncuk solda, 3 boncuk sağda ise (−7)<sup>3</sup>.</p>`
      + `<p>Arhan bu abaküsteki tüm boncukları sola ya da sağa bitişik hâle getirerek her birinin değeri negatif olan 5 farklı üslü ifade tanımlamıştır.</p>`
      + `<p class="ask">Buna göre Arhan'ın tanımladığı bu üslü ifadelerden <u>en küçüğü</u> ile <u>en büyüğünün</u> çarpımının sonucu aşağıdakilerden hangisine eşittir?</p>`,
    opts: ['3<sup>7</sup>', '5<sup>5</sup>', '7<sup>3</sup>', '3<sup>9</sup>'], ans: 1,
    hints: [`Solda L boncuk varsa ifade (−L)<sup>10 − L</sup>. Ne zaman negatif olur?`],
    steps: [
      `(−L)<sup>10 − L</sup> negatif → üs tek → L tek: L = 1, 3, 5, 7, 9`,
      `(−1)<sup>9</sup> = −1 · (−3)<sup>7</sup> = −2187 · (−5)<sup>5</sup> = −3125 · (−7)<sup>3</sup> = −343 · (−9)<sup>1</sup> = −9`,
      `En küçük −3125, en büyük −1 → çarpım <b>3125 = 5<sup>5</sup></b>`
    ],
    answer: `Çarpım <b>5<sup>5</sup></b>. Cevap: <b>B</b>`,
    trap: `Negatif sayılarda “en büyük” mutlak değeri en küçük olandır: −1 > −9 > −343.`
  },
  {
    no: 53, konu: T2, sayfa: 27,
    q: `<p>Bir süt fabrikasında; özdeş şişelere iki farklı ünitede süt dolumu yapılmaktadır.</p>`
      + `<p>1. dolum ünitesine giren boş bir şişeye süt doldurmak için geçen süre 12 saniye olup dolan şişenin üniteden çıkıp yeni bir boş şişenin üniteye girmesi için geçen süre 4 saniyedir.</p>`
      + `<p>2. dolum ünitesine giren boş bir şişeye süt doldurmak için geçen süre 10 saniye olup dolan şişenin üniteden çıkıp yeni bir boş şişenin üniteye girmesi için geçen süre 5 saniyedir.</p>`
      + `<p class="ask">Buna göre bu iki dolum ünitesine aynı anda birer tane boş şişe girdikten sonra 128. kez iki dolum ünitesine aynı anda birer tane boş şişe girene kadar geçen süre dakika cinsinden aşağıdakilerden hangisine eşittir?</p>`,
    opts: ['2<sup>7</sup>', '4<sup>4</sup>', '8<sup>3</sup>', '32<sup>2</sup>'], ans: 2,
    hints: [`Her ünitede bir şişe döngüsü kaç saniye sürüyor?`, `İkisi ne sıklıkla aynı anda şişe alır? (EKOK)`],
    steps: [
      `1. ünite: 12 + 4 = <b>16 sn</b>'de bir şişe alır. 2. ünite: 10 + 5 = <b>15 sn</b>`,
      `Aynı anda alma: EKOK(16, 15) = <b>240 sn</b> = 4 dakikada bir`,
      `128 kez: 128 · 4 = 512 dakika = <b>8<sup>3</sup></b>`
    ],
    answer: `<b>8<sup>3</sup></b> dakika. Cevap: <b>C</b>`,
    trap: `Sadece dolum sürelerini (12 ve 10) kullanmak: şişe değişim süresi de döngüye dahil.`
  },
  {
    no: 54, konu: T3, sayfa: 28,
    q: `<p>Farklı renkteki dört boncuğun birer adetlerinin kütlelerinin gram cinsinden çözümlenmiş şekli aşağıdaki tabloda verilmiştir.</p>`
      + tablo([['Boncuk', 'Kütlesi (g)'], ['Mavi', '3·10<sup>0</sup> + 2·10<sup>−1</sup> + 5·10<sup>−2</sup>'], ['Yeşil', '7·10<sup>−1</sup> + 5·10<sup>−2</sup>'], ['Sarı', '2·10<sup>0</sup> + 7·10<sup>−1</sup> + 5·10<sup>−2</sup>'], ['Turuncu', '2·10<sup>−1</sup> + 5·10<sup>−2</sup>']])
      + `<p>Her renkten en az bir tane boncuk kullanılarak bir kolye yapılmıştır.</p>`
      + `<p class="ask">Bu kolyedeki boncukların toplam kütlesi 32 gram olduğuna göre, kullanılan toplam boncuk sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['11', '12', '15', '16'], ans: 1,
    hints: [`Kütleler: 3,25 – 0,75 – 2,75 – 0,25. Önce her renkten bir tane kullan.`],
    steps: [
      `Mavi 3,25 · Yeşil 0,75 · Sarı 2,75 · Turuncu 0,25 → birer tane: <b>7 g</b>, kalan <b>25 g</b>`,
      `En ağır boncuk 3,25 g → 7 tane 22,75 g'da kalır, en az <b>8</b> boncuk gerekir.`,
      `8 boncukla: 6 mavi (19,5) + 2 sarı (5,5) = <b>25 g</b> ✓ → toplam 4 + 8 = <b>12</b>`
    ],
    answer: `En az <b>12</b> boncuk. Cevap: <b>B</b>`,
    trap: `Her renkten zorunlu birer boncuğu unutmak ya da kalan 25 g'ı sadece mavi boncukla tamamlamaya çalışmak (25 / 3,25 tam değil).`
  },
  {
    no: 55, konu: T3, sayfa: 28,
    q: `<p>Farklı mobilya türlerinin birer adedini kaplatmak için kullanılan kumaşların metre cinsinden uzunluklarının çözümlenmiş hâli verilmiştir.</p>`
      + tablo([['Mobilya', 'Çözümlenmiş Hâli (m)'], ['Tekli koltuk', '6·10<sup>0</sup> + 2·10<sup>−1</sup> + 5·10<sup>−2</sup>'], ['İkili koltuk', '1·10<sup>1</sup> + 1·10<sup>0</sup> + 5·10<sup>−2</sup>'], ['Üçlü koltuk', '1·10<sup>1</sup> + 3·10<sup>0</sup> + 4·10<sup>−1</sup> + 5·10<sup>−2</sup>'], ['Sandalye', '2·10<sup>0</sup> + 5·10<sup>−1</sup>']])
      + `<p>Birer adet tekli, ikili ve üçlü koltuk ile altı adet sandalyeyi kaplatmak isteyen Serdar Bey 60 metre kumaş almıştır.</p>`
      + `<p class="ask">Bu mobilyaların kaplama işlemi tamamlandıktan sonra kalan kumaşın metre cinsinden uzunluğunun çözümlenmiş hâli aşağıdakilerden hangisidir?</p>`,
    opts: ['1·10<sup>1</sup> + 4·10<sup>0</sup> + 2·10<sup>−1</sup> + 5·10<sup>−2</sup>', '1·10<sup>1</sup> + 5·10<sup>0</sup> + 7·10<sup>−1</sup> + 5·10<sup>−2</sup>', '2·10<sup>1</sup> + 6·10<sup>0</sup> + 7·10<sup>−1</sup> + 5·10<sup>−2</sup>', '4·10<sup>1</sup> + 5·10<sup>0</sup> + 7·10<sup>−1</sup> + 5·10<sup>−2</sup>'], ans: 0, long: true,
    hints: [`Her mobilyayı ondalık sayıya çevir. İkili koltukta 10<sup>−1</sup> basamağı yok!`],
    steps: [
      `Tekli 6,25 · İkili 11,05 · Üçlü 13,45 · Sandalye 2,5 × 6 = 15`,
      `Toplam: 6,25 + 11,05 + 13,45 + 15 = <b>45,75 m</b>`,
      `Kalan: 60 − 45,75 = 14,25 = <b>1·10<sup>1</sup> + 4·10<sup>0</sup> + 2·10<sup>−1</sup> + 5·10<sup>−2</sup></b>`
    ],
    answer: `Kalan 14,25 m. Cevap: <b>A</b>`,
    trap: `Sandalyeyi bir kez saymak (6 adet!) ya da ikili koltuğu 11,5 okumak.`
  },
  {
    no: 56, konu: T3, sayfa: 29,
    q: `<p>Bülent Öğretmen bir sınıfa eşit sayıda bitter çikolatalı ve beyaz çikolatalı gofret getirip tahtaya bu gofretlerin birer tanesinde bulunan yağ miktarlarını yazmıştır: bitter <b>2,043 g</b>, beyaz <b>2,702 g</b>.</p>`
      + `<p>Öğrencilerine, hangi gofretten almak istiyorlarsa o gofretteki yağ miktarını çözümleyerek yazmalarını, çözümlemesini doğru yazanlara o gofretten 1'er tane vereceğini söylemiştir. Öğrencilerin cevapları:</p>`
      + `<p>• 9 öğrenci: 2·10<sup>0</sup> + 4·10<sup>−1</sup> + 3·10<sup>−2</sup><br>• 8 öğrenci: 2·10<sup>0</sup> + 4·10<sup>−2</sup> + 3·10<sup>−3</sup><br>• 6 öğrenci: 2·10<sup>0</sup> + 7·10<sup>−1</sup> + 2·10<sup>−2</sup><br>• 7 öğrenci: 2·10<sup>0</sup> + 7·10<sup>−1</sup> + 2·10<sup>−3</sup></p>`
      + `<p>Bu cevaplara göre gofretleri dağıtan Bülent Öğretmen'de 13 tane bitter çikolatalı gofret kalmıştır.</p>`
      + `<p class="ask">Buna göre Bülent Öğretmen'de kaç tane beyaz çikolatalı gofret kalmıştır?</p>`,
    opts: ['13', '14', '15', '16'], ans: 1,
    hints: [`Hangi grubun çözümlemesi doğru? 2,043'te 10<sup>−1</sup> basamağı 0.`],
    steps: [
      `2,043 = 2·10<sup>0</sup> + 4·10<sup>−2</sup> + 3·10<sup>−3</sup> → doğru yazan <b>8 öğrenci</b> (bitter)`,
      `2,702 = 2·10<sup>0</sup> + 7·10<sup>−1</sup> + 2·10<sup>−3</sup> → doğru yazan <b>7 öğrenci</b> (beyaz)`,
      `Bitter: başta 8 + 13 = <b>21</b> → beyaz da 21 → kalan 21 − 7 = <b>14</b>`
    ],
    answer: `<b>14</b> beyaz gofret kalmıştır. Cevap: <b>B</b>`,
    trap: `2,043'ü 2 + 0,4 + 0,03 sanmak (9 öğrencinin hatası). Sıfır olan onda birler basamağı atlanmalı.`
  },
  {
    no: 57, konu: T3, sayfa: 29,
    q: `<p>Bir kurumdaki sıramatik panelinde, gişe görevlisi butona bastığında gişe numarası ile sıra numarası bir ondalık gösterimin çözümlenmiş şekli olarak sisteme işlenir. Ondalık gösterimin tam kısmı gişe numarası (2 hane), ondalık kısmı sıra numarası (3 hane) olarak ekrana yansır. Örneğin ${ekran('02', '356')} ekranı 2 nolu gişenin 356 numaralı müşteriyi çağırdığını gösterir.</p>`
      + `<p>Bu panelde oluşan bir arıza sebebiyle ekranda sisteme işlenen ondalık gösterimin bazı rakamları görünmemektedir (gri hane = yanmayan).</p>`
      + `<p class="ask">Arızanın devam ettiği süre içinde, sisteme çözümlenmiş hâli 1·10<sup>1</sup> + 6·10<sup>−1</sup> + 2·10<sup>−3</sup> biçiminde verilen ondalık gösterim işlendiğinde panel ekranında oluşacak görüntü aşağıdakilerden hangisi olabilir?</p>`
      + kaynak(29),
    opts: [ekran('_0', '_02'), ekran('1_', '62_'), ekran('_0', '62_'), ekran('_1', '6_2')], ans: 0, long: true,
    hints: [`Önce sayıyı yaz: 10 + 0,6 + 0,002 = ?`],
    steps: [
      `1·10<sup>1</sup> + 6·10<sup>−1</sup> + 2·10<sup>−3</sup> = <b>10,602</b> → gişe <b>10</b>, sıra <b>602</b>`,
      `Görünen haneler bu rakamlarla uyumlu olmalı: gişe “1 0”, sıra “6 0 2”`,
      `A: gişe _0, sıra _02 ✓ · B ve C: sıra 62_ ✗ (ikinci hane 0 olmalı) · D: gişe _1 ✗`
    ],
    answer: `Görüntü A olabilir. Cevap: <b>A</b>`,
    trap: `Sıra numarasını 62 sanmak: 10<sup>−2</sup> basamağı 0 olduğu için sıra 602'dir.`
  },
  {
    no: 58, konu: T3, sayfa: 30,
    q: `<p>Rize Fırtına Vadisi'nde kaybolan bir turisti bulmak için onun cep telefonundan gelen sinyaller incelenmiştir. 4 farklı bölgedeki baz istasyonuna gelen sinyallerin gücü, aynı birim cinsinden 10'un tam sayı kuvvetleri biçiminde çözümlenerek verilmiştir.</p>`
      + tablo([['1. Bölge', '2. Bölge', '3. Bölge', '4. Bölge'], ['10<sup>0</sup> + 2·10<sup>−1</sup> + 4·10<sup>−3</sup>', '10<sup>0</sup> + 3·10<sup>−1</sup>', '10<sup>0</sup> + 8·10<sup>−2</sup>', '10<sup>0</sup> + 4·10<sup>−2</sup> + 5·10<sup>−3</sup>']])
      + `<p class="ask">Ekipler, aramalara sinyal gücü en fazla olan bölgeden başlamışlardır. Buna göre arama çalışmalarına hangi bölgeden başlanmıştır?</p>`,
    opts: ['1. Bölge', '2. Bölge', '3. Bölge', '4. Bölge'], ans: 1,
    hints: [`Hepsini ondalık sayı olarak yaz ve karşılaştır.`],
    steps: [
      `1. 1,204 · 2. <b>1,3</b> · 3. 1,08 · 4. 1,045`,
      `En büyük: <b>1,3</b> → 2. bölge`
    ],
    answer: `Aramaya 2. bölgeden başlanmıştır. Cevap: <b>B</b>`,
    trap: `Terim sayısı çok olanı büyük sanmak. 1,3 = 1,300, 1,204'ten büyüktür.`
  },
  {
    no: 59, konu: T3, sayfa: 30,
    q: `<p>Bir internet alışveriş sitesi 100 TL ve üzeri alışverişlerde kargo ücreti almamaktadır. Selin Hanım bu siteden dört farklı ürün satın almıştır. Bu ürünlerden üçünün fiyatı çözümlenmiş şekilde verilmiştir.</p>`
      + tablo([['Ürün', 'Fiyat (TL)'], ['Çamaşır deterjanı', '3·10<sup>1</sup> + 2·10<sup>0</sup> + 5·10<sup>−2</sup>'], ['Oyuncak araba', '3·10<sup>1</sup> + 4·10<sup>−1</sup> + 5·10<sup>−2</sup>'], ['Bebek bezi', '2·10<sup>1</sup> + 6·10<sup>0</sup> + 5·10<sup>−2</sup>']])
      + `<p>Selin Hanım bu ürünlerin dışında bir tane de boyama seti almış ve yapmış olduğu bu alışveriş için kargo ücreti ödememiştir.</p>`
      + `<p class="ask">Buna göre Selin Hanım'ın almış olduğu boyama seti için ödediği ücret <u>en az</u> kaç liradır?</p>`,
    opts: ['11,45', '11,05', '10,85', '10,65'], ans: 0,
    hints: [`Üç ürünün toplamı kaç TL? 100'e ne kadar kaldı?`],
    steps: [
      `Deterjan 32,05 · Araba 30,45 · Bebek bezi 26,05 → toplam <b>88,55 TL</b>`,
      `Kargo ücretsiz için ≥ 100 TL → boyama seti en az 100 − 88,55 = <b>11,45 TL</b>`
    ],
    answer: `En az <b>11,45 TL</b>. Cevap: <b>A</b>`,
    trap: `Oyuncak arabayı 34,5 okumak: 3·10<sup>1</sup> + 4·10<sup>−1</sup> = 30,4 (birler basamağı 0).`
  },
  {
    no: 60, konu: T4, sayfa: 31,
    q: `<p>128 · 10<sup>x</sup> sayısı 625 · 10<sup>5</sup> sayısı ile çarpıldığında 8000 elde edilmektedir.</p>`
      + `<p class="ask">Buna göre x kaçtır?</p>`,
    opts: ['−4', '−5', '−6', '−7'], ans: 2,
    hints: [`128 · 625 = ? (128 = 2<sup>7</sup>, 625 = 5<sup>4</sup>)`],
    steps: [
      `128 · 625 = 2<sup>7</sup> · 5<sup>4</sup> = 2<sup>3</sup> · 10<sup>4</sup> = <b>8 · 10<sup>4</sup></b>`,
      `8 · 10<sup>4</sup> · 10<sup>x</sup> · 10<sup>5</sup> = 8 · 10<sup>x + 9</sup> = 8000 = 8 · 10<sup>3</sup>`,
      `x + 9 = 3 → <b>x = −6</b>`
    ],
    answer: `<b>x = −6</b>. Cevap: <b>C</b>`,
    trap: `10<sup>5</sup>'i unutmak (x = 3 − 4 = −1) ya da 128 · 625'i yanlış hesaplamak.`
  }
  );
})();
