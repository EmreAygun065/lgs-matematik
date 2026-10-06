// LGS çıkmış sorular (Çarpanlar ve Katlar) — çözüm kartı verisi. yardimci.js'ten sonra yüklenir.
window.CK_CIKMIS = (function () {
  const CA = 'Bir doğal sayının çarpanları', EB = 'EBOB ve EKOK', AA = 'Aralarında asal sayılar';
  const ST = 'stroke="var(--fig-stroke)"';
  const rect = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${ST} stroke-width="1.5" ${extra}/>`;
  const txt = (x, y, t, extra = '') => `<text x="${x}" y="${y}" text-anchor="middle" font-size="14" ${extra}>${t}</text>`;

  const terazi2 = svg(320, 150, (() => {
    let g = rect(40, 80, 240, 55, '#7d8288', 'rx="10"') + rect(30, 70, 260, 10, '#9aa0a6');
    const kutu = (x, y, t, renk) => rect(x, y, 22, 20, renk) + txt(x + 11, y + 15, t, 'font-size="12" style="fill:#1f2328"');
    [[50, 50], [72, 50], [94, 50], [61, 30], [83, 30]].forEach(([x, y]) => g += kutu(x, y, 'A', 'var(--fig-blue)'));
    [[170, 50], [192, 50], [214, 50], [181, 30], [203, 30], [192, 10]].forEach(([x, y]) => g += kutu(x, y, 'B', 'var(--fig-yellow)'));
    g += rect(100, 92, 120, 30, '#fff', 'rx="4"') + rect(108, 97, 20, 20, '#fff') + rect(128, 97, 20, 20, '#fff') + rect(148, 97, 20, 20, '#fff');
    return g + txt(118, 112, '2', 'style="fill:#1f2328"') + `<text x="174" y="112" font-size="12" style="fill:#1f2328">gram</text>`;
  })(), '5 özdeş A ve 6 özdeş B cismi terazide; ekranda yalnızca yüzler basamağındaki 2 görünüyor');

  const plan8 = svg(240, 180, `
    ${rect(30, 10, 80, 50, 'var(--yellow-soft)')}${rect(110, 10, 100, 40, 'var(--yellow-soft)')}
    ${rect(30, 60, 80, 30, 'var(--yellow-soft)')}${rect(110, 50, 100, 30, 'var(--yellow-soft)')}
    ${rect(30, 90, 80, 80, 'var(--yellow-soft)')}${rect(110, 80, 100, 90, 'var(--yellow-soft)')}
    <text x="70" y="40" text-anchor="middle" font-size="13">35 cm²</text><text x="160" y="35" text-anchor="middle" font-size="13">44 cm²</text>
    <text x="70" y="80" text-anchor="middle" font-size="13">21 cm²</text><text x="160" y="70" text-anchor="middle" font-size="13">33 cm²</text>`, 'Dikdörtgen kâğıt altı dikdörtgene ayrılmış: solda 35 ve 21, sağda 44 ve 33 cm²; alttaki iki bölgenin alanı verilmemiş');

  const elmas9 = svg(330, 170, (() => {
    const d = (cx) => `<polygon points="${cx},35 ${cx + 50},85 ${cx},135 ${cx - 50},85" fill="var(--blue-soft)" ${ST}/>`;
    const c = (x, y, t) => `<circle cx="${x}" cy="${y}" r="16" fill="var(--fig-yellow)" ${ST}/>` + txt(x, y + 5, t, 'style="fill:#1f2328"');
    return d(110) + d(220) + txt(110, 90, 'A', 'font-weight="700"') + txt(220, 90, 'B', 'font-weight="700"')
      + c(110, 25, '5') + c(110, 145, '9') + c(55, 85, '') + c(165, 85, '') + c(220, 25, '') + c(220, 145, '') + c(275, 85, '');
  })(), 'İki dörtgen; köşelerinde daireler. A dörtgeninin üst köşesinde 5, alt köşesinde 9 var; iki dörtgen ortadaki bir daireyi paylaşıyor');

  const kartlar14 = svg(380, 130, rect(20, 40, 70, 50, 'var(--card)') + rect(120, 10, 70, 110, 'var(--card)') + rect(230, 20, 120, 90, 'var(--card)')
    + txt(55, 70, '35 cm²') + txt(155, 70, '77 cm²') + txt(290, 70, '110 cm²'), 'Alanları 35, 77 ve 110 cm² olan dikdörtgen kartonlar');

  const plan15 = svg(260, 200, `
    ${rect(20, 10, 110, 75, 'var(--card)')}${rect(130, 10, 70, 75, 'var(--card)')}${rect(200, 10, 40, 75, 'var(--card)')}
    ${rect(20, 85, 220, 30, 'var(--card)')}
    ${rect(20, 115, 50, 75, 'var(--card)')}${rect(70, 115, 70, 75, 'var(--card)')}${rect(140, 115, 100, 75, 'var(--card)')}
    <text x="165" y="52" text-anchor="middle" font-size="12">21 m²</text><text x="220" y="52" text-anchor="middle" font-size="12">14 m²</text>
    <text x="130" y="105" text-anchor="middle" font-size="12">24 m²</text><text x="45" y="157" text-anchor="middle" font-size="12">10 m²</text><text x="190" y="157" text-anchor="middle" font-size="12">35 m²</text>`,
    'Kat planı: üst sırada alanı verilmeyen bölüm, 21 ve 14 m²; ortada boydan boya 24 m²; alt sırada 10 m², alanı verilmeyen bölüm ve 35 m²');

  return [
  {
    no: 1, yil: 2026, konu: EB,
    q: `<p>Bir imalathanede 168 adet beyaz renkli mum ile 200 adet sarı renkli mum üretilmiştir. Bu mumların tamamı, her bir pakette eşit sayıda ve tek renk mum olacak şekilde paketlenmiştir. Bu iş için <u>en az</u> sayıda paket kullanılmıştır. Paketleme sonrasında yapılan kontrolde, 17 adet beyaz mum ile 11 adet sarı mumun kırık olduğu tespit edilmiştir.</p>`
      + `<p class="ask">Buna göre, içinde kırık mum bulunmayan paketlerin sayısı <u>en fazla</u> kaçtır?</p>`,
    opts: ['40', '41', '42', '43'], ans: 1,
    hints: [`En az paket için bir paketteki mum sayısı EBOB(168, 200) olmalı.`, `Kırık mumları olabildiğince az pakete topla.`],
    steps: [
      `EBOB(168, 200) = 8 → beyaz 168 / 8 = 21 paket, sarı 200 / 8 = 25 paket → toplam 46`,
      `17 kırık beyaz en az 3 pakete sığar (8 + 8 + 1). 11 kırık sarı en az 2 pakete sığar (8 + 3)`,
      `Kırıksız paket en fazla: 46 − 5 = <b>41</b>`
    ],
    answer: `Cevap: <b>B</b>`,
    trap: `17 / 8 ≈ 2,1 deyip 2 paket saymak; 17 mum 2 pakete sığmaz, 3 paket gerekir.`
  },
  {
    no: 2, yil: 2025, konu: EB,
    q: `<p>Her birinin kütlesi gram cinsinden doğal sayı olan 5 adet özdeş A cisminin toplam kütlesi, her birinin kütlesi gram cinsinden doğal sayı olan 6 adet özdeş B cisminin toplam kütlesine eşittir. Bu cisimlerin tamamı bir terazide tartıldığında toplam kütle üç basamaklı bir doğal sayıya eşit olup terazinin ekranında sadece yüzler basamağındaki 2 rakamı görünmektedir.</p><div class="fig">${terazi2}</div>`
      + `<p class="ask">Buna göre, 1 adet A cisminin kütlesi kaç gramdır?</p>`,
    opts: ['30', '24', '21', '18'], ans: 1,
    hints: [`5A = 6B ise toplam 5A + 6B = 10A olur.`, `B = 5A / 6 doğal sayı olmalı → A, 6'nın katı.`],
    steps: [`Toplam = 5A + 6B = 5A + 5A = 10A ve 200 ≤ 10A ≤ 299 → 20 ≤ A ≤ 29`, `B = ${F('5A', 6)} doğal sayı → A, 6'nın katı → A = <b>24</b>`, `Kontrol: B = 20, toplam 240 g ✓`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 3, yil: 2024, konu: EB,
    q: `<p>Her birinin kütlesi 4 g olan mavi ve her birinin kütlesi 28 g olan sarı bilyelerden yeterli sayıda vardır. Bu bilyelerin toplam kütlesi 700 gramdan fazladır.</p>`
      + `<p>Mavi ve sarı bilyelerin tamamı; her bir A torbasında 36 g, her bir B torbasında ise 60 g bilye olacak şekilde A ve B torbalarına yerleştirilmiştir. A torbalarındaki bilyelerin toplam kütlesi, B torbalarındaki bilyelerin toplam kütlesine eşittir.</p>`
      + `<p class="ask">Buna göre, başlangıçtaki toplam bilye sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['24', '32', '48', '96'], ans: 2,
    hints: [`A torbalarının toplamı = B torbalarının toplamı = EKOK(36, 60)'ın bir katı.`, `Bilye sayısını azaltmak için torbalara olabildiğince çok sarı bilye koy.`],
    steps: [
      `EKOK(36, 60) = 180. Toplam = 2 · 180k > 700 → k ≥ 2 → her taraf 360 g`,
      `A torbası (36 g): 28 + 4 + 4 → 3 bilye. 360 / 36 = 10 torba → 30 bilye`,
      `B torbası (60 g): 28 + 28 + 4 → 3 bilye. 360 / 60 = 6 torba → 18 bilye`,
      `En az: 30 + 18 = <b>48</b>`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 4, yil: 2023, konu: EB,
    q: `<p>Efe ve Kuzey'in her ikisinin de bilye sayıları 50'den fazla ve birbirine eşittir. Efe, bilyelerinin tamamını her birinde eşit sayıda bilye olacak şekilde 3 torbaya; Kuzey ise bilyelerinin tamamını her birinde eşit sayıda bilye olacak şekilde 4 torbaya yerleştirmiştir.</p>`
      + `<p class="ask">Efe ile Kuzey, birer torba bilyelerini değiştiklerinde Kuzey'in toplam bilye sayısı <u>en az</u> kaç olur?</p>`,
    opts: ['55', '65', '78', '80'], ans: 1,
    hints: [`Bilye sayısı hem 3'e hem 4'e bölünmeli: 12'nin katı ve 50'den büyük.`],
    steps: [`En küçük: 60 → Efe'nin torbası 20, Kuzey'in torbası 15`, `Kuzey 15'lik torbayı verip 20'lik alır: 60 − 15 + 20 = <b>65</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 5, yil: 2023, konu: AA,
    q: `<p>Bir un çuvalında 46 kg, diğerinde 12 kg un vardır. Bu çuvallara belli miktarlarda un eklendiğinde çuvallardaki un miktarlarının kilogram cinsinden değerleri, aralarında asal olmaktadır.</p>`
      + `<p class="ask">Buna göre, çuvallara eklenen un miktarlarının kilogram cinsinden değerleri aşağıdakilerin hangisi olabilir? (I. çuval – II. çuval)</p>`,
    opts: ['5 – 4', '8 – 6', '3 – 2', '9 – 3'], ans: 0, long: true,
    hints: [`Her seçenekte yeni miktarları bul ve EBOB'larına bak.`],
    steps: [`A) 51 ve 16 → EBOB 1 ✓`, `B) 54 ve 18 → 18 · C) 49 ve 14 → 7 · D) 55 ve 15 → 5`],
    answer: `Cevap: <b>A</b>`,
    trap: `İki sayıdan biri asal değil diye aralarında asal olamayacaklarını sanmak: 51 ve 16 asal değil ama aralarında asaldır.`
  },
  {
    no: 6, yil: 2023, konu: CA,
    q: tablo([['A', 'B'], ['40', '5'], ['⋮', '⋮'], ['Toplam', 'Toplam']])
      + `<p>40 sayısının pozitif tam sayı çarpanlarının tamamı yukarıdaki gibi iki gruba ayrıldığında A grubundaki sayıların toplamı, B grubundaki sayıların toplamına eşit olmaktadır.</p>`
      + `<p class="ask">A grubundaki sayılardan biri 40 ve B grubundaki sayılardan biri 5 olduğuna göre, B grubundaki <u>en küçük</u> sayı kaçtır?</p>`,
    opts: ['1', '2', '4', '5'], ans: 1,
    hints: [`40'ın çarpanlarını yaz ve topla. Her grup toplamın yarısı olmalı.`],
    steps: [`Çarpanlar: 1, 2, 4, 5, 8, 10, 20, 40 → toplam 90 → her grup 45`, `A'da 40 var, 5 eksik; 5 B'de → A = 40 + 4 + 1`, `B = {2, 5, 8, 10, 20} (toplam 45) → en küçük <b>2</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 7, yil: 2022, konu: CA,
    q: `<p>Zeynep'in kalem sayısının çarpanlarından <u>kendisi hariç</u> en büyük iki çarpanı 8 ve 4; Kuzey'in kalem sayısının çarpanlarından <u>kendisi hariç</u> en büyük iki çarpanı 27 ve 9'dur.</p>`
      + `<p>Zeynep ve Kuzey, bu çarpanların toplamı kadar kalemi arkadaşlarına vermiştir.</p><p class="ask">Buna göre, Zeynep ve Kuzey'in toplam kaç kalemi kalmıştır?</p>`,
    opts: ['22', '48', '49', '64'], ans: 2,
    hints: [`Kendisi hariç en büyük çarpan = sayı / en küçük asal çarpan.`],
    steps: [
      `Zeynep: 8 = n / 2 → n = 16 (çarpanlar 1, 2, 4, 8, 16 ✓). Kalan 16 − 12 = 4`,
      `Kuzey: 27 = n / 3 → n = 81 (çarpanlar 1, 3, 9, 27, 81 ✓). Kalan 81 − 36 = 45`,
      `Toplam: 4 + 45 = <b>49</b>`
    ],
    answer: `Cevap: <b>C</b>`,
    trap: `Kuzey'in kalemini 27 · 9 = 243 ya da 54 sanmak. 54'ün kendisi hariç en büyük çarpanı 27, ikincisi 18'dir.`
  },
  {
    no: 8, yil: 2021, konu: CA,
    q: `<p>Dikdörtgen şeklindeki bir kâğıt aşağıdaki gibi altı dikdörtgensel bölgeye ayrılmış ve bu bölgelerden bazılarının alanları şekil üzerinde gösterilmiştir.</p><div class="fig">${plan8}</div>`
      + `<p>Elde edilen bu dikdörtgensel bölgelerden her birinin kenarlarının uzunlukları santimetre cinsinden 1'den büyük birer doğal sayıdır.</p><p class="ask">Buna göre bu kâğıdın bir yüzünün alanı, santimetrekare cinsinden aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['154', '162', '180', '196'], ans: 2,
    hints: [`Sol sütunun genişliği 35 ve 21'i, sağ sütununki 44 ve 33'ü böler.`],
    steps: [
      `Sol genişlik 7 (1'den büyük ortak bölen) → yükseklikler 5 ve 3. Sağ genişlik 11 → yükseklikler 4 ve 3`,
      `Kâğıdın eni 18. Boy: 5 + 3 + a = 4 + 3 + b → b = a + 1, a ≥ 2`,
      `a = 2 → boy 10 → alan <b>180</b> (a = 3 → 198 seçeneklerde yok)`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 9, yil: 2021, konu: AA,
    q: `<div class="fig">${elmas9}</div><p>Yukarıdaki şekilde verilen her bir dairenin içine birbirinden farklı birer doğal sayı yazılacaktır. Bu sayılardan ikisi şekilde verilmiştir. Bulundukları dörtgenin köşelerindeki dairelerde yazan dört sayının çarpımına eşit olan A ve B sayıları aralarında asaldır.</p>`
      + `<p class="ask">Buna göre A + B <u>en az</u> kaçtır?</p>`,
    opts: ['162', '191', '258', '289'], ans: 1,
    hints: [`Ortadaki daire iki dörtgende de var. A ile B aralarında asal ise ortak daire ne olmalı?`],
    steps: [
      `Ortak dairedeki sayı hem A'yı hem B'yi böler → 1 olmalı`,
      `A = 5 · 9 · 1 · x = 45x. B = 1 · y · z · t; y, z, t sayıları 3 ve 5'e, x'in çarpanlarına bölünmemeli`,
      `x = 2 → A = 90, B = 7 · 11 · 13 = 1001 → 1091. x = 3 → A = 135, B = 2 · 4 · 7 = 56 → <b>191</b>`,
      `Daha küçüğü yok: en küçük A + B = 191`
    ],
    answer: `Cevap: <b>B</b>`,
    trap: `x'i en küçük seçmeye çalışmak (x = 2). A küçülürken B'ye çift sayı yazılamaz ve B çok büyür.`
  },
  {
    no: 10, yil: 2020, konu: EB,
    q: `<p>Yükseklikleri santimetre cinsinden birer tam sayı olan k cm, 3k cm, 5k cm ve 7k cm yüksekliğindeki dikdörtgenler prizması şeklindeki kutuların her birinden üçer adet vardır. Bu kutular üst üste dizilerek üç ayrı blok oluşturulmuştur:</p>`
      + tablo([['', '1. blok', '2. blok', '3. blok'], ['En üstte', 'k', '5k', '7k'], ['', '3k', 'k', '5k'], ['', '7k', '3k', '3k'], ['En altta', '5k', '7k', 'k']])
      + `<p>Bloklardaki kutuların yerleri değiştirilmeden bu üç blok üst üste konularak bir kule oluşturuluyor. Daha sonra kulenin en üstünde bulunan kutu alınıyor.</p><p class="ask">Son durumda bu kulenin yüksekliğinin santimetre cinsinden değeri aşağıdakilerden hangisi <u>olamaz</u>?</p>`,
    opts: ['94', '90', '86', '82'], ans: 1,
    hints: [`Her blok 16k. Kule 48k; en üstteki kutu k, 5k veya 7k olabilir.`],
    steps: [`Kule 48k; en üstten k, 5k ya da 7k çıkar → 47k, 43k, 41k`, `94 = 47 · 2 ✓ · 86 = 43 · 2 ✓ · 82 = 41 · 2 ✓`, `<b>90</b>; 47, 43 ve 41'in hiçbirinin katı değil`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 11, yil: 2019, konu: EB,
    q: `<p>Zeynep parasının yarısı ile paketi 30 lira olan A marka ve diğer yarısı ile paketi 50 lira olan B marka kedi mamalarından alıyor. Bu paketlerden markası aynı olan 6 tanesini evinde beslediği kediler için ayırdıktan sonra kalan paketleri bir hayvan barınağına veriyor.</p>`
      + `<p class="ask">Zeynep'in hayvan barınağına verdiği A marka ve B marka mamaların paketlerinin sayıları eşit olduğuna göre Zeynep mamalar için toplam kaç lira harcamıştır?</p>`,
    opts: ['300', '600', '700', '900'], ans: 3,
    hints: [`Her markaya H lira: A'dan H/30, B'den H/50 paket. Ayrılan 6 paket hangi markadan olmalı?`],
    steps: [`A'dan daha çok paket alınır; eşitlik için 6 paket A'dan ayrılır: H/30 − 6 = H/50`, `H · (1/30 − 1/50) = 6 → H · ${F(2, 150)} = 6 → H = 450`, `Toplam: 2 · 450 = <b>900</b> lira`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 12, yil: 2020, konu: EB,
    q: `<p>Her birinin kütlesi 40 kg'dan az ve birbirine eşit olan buğday çuvalları bir kantarda tartıldığında çuvalların toplam kütlesi 720 kg gelmektedir. Kantar üzerindeki çuvalların sayısı, bu çuvallarla eşit kütleye sahip çuvallar konularak arttırıldığında toplam kütle 1344 kg olmaktadır.</p>`
      + `<p class="ask">Buna göre kantar üzerine sonradan konulan çuvalların sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['52', '39', '26', '13'], ans: 2,
    hints: [`Bir çuval hem 720'yi hem 1344'ü böler.`],
    steps: [`EBOB(720, 1344) = 48 → çuval kütlesi 48'in 40'tan küçük böleni → en fazla 24 kg`, `Eklenen: 1344 − 720 = 624 kg → 624 / 24 = <b>26</b> çuval`],
    answer: `Cevap: <b>C</b>`,
    trap: `Çuvalı 48 kg almak; çuvallar 40 kg'dan hafiftir.`
  },
  {
    no: 13, yil: 2020, konu: EB,
    q: `<p>Her birinin kütlesi 3 g olan sarı boncuklardan ve her birinin kütlesi 5 g olan mavi boncuklardan yeterli sayıda vardır. Bu boncuklar kullanılarak bir kolye yapılmıştır. Kolyedeki mavi boncukların toplam kütlesi sarı boncukların toplam kütlesine eşittir.</p>`
      + `<p class="ask">Kullanılan boncukların toplam kütlesi 230 gramdan az olduğuna göre bu kolyedeki sarı boncukların sayısı ile mavi boncukların sayısı arasındaki fark <u>en fazla</u> kaçtır?</p>`,
    opts: ['14', '15', '28', '30'], ans: 0,
    hints: [`Her rengin toplam kütlesi 15'in katı.`],
    steps: [`Her renk 15k gram → sarı 5k, mavi 3k boncuk, fark 2k`, `Toplam 30k < 230 → k ≤ 7`, `Fark en fazla 2 · 7 = <b>14</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 14, yil: 2019, konu: CA,
    q: `<p>Kenarlarının uzunlukları santimetre cinsinden 1'den büyük tam sayı olan dikdörtgen şeklindeki kartonların bir yüzlerinin alanları aşağıda verilmiştir.</p><div class="fig">${kartlar14}</div>`
      + `<p>Bu kartonlardan yüzey alanları farklı olan ikisi seçilip 3 cm'lik kısımları üst üste yapıştırılarak (ortak kenarları çakışacak biçimde) bir dikdörtgen karton oluşturulacaktır.</p><p class="ask">Bu şekilde oluşturulan kartonun bir yüzünün alanı <u>en fazla</u> kaç santimetrekaredir?</p>`,
    opts: ['91', '130', '154', '187'], ans: 2,
    hints: [`İki kartonun eşit bir kenarı olmalı. Alan = iki alan toplamı − 3 · ortak kenar.`],
    steps: [`35 ve 77: ortak kenar 7 → 112 − 21 = 91 · 35 ve 110: ortak kenar 5 → 145 − 15 = 130`, `77 ve 110: ortak kenar 11 → 187 − 33 = <b>154</b>`],
    answer: `Cevap: <b>C</b>`,
    trap: `Üst üste gelen kısmı çıkarmayı unutup 187 demek.`
  },
  {
    no: 15, yil: 2018, konu: CA,
    q: `<div class="fig">${plan15}</div><p>Yukarıda her bir bölümü dikdörtgen şeklinde olan dikdörtgen biçimindeki kat planı üzerinde bazı bölümlerin alanları verilmiştir.</p>`
      + `<p class="ask">Bu dikdörtgenlerin her birinin kenar uzunlukları metre cinsinden birer doğal sayı olduğuna göre alanı verilmeyen bölümlerin alanları toplamı <u>en az</u> kaç metrekaredir?</p>`,
    opts: ['36', '54', '64', '76'], ans: 2,
    hints: [`Üst sıranın yüksekliği 21 ve 14'ü, alt sıranınki 10 ve 35'i böler. Planın eni 24'ü böler.`],
    steps: [
      `Üst sıra yüksekliği 7 (genişlikler 3 ve 2). Alt sıra yüksekliği 5 (genişlikler 2 ve 7)`,
      `Plan eni W, 24'ü böler ve W ≥ 2 + 7 + 1 → W = 12`,
      `Üst boş bölüm: (12 − 5) · 7 = 49. Alt boş bölüm: (12 − 9) · 5 = 15`,
      `Toplam: <b>64</b>`
    ],
    answer: `Cevap: <b>C</b>`
  }
  ];
})();
