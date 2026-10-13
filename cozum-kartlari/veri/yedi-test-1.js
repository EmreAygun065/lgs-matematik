// 7. sınıf · Tam Sayılar ve Rasyonel Sayılar · Karma test 1 (tanıma düzeyi; işlem yok).
// Şekiller veri/yedi-sekil.js'ten gelir. Her sorunun cevabı hesapla doğrulanmıştır.
// Yayına girdikten sonra soruların sırasını değiştirmeyin: panel eski sonuçları bu sıraya göre eşler.
(function () {
  const D = x => `<span style="text-decoration:overline">${x}</span>`;
  const K = window.YEDI_BECERI;
  window.YEDI_TESTLER = window.YEDI_TESTLER || {};
  window.YEDI_TESTLER['yedi-test-1'] = [
    {
      no: 1, konu: K.mutlak,
      q: `<p>Aşağıdaki termometreler aynı saatte dört ildeki hava sıcaklığını göstermektedir.</p>`
        + termometreler([{ ad: 'Ardahan', v: -8 }, { ad: 'Bursa', v: 6 }, { ad: 'Çorum', v: -2 }, { ad: 'Denizli', v: 4 }], { alt: -10, ust: 10 })
        + `<p class="ask">Buna göre hava sıcaklığı 0 °C'ye en yakın olan il hangisidir?</p>`,
      opts: ['Ardahan', 'Bursa', 'Çorum', 'Denizli'], ans: 2,
      steps: ['Termometrelerden okunan sıcaklıklar: Ardahan −8 °C, Bursa 6 °C, Çorum −2 °C, Denizli 4 °C', '0\'a en yakın olan, mutlak değeri en küçük olandır: |−8| = 8, |6| = 6, |−2| = 2, |4| = 4', 'En küçük mutlak değer 2 → <b>Çorum</b>'],
      answer: 'Cevap: <b>C</b>',
      trap: 'Ardahan en düşük sıcaklık; Denizli 0\'dan büyük en küçük sayı. Soru 0\'a uzaklığı soruyor.'
    },
    {
      no: 2, konu: K.mutlak,
      q: `<p>Aşağıda zemin katın 0 ile, zemin katın altındaki katların negatif, üstündeki katların pozitif tam sayılarla gösterildiği bir bina verilmiştir.</p>`
        + bina({ alt: -3, ust: 5, isaretler: { 5: 'Teras', 0: 'Giriş', [-3]: 'Otopark' } })
        + `<p>Bu binadaki asansör, yalnızca kat numarasının mutlak değeri 3'ten küçük olan katlarda durmaktadır.</p><p class="ask">Buna göre asansör kaç farklı katta durur?</p>`,
      opts: ['4', '5', '6', '7'], ans: 1,
      steps: ['Mutlak değeri 3\'ten küçük tam sayılar: −2, −1, 0, 1, 2', 'Bu katların hepsi binada var', 'Asansör <b>5</b> farklı katta durur'],
      answer: 'Cevap: <b>B</b>',
      trap: '4, zemin katı (0) unutanların; 7, −3 ve 3. katları da sayanların cevabıdır ("3\'ten küçük" 3\'ü kapsamaz).'
    },
    {
      no: 3, konu: K.tanima,
      q: `<p>Bir öğrenci doğal sayılar (ℕ), tam sayılar (ℤ) ve rasyonel sayılar (ℚ) kümelerini aşağıdaki şemayla gösterip bazı sayıları şemaya yerleştirmiştir. Her sayı, ait olduğu <b>en küçük</b> kümenin içine ve diğer kümelerin dışına yazılmıştır.</p>`
        + kumeler({ N: [['12', '4'], '0'], Z: ['−4'], Q: ['0,5', ['−9', '3']] })
        + `<p class="ask">Buna göre hangi sayı yanlış bölgeye yerleştirilmiştir?</p>`,
      opts: [F(12, 4), '−4', '0,5', `−${F(9, 3)}`], ans: 3,
      steps: [`${F(12, 4)} = 3 bir doğal sayıdır → ℕ'de olması doğru`, '−4 tam sayıdır ama doğal sayı değildir → doğru', '0,5 tam sayı değildir, rasyoneldir → doğru', `−${F(9, 3)} = −3 bir tam sayıdır; ℤ'nin içine yazılmalıydı → <b>yanlış</b>`],
      answer: 'Cevap: <b>D</b>',
      trap: `Kesir biçiminde yazılmış her sayı tam sayı olmayan bir rasyonel sayı değildir; ${F(12, 4)} ve −${F(9, 3)} sadeleşince tam sayı olur.`
    },
    {
      no: 4, konu: K.dogru,
      q: `<p>Aşağıdaki sayı doğrusunda ardışık iki tam sayı arası eş parçalara ayrılmıştır.</p>`
        + sayiDogrusu({ bas: -2, son: 1, bol: 5, noktalar: [{ v: -1.4, ad: 'K' }] })
        + `<p class="ask">K noktasının gösterdiği sayının ondalık gösterimi aşağıdakilerden hangisidir?</p>`,
      opts: ['−1,6', '−1,4', '−1,2', '−0,6'], ans: 1,
      steps: [`Her birim 5 eş parçaya ayrılmış → bir parça ${F(1, 5)} = 0,2`, 'K, −1\'in 2 parça solunda: −1 ile −2 arasında, −1\'e daha yakın', `K = −1${F(2, 5)} = −1,4`],
      answer: 'Cevap: <b>B</b>',
      trap: '−1,2 bir parçayı 0,1 sananların; −0,6 −1\'in sağına sayanların; −1,6 −2\'den sağa 2 parça sayanların cevabıdır.'
    },
    {
      no: 5, konu: K.mutlak,
      q: `<p>a ve b birbirinden farklı iki tam sayıdır. |a| = 5 ve |b| = 5'tir.</p><p class="ask">Buna göre sayı doğrusunda a ve b sayılarını gösteren noktalar arasındaki uzaklık kaç birimdir?</p>`,
      opts: ['0', '5', '10', '25'], ans: 2,
      steps: ['Mutlak değeri 5 olan tam sayılar: 5 ve −5', 'a ve b farklı olduğu için biri 5, diğeri −5\'tir', '−5 ile 0 arası 5 birim, 0 ile 5 arası 5 birim → toplam <b>10</b> birim'],
      answer: 'Cevap: <b>C</b>',
      trap: '0, a ile b\'yi aynı sayı sananların; 5, yalnızca birinin 0\'a uzaklığını bulanların cevabıdır.'
    },
    {
      no: 6, konu: K.kesirOndalik,
      q: `<p>Elif, hesap makinesinde bir kesrin payını paydasına böldüğünde ekranda aşağıdaki sonucu görmüştür. Ekrana sığmayan basamaklarda da 3 rakamı tekrar etmektedir.</p>`
        + ekran('0,8333333333')
        + `<p class="ask">Buna göre Elif'in böldüğü kesir aşağıdakilerden hangisi olabilir?</p>`,
      opts: [F(4, 5), F(5, 6), F(83, 99), F(83, 100)], ans: 1,
      steps: [`${F(4, 5)} = 0,8 ve ${F(83, 100)} = 0,83 sonlu ondalık gösterimlerdir`, `${F(83, 99)} = 0,838383… → 83 tekrar eder`, `${F(5, 6)} = 5 ÷ 6 = 0,8333… = 0,8${D(3)} → <b>${F(5, 6)}</b>`],
      answer: 'Cevap: <b>B</b>',
      trap: `${F(83, 100)} ekrandaki ilk iki basamağa bakıp karar verenlerin cevabıdır; ama 0,83 sonludur, 3 tekrar etmez.`
    },
    {
      no: 7, konu: K.ondalikKesir,
      q: `<p>Aşağıdaki yüzlük kare 100 eş küçük kareye ayrılmış ve bir kısmı boyanmıştır.</p>`
        + yuzluk(35)
        + `<p class="ask">Boyalı kısmın bütüne oranı aşağıdakilerden hangisiyle <u>gösterilemez</u>?</p>`,
      opts: ['0,35', F(7, 20), F(35, 100), F(3, 5)], ans: 3,
      steps: ['100 karenin 35\'i boyalı → ' + F(35, 100) + ' = 0,35', `${F(35, 100)} sadeleşince ${F(7, 20)} olur`, `${F(3, 5)} = ${F(60, 100)} = 0,6 → boyalı kısmı <b>göstermez</b>`],
      answer: 'Cevap: <b>D</b>',
      trap: `${F(3, 5)} ile 0,35 aynı rakamları içerir ama ${F(3, 5)} = 0,6'dır.`
    },
    {
      no: 8, konu: K.mutlak,
      q: `<p class="ask">Sayı doğrusunda −7 ile 4 arasında kaç tane tam sayı vardır?</p>`,
      opts: ['10', '11', '12', '13'], ans: 0,
      steps: ['"Arasında" demek −7 ve 4\'ün kendisi sayılmaz', 'Aradaki tam sayılar: −6, −5, −4, −3, −2, −1, 0, 1, 2, 3', 'Toplam <b>10</b> tane'],
      answer: 'Cevap: <b>A</b>',
      trap: '12, −7 ile 4\'ü de sayanların; 11, ikisinden birini sayanların cevabıdır. 0\'ı unutan 9 bulur.'
    },
    {
      no: 9, konu: K.tanima,
      q: `<p class="ask">Aşağıdakilerden hangisi −${F(2, 3)} rasyonel sayısına <u>eşit değildir</u>?</p>`,
      opts: [F('−2', 3), F(2, '−3'), F('−4', 6), F('−2', '−3')], ans: 3,
      steps: [`Eksi işareti payda, paydada ya da kesrin önünde olabilir: −${F(2, 3)} = ${F('−2', 3)} = ${F(2, '−3')}`, `${F('−4', 6)} sadeleşince ${F('−2', 3)} olur`, `${F('−2', '−3')}: pay ve payda negatif → sayı pozitiftir, ${F(2, 3)}'e eşittir → <b>eşit değil</b>`],
      answer: 'Cevap: <b>D</b>',
      trap: 'Pay ve paydanın ikisi de negatifse kesir pozitif bir sayı gösterir.'
    },
    {
      no: 10, konu: K.devirli,
      q: `<p class="ask">0,2${D(7)} sayısının en sade kesir gösterimi aşağıdakilerden hangisidir?</p>`,
      opts: [F(5, 18), F(3, 10), F(3, 11), F(25, 99)], ans: 0,
      steps: ['Sayının tamamı 27, devretmeyen kısım 2', 'Virgülden sonra 1 devreden (9), 1 devretmeyen (0) basamak → payda 90', `${F('27 − 2', 90)} = ${F(25, 90)} = ${F(5, 18)}`],
      answer: 'Cevap: <b>A</b>',
      trap: `${F(3, 11)} = ${F(27, 99)}, 27'nin tamamını devreden sananların; ${F(3, 10)} = ${F(27, 90)}, devretmeyen kısmı çıkarmayanların cevabıdır.`
    },
    {
      no: 11, konu: K.kesirOndalik,
      q: `<p>a sıfırdan farklı bir doğal sayıdır. ${F('a', 24)} kesrinin ondalık gösterimi devirli <u>değildir</u>.</p><p class="ask">Buna göre a'nın alabileceği en küçük değer kaçtır?</p>`,
      opts: ['3', '6', '8', '12'], ans: 0,
      steps: ['24 = 2 · 2 · 2 · 3', 'Sadeleştikten sonra paydada yalnızca 2 ve 5 çarpanları kalırsa ondalık gösterim sonludur; bunun için paydadaki 3 sadeleşmeli', `a, 3'ün katı olmalı → en küçük a = 3: ${F(3, 24)} = ${F(1, 8)} = 0,125`],
      answer: 'Cevap: <b>A</b>',
      trap: `8 seçen, ${F(8, 24)} = ${F(1, 3)} = 0,${D(3)} olduğunu gözden kaçırır: 8 sadeleşince paydada 3 kalır.`
    },
    {
      no: 12, konu: K.dogru,
      q: `<p>Aşağıdaki sayı doğrusunda 0 ile 1 ve 1 ile 2 arası eş parçalara ayrılmıştır.</p>`
        + sayiDogrusu({ bas: 0, son: 2, bol: 6, noktalar: [{ v: 1.5, ad: 'S' }] })
        + `<p class="ask">S noktasının gösterdiği sayının ondalık gösterimi aşağıdakilerden hangisidir?</p>`,
      opts: ['0,9', '1,3', '1,5', '1,9'], ans: 2,
      steps: [`Her birim 6 eş parçaya ayrılmış → bir parça ${F(1, 6)}`, `S, 0'ın 9 parça sağında → S = ${F(9, 6)} = ${F(3, 2)}`, `${F(3, 2)} = 1,5`],
      answer: 'Cevap: <b>C</b>',
      trap: '0,9 parça sayısını ondalık gibi okuyanların; 1,3 bir parçayı 0,1 sanıp 1\'den 3 parça sayanların cevabıdır.'
    }
  ];
})();
