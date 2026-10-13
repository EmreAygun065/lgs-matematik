// 7. sınıf tanı testi · Tam Sayılar ve Rasyonel Sayılar (Maarif 7. sınıf 1. tema, tanıma bölümü; işlem yok).
// Kapsam: tam sayılar ve mutlak değer, rasyonel sayıyı tanıma, sayı doğrusu, kesir ↔ ondalık gösterim, devirli ondalık gösterim.
// 6 beceri, her biri iki kez sorulur: bir kez doğrudan (bicim: 'islem'), bir kez soru cümlesiyle (bicim: 'sozel').
// Doğrudan soruyu yapıp aynı becerinin sözel sorusunu kaçıran öğrenci, bilgide değil soruyu okuyup matematiğe çevirmede zorlanıyordur;
// öğretmen paneli bu karşılaştırmayı "beceri" ve "bicim" alanlarına göre gösterir.
// Sorular bu teste özeldir. Yayına girdikten sonra soruların sırasını değiştirmeyin: panel eski sonuçları bu sıraya göre eşler.
(function () {
  const D = x => `<span style="text-decoration:overline">${x}</span>`;   // devirli kısım
  const B = {
    mutlak: 'Tam sayılar ve mutlak değer',
    tanima: 'Rasyonel sayıyı tanıma',
    dogru: 'Sayı doğrusunda rasyonel sayılar',
    kesirOndalik: 'Kesri ondalık gösterimle yazma',
    ondalikKesir: 'Ondalık gösterimi kesre çevirme',
    devirli: 'Devirli ondalık gösterimi kesre çevirme'
  };

  // Sayı doğrusu: −3'ten 0'a, her birim 4 eş parça; A noktası −3'ün bir parça sağında.
  const x = v => 40 + (v + 3) * 120;
  const dogruSekli = svg(440, 86,
    `<line x1="18" y1="50" x2="422" y2="50" stroke="var(--fig-stroke)" stroke-width="1.6"/>`
    + `<path d="M422 50 l-8 -4 v8 z M18 50 l8 -4 v8 z" fill="var(--fig-stroke)"/>`
    + Array.from({ length: 13 }, (_, i) => { const v = -3 + i / 4, ana = i % 4 === 0; return `<line x1="${x(v)}" y1="${ana ? 40 : 44}" x2="${x(v)}" y2="${ana ? 60 : 56}" stroke="var(--fig-stroke)" stroke-width="${ana ? 1.8 : 1.2}"/>`; }).join('')
    + [-3, -2, -1, 0].map(v => `<text x="${x(v)}" y="80" text-anchor="middle" font-size="15" fill="var(--fig-stroke)">${v < 0 ? '−' + -v : v}</text>`).join('')
    + `<circle cx="${x(-2.75)}" cy="50" r="5" fill="var(--accent)"/><text x="${x(-2.75)}" y="30" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-stroke)">A</text>`,
    'Sayı doğrusu: −3, −2, −1 ve 0 işaretli, her birim 4 eş parçaya bölünmüş; A noktası −3 ile −2 arasında, −3\'ün bir parça sağında');

  window.YEDI_TANIMA = [
    {
      no: 1, beceri: B.mutlak, bicim: 'sozel',
      q: `<p>Deniz seviyesi 0 kabul edilerek deniz seviyesinin üstündeki yükseklikler pozitif, altındaki derinlikler negatif tam sayılarla gösteriliyor. Bir anda bir balığın konumu −6 m, bir martının konumu +9 m, bir uçurtmanın konumu +12 m ve bir dalgıcın konumu −14 m'dir.</p><p class="ask">Buna göre bu anda deniz seviyesine en uzak olan hangisidir?</p>`,
      opts: ['Balık', 'Martı', 'Uçurtma', 'Dalgıç'], ans: 3,
      steps: ['Deniz seviyesine uzaklık, sayının 0\'a uzaklığıdır; yani mutlak değeridir', '|−6| = 6, |+9| = 9, |+12| = 12, |−14| = 14', 'En büyük mutlak değer 14 → <b>Dalgıç</b>'],
      answer: 'Cevap: <b>D</b>',
      trap: 'Uçurtma en büyük sayıdır (+12) ama deniz seviyesine en uzak olan, mutlak değeri en büyük olan dalgıçtır.'
    },
    {
      no: 2, beceri: B.ondalikKesir, bicim: 'islem',
      q: `<p class="ask">−2,35 sayısının en sade kesir gösterimi aşağıdakilerden hangisidir?</p>`,
      opts: [`−${F(47, 20)}`, `−${F(33, 20)}`, `−${F(7, 20)}`, `−${F(47, 200)}`], ans: 0,
      steps: [`Virgülden sonra 2 basamak var → paydaya 100 yazılır: −${F(235, 100)}`, `235 ve 100, 5 ile sadeleşir → −${F(47, 20)}`],
      answer: 'Cevap: <b>A</b>',
      trap: `−${F(33, 20)}, −2,35'i −2 ile +0,35'in birleşimi sananların; −${F(7, 20)} tam kısmı atanların; −${F(47, 200)} basamak sayısını yanlış sayanların cevabıdır.`
    },
    {
      no: 3, beceri: B.tanima, bicim: 'sozel',
      q: `<p>Matematik dersinde dört öğrenci rasyonel sayılarla ilgili şunları söylüyor:</p>`
        + `<p><b>Ali:</b> Her tam sayı bir rasyonel sayıdır.<br><b>Ayşe:</b> 0 bir rasyonel sayı değildir.<br><b>Can:</b> −${F(3, 4)} ile ${F(3, '−4')} aynı rasyonel sayıyı gösterir.<br><b>Ece:</b> Paydası 0 olan kesirler de rasyonel sayıdır.</p>`
        + `<p class="ask">Buna göre hangi iki öğrencinin söylediği doğrudur?</p>`,
      opts: ['Ali ve Ayşe', 'Ali ve Can', 'Ayşe ve Ece', 'Can ve Ece'], ans: 1,
      steps: [`Ali doğru: her tam sayı paydası 1 olan bir kesir olarak yazılabilir (örneğin −5 = ${F('−5', 1)})`, `Ayşe yanlış: 0 = ${F(0, 1)} bir rasyonel sayıdır`, `Can doğru: −${F(3, 4)} = ${F('−3', 4)} = ${F(3, '−4')}`, 'Ece yanlış: rasyonel sayıda payda 0 olamaz', 'Doğru söyleyenler: <b>Ali ve Can</b>'],
      answer: 'Cevap: <b>B</b>',
      trap: '0\'ı rasyonel sayı saymamak ve eksi işaretinin yeri değişince sayının değiştiğini sanmak sık yapılan hatalardır.'
    },
    {
      no: 4, beceri: B.devirli, bicim: 'islem',
      q: `<p class="ask">1,2${D(3)} sayısının kesir gösterimi aşağıdakilerden hangisidir?</p>`,
      opts: [F(37, 33), F(37, 30), F(41, 33), F(41, 30)], ans: 1,
      steps: ['Sayının tamamı: 123; devretmeyen kısım: 12', 'Virgülden sonra 1 devreden (9), 1 devretmeyen (0) basamak → payda 90', `${F('123 − 12', 90)} = ${F(111, 90)} = ${F(37, 30)}`],
      answer: 'Cevap: <b>B</b>',
      trap: `${F(41, 33)} 23'ü devreden sananların, ${F(41, 30)} devretmeyen kısmı çıkarmayı unutanların cevabıdır.`
    },
    {
      no: 5, beceri: B.kesirOndalik, bicim: 'sozel',
      q: `<p>Bir kumaşçı, 7 metrelik bir kumaşı hiç artmayacak biçimde eş uzunlukta parçalara ayıracaktır. Her parçanın uzunluğunu metre cinsinden etiketine ondalık gösterimle yazacaktır.</p><p>Kumaşçı, etiketlerde devirli ondalık gösterim olmasını istememektedir.</p><p class="ask">Buna göre kumaşçı bu kumaşı kaç parçaya ayırabilir?</p>`,
      opts: ['6', '12', '14', '15'], ans: 2,
      steps: [`Bir parçanın uzunluğu ${F(7, 'parça sayısı')} metredir`, `${F(7, 6)}, ${F(7, 12)}, ${F(7, 15)} sadeleşmez ve paydalarında 3 çarpanı vardır → devirli`, `${F(7, 14)} = ${F(1, 2)} = 0,5 → devirli değil; <b>14</b> parça`],
      answer: 'Cevap: <b>C</b>',
      trap: `14 = 2 · 7 olduğu için devirli sanılabilir; payda, kesir sadeleştirildikten sonra incelenir.`
    },
    {
      no: 6, beceri: B.dogru, bicim: 'islem',
      q: `<p>Aşağıdaki sayı doğrusunda ardışık iki tam sayı arası eş parçalara ayrılmıştır.</p>${dogruSekli}<p class="ask">A noktasının gösterdiği rasyonel sayı aşağıdakilerden hangisidir?</p>`,
      opts: [`−${F(13, 4)}`, `−${F(11, 4)}`, `−${F(5, 4)}`, F(11, 4)], ans: 1,
      steps: ['Her birim 4 eş parçaya ayrılmış → bir parça ' + F(1, 4), 'A, 0\'ın 11 parça solunda (−2\'nin 3 parça solunda)', `A = −${F(11, 4)} = −2${F(3, 4)}`],
      answer: 'Cevap: <b>B</b>',
      trap: `−${F(5, 4)}, −2${F(3, 4)} sayısını −2 ile +${F(3, 4)}'ün birleşimi sananların; −${F(13, 4)} −3'ten sola sayanların cevabıdır.`
    },
    {
      no: 7, beceri: B.ondalikKesir, bicim: 'sozel',
      q: `<p>Bir çiftçi tarlasını 8 eş parçaya ayırmış ve her parçaya tek çeşit ürün ekmiştir. Tarlanın 0,375'ine buğday, kalan kısmına mısır ekmiştir.</p><p class="ask">Buna göre mısır ekilen parça sayısı kaçtır?</p>`,
      opts: ['3', '4', '5', '6'], ans: 2,
      steps: [`0,375 = ${F(375, 1000)} = ${F(3, 8)} → 8 parçanın 3'üne buğday ekilmiş`, 'Kalan 8 − 3 = <b>5</b> parçaya mısır ekilmiş'],
      answer: 'Cevap: <b>C</b>',
      trap: '3 buğday ekilen parça sayısıdır; soru kalan kısmı soruyor.'
    },
    {
      no: 8, beceri: B.mutlak, bicim: 'islem',
      q: `<p class="ask">Aşağıdaki tam sayılardan hangisinin sayı doğrusunda 0'a uzaklığı en fazladır?</p>`,
      opts: ['−12', '−8', '9', '11'], ans: 0,
      steps: ['Bir sayının 0\'a uzaklığı mutlak değeridir', '|−12| = 12, |−8| = 8, |9| = 9, |11| = 11', 'En büyük mutlak değer 12 → <b>−12</b>'],
      answer: 'Cevap: <b>A</b>',
      trap: '11 en büyük sayıdır ama 0\'a en uzak olan, mutlak değeri en büyük olan −12\'dir.'
    },
    {
      no: 9, beceri: B.devirli, bicim: 'sozel',
      q: `<p>Merve hesap makinesinde iki doğal sayıyı birbirine böldüğünde ekranda <b>0,4545454545</b> görüyor. Ekrana sığmadığı için görünmese de 45 rakamlarının sonsuza kadar bu şekilde tekrar ettiğini biliyor.</p><p>Merve bu sonucu en sade kesir olarak ${F('a', 'b')} biçiminde yazıyor.</p><p class="ask">Buna göre a + b kaçtır?</p>`,
      opts: ['3', '13', '16', '29'], ans: 2,
      steps: [`Sayı 0,${D(45)} biçimindedir; virgülden sonra iki basamak devreder → payda 99`, `0,${D(45)} = ${F(45, 99)} = ${F(5, 11)}`, 'a + b = 5 + 11 = <b>16</b>'],
      answer: 'Cevap: <b>C</b>',
      trap: `29, sayıyı 0,45 = ${F(9, 20)} sanan; 13, yalnızca 4'ü devreden sanan (${F(4, 9)}); 3, paydaya 90 yazan (${F(1, 2)}) öğrencinin cevabıdır.`
    },
    {
      no: 10, beceri: B.tanima, bicim: 'islem',
      q: `<p class="ask">Aşağıdakilerden hangisi bir rasyonel sayı <u>değildir</u>?</p>`,
      opts: ['−5', F(0, 8), '−0,4', F(8, 0)], ans: 3,
      steps: [`−5 = ${F('−5', 1)} ve −0,4 = −${F(4, 10)} rasyoneldir`, `${F(0, 8)} = 0 rasyoneldir`, `${F(8, 0)}: payda 0 olamaz → rasyonel sayı <b>değildir</b>`],
      answer: 'Cevap: <b>D</b>',
      trap: `${F(0, 8)} ile ${F(8, 0)} karıştırılabilir: pay 0 olabilir, payda 0 olamaz. Tam sayılar ve ondalık gösterimler de rasyonel sayıdır.`
    },
    {
      no: 11, beceri: B.dogru, bicim: 'sozel',
      q: `<p>Bir kuyunun ağzı 0 noktası, kuyunun içi negatif yön kabul ediliyor. Kuyuya sarkıtılan bir ipin üzerinde her metre 6 eş parçaya bölünerek işaretlenmiştir.</p><p>İpin ucu kuyu ağzından 2 tam metre ve ardından 5 parça daha aşağıdadır.</p><p class="ask">İpin ucunun konumu hangi rasyonel sayıyla gösterilir?</p>`,
      opts: [`−${F(17, 6)}`, `−${F(7, 6)}`, `−${F(5, 6)}`, F(17, 6)], ans: 0,
      steps: [`Bir parça ${F(1, 6)} metre; ipin ucu 0'ın 2${F(5, 6)} metre aşağısında`, `2${F(5, 6)} = ${F(17, 6)}`, `Aşağı yön negatif → <b>−${F(17, 6)}</b>`],
      answer: 'Cevap: <b>A</b>',
      trap: `−${F(7, 6)}, konumu −2 ile +${F(5, 6)}'nın birleşimi gibi düşünenlerin; ${F(17, 6)} yönü unutanların cevabıdır.`
    },
    {
      no: 12, beceri: B.kesirOndalik, bicim: 'islem',
      q: `<p class="ask">Aşağıdaki kesirlerden hangisinin ondalık gösterimi devirlidir?</p>`,
      opts: [F(7, 20), F(11, 40), F(9, 24), F(5, 12)], ans: 3,
      steps: [`Önce sadeleştir: ${F(9, 24)} = ${F(3, 8)}; diğerleri sadedir`, 'Paydası yalnızca 2 ve 5 çarpanlarından oluşan kesir sonlu ondalıktır: 20, 40, 8', `12 = 2 · 2 · 3 → ${F(5, 12)} = 0,41${D(6)} devirlidir`],
      answer: 'Cevap: <b>D</b>',
      trap: `${F(9, 24)} paydasında 3 olduğu için devirli sanılabilir; sadeleşince ${F(3, 8)} = 0,375 olur.`
    }
  ].map(q => ({ ...q, konu: q.beceri }));
})();
