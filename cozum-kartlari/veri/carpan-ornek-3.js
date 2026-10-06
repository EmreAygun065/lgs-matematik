// MEB örnek soruları 41–60 (Çarpanlar ve Katlar)
(function () {
  const { CA, EB, AA } = CK_KONU;

  CK_ORNEK.push(
  {
    no: 41, konu: EB, sayfa: 21,
    q: `<p>Standartlara göre merdiven basamak yüksekliği 18 cm'den fazla olmamalıdır. Zeminden yüksekliği 210 cm olan birinci duvarın üstüne ve birinci duvardan yüksekliği 300 cm olan ikinci duvarın üstüne doğru eş basamaklardan oluşan bir merdiven yapılacaktır.</p>`
      + `<p class="ask">Basamakların yüksekliği santimetre cinsinden tam sayı olduğuna göre bu merdiven <u>en az</u> kaç basamaktan oluşmuştur?</p>`,
    opts: ['10', '15', '20', '30'], ans: 2,
    hints: [`Basamak yüksekliği 210'u ve 300 − 210 = 90'ı böler.`],
    steps: [`EBOB(210, 90) = 30 → 18'den büyük olmayan en büyük böleni 15`, `300 / 15 = <b>20</b> basamak`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 42, konu: EB, sayfa: 21,
    q: `<p>1 liralık madenî paraların kütlesi 8200 miligram, 50 kuruşlukların ise 6800 miligramdır. Kerem, biriktirdiği 1 liralık tüm madenî paraları ve 50 kuruşluk tüm madenî paraları ayrı ayrı tartıyor.</p>`
      + `<p class="ask">Bu iki tartma işleminin sonucu birbirine eşit olduğuna göre Kerem'in biriktirdiği para <u>en az</u> kaç liradır?</p>`,
    opts: ['49', '51,5', '54,5', '58'], ans: 2,
    hints: [`8200a = 6800b → 41a = 34b.`],
    steps: [`En küçük: a = 34 tane 1 TL, b = 41 tane 50 kuruş`, `34 + 20,5 = <b>54,5</b> TL`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 43, konu: EB, sayfa: 22,
    q: `<p>Bir toplantı salonuna genişliği 60 cm olan koltuklar, bir doğru boyunca aralarında 25 cm boşluk bulunacak şekilde yerleştirilmiştir. İlk koltuk ile duvar arasında boşluk olmayıp son koltuk ile duvar arasında ise 25 cm boşluk vardır.</p>`
      + `<p>Daha fazla koltuk yerleştirmek için koltuklar aralarında 15 cm boşluk bulunacak şekilde yeniden düzenlenmiştir. İlk koltuk ile duvar arasında boşluk olmayıp son koltukla duvar arasında da 15 cm boşluk kalmıştır.</p>`
      + `<p class="ask">Bu durumda salondaki bir sıraya aynı koltuklardan <u>en az</u> kaç tane daha yerleştirilmiştir?</p>`,
    opts: ['1', '2', '3', '4'], ans: 1,
    hints: [`Her koltuk + boşluğu: önce 85 cm, sonra 75 cm. Sıra uzunluğu ikisinin de katı.`],
    steps: [`EKOK(85, 75) = 1275 cm`, `Önce 1275 / 85 = 15, sonra 1275 / 75 = 17 koltuk`, `En az <b>2</b> koltuk eklenmiş`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 44, konu: EB, sayfa: 22,
    q: `<p>Sercan, kendisi ve arkadaşları için birer tane sinema bileti almıştır. Tam bilet 16 TL, indirimli bilet 12 TL'dir. Sercan'ın aldığı tam biletler için ödediği toplam ücret, indirimli biletler için ödediği toplam ücrete eşittir.</p>`
      + `<p class="ask">Buna göre Sercan <u>en az</u> kaç tane sinema bileti almıştır?</p>`,
    opts: ['5', '7', '10', '14'], ans: 1,
    hints: [`16a = 12b → 4a = 3b.`],
    steps: [`EKOK(16, 12) = 48 → 3 tam, 4 indirimli`, `En az <b>7</b> bilet`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 45, konu: EB, sayfa: 23,
    q: `<p>Bir markette A marka bal 600 gramlık kavanozda 160 TL'ye, B marka bal 800 gramlık kavanozda 180 TL'ye satılmaktadır. Son bir hafta içerisinde marketin A marka bal satışından elde ettiği gelir, B marka bal satışından elde ettiği gelire eşit olmuştur.</p>`
      + `<p class="ask">Buna göre marketin son bir hafta içerisinde bu iki baldan yapmış olduğu toplam satış miktarı <u>en az</u> kaç kilogramdır?</p>`,
    opts: ['4,8', '7,2', '11,8', '13,6'], ans: 2,
    hints: [`160a = 180b → 8a = 9b.`],
    steps: [`EKOK(160, 180) = 1440 → 9 kavanoz A, 8 kavanoz B`, `9 · 0,6 + 8 · 0,8 = 5,4 + 6,4 = <b>11,8</b> kg`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 46, konu: EB, sayfa: 23,
    q: `<p>Bir çay kahve makinesi eşit büyüklükteki bardaklara her defasında 80 ml çay ya da 60 ml kahve koymaktadır. Pazartesi günü bu makineden toplam 280 bardak çay ve kahve alınmış, makinenin bardaklara koyduğu mililitre cinsinden çay ve kahve miktarlarının toplamları birbirine eşit olmuştur.</p>`
      + `<p class="ask">Buna göre pazartesi günü bu makineden toplam kaç bardak çay alınmıştır?</p>`,
    opts: ['120', '140', '160', '180'], ans: 0,
    hints: [`80ç = 60k → 4ç = 3k.`],
    steps: [`ç = 3t, k = 4t → 7t = 280 → t = 40`, `Çay: <b>120</b> bardak`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 47, konu: EB, sayfa: 24,
    q: tablo([['', 'Maliyet (TL)', 'Satış fiyatı (TL)'], ['A marka telefon', '4800', '6000'], ['B marka telefon', '5200', '6700']])
      + `<p>Bu mağazanın Ekim ayı boyunca A marka cep telefonlarının satışından elde ettiği toplam kâr, B marka cep telefonlarının satışından elde ettiği toplam kâra eşit olmuştur.</p>`
      + `<p class="ask">Buna göre bu mağazada Ekim ayı boyunca satılan A ve B marka cep telefonlarının toplam sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['5', '7', '9', '11'], ans: 2,
    hints: [`Kârlar: A 1200, B 1500 TL.`],
    steps: [`1200a = 1500b → 4a = 5b → a = 5, b = 4`, `En az <b>9</b> telefon`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 48, konu: EB, sayfa: 24,
    q: tablo([['Demir', '1 tanesinin kütlesi (kg)'], ['Kalın', '35'], ['İnce', '25']])
      + `<p>Üretilen bu demirler, kütleleri toplamları eşit ve her birinde sadece aynı çeşit demirler bulunacak şekilde paketlenmektedir. 18 ton yük alabilen bir tıra bu paketlerden en çok 10 tanesi yüklenebilmektedir.</p>`
      + `<p class="ask">Buna göre ince demir bulunan bir paketteki demir sayısı ile kalın demir bulunan bir paketteki demir sayısı arasındaki fark kaçtır? (1 ton = 1000 kg)</p>`,
    opts: ['2', '10', '16', '20'], ans: 3,
    hints: [`Bir paketin kütlesi EKOK(35, 25) = 175'in katı.`],
    steps: [`10 paket ≤ 18 000 < 11 paket → paket kütlesi 1636 ile 1800 arası → 175'in katı: 1750`, `İnce: 1750 / 25 = 70, kalın: 1750 / 35 = 50 → fark <b>20</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 49, konu: EB, sayfa: 25,
    q: `<p>Bir fabrikada 200 ml'lik kolonya 10 TL'ye, 500 ml'lik kolonya 23 TL'ye satılmaktadır. Gün sonunda 200 ml'lik ve 500 ml'lik şişelere doldurulan kolonya miktarları eşittir.</p>`
      + `<p class="ask">Bir günde üretilen kolonyaların tamamının satışından elde edilen gelirin 1 500 TL'den fazla olduğu bilindiğine göre bu satıştan <u>en az</u> kaç TL gelir elde edilmiştir?</p>`,
    opts: ['1520', '1536', '1553', '1589'], ans: 1,
    hints: [`EKOK(200, 500) = 1000 ml → 5 küçük, 2 büyük şişe.`],
    steps: [`Her 1000 ml için: 5 · 10 + 2 · 23 = 96 TL`, `96k > 1500 → k = 16 → <b>1536</b> TL`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 50, konu: EB, sayfa: 25,
    q: `<p>A marka ayçiçek yağı 1,5 litrelik, B marka 2 litrelik şişelerde satılmaktadır. Bir markette bu yağların birer şişelerinin TL cinsinden satış fiyatları birbirine eşit tam sayılardır. 05.10.2020 tarihinde A marka yağ satışından 252 TL, B marka yağ satışından 198 TL gelir elde edilmiştir.</p>`
      + `<p class="ask">Bu markette o gün satılan B marka ayçiçek yağı miktarı, A marka ayçiçek yağı miktarından <u>en az</u> kaç litre <u>daha fazladır</u>?</p>`,
    opts: ['0,5', '1', '1,5', '2'], ans: 1,
    hints: [`Şişe fiyatı p, 252 ve 198'i böler.`],
    steps: [`Fark: 2 · 198/p − 1,5 · 252/p = (396 − 378)/p = 18/p`, `En az için p en büyük: EBOB(252, 198) = 18 → fark <b>1</b> litre`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 51, konu: EB, sayfa: 26,
    q: `<p>Ölçüleri 30 cm × 30 cm × 80 cm olan kare dik prizma şeklindeki koliler herhangi bir yüzeyi üzerinde üst üste konularak hiç boşluk kalmadan yüksekliği 3 metreden az olan bir soğuk hava deposunda tavana kadar yerleştirilebilmektedir.</p>`
      + `<p class="ask">Aynı soğuk hava deposunda bu işlem aşağıdaki kare dik prizma şeklindeki kolilerden hangisi ile de yapılabilir?</p>`,
    opts: ['20 × 20 × 90 cm', '60 × 60 × 120 cm', '50 × 50 × 180 cm', '45 × 45 × 60 cm'], ans: 1, long: true,
    hints: [`Depo yüksekliği hem 30'un hem 80'in katı ve 300'den az.`],
    steps: [`EKOK(30, 80) = 240 → depo 240 cm`, `Yeni koli iki yönde de 240'ı tam bölmeli: 60 ve 120 ✓ · 90 ✗ · 50 ve 180 ✗ · 45 ✗`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 52, konu: EB, sayfa: 26,
    q: `<p>Deniz, 180 m uzunluğundaki birbirine paralel kaldırımlardan birine 12'şer metre arayla kediler için, diğerine 15'er metre arayla köpekler için kaldırımların başında ve sonunda karşılıklı birer tane olacak şekilde mama kapları koymuştur. Mahalle muhtarı da karşılıklı aynı hizada bulunan mama kaplarının yanlarına birer tane su kabı koymuştur.</p>`
      + `<p class="ask">Buna göre mahalle muhtarı kaç tane su kabı koymuştur?</p>`,
    opts: ['6', '8', '10', '12'], ans: 1,
    hints: [`Karşılıklı kaplar EKOK(12, 15) = 60 m'de bir.`],
    steps: [`Karşılıklı noktalar: 0, 60, 120, 180 → 4 çift = 8 mama kabı`, `Her birinin yanına birer su kabı → <b>8</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 53, konu: EB, sayfa: 27,
    q: tablo([['İp', 'Bir tahta için ip (m)', '1 metre fiyatı (TL)'], ['Mavi', '15', '4'], ['Pembe', '12', '5']])
      + `<p>Öğrencilerin yaptığı kedi tırmalama tahtalarının tümü için iki renk ipten de eşit uzunlukta kullanılmış ve kullanılan iplerin toplam maliyeti 1400 ile 1700 TL arasında olmuştur.</p><p class="ask">Buna göre toplam kaç tane kedi tırmalama tahtası yapılmıştır?</p>`,
    opts: ['21', '27', '28', '36'], ans: 1,
    hints: [`Her renkten L metre, L hem 15'in hem 12'nin katı.`],
    steps: [`L = 60k; maliyet 4L + 5L = 540k → 1400 < 540k < 1700 → k = 3, L = 180`, `Mavi 180 / 15 = 12, pembe 180 / 12 = 15 → <b>27</b> tahta`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 54, konu: EB, sayfa: 27,
    q: tablo([['', 'Peşinat yüzdesi', 'Aylık taksit (TL)'], ['Ahmet', '% 20', '400'], ['Beyza', '% 10', '900']])
      + `<p>Her ikisinin de yaptıkları peşin ödemelerden sonra taksitle ödeyeceği toplam tutar eşittir.</p><p class="ask">Her bir bilgisayarın fiyatı 5000 TL'den az olduğuna göre Ahmet ile Beyza aldıkları bilgisayarlar için toplam kaç TL ödeme yapacaklardır?</p>`,
    opts: ['8000', '8500', '9000', '9500'], ans: 1,
    hints: [`Taksit toplamı 400'ün ve 900'ün katı.`],
    steps: [`Taksit toplamı EKOK(400, 900) = 3600 (7200 olursa fiyat 5000'i geçer)`, `Ahmet: 3600 / 0,8 = 4500. Beyza: 3600 / 0,9 = 4000`, `Toplam <b>8500</b> TL`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 55, konu: EB, sayfa: 28,
    q: `<p>Bir sınıftaki kare şeklindeki eş iki pencere tüller ile süsleniyor. Tüllerin orta kısmının genişliği, birinde pencerenin kenar uzunluğunun ${F(1, 4)}'üne, diğerinde ise ${F(1, 6)}'sına eşittir.</p>`
      + `<p class="ask">Tüllerin orta kısımlarının genişliği santimetre cinsinden birer tam sayı olduğuna göre pencerelerden birinin santimetrekare cinsinden alanı aşağıdakilerden hangisine eşit olabilir?</p>`,
    opts: ['100', '121', '144', '169'], ans: 2,
    hints: [`Pencere kenarı hem 4'e hem 6'ya bölünmeli.`],
    steps: [`Kenar 12'nin katı → alan 144, 576, …`, `Seçeneklerde <b>144</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 56, konu: EB, sayfa: 28,
    q: `<p>Bir dükkânda eşit uzunluktaki iki rafa, çapı 90 cm olan lastikler ve çapı 60 cm olan jantlar aralarında boşluk bırakılmadan dizilmiştir.</p>`
      + `<p class="ask">Rafların uzunluğu 10 metreden az olduğuna göre bu raflara dizilmiş olan lastik sayısı ile jant sayısı arasındaki fark <u>en çok</u> kaçtır?</p>`,
    opts: ['3', '5', '7', '9'], ans: 1,
    hints: [`Raf uzunluğu EKOK(90, 60) = 180'in katı.`],
    steps: [`1000'den küçük en büyük kat: 900`, `Lastik 10, jant 15 → fark <b>5</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 57, konu: EB, sayfa: 29,
    q: `<p>Uzunluğu 360 cm ile 400 cm arasında olan bir AB doğru parçası üzerine kenar uzunlukları 5 cm ve 7 cm'lik kareler birer kenarları ortak olacak şekilde boşluk kalmadan ve doğru parçasından taşmadan yerleştirilebiliyor.</p>`
      + `<p class="ask">Buna göre aşağıdaki karelerden hangisi yeteri kadar kullanılıp yukarıdaki gibi yerleştirildiğinde doğru parçasında boşluk ve taşma <u>olmaz</u>?</p>`,
    opts: ['25 cm', '55 cm', '70 cm', '105 cm'], ans: 1,
    hints: [`AB, 35'in 360 ile 400 arasındaki katı.`],
    steps: [`AB = 385 = 5 · 7 · 11`, `385'i bölen: <b>55</b> ✓ (25, 70, 105 bölmez)`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 58, konu: EB, sayfa: 29,
    q: tablo([['Gideceği yer', 'İlk otobüs', 'Son otobüs'], ['İstanbul', '06.00', '00.00'], ['İzmir', '07.00', '23.00']])
      + `<p>Bu otobüs firması; her 90 dakikada bir İstanbul'a, her 120 dakikada bir ise İzmir'e gidecek otobüs hareket ettirmektedir.</p><p class="ask">Buna göre bu otobüs firmasının 1 gün içinde kaç defa İstanbul'a ve İzmir'e gidecek olan otobüsleri aynı anda hareket eder?</p>`,
    opts: ['2', '3', '4', '5'], ans: 1,
    hints: [`İlk ortak saati bul; sonra EKOK(90, 120) = 360 dakikada bir tekrar eder.`],
    steps: [`İstanbul: 06.00, 07.30, 09.00, … İzmir: 07.00, 09.00, …`, `Ortak: 09.00, 15.00, 21.00 (03.00 aralık dışında)`, `<b>3</b> kez`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 59, konu: EB, sayfa: 30,
    q: `<p>Bir çiftçi tarlasının azot ihtiyacını karşılamak için A veya B marka gübreden birini tercih edecektir. A gübresi: 50 kg'lık torba, % 20 azot, 70 TL. B gübresi: 50 kg'lık torba, % 44 azot, 160 TL.</p>`
      + `<p>Çiftçi hangi markayı tercih ederse etsin aldığı gübrenin tamamını kullandığında toprağın ihtiyacı olan azot miktarının tam karşılandığını görüyor. Daha az ödeme yapacak şekilde bir tercihte bulunan çiftçi aldığı gübre için 1000 TL'den az ödüyor.</p>`
      + `<p class="ask">Buna göre çiftçi diğer markayı tercih etseydi kaç TL daha fazla ödeme yapardı?</p>`,
    opts: ['15', '30', '45', '60'], ans: 1,
    hints: [`Torba başına azot: A 10 kg, B 22 kg.`],
    steps: [`Azot ihtiyacı EKOK(10, 22) = 110k kg → A: 11k torba = 770k TL, B: 5k torba = 800k TL`, `770k < 1000 → k = 1`, `Fark: 800 − 770 = <b>30</b> TL`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 60, konu: EB, sayfa: 30,
    q: tablo([['Saksı çapı (cm)', 'Bir adedinin fiyatı (TL)'], ['20', '12'], ['30', '18']])
      + `<p>Eşit uzunluktaki iki rafa aynı özellikteki saksılar aynı rafa gelecek şekilde birer birer, başta, sonda ve aralarda boşluk bırakılmadan dizilmiştir. Rafların her birindeki saksıların toplam satış fiyatı birbirine eşit ve 110 TL ile 170 TL arasındadır.</p>`
      + `<p class="ask">Buna göre bu rafların saksı konulan bölümlerinin uzunluğu kaç santimetredir?</p>`,
    opts: ['120', '180', '240', '300'], ans: 2,
    hints: [`Uzunluk 60'ın katı; fiyat santimetre başına 0,6 TL.`],
    steps: [`L = 60k; her raf 0,6L TL → 110 < 0,6L < 170 → 183 < L < 283`, `L = <b>240</b>`],
    answer: `Cevap: <b>C</b>`
  }
  );
})();
