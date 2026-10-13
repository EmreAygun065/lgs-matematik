// 7. sınıf tanı testi · Tam Sayılar ve Rasyonel Sayılar (rasyonel sayılarla işlemlerden önce).
// 8 beceri, her biri iki kez sorulur: bir kez çıplak işlem (bicim: 'islem'), bir kez soru cümlesiyle (bicim: 'sozel').
// Aynı beceride işlemi yapıp sözel soruyu kaçıran öğrenci, hesapta değil soruyu işleme çevirmede zorlanıyordur;
// öğretmen paneli bu karşılaştırmayı "beceri" ve "bicim" alanlarına göre gösterir.
// Sorular bu teste özeldir. Yayına girdikten sonra soruların sırasını değiştirmeyin: panel eski sonuçları bu sıraya göre eşler.
(function () {
  const D = x => `<span style="text-decoration:overline">${x}</span>`;   // devirli kısım
  const B = {
    toplama: 'Tam sayılarla toplama ve çıkarma',
    carpma: 'Tam sayılarla çarpma ve bölme',
    kuvvet: 'Tam sayıların kuvvetleri',
    dogru: 'Sayı doğrusunda rasyonel sayılar',
    ondalik: 'Ondalık gösterimi kesre çevirme',
    devirliMi: 'Sonlu ve devirli ondalık gösterim',
    devirli: 'Devirli sayıyı kesre çevirme',
    adim: 'Çok adımlı işlem'
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

  window.YEDI_TANI = [
    {
      no: 1, beceri: B.toplama, bicim: 'sozel',
      q: `<p>Bir kentte sabah saat 06.00'da hava sıcaklığı −4 °C'dir. Sıcaklık öğlene kadar 11 °C artmış, öğleden akşama kadar 9 °C düşmüş, akşamdan gece yarısına kadar da 5 °C daha düşmüştür.</p><p class="ask">Buna göre gece yarısı hava sıcaklığı kaç °C'dir?</p>`,
      opts: ['−7', '−3', '1', '7'], ans: 0,
      steps: ['Başlangıç −4 °C; artış (+), düşüş (−) ile gösterilir', '(−4) + (+11) + (−9) + (−5)', '= 7 − 9 − 5 = <b>−7</b>'],
      answer: 'Cevap: <b>A</b>',
      trap: '−3 başlangıç sıcaklığını unutanların, 1 başlangıcı +4 alanların, 7 yalnızca öğlen sıcaklığını bulanların cevabıdır.'
    },
    {
      no: 2, beceri: B.ondalik, bicim: 'islem',
      q: `<p class="ask">−2,35 sayısının en sade kesir gösterimi aşağıdakilerden hangisidir?</p>`,
      opts: [`−${F(47, 20)}`, `−${F(33, 20)}`, `−${F(7, 20)}`, `−${F(47, 200)}`], ans: 0,
      steps: [`Virgülden sonra 2 basamak var → paydaya 100 yazılır: −${F(235, 100)}`, `235 ve 100, 5 ile sadeleşir → −${F(47, 20)}`],
      answer: 'Cevap: <b>A</b>',
      trap: `−${F(33, 20)}, −2,35'i −2 + 0,35 diye düşünenlerin; −${F(7, 20)} tam kısmı atanların; −${F(47, 200)} basamak sayısını yanlış sayanların cevabıdır.`
    },
    {
      no: 3, beceri: B.kuvvet, bicim: 'sozel',
      q: `<p>Bir kart oyununda oyuncu, çektiği kartın üzerinde yazan tam sayının küpü kadar puan alır. Bu sonuç negatifse oyuncunun puanı o kadar azalır.</p><p>Oyuna 0 puanla başlayan Efe sırasıyla üzerinde −2, 1 ve −3 yazan kartları çekmiştir.</p><p class="ask">Buna göre Efe'nin oyun sonundaki puanı kaçtır?</p>`,
      opts: ['−34', '−12', '14', '36'], ans: 0,
      steps: ['(−2)<sup>3</sup> = −8, 1<sup>3</sup> = 1, (−3)<sup>3</sup> = −27', 'Negatif bir sayının tek kuvveti negatiftir', '0 + (−8) + 1 + (−27) = <b>−34</b>'],
      answer: 'Cevap: <b>A</b>',
      trap: '36 küpleri pozitif alanların, 14 küp yerine kare alanların, −12 küp yerine 3 ile çarpanların cevabıdır.'
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
      no: 5, beceri: B.devirliMi, bicim: 'sozel',
      q: `<p>Bir kumaşçı, 7 metrelik bir kumaşı hiç artmayacak biçimde eş uzunlukta parçalara ayıracaktır. Her parçanın uzunluğunu metre cinsinden etiketine ondalık gösterimle yazacaktır.</p><p>Kumaşçı, etiketlerde devirli ondalık gösterim olmasını istememektedir.</p><p class="ask">Buna göre kumaşçı bu kumaşı kaç parçaya ayırabilir?</p>`,
      opts: ['6', '12', '14', '15'], ans: 2,
      steps: [`Bir parçanın uzunluğu ${F(7, 'parça sayısı')} metredir`, `${F(7, 6)}, ${F(7, 12)}, ${F(7, 15)} sadeleşmez ve paydalarında 3 çarpanı vardır → devirli`, `${F(7, 14)} = ${F(1, 2)} = 0,5 → devirli değil; <b>14</b> parça`],
      answer: 'Cevap: <b>C</b>',
      trap: `14 = 2 · 7 olduğu için devirli sanılabilir; payda, kesir sadeleştirildikten sonra incelenir.`
    },
    {
      no: 6, beceri: B.carpma, bicim: 'islem',
      q: `<p class="ask">[(−6) · (+4)] ÷ (−8) + (−3) · (−2) işleminin sonucu kaçtır?</p>`,
      opts: ['−9', '−3', '3', '9'], ans: 3,
      steps: ['(−6) · (+4) = −24 ve (−24) ÷ (−8) = 3', '(−3) · (−2) = 6', '3 + 6 = <b>9</b>'],
      answer: 'Cevap: <b>D</b>',
      trap: '(−24) ÷ (−8) işlemini −3 bulanlar 3 ya da −9 bulur.'
    },
    {
      no: 7, beceri: B.adim, bicim: 'sozel',
      q: `<p>Tabloda bir kentte bir haftanın altı gününe ait en yüksek ve en düşük hava sıcaklıkları verilmiştir.</p>`
        + tablo([['', 'Pzt', 'Salı', 'Çrş', 'Prş', 'Cuma', 'Cmt'], ['En yüksek (°C)', '3', '−1', '9', '5', '2', '12'], ['En düşük (°C)', '−4', '−7', '2', '−1', '−6', '4']])
        + `<p class="ask">Bu altı günün en düşük hava sıcaklıklarının ortalaması kaç °C'dir?</p>`,
      opts: ['−3', '−2', '4', '5'], ans: 1,
      steps: ['Yalnızca "En düşük" satırı kullanılır', '(−4) + (−7) + 2 + (−1) + (−6) + 4 = −12', '(−12) ÷ 6 = <b>−2</b>'],
      answer: 'Cevap: <b>B</b>',
      trap: '5 "En yüksek" satırının ortalamasıdır; 4 işaretleri yok sayanların, −3 yalnızca negatif sayıları toplayanların cevabıdır.'
    },
    {
      no: 8, beceri: B.dogru, bicim: 'islem',
      q: `<p>Aşağıdaki sayı doğrusunda ardışık iki tam sayı arası eş parçalara ayrılmıştır.</p>${dogruSekli}<p class="ask">A noktasının gösterdiği rasyonel sayı aşağıdakilerden hangisidir?</p>`,
      opts: [`−${F(13, 4)}`, `−${F(11, 4)}`, `−${F(5, 4)}`, F(11, 4)], ans: 1,
      steps: ['Her birim 4 eş parçaya ayrılmış → bir parça ' + F(1, 4), 'A, 0\'ın 11 parça solunda (−2\'nin 3 parça solunda)', `A = −${F(11, 4)} = −2${F(3, 4)}`],
      answer: 'Cevap: <b>B</b>',
      trap: `−${F(5, 4)}, −2${F(3, 4)} sayısını −2 + ${F(3, 4)} sananların; −${F(13, 4)} −3'ten sola sayanların cevabıdır.`
    },
    {
      no: 9, beceri: B.ondalik, bicim: 'sozel',
      q: `<p>Bir çiftçi tarlasını 8 eş parçaya ayırmış ve her parçaya tek çeşit ürün ekmiştir. Tarlanın 0,375'ine buğday, kalan kısmına mısır ekmiştir.</p><p class="ask">Buna göre mısır ekilen parça sayısı kaçtır?</p>`,
      opts: ['3', '4', '5', '6'], ans: 2,
      steps: [`0,375 = ${F(375, 1000)} = ${F(3, 8)} → 8 parçanın 3'üne buğday ekilmiş`, 'Kalan 8 − 3 = <b>5</b> parçaya mısır ekilmiş'],
      answer: 'Cevap: <b>C</b>',
      trap: '3 buğday ekilen parça sayısıdır; soru kalan kısmı soruyor.'
    },
    {
      no: 10, beceri: B.toplama, bicim: 'islem',
      q: `<p class="ask">(−7) − (+5) + (−3) − (−9) işleminin sonucu kaçtır?</p>`,
      opts: ['−24', '−6', '0', '4'], ans: 1,
      steps: ['Çıkarma, çıkanın ters işaretlisiyle toplamadır: −(+5) = −5, −(−9) = +9', '−7 − 5 − 3 + 9', '= −15 + 9 = <b>−6</b>'],
      answer: 'Cevap: <b>B</b>',
      trap: '−24, −(−9) ifadesini −9 alanların cevabıdır.'
    },
    {
      no: 11, beceri: B.devirli, bicim: 'sozel',
      q: `<p>Merve hesap makinesinde iki doğal sayıyı birbirine böldüğünde ekranda <b>0,4545454545</b> görüyor. Ekrana sığmadığı için görünmese de 45 rakamlarının sonsuza kadar bu şekilde tekrar ettiğini biliyor.</p><p>Merve bu sonucu en sade kesir olarak ${F('a', 'b')} biçiminde yazıyor.</p><p class="ask">Buna göre a + b kaçtır?</p>`,
      opts: ['3', '13', '16', '29'], ans: 2,
      steps: [`Sayı 0,${D(45)} biçimindedir; virgülden sonra iki basamak devreder → payda 99`, `0,${D(45)} = ${F(45, 99)} = ${F(5, 11)}`, 'a + b = 5 + 11 = <b>16</b>'],
      answer: 'Cevap: <b>C</b>',
      trap: `29, sayıyı 0,45 = ${F(9, 20)} sanan; 13, yalnızca 4'ü devreden sanan (${F(4, 9)}); 3, paydaya 90 yazan (${F(1, 2)}) öğrencinin cevabıdır.`
    },
    {
      no: 12, beceri: B.kuvvet, bicim: 'islem',
      q: `<p class="ask">(−2)<sup>4</sup> − (−1)<sup>7</sup> + (−3)<sup>2</sup> − 2<sup>4</sup> işleminin sonucu kaçtır?</p>`,
      opts: ['−22', '−8', '8', '10'], ans: 3,
      steps: ['(−2)<sup>4</sup> = 16, (−1)<sup>7</sup> = −1, (−3)<sup>2</sup> = 9, 2<sup>4</sup> = 16', '16 − (−1) + 9 − 16', '= 16 + 1 + 9 − 16 = <b>10</b>'],
      answer: 'Cevap: <b>D</b>',
      trap: '8, (−1)<sup>7</sup> sonucunu 1 alanların; −8, (−3)<sup>2</sup> sonucunu −9 alanların cevabıdır.'
    },
    {
      no: 13, beceri: B.carpma, bicim: 'sozel',
      q: `<p>Bir bilgi yarışmasında doğru cevaplanan her soru için 5 puan verilir. Yanlış cevaplanan her soru için 3 puan, boş bırakılan her soru için 1 puan silinir.</p><p>Yarışmaya 0 puanla başlayan Deniz, 20 sorunun 9'unu doğru, 8'ini yanlış cevaplamış, kalan soruları boş bırakmıştır.</p><p class="ask">Buna göre Deniz'in puanı kaçtır?</p>`,
      opts: ['12', '15', '18', '21'], ans: 2,
      steps: ['Boş soru sayısı: 20 − 9 − 8 = 3', '9 · (+5) + 8 · (−3) + 3 · (−1) = 45 − 24 − 3', '= <b>18</b>'],
      answer: 'Cevap: <b>C</b>',
      trap: '21 boş soruları hesaba katmayanların, 12 boş sorulardan da 3\'er puan silenlerin cevabıdır.'
    },
    {
      no: 14, beceri: B.devirliMi, bicim: 'islem',
      q: `<p class="ask">Aşağıdaki kesirlerden hangisinin ondalık gösterimi devirlidir?</p>`,
      opts: [F(7, 20), F(11, 40), F(9, 24), F(5, 12)], ans: 3,
      steps: [`Önce sadeleştir: ${F(9, 24)} = ${F(3, 8)}; diğerleri sadedir`, 'Paydası yalnızca 2 ve 5 çarpanlarından oluşan kesir sonlu ondalıktır: 20, 40, 8', `12 = 2 · 2 · 3 → ${F(5, 12)} = 0,41${D(6)} devirlidir`],
      answer: 'Cevap: <b>D</b>',
      trap: `${F(9, 24)} paydasında 3 olduğu için devirli sanılabilir; sadeleşince ${F(3, 8)} = 0,375 olur.`
    },
    {
      no: 15, beceri: B.dogru, bicim: 'sozel',
      q: `<p>Bir kuyunun ağzı 0 noktası, kuyunun içi negatif yön kabul ediliyor. Kuyuya sarkıtılan bir ipin üzerinde her metre 6 eş parçaya bölünerek işaretlenmiştir.</p><p>İpin ucu kuyu ağzından 2 tam metre ve ardından 5 parça daha aşağıdadır.</p><p class="ask">İpin ucunun konumu hangi rasyonel sayıyla gösterilir?</p>`,
      opts: [`−${F(17, 6)}`, `−${F(7, 6)}`, `−${F(5, 6)}`, F(17, 6)], ans: 0,
      steps: [`Bir parça ${F(1, 6)} metre; 2 metre = ${F(12, 6)}`, `2 metre ve 5 parça = ${F(12, 6)} + ${F(5, 6)} = ${F(17, 6)} metre`, `Aşağı yön negatif → <b>−${F(17, 6)}</b>`],
      answer: 'Cevap: <b>A</b>',
      trap: `−${F(7, 6)}, konumu (−2) + ${F(5, 6)} gibi düşünenlerin; ${F(17, 6)} yönü unutanların cevabıdır.`
    },
    {
      no: 16, beceri: B.adim, bicim: 'islem',
      q: `<p class="ask">(−48) ÷ [(−3) + (−5)] + (−2) · (−7) işleminin sonucu kaçtır?</p>`,
      opts: ['−20', '−8', '8', '20'], ans: 3,
      steps: ['Önce köşeli parantez: (−3) + (−5) = −8', '(−48) ÷ (−8) = 6 ve (−2) · (−7) = 14', '6 + 14 = <b>20</b>'],
      answer: 'Cevap: <b>D</b>',
      trap: '−8 ve 8 işaret hatasından gelir: 6 − 14 ya da −6 + 14.'
    }
  ].map(q => ({ ...q, konu: q.beceri }));
})();
