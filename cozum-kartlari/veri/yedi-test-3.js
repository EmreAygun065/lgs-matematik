// 7. sınıf · Tam Sayılar ve Rasyonel Sayılar · Karma test 3 (tanıma düzeyi; işlem yok).
// Şekiller veri/yedi-sekil.js'ten gelir. Her sorunun cevabı hesapla doğrulanmıştır.
// Yayına girdikten sonra soruların sırasını değiştirmeyin: panel eski sonuçları bu sıraya göre eşler.
(function () {
  const D = x => `<span style="text-decoration:overline">${x}</span>`;
  const K = window.YEDI_BECERI;
  window.YEDI_TESTLER = window.YEDI_TESTLER || {};
  window.YEDI_TESTLER['yedi-test-3'] = [
    {
      no: 1, konu: K.mutlak,
      q: `<p>Aşağıdaki sayı doğrusunda ardışık iki tam sayı arası eş parçalara ayrılmış ve A, B, C, D noktaları işaretlenmiştir.</p>`
        + sayiDogrusu({ bas: -3, son: 3, bol: 2, noktalar: [{ v: -2.5, ad: 'A' }, { v: -0.5, ad: 'B' }, { v: 1, ad: 'C' }, { v: 2.5, ad: 'D' }] })
        + `<p class="ask">Buna göre gösterdikleri sayıların mutlak değerleri eşit olan iki nokta hangileridir?</p>`,
      opts: ['A ve B', 'A ve D', 'B ve C', 'C ve D'], ans: 1,
      steps: ['A = −2,5 · B = −0,5 · C = 1 · D = 2,5', 'Mutlak değer, 0\'a uzaklıktır: |−2,5| = 2,5 ve |2,5| = 2,5', 'Mutlak değerleri eşit olanlar: <b>A ve D</b>'],
      answer: 'Cevap: <b>B</b>',
      trap: 'Mutlak değeri eşit olan iki farklı sayı, sayı doğrusunda 0\'ın iki yanında ve 0\'a eşit uzaklıktadır.'
    },
    {
      no: 2, konu: K.tanima,
      q: `<p>Bir öğretmen tahtaya aşağıdaki kartları asmıştır.</p>`
        + sayiKartlari(['−7', '0', F(3, 4), '−2,5', '12', F(5, 0), '0,' + D(6)])
        + `<p class="ask">Buna göre kartlardaki sayılardan kaç tanesi rasyonel sayıdır?</p>`,
      opts: ['4', '5', '6', '7'], ans: 2,
      steps: [`−7 = ${F('−7', 1)}, 0 = ${F(0, 1)}, 12 = ${F(12, 1)} → tam sayılar rasyoneldir`, `${F(3, 4)} rasyoneldir; −2,5 = −${F(5, 2)} ve 0,${D(6)} = ${F(2, 3)} de rasyoneldir`, `${F(5, 0)}: payda 0 olamaz → rasyonel sayı değildir`, '7 karttan <b>6</b> tanesi rasyoneldir'],
      answer: 'Cevap: <b>C</b>',
      trap: '4 ya da 5 bulanlar genellikle tam sayıları, 0\'ı ya da devirli sayıyı rasyonel saymaz; 7 bulan payda 0 olamayacağını unutur.'
    },
    {
      no: 3, konu: K.devirli,
      q: `<p>0,1${D(2)} sayısı en sade kesir biçiminde ${F('a', 'b')} olarak yazılmıştır.</p><p class="ask">Buna göre b kaçtır?</p>`,
      opts: ['9', '90', '99', '100'], ans: 1,
      steps: ['Sayının tamamı 12, devretmeyen kısım 1', 'Virgülden sonra 1 devreden (9), 1 devretmeyen (0) basamak → payda 90', `0,1${D(2)} = ${F('12 − 1', 90)} = ${F(11, 90)}; 11 ile 90 sadeleşmez → b = <b>90</b>`],
      answer: 'Cevap: <b>B</b>',
      trap: `99, 12'nin tamamını devreden sananların (0,${D(12)}); 100, sayıyı 0,12 diye sonlu sananların cevabıdır.`
    },
    {
      no: 4, konu: K.mutlak,
      q: `<p>Bir alışveriş merkezinin katları aşağıdaki gibidir. Zemin kat 0 ile, zemin katın altındaki katlar negatif, üstündeki katlar pozitif tam sayılarla gösterilmiştir.</p>`
        + bina({ alt: -3, ust: 3, isaretler: { 3: 'Kitapçı', 2: 'Sinema', 1: 'Kafe', 0: 'Giriş', [-1]: 'Market', [-3]: 'Otopark' } })
        + `<p class="ask">Buna göre zemin kata uzaklığı en fazla olan iki yer hangileridir?</p>`,
      opts: ['Sinema ve market', 'Kitapçı ve sinema', 'Market ve otopark', 'Kitapçı ve otopark'], ans: 3,
      steps: ['Kitapçı 3. kat, sinema 2. kat, kafe 1. kat, market −1. kat, otopark −3. kat', 'Zemin kata uzaklık, kat numarasının mutlak değeridir: |3| = 3, |2| = 2, |1| = 1, |−1| = 1, |−3| = 3', 'En uzak olanlar (3 kat): <b>kitapçı ve otopark</b>'],
      answer: 'Cevap: <b>D</b>',
      trap: '"Kitapçı ve sinema" en büyük kat numaralarını seçenlerin cevabıdır; zemin katın altındaki katlar da zemin kattan uzaktır.'
    },
    {
      no: 5, konu: K.kesirOndalik,
      q: `<p>${F(3, 12)}, ${F(7, 15)}, ${F(9, 30)}, ${F(11, 18)}, ${F(4, 25)}</p><p class="ask">Yukarıdaki kesirlerden kaç tanesinin ondalık gösterimi devirlidir?</p>`,
      opts: ['1', '2', '3', '4'], ans: 1,
      steps: [`Önce sadeleştir: ${F(3, 12)} = ${F(1, 4)}, ${F(9, 30)} = ${F(3, 10)}; ${F(7, 15)}, ${F(11, 18)}, ${F(4, 25)} sadedir`, 'Paydası yalnızca 2 ve 5 çarpanlarından oluşanlar sonludur: 4, 10, 25', `Paydasında 3 çarpanı kalanlar devirlidir: ${F(7, 15)} = 0,4${D(6)} ve ${F(11, 18)} = 0,6${D(1)} → <b>2</b> tane`],
      answer: 'Cevap: <b>B</b>',
      trap: `Sadeleştirmeden bakan, paydası 12 ve 30 olan kesirleri de devirli sanıp 4 bulur.`
    },
    {
      no: 6, konu: K.devirli,
      q: `<p>Ece hesap makinesinde 2'yi 11'e böldüğünde ekranda aşağıdaki sonucu görmüştür. Ekrana sığmayan basamaklarda da aynı rakamlar aynı sırayla tekrar etmektedir.</p>`
        + ekran('0,1818181818', '2 ÷ 11')
        + `<p class="ask">Ece bu sayıyı devirli ondalık gösterimle yazmak istediğine göre aşağıdakilerden hangisini yazmalıdır?</p>`,
      opts: ['0,' + D('18'), '0,1' + D('8'), '0,18', '0,' + D('181')], ans: 0,
      steps: ['Virgülden hemen sonra 1 ve 8 rakamları sırayla tekrar ediyor: 18 18 18…', `Tekrar eden grup 18'dir → 0,${D(18)}`],
      answer: 'Cevap: <b>A</b>',
      trap: `0,1${D(8)} = 0,18888… demektir, yalnızca 8 tekrar eder; 0,18 ise sonludur.`
    },
    {
      no: 7, konu: K.mutlak,
      q: `<p>Aşağıdaki sayı doğrusunda M noktası işaretlenmiştir.</p>`
        + sayiDogrusu({ bas: -11, son: 1, bol: 1, en: 520, noktalar: [{ v: -6, ad: 'M' }] })
        + `<p class="ask">Sayı doğrusunda M noktasına 4 birim uzaklıkta olan tam sayılardan 0'a daha yakın olanı hangisidir?</p>`,
      opts: ['−10', '−4', '−2', '2'], ans: 2,
      steps: ['M noktası −6\'yı gösteriyor', '−6\'nın 4 birim solu −10, 4 birim sağı −2', '|−10| = 10, |−2| = 2 → 0\'a daha yakın olan <b>−2</b>'],
      answer: 'Cevap: <b>C</b>',
      trap: '−10\'u seçen sayıların büyüklüğünü 0\'a yakınlıkla karıştırır; 2, M\'ye değil 0\'a göre sayanların cevabıdır.'
    },
    {
      no: 8, konu: K.kesirOndalik,
      q: `<p>Aşağıdaki şeritlerin her biri bir bütünü göstermekte ve 3 eş parçaya ayrılmıştır.</p>`
        + seritler([{ parca: 3, boyali: 3 }, { parca: 3, boyali: 2 }])
        + `<p class="ask">Boyalı kısımların gösterdiği sayının ondalık gösterimi aşağıdakilerden hangisidir?</p>`,
      opts: ['0,' + D(6), '1,' + D(2), '1,6', '1,' + D(6)], ans: 3,
      steps: [`Birinci şerit tamamen boyalı → 1 bütün; ikinci şeridin 3 parçasından 2'si boyalı → ${F(2, 3)}`, `1 bütün ve ${F(2, 3)} = ${F(5, 3)}`, `${F(5, 3)} = 5 ÷ 3 = 1,666… = 1,${D(6)}`],
      answer: 'Cevap: <b>D</b>',
      trap: `0,${D(6)} yalnızca ikinci şeride bakanların; 1,6 devirli sayıyı sonlu yazanların cevabıdır.`
    },
    {
      no: 9, konu: K.tanima,
      q: `<p class="ask">Aşağıdaki eşitliklerden hangisi <u>yanlıştır</u>?</p>`,
      opts: [`−${F(3, 5)} = ${F(3, '−5')}`, `−(−${F(3, 5)}) = ${F(3, 5)}`, `${F('−3', '−5')} = −${F(3, 5)}`, `${F(6, '−10')} = −${F(3, 5)}`], ans: 2,
      steps: ['Eksi işareti kesrin önüne, payına ya da paydasına yazılabilir: −' + F(3, 5) + ' = ' + F(3, '−5') + ' ✓', `−${F(3, 5)}'in ters işaretlisi ${F(3, 5)}'tir ✓ · ${F(6, '−10')} sadeleşince ${F(3, '−5')} = −${F(3, 5)} ✓`, `${F('−3', '−5')}: pay ve payda negatif → pozitif sayı, ${F(3, 5)}'e eşittir; −${F(3, 5)}'e eşit değildir → <b>yanlış</b>`],
      answer: 'Cevap: <b>C</b>',
      trap: 'İki eksi işareti (payda ve paydada) birbirini götürür; kesir pozitiftir.'
    },
    {
      no: 10, konu: K.kesirOndalik,
      q: `<p>Bir marangoz 2 m uzunluğundaki bir çıtayı hiç artmayacak biçimde 9 eş parçaya ayırmıştır.</p><p class="ask">Buna göre parçalardan birinin metre cinsinden uzunluğu aşağıdakilerden hangisidir?</p>`,
      opts: ['0,2', '0,22', '0,222', '0,' + D(2)], ans: 3,
      steps: [`Bir parça ${F(2, 9)} m`, `${F(2, 9)} = 2 ÷ 9 = 0,2222… = 0,${D(2)}`],
      answer: 'Cevap: <b>D</b>',
      trap: '0,22 ve 0,222 sonsuz tekrarı bir yerde kesip sonlu yazanların cevabıdır; uzunluk tam olarak 0,' + D(2) + '\'dir.'
    },
    {
      no: 11, konu: K.dogru,
      q: `<p>Aşağıdaki sayı doğrusunda ardışık iki tam sayı arası eş parçalara ayrılmıştır.</p>`
        + sayiDogrusu({ bas: -1, son: 1, bol: 6, noktalar: [{ v: -4 / 6, ad: 'K' }] })
        + `<p class="ask">K noktasının gösterdiği sayının ondalık gösterimi aşağıdakilerden hangisidir?</p>`,
      opts: ['−0,' + D(6), '−0,' + D(3), '−0,2', '−1,' + D(3)], ans: 0,
      steps: [`Her birim 6 eş parçaya ayrılmış → bir parça ${F(1, 6)}`, `K, 0'ın 4 parça solunda → K = −${F(4, 6)} = −${F(2, 3)}`, `${F(2, 3)} = 0,666… → K = −0,${D(6)}`],
      answer: 'Cevap: <b>A</b>',
      trap: `−0,${D(3)} = −${F(2, 6)}: K'yi −1'den başlayarak sayıp 0'a göre yazanların; −0,2 iki parçayı 0,2 sananların cevabıdır.`
    },
    {
      no: 12, konu: K.ondalikKesir,
      q: `<p>a bir doğal sayıdır ve 0,125 = ${F(1, 'a')} eşitliği doğrudur.</p><p class="ask">Buna göre a kaçtır?</p>`,
      opts: ['8', '10', '80', '125'], ans: 0,
      steps: [`0,125 = ${F(125, 1000)}`, `125 ve 1000, 125 ile sadeleşir → ${F(1, 8)}`, 'a = <b>8</b>'],
      answer: 'Cevap: <b>A</b>',
      trap: '125, ondalık sayının rakamlarını payda yapanların; 10, 0,1 ile karıştıranların cevabıdır.'
    }
  ];
})();
