// 7. sınıf · Tam Sayılar ve Rasyonel Sayılar · Karma test 2 (tanıma düzeyi; işlem yok).
// Şekiller veri/yedi-sekil.js'ten gelir. Her sorunun cevabı hesapla doğrulanmıştır.
// Yayına girdikten sonra soruların sırasını değiştirmeyin: panel eski sonuçları bu sıraya göre eşler.
(function () {
  const D = x => `<span style="text-decoration:overline">${x}</span>`;
  const K = window.YEDI_BECERI;
  window.YEDI_TESTLER = window.YEDI_TESTLER || {};
  window.YEDI_TESTLER['yedi-test-2'] = [
    {
      no: 1, konu: K.kesirOndalik,
      q: `<p>Aşağıdaki şerit 8 eş parçaya ayrılmış ve bir kısmı boyanmıştır.</p>`
        + seritler([{ parca: 8, boyali: 3 }])
        + `<p class="ask">Boyalı kısmın şeridin tamamına oranının ondalık gösterimi aşağıdakilerden hangisidir?</p>`,
      opts: ['0,3', '0,375', '0,38', '0,83'], ans: 1,
      steps: [`8 parçanın 3'ü boyalı → ${F(3, 8)}`, `${F(3, 8)} = ${F(375, 1000)} = 0,375`],
      answer: 'Cevap: <b>B</b>',
      trap: '0,83 parça sayılarını yan yana yazanların, 0,38 sonucu yuvarlayanların cevabıdır.'
    },
    {
      no: 2, konu: K.kesirOndalik,
      q: `<p>Can hesap makinesinde 1'i 7'ye böldüğünde ekranda aşağıdaki sonucu görmüştür. Bu sayının ondalık gösteriminde virgülden sonraki 142857 rakam grubu sonsuza kadar aynı sırayla tekrar etmektedir.</p>`
        + ekran('0,1428571428', '1 ÷ 7')
        + `<p class="ask">Buna göre bu sayının virgülden sonraki 25. basamağındaki rakam kaçtır?</p>`,
      opts: ['1', '2', '4', '7'], ans: 0,
      steps: ['Devreden kısım 142857, 6 basamaklıdır: 6., 12., 18., 24. basamaklar 7\'dir', '24. basamakta bir grup biter; 25. basamakta yeni grup başlar', 'Grubun ilk rakamı → <b>1</b>'],
      answer: 'Cevap: <b>A</b>',
      trap: '7, grubun bittiği 24. basamağı bulup orada kalanların cevabıdır.'
    },
    {
      no: 3, konu: K.ondalikKesir,
      q: `<p class="ask">−0,48 sayısının en sade kesir gösterimi aşağıdakilerden hangisidir?</p>`,
      opts: [`−${F(6, 25)}`, `−${F(24, 50)}`, `−${F(12, 25)}`, `−${F(48, 100)}`], ans: 2,
      steps: [`−0,48 = −${F(48, 100)}`, `48 ve 100, 4 ile sadeleşir → −${F(12, 25)}`, `12 ile 25'in 1'den başka ortak böleni yok → en sade hâl`],
      answer: 'Cevap: <b>C</b>',
      trap: `−${F(48, 100)} ve −${F(24, 50)} doğru değeri gösterir ama en sade değildir; −${F(6, 25)} = −0,24'tür.`
    },
    {
      no: 4, konu: K.kesirOndalik,
      q: `<p>Dört öğrenci birer kesrin ondalık gösterimini tabloya yazmıştır.</p>`
        + tablo([['Öğrenci', 'Kesir', 'Yazdığı ondalık gösterim'], ['Ali', F(3, 4), '0,75'], ['Banu', F(1, 6), '0,1' + D(6)], ['Cem', F(5, 8), '0,58'], ['Duru', F(7, 20), '0,35']])
        + `<p class="ask">Buna göre hangi öğrencinin yazdığı ondalık gösterim yanlıştır?</p>`,
      opts: ['Ali', 'Banu', 'Cem', 'Duru'], ans: 2,
      steps: [`${F(3, 4)} = 0,75 ✓ · ${F(1, 6)} = 0,1666… = 0,1${D(6)} ✓ · ${F(7, 20)} = ${F(35, 100)} = 0,35 ✓`, `${F(5, 8)} = ${F(625, 1000)} = 0,625 → Cem'in yazdığı 0,58 <b>yanlış</b>`],
      answer: 'Cevap: <b>C</b>',
      trap: 'Cem, kesrin pay ve paydasını ondalık sayının basamaklarına yazmıştır; bu çok sık yapılan bir hatadır.'
    },
    {
      no: 5, konu: K.kesirOndalik,
      q: `<p class="ask">Aşağıdaki kesirlerden hangisinin ondalık gösteriminde devreden kısım <u>iki basamaklıdır</u>?</p>`,
      opts: [F(1, 3), F(1, 6), F(2, 7), F(5, 11)], ans: 3,
      steps: [`${F(1, 3)} = 0,${D(3)} (1 basamak) · ${F(1, 6)} = 0,1${D(6)} (1 basamak)`, `${F(2, 7)} = 0,${D(285714)} (6 basamak)`, `${F(5, 11)} = 0,4545… = 0,${D(45)} → devreden kısım <b>iki basamaklı</b>`],
      answer: 'Cevap: <b>D</b>',
      trap: `${F(1, 6)} = 0,1666…'da virgülden sonra iki basamak görünse de yalnızca 6 devreder.`
    },
    {
      no: 6, konu: K.dogru,
      q: `<p>Aşağıdaki sayı doğrusunda çentikler arası uzaklıklar eşittir. Sayı doğrusunda yalnızca 0 yazılmıştır ve A noktası −${F(4, 3)} sayısını göstermektedir.</p>`
        + sayiDogrusu({ bas: -2, son: 2, bol: 3, etiket: v => (v === 0 ? '0' : null), noktalar: [{ v: -4 / 3, ad: 'A' }, { v: 5 / 3, ad: 'B' }] })
        + `<p class="ask">Buna göre B noktası hangi sayıyı gösterir?</p>`,
      opts: [F(5, 4), F(5, 3), `−${F(5, 3)}`, F(4, 3)], ans: 1,
      steps: [`A, 0'ın 4 çentik solunda ve −${F(4, 3)}'ü gösteriyor → iki çentik arası ${F(1, 3)}`, 'B, 0\'ın 5 çentik sağında', `B = ${F(5, 3)}`],
      answer: 'Cevap: <b>B</b>',
      trap: `${F(5, 4)}, A'nın paydasına bakmadan "4 çentik" sayısını payda yapanların cevabıdır.`
    },
    {
      no: 7, konu: K.devirli,
      q: `<p class="ask">0,${D(9)} sayısı aşağıdakilerden hangisine eşittir?</p>`,
      opts: [F(9, 10), F(99, 100), F(10, 9), '1'], ans: 3,
      steps: ['Devirli sayıyı kesre çevirme kuralı: sayının tamamından devretmeyen kısım çıkarılır, paydaya devreden basamak sayısı kadar 9 yazılır', `0,${D(9)} = ${F('9 − 0', 9)} = ${F(9, 9)}`, `${F(9, 9)} = <b>1</b>`],
      answer: 'Cevap: <b>D</b>',
      trap: `0,999… sayısı 1'e "çok yakın" değil, 1'e eşittir. ${F(9, 10)} = 0,9 ve ${F(99, 100)} = 0,99 sonludur.`
    },
    {
      no: 8, konu: K.ondalikKesir,
      q: `<p>Aşağıdaki yüzlük karelerin her biri bir bütünü göstermektedir.</p>`
        + yuzluk(100, 25)
        + `<p class="ask">Boyalı kısımların gösterdiği sayı aşağıdakilerden hangisidir?</p>`,
      opts: ['1,025', '12,5', F(1, 25), F(5, 4)], ans: 3,
      steps: ['Birinci kare tamamen boyalı → 1 bütün', 'İkinci karenin 100 küçük karesinden 25\'i boyalı → 0,25', `1 bütün ve 0,25 → 1,25 = ${F(125, 100)} = ${F(5, 4)}`],
      answer: 'Cevap: <b>D</b>',
      trap: '1,025, 25 yüzlüğü binlik gibi yazanların; 12,5 virgülü yanlış yere koyanların cevabıdır.'
    },
    {
      no: 9, konu: K.kesirOndalik,
      q: `<p>Bir pastacı 5 kg unu hiç artmayacak biçimde 16 eş pakete ayırmıştır. Her paketin üzerine içindeki unun kütlesini kilogram cinsinden ondalık gösterimle yazacaktır.</p><p class="ask">Buna göre pastacı paketlerin üzerine hangi sayıyı yazmalıdır?</p>`,
      opts: ['0,3125', '0,32', '0,516', '3,2'], ans: 0,
      steps: [`Bir paketteki un ${F(5, 16)} kg`, `${F(5, 16)} = 5 ÷ 16 = 0,3125`],
      answer: 'Cevap: <b>A</b>',
      trap: `0,516 kesrin rakamlarını yan yana yazanların; 3,2 16'yı 5'e bölenlerin cevabıdır.`
    },
    {
      no: 10, konu: K.tanima,
      q: `<p class="ask">Aşağıdaki rasyonel sayılardan hangisi bir tam sayıya eşittir?</p>`,
      opts: [F('−18', 4), F(21, '−7'), F(7, 21), F('−4', 18)], ans: 1,
      steps: [`${F(21, '−7')}: 21, 7'ye tam bölünür → ${F(21, '−7')} = −3, bir tam sayıdır`, `${F('−18', 4)} = −${F(9, 2)} = −4,5 · ${F(7, 21)} = ${F(1, 3)} · ${F('−4', 18)} = −${F(2, 9)} → tam sayı değil`],
      answer: 'Cevap: <b>B</b>',
      trap: `${F(7, 21)} ile ${F(21, '−7')} aynı sayıları içerir; tam sayıya eşit olan, payı paydasına tam bölünendir.`
    },
    {
      no: 11, konu: K.mutlak,
      q: `<p>Aşağıdaki dikey sayı doğrusunda deniz seviyesi 0 kabul edilmiş, deniz seviyesinin üstü pozitif, altı negatif sayılarla metre cinsinden gösterilmiştir. Çentikler arası 0,5 m'dir.</p>`
        + dikeyDogru({ alt: -5, ust: 4, adim: 0.5, yazAdim: 1, birim: '', sifirAd: 'deniz seviyesi', isaretler: [{ v: 3.5, ad: 'Kuş' }, { v: 0, ad: 'Tekne' }, { v: -2.5, ad: 'Ahtapot' }, { v: -3.5, ad: 'Balık' }, { v: -4.5, ad: 'Yengeç' }] })
        + `<p class="ask">Buna göre deniz seviyesine uzaklığı 3,5 m olan canlılar hangileridir?</p>`,
      opts: ['Yalnız balık', 'Yalnız kuş', 'Balık ve kuş', 'Balık ve yengeç'], ans: 2,
      steps: ['Konumlar: kuş 3,5 · ahtapot −2,5 · balık −3,5 · yengeç −4,5', 'Deniz seviyesine uzaklık mutlak değerdir: |3,5| = 3,5 ve |−3,5| = 3,5', 'Uzaklığı 3,5 m olanlar: <b>balık ve kuş</b>'],
      answer: 'Cevap: <b>C</b>',
      trap: 'Yalnızca deniz altına bakanlar balığı, yalnızca deniz üstüne bakanlar kuşu seçer; uzaklık iki yönde de ölçülür.'
    },
    {
      no: 12, konu: K.ondalikKesir,
      q: `<p class="ask">2,04 sayısının en sade kesir gösterimi aşağıdakilerden hangisidir?</p>`,
      opts: [F(51, 25), F(26, 25), F(102, 5), F(51, 250)], ans: 0,
      steps: [`2,04 = ${F(204, 100)}`, `204 ve 100, 4 ile sadeleşir → ${F(51, 25)}`],
      answer: 'Cevap: <b>A</b>',
      trap: `${F(26, 25)} = 1,04'tür; ${F(102, 5)} = 20,4 ve ${F(51, 250)} = 0,204 virgülün yerini yanlış alanların cevabıdır.`
    }
  ];
})();
