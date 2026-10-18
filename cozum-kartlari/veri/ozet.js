// Konu özeti kartları (ozet.html?unite=carpan | uslu | karekok | yedi).
// Her konu: kısa bilgiler, bir çözümlü örnek ve sık yapılan hata. Konu adları test sorularındaki "konu" alanıyla aynıdır;
// ana sayfadaki "Senin için" önerileri de buradaki kart bağlantılarını kullanır.
// Örnekler testlerdeki sorulardan farklı seçilmiştir; özet bir testin cevabını vermemelidir. Bütün sonuçlar hesapla doğrulanmıştır.
// ortak/yardimci.js'ten (F, R) sonra yüklenmelidir; 7. sınıf şekli için veri/yedi-sekil.js gerekir.
(function () {
  const us = (a, n) => `${a}<sup>${n}</sup>`;
  const D = x => `<span style="text-decoration:overline">${x}</span>`;   // devreden rakamlar
  const bolme = satirlar => `<table class="t"><tr><th>1. sayı</th><th>2. sayı</th><th>Bölen</th><th>İkisini de böler mi?</th></tr>${satirlar.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table>`;

  window.OZETLER = {
    carpan: {
      ad: 'Çarpanlar ve Katlar', sinif: 8,
      konular: [
        {
          id: 'carpanlar', ad: 'Bir doğal sayının çarpanları', kart: 'carpan-ornek.html',
          bilgi: [
            'Bir doğal sayıyı kalansız bölen doğal sayılara o sayının <b>çarpanları</b> (bölenleri) denir.',
            'Çarpanları bulmak için sayıyı iki doğal sayının çarpımı olarak yazarız: 36 = 1 · 36 = 2 · 18 = 3 · 12 = 4 · 9 = 6 · 6. Buna göre 36\'nın çarpanları 1, 2, 3, 4, 6, 9, 12, 18, 36\'dır.',
            'Yalnızca 1\'e ve kendisine bölünen, 1\'den büyük doğal sayılara <b>asal sayı</b> denir: 2, 3, 5, 7, 11, 13, … 1 asal sayı değildir.',
            'Bir sayıyı asal sayıların çarpımı olarak yazmaya <b>asal çarpanlara ayırma</b> denir. Bölen listesi ya da çarpan ağacı kullanılır.'
          ],
          ornek: {
            soru: '72 sayısını asal çarpanlarına ayırınız.',
            cozum: ['72 : 2 = 36 → 36 : 2 = 18 → 18 : 2 = 9', '9 : 3 = 3 → 3 : 3 = 1', `72 = 2 · 2 · 2 · 3 · 3 = ${us(2, 3)} · ${us(3, 2)}`],
            cevap: '72\'nin asal çarpanları 2 ve 3\'tür.'
          },
          dikkat: 'Çarpan ile asal çarpanı karıştırma: 6, 72\'nin çarpanıdır ama asal çarpanı değildir. 1 de asal sayı değildir.'
        },
        {
          id: 'ebob-ekok', ad: 'EBOB ve EKOK', kart: 'carpan-ornek.html',
          bilgi: [
            '<b>EBOB</b> (en büyük ortak bölen): verilen sayıların hepsini kalansız bölen en büyük doğal sayıdır.',
            '<b>EKOK</b> (en küçük ortak kat): verilen sayıların hepsinin katı olan en küçük pozitif doğal sayıdır.',
            'Sayılar yan yana yazılıp birlikte asal sayılara bölünür. Hepsini birden bölen asal sayıların çarpımı EBOB, bütün bölenlerin çarpımı EKOK\'tur.',
            'Soruda ipucu: Bir şeyi <b>en büyük eş parçalara</b> ayırmak EBOB, iki olayın <b>en erken yeniden aynı anda</b> olması EKOK sorusudur.'
          ],
          ornek: {
            soru: '24 ve 36 sayılarının EBOB ve EKOK\'unu bulunuz.',
            sekil: () => bolme([['24', '36', '2', '✓'], ['12', '18', '2', '✓'], ['6', '9', '3', '✓'], ['2', '3', '2', '–'], ['1', '3', '3', '–'], ['1', '1', '', '']]),
            cozum: [
              'İkisini de bölen asallar: 2, 2, 3 → EBOB = 2 · 2 · 3 = 12',
              'Bütün bölenler: 2, 2, 3, 2, 3 → EKOK = 2 · 2 · 3 · 2 · 3 = 72'
            ],
            cevap: 'EBOB(24, 36) = 12, EKOK(24, 36) = 72'
          },
          dikkat: 'Sonucu kontrol et: EBOB, sayıların en küçüğünden büyük olamaz; EKOK, sayıların en büyüğünden küçük olamaz.'
        },
        {
          id: 'aralarinda-asal', ad: 'Aralarında asal sayılar', kart: 'carpan-ornek.html',
          bilgi: [
            '1\'den başka ortak böleni olmayan, yani EBOB\'u 1 olan sayılara <b>aralarında asal</b> sayılar denir.',
            'Aralarında asal olmak için sayıların kendilerinin asal olması gerekmez: 8 ve 15 asal değildir ama aralarında asaldır.',
            'Ardışık iki doğal sayı her zaman aralarında asaldır: 14 ve 15 gibi.',
            'Bir kesrin payı ile paydası aralarında asal ise kesir en sade hâldedir.'
          ],
          ornek: {
            soru: '9 ve 16, 12 ve 18, 7 ve 21 sayı çiftlerinden hangileri aralarında asaldır?',
            cozum: [`9 = ${us(3, 2)}, 16 = ${us(2, 4)} → ortak asal çarpan yok, EBOB = 1 → aralarında asal`, '12 ve 18\'in ikisi de 6\'ya bölünür → aralarında asal değil', '21 = 3 · 7 olduğu için 7 ve 21\'in ikisi de 7\'ye bölünür → aralarında asal değil'],
            cevap: 'Yalnızca 9 ve 16 aralarında asaldır.'
          },
          dikkat: 'Farklı iki asal sayı (5 ve 7 gibi) her zaman aralarında asaldır; ama aralarında asal sayıların asal olması gerekmez.'
        }
      ]
    },

    uslu: {
      ad: 'Üslü İfadeler', sinif: 8,
      konular: [
        {
          id: 'tam-sayi-kuvvetleri', ad: 'Tam sayı kuvvetleri', kart: 'uslu-ornek.html?konu=' + encodeURIComponent('Tam sayıların tam sayı kuvvetleri'),
          bilgi: [
            `${us('a', 'n')}, a sayısının n tane kendisiyle çarpımıdır: ${us(2, 4)} = 2 · 2 · 2 · 2 = 16.`,
            `Negatif bir sayının <b>çift</b> kuvveti pozitif, <b>tek</b> kuvveti negatiftir: ${us('(−2)', 4)} = 16, ${us('(−2)', 3)} = −8.`,
            `Parantez önemlidir: ${us('(−2)', 4)} = 16 ama ${us('−2', 4)} = −(${us(2, 4)}) = −16.`,
            `Sıfırdan farklı her sayının 0. kuvveti 1\'dir: ${us(7, 0)} = 1, ${us('(−5)', 0)} = 1.`,
            `Negatif kuvvet, sayının çarpmaya göre tersinin kuvvetidir: ${us(2, '−3')} = ${F(1, us(2, 3))} = ${F(1, 8)}, ${us(`(${F(2, 3)})`, '−2')} = ${us(`(${F(3, 2)})`, 2)} = ${F(9, 4)}.`
          ],
          ornek: {
            soru: `${us('(−1)', 15)} + ${us('(−2)', 2)} − ${us(3, 0)} işleminin sonucu kaçtır?`,
            cozum: [`${us('(−1)', 15)} = −1 (tek kuvvet)`, `${us('(−2)', 2)} = 4 (çift kuvvet)`, `${us(3, 0)} = 1`, '−1 + 4 − 1 = 2'],
            cevap: 'Sonuç 2\'dir.'
          },
          dikkat: `Negatif üs sayıyı negatif yapmaz: ${us(2, '−3')} = −8 değil, ${F(1, 8)}\'dir.`
        },
        {
          id: 'temel-kurallar', ad: 'Temel kurallar', kart: 'uslu-ornek.html?konu=' + encodeURIComponent('Temel kurallar'),
          bilgi: [
            `Tabanlar aynıysa çarpmada üsler toplanır: ${us('a', 'm')} · ${us('a', 'n')} = ${us('a', 'm + n')}. Örnek: ${us(2, 5)} · ${us(2, 3)} = ${us(2, 8)}`,
            `Tabanlar aynıysa bölmede üsler çıkarılır: ${us('a', 'm')} : ${us('a', 'n')} = ${us('a', 'm − n')}. Örnek: ${us(5, 7)} : ${us(5, 4)} = ${us(5, 3)}`,
            `Üssün üssü alınırken üsler çarpılır: ${us(`(${us('a', 'm')})`, 'n')} = ${us('a', 'm · n')}. Örnek: ${us(`(${us(3, 2)})`, 4)} = ${us(3, 8)}`,
            `Üsler aynıysa tabanlar çarpılır ya da bölünür: ${us(2, 3)} · ${us(5, 3)} = ${us(10, 3)}, ${us(12, 4)} : ${us(3, 4)} = ${us(4, 4)}`,
            `Aynı üslü ifadeler toplanırken kaç tane olduğu sayılır: ${us(3, 4)} + ${us(3, 4)} + ${us(3, 4)} = 3 · ${us(3, 4)} = ${us(3, 5)}`
          ],
          ornek: {
            soru: `${us(4, 3)} · ${us(2, 5)} ifadesini 2\'nin kuvveti olarak yazınız.`,
            cozum: [`4 = ${us(2, 2)} olduğundan ${us(4, 3)} = ${us(`(${us(2, 2)})`, 3)} = ${us(2, 6)}`, `${us(2, 6)} · ${us(2, 5)} = ${us(2, '6 + 5')} = ${us(2, 11)}`],
            cevap: `${us(4, 3)} · ${us(2, 5)} = ${us(2, 11)}`
          },
          dikkat: `Toplamada üsler toplanmaz: ${us(2, 3)} + ${us(2, 3)} = ${us(2, 6)} değil, 2 · ${us(2, 3)} = ${us(2, 4)}\'tür. Ayrıca ${us(2, 3)} · ${us(3, 3)} = ${us(6, 9)} değil, ${us(6, 3)}\'tür.`
        },
        {
          id: 'ondalik-cozumleme', ad: 'Ondalık çözümleme', kart: 'uslu-ornek.html?konu=' + encodeURIComponent('Ondalık çözümleme'),
          bilgi: [
            'Ondalık çözümlemede her basamaktaki rakam, o basamağın değeri olan 10\'un kuvvetiyle çarpılır.',
            `Virgülün solu: birler ${us(10, 0)}, onlar ${us(10, 1)}, yüzler ${us(10, 2)}, …`,
            `Virgülün sağı: onda birler ${us(10, '−1')}, yüzde birler ${us(10, '−2')}, binde birler ${us(10, '−3')}, …`
          ],
          ornek: {
            soru: '305,07 sayısını çözümleyiniz.',
            cozum: [`305,07 = 3 · ${us(10, 2)} + 0 · ${us(10, 1)} + 5 · ${us(10, 0)} + 0 · ${us(10, '−1')} + 7 · ${us(10, '−2')}`, `Sıfır olan basamaklar yazılmayabilir: 3 · ${us(10, 2)} + 5 · ${us(10, 0)} + 7 · ${us(10, '−2')}`],
            cevap: `305,07 = 3 · ${us(10, 2)} + 5 · ${us(10, 0)} + 7 · ${us(10, '−2')}`
          },
          dikkat: `Virgülden sonraki ilk basamak ${us(10, '−1')}\'dir, ${us(10, 0)} değil. ${us(10, 0)} birler basamağıdır.`
        },
        {
          id: 'onun-kuvvetleri', ad: '10\'un kuvvetleri', kart: 'uslu-ornek.html?konu=' + encodeURIComponent('10\'un kuvvetleri'),
          bilgi: [
            `${us(10, 'n')}: 1\'in yanına n tane sıfır yazılır. ${us(10, 4)} = 10.000`,
            `${us(10, '−n')}: virgülden sonraki n. basamakta 1 olan sayıdır. ${us(10, '−3')} = 0,001`,
            `Bir sayıyı ${us(10, 'n')} ile çarpmak virgülü n basamak sağa, ${us(10, '−n')} ile çarpmak n basamak sola kaydırır: 4,7 · ${us(10, 3)} = 4.700; 4,7 · ${us(10, '−2')} = 0,047`,
            `Çok büyük ve çok küçük sayılar 10\'un kuvvetleriyle kısa yazılır: 0,0006 = 6 · ${us(10, '−4')}`
          ],
          ornek: {
            soru: `0,032 · ${us(10, 5)} işleminin sonucu kaçtır?`,
            cozum: [`${us(10, 5)} ile çarpmak virgülü 5 basamak sağa kaydırır`, '0,032 → 3.200'],
            cevap: `0,032 · ${us(10, 5)} = 3.200`
          },
          dikkat: `${us(10, '−3')} = 0,0001 değil, 0,001\'dir: 1 rakamı virgülden sonraki 3. basamaktadır.`
        },
        {
          id: 'bilimsel-gosterim', ad: 'Bilimsel gösterim', kart: 'uslu-ornek.html?konu=' + encodeURIComponent('Bilimsel gösterim'),
          bilgi: [
            `Bilimsel gösterim a · ${us(10, 'n')} biçimindedir. Burada 1 ≤ a < 10 ve n bir tam sayıdır.`,
            `Büyük sayılar: 345.000 = 3,45 · ${us(10, 5)} (virgül 5 basamak sola kaydı).`,
            `Küçük sayılar: 0,00072 = 7,2 · ${us(10, '−4')} (virgül 4 basamak sağa kaydı).`
          ],
          ornek: {
            soru: 'Işığın boşluktaki hızı saniyede yaklaşık 300.000 km\'dir. Bu sayıyı bilimsel gösterimle yazınız.',
            cozum: ['a, 1 ile 10 arasında olmalı → a = 3', `300.000 = 3 · 100.000 = 3 · ${us(10, 5)}`],
            cevap: `3 · ${us(10, 5)} km`
          },
          dikkat: `34,5 · ${us(10, 4)} ve 0,72 · ${us(10, '−3')} doğru değerlerdir ama bilimsel gösterim değildir: a, 1 ile 10 arasında olmalıdır (1 olabilir, 10 olamaz).`
        }
      ]
    },

    karekok: {
      ad: 'Kareköklü İfadeler', sinif: 8,
      konular: [
        {
          id: 'tam-kare', ad: 'Tam kare sayılar', kart: 'karekok-ornek.html?konu=' + encodeURIComponent('Tam kare sayılar'),
          bilgi: [
            'Bir doğal sayının kendisiyle çarpımına <b>tam kare sayı</b> denir: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, …',
            `Karekök, karesi alınan sayıyı bulmaktır: ${us(7, 2)} = 49 olduğundan ${R(49)} = 7.`,
            `Tam kare sayıların karekökü doğal sayıdır. Tam kare olmayan sayıların karekökü doğal sayı değildir: ${R(20)} gibi.`,
            'Alanı a² birimkare olan bir karenin bir kenarı a birimdir: alanı 64 cm² olan karenin bir kenarı 8 cm\'dir.'
          ],
          ornek: {
            soru: 'Alanı 144 m² olan kare şeklindeki bir bahçenin çevresi kaç metredir?',
            cozum: [`Bir kenar = ${R(144)} = 12 m (çünkü ${us(12, 2)} = 144)`, 'Çevre = 4 · 12 = 48 m'],
            cevap: 'Bahçenin çevresi 48 m\'dir.'
          },
          dikkat: `Karekök ikiye bölmek değildir: ${R(16)} = 8 değil, 4\'tür (${us(4, 2)} = 16).`
        },
        {
          id: 'yaklasik', ad: 'Karekökün yaklaşık değeri', kart: 'karekok-ornek.html?konu=' + encodeURIComponent('Karekökün yaklaşık değeri'),
          bilgi: [
            'Tam kare olmayan bir sayının karekökü, ardışık iki doğal sayı arasındadır.',
            `Sayının hangi iki tam kare arasında olduğunu bul: 49 < 50 < 64 → ${R(49)} < ${R(50)} < ${R(64)} → 7 < ${R(50)} < 8`,
            `Bir doğal sayı hangi tam kareye daha yakınsa karekökü de o doğal sayıya daha yakındır: 50, 49\'a daha yakın olduğu için ${R(50)} 7\'ye daha yakındır.`
          ],
          ornek: {
            soru: `${R(90)} hangi ardışık iki doğal sayı arasındadır ve hangisine daha yakındır?`,
            cozum: [`81 < 90 < 100 → 9 < ${R(90)} < 10`, '90 − 81 = 9, 100 − 90 = 10 → 90, 81\'e daha yakın'],
            cevap: `9 < ${R(90)} < 10 ve ${R(90)}, 9\'a daha yakındır.`
          },
          dikkat: `${R(50)} ≈ 25 değildir. Kontrol et: ${us(7, 2)} = 49, 50\'ye çok yakın; ${us(25, 2)} = 625 çok büyük.`
        },
        {
          id: 'a-kok-b', ad: 'a√b biçiminde yazma', kart: 'karekok-cikmis.html?konu=' + encodeURIComponent('a√b biçiminde yazma'),
          bilgi: [
            `Kök içindeki sayı, biri tam kare olan iki çarpana ayrılır; tam kare olan çarpan kök dışına karekökü olarak çıkar: ${R(72)} = ${R('36 · 2')} = ${R(2, 6)}`,
            `En büyük tam kare çarpanı seçmek işi kısaltır: ${R(72)} = ${R(18, 2)} de doğrudur ama en sade hâl ${R(2, 6)}\'dir.`,
            `Kök dışındaki sayı karesi alınarak içeri girer: ${R(5, 3)} = ${R('9 · 5')} = ${R(45)}`
          ],
          ornek: {
            soru: `${R(48)} sayısını a${R('b')} biçiminde yazınız.`,
            cozum: ['48\'in en büyük tam kare çarpanı 16\'dır: 48 = 16 · 3', `${R(48)} = ${R('16 · 3')} = ${R(3, 4)}`],
            cevap: `${R(48)} = ${R(3, 4)}`
          },
          dikkat: `Dışarı çıkarken karekökünü al: ${R('9 · 2')} = ${R(2, 3)}\'tür, ${R(2, 9)} değil. İçeri sokarken karesini al: ${R(3, 2)} = ${R(12)}\'dir, ${R(6)} değil.`
        },
        {
          id: 'carpma-bolme', ad: 'Çarpma ve bölme', kart: 'karekok-ornek.html?konu=' + encodeURIComponent('Çarpma ve bölme'),
          bilgi: [
            `Kök içleri çarpılır: ${R(3)} · ${R(12)} = ${R(36)} = 6`,
            `Kök içleri bölünür: ${R(48)} : ${R(3)} = ${R(16)} = 4`,
            `Kök dışındakiler kendi arasında, kök içindekiler kendi arasında çarpılır: ${R(3, 2)} · ${R(2, 5)} = ${R(6, 10)}`,
            `Bir karekök kendisiyle çarpılınca kök içindeki sayı elde edilir: ${R(7)} · ${R(7)} = 7`
          ],
          ornek: {
            soru: `${R(2, 3)} · ${R(8)} işleminin sonucu kaçtır?`,
            cozum: [`${R(2, 3)} · ${R(8)} = ${R('2 · 8', 3)} = ${R(16, 3)}`, `${R(16)} = 4 → 3 · 4 = 12`],
            cevap: 'Sonuç 12\'dir.'
          },
          dikkat: `Çarpmada kök içleri çarpılır, toplanmaz: ${R(3, 2)} · ${R(2, 5)} = ${R(6, 10)}\'dır; ${R(5, 10)} değil.`
        },
        {
          id: 'toplama-cikarma', ad: 'Toplama ve çıkarma', kart: 'karekok-ornek.html?konu=' + encodeURIComponent('Toplama ve çıkarma'),
          bilgi: [
            `Yalnızca kök içleri aynı olan ifadeler toplanıp çıkarılır; kök dışındaki sayılar toplanır: ${R(2, 3)} + ${R(2, 5)} = ${R(2, 8)}`,
            `Kök içleri farklıysa önce a${R('b')} biçimine getir: ${R(8)} + ${R(18)} = ${R(2, 2)} + ${R(2, 3)} = ${R(2, 5)}`,
            `Kök içleri aynı hâle gelmiyorsa toplam bu biçimde kalır: ${R(2)} + ${R(3)} gibi.`
          ],
          ornek: {
            soru: `${R(12)} + ${R(27)} − ${R(3)} işleminin sonucu kaçtır?`,
            cozum: [`${R(12)} = ${R(3, 2)} ve ${R(27)} = ${R(3, 3)}`, `${R(3, 2)} + ${R(3, 3)} − ${R(3)} = ${R(3, '(2 + 3 − 1)')} = ${R(3, 4)}`],
            cevap: `Sonuç ${R(3, 4)}\'tür.`
          },
          dikkat: `Kök içleri toplanmaz: ${R(9)} + ${R(16)} = ${R(25)} değildir. ${R(9)} + ${R(16)} = 3 + 4 = 7 ama ${R(25)} = 5.`
        },
        {
          id: 'ondalik-karekok', ad: 'Ondalık sayıların karekökü', kart: 'karekok-ornek.html?konu=' + encodeURIComponent('Ondalık sayıların karekökü'),
          bilgi: [
            `Ondalık sayıyı kesre çevir, pay ile paydanın karekökünü ayrı ayrı al: ${R('0,25')} = ${R(F(25, 100))} = ${F(5, 10)} = 0,5`,
            `Kısa yol: Tam kare bir ondalık sayının karekökünde virgülden sonraki basamak sayısı yarıya iner: ${R('1,44')} = 1,2; ${R('0,0049')} = 0,07`
          ],
          ornek: {
            soru: `${R('0,09')} + ${R('0,16')} işleminin sonucu kaçtır?`,
            cozum: [`${R('0,09')} = 0,3 (çünkü 0,3 · 0,3 = 0,09)`, `${R('0,16')} = 0,4 (çünkü 0,4 · 0,4 = 0,16)`, '0,3 + 0,4 = 0,7'],
            cevap: 'Sonuç 0,7\'dir.'
          },
          dikkat: `${R('0,9')} = 0,3 değildir: 0,3 · 0,3 = 0,09\'dur. Virgülden sonraki basamak sayısına dikkat et.`
        },
        {
          id: 'gercek-sayilar', ad: 'Gerçek sayılar', kart: 'karekok-ornek.html?konu=' + encodeURIComponent('Gerçek sayılar'),
          bilgi: [
            `${F('a', 'b')} biçiminde (a ve b tam sayı, b ≠ 0) yazılabilen sayılar <b>rasyonel</b> sayılardır: 3, −${F(2, 5)}, 0,75, 0,${D(3)}`,
            `Bu biçimde yazılamayan sayılar <b>irrasyonel</b> sayılardır: ${R(2)}, ${R(5)}, π. Ondalık gösterimleri sonsuzdur ve devretmez.`,
            'Rasyonel ve irrasyonel sayıların hepsine birlikte <b>gerçek sayılar</b> denir.',
            `Tam kare sayıların karekökleri rasyoneldir: ${R(49)} = 7. Tam kare olmayan doğal sayıların karekökleri irrasyoneldir.`
          ],
          ornek: {
            soru: `${R(16)}, ${R(20)}, 0,${D(4)}, π, −${R(9)} sayılarından hangileri irrasyoneldir?`,
            cozum: [`${R(16)} = 4 ve −${R(9)} = −3 → rasyonel`, `0,${D(4)} = ${F(4, 9)} → rasyonel`, `${R(20)}: 20 tam kare değil → irrasyonel; π → irrasyonel`],
            cevap: `İrrasyonel olanlar ${R(20)} ve π\'dir.`
          },
          dikkat: `Her köklü sayı irrasyonel değildir: ${R(49)} = 7 rasyoneldir. Devirli ondalık sayılar da rasyoneldir.`
        }
      ]
    },

    yedi: {
      ad: 'Tam Sayılar ve Rasyonel Sayılar', sinif: 7,
      konular: [
        {
          id: 'mutlak-deger', ad: 'Tam sayılar ve mutlak değer',
          bilgi: [
            'Bir sayının sayı doğrusunda 0\'a olan uzaklığına o sayının <b>mutlak değeri</b> denir: |−5| = 5, |5| = 5, |0| = 0.',
            'Mutlak değer bir uzaklık olduğu için hiçbir zaman negatif olmaz.',
            'Mutlak değeri 5 olan iki tam sayı vardır: 5 ve −5.',
            'Negatif sayılarda mutlak değeri büyük olan sayı daha küçüktür: −8 < −2.'
          ],
          ornek: {
            soru: 'Sayı doğrusunda −3 ile 4 arasında kaç tane tam sayı vardır?',
            cozum: ['"Arasında" demek −3 ve 4\'ün kendisi sayılmaz', 'Aradaki tam sayılar: −2, −1, 0, 1, 2, 3'],
            cevap: '6 tane tam sayı vardır.'
          },
          dikkat: '|−5| = −5 değildir. Mutlak değer 0\'a uzaklıktır, uzaklık negatif olmaz.'
        },
        {
          id: 'rasyonel-tanima', ad: 'Rasyonel sayıyı tanıma',
          bilgi: [
            `a ve b tam sayı, b ≠ 0 olmak üzere ${F('a', 'b')} biçiminde yazılabilen sayılara <b>rasyonel sayı</b> denir. Rasyonel sayılar ℚ ile gösterilir.`,
            `Her tam sayı bir rasyonel sayıdır: −7 = ${F('−7', 1)}, 0 = ${F(0, 1)}.`,
            `Payda 0 olamaz: ${F(5, 0)} bir rasyonel sayı değildir.`,
            `Eksi işareti kesrin önüne, payına ya da paydasına yazılabilir: −${F(2, 3)} = ${F('−2', 3)} = ${F(2, '−3')}. Pay ve payda ikisi de negatifse sayı pozitiftir: ${F('−2', '−3')} = ${F(2, 3)}.`
          ],
          ornek: {
            soru: `${F(12, 4)}, −2,5, 0 ve ${F(7, 0)} sayılarından hangileri rasyonel sayıdır?`,
            cozum: [`${F(12, 4)} = 3 → rasyonel`, `−2,5 = −${F(5, 2)} → rasyonel`, `0 = ${F(0, 1)} → rasyonel`, `${F(7, 0)}: payda 0 olamaz → rasyonel değil`],
            cevap: `${F(12, 4)}, −2,5 ve 0 rasyoneldir.`
          },
          dikkat: `${F(12, 4)} kesir gibi görünse de bir tam sayıdır (3). Kesirle yazılan her sayı tam sayı olmayan bir rasyonel sayı değildir.`
        },
        {
          id: 'sayi-dogrusu', ad: 'Sayı doğrusunda rasyonel sayılar',
          bilgi: [
            `Ardışık iki tam sayı arası n eş parçaya ayrılmışsa her parça ${F(1, 'n')}\'dir.`,
            'Negatif sayılar 0\'ın solunda, pozitif sayılar sağındadır. Sola gittikçe sayılar küçülür.',
            'Bir noktayı okurken en yakın tam sayıdan başla ve parçaları say.'
          ],
          ornek: {
            soru: 'Aşağıdaki sayı doğrusunda ardışık iki tam sayı arası eş parçalara ayrılmıştır. A noktası hangi sayıyı gösterir?',
            sekil: () => (window.sayiDogrusu ? sayiDogrusu({ bas: 0, son: 2, bol: 4, noktalar: [{ v: 1.25, ad: 'A' }] }) : ''),
            cozum: [`Her birim 4 eş parçaya ayrılmış → bir parça ${F(1, 4)} = 0,25`, `A, 1\'in 1 parça sağında → A = 1 + ${F(1, 4)} = ${F(5, 4)}`],
            cevap: `A noktası ${F(5, 4)} = 1,25 sayısını gösterir.`
          },
          dikkat: 'Bir parçayı her zaman 0,1 sanma: birim 4 parçaya ayrıldıysa bir parça 0,25, 5 parçaya ayrıldıysa 0,2\'dir.'
        },
        {
          id: 'kesir-ondalik', ad: 'Kesri ondalık gösterimle yazma',
          bilgi: [
            `Payı paydaya böleriz: ${F(3, 4)} = 3 : 4 = 0,75.`,
            `Ya da paydayı 10, 100, 1000 olacak biçimde genişletiriz: ${F(7, 25)} = ${F(28, 100)} = 0,28.`,
            `Bazı kesirlerin ondalık gösteriminde bir rakam grubu sonsuza kadar tekrar eder. Bunlara <b>devirli ondalık gösterim</b> denir: ${F(1, 3)} = 0,333… = 0,${D(3)}.`,
            `Kesir en sade hâle getirildikten sonra paydasında 2 ve 5\'ten başka asal çarpan varsa ondalık gösterimi devirlidir: ${F(1, 6)} = 0,1${D(6)}.`
          ],
          ornek: {
            soru: `${F(7, 8)} kesrinin ondalık gösterimini yazınız.`,
            cozum: [`8 · 125 = 1000 → ${F(7, 8)} = ${F('7 · 125', '8 · 125')} = ${F(875, 1000)}`, `${F(875, 1000)} = 0,875`],
            cevap: `${F(7, 8)} = 0,875`
          },
          dikkat: `Pay ile paydayı yan yana yazmak ondalık gösterim değildir: ${F(3, 4)} = 0,34 değil, 0,75\'tir.`
        },
        {
          id: 'ondalik-kesir', ad: 'Ondalık gösterimi kesre çevirme',
          bilgi: [
            `Virgülden sonraki basamak sayısı kadar sıfırla paydaya 10, 100, 1000 yazılır: 0,6 = ${F(6, 10)}, 0,45 = ${F(45, 100)}.`,
            `Sonra kesir sadeleştirilir: ${F(6, 10)} = ${F(3, 5)}.`,
            `Tam kısmı olan sayılar da aynı yolla çevrilir: 3,2 = ${F(32, 10)} = ${F(16, 5)}.`
          ],
          ornek: {
            soru: '0,45 sayısını en sade kesir olarak yazınız.',
            cozum: [`0,45 = ${F(45, 100)}`, `45 ve 100, 5 ile sadeleşir → ${F(9, 20)}`],
            cevap: `0,45 = ${F(9, 20)}`
          },
          dikkat: `0,45 = ${F(45, 10)} değildir: virgülden sonra iki basamak var, payda 100 olmalıdır.`
        },
        {
          id: 'devirli-kesir', ad: 'Devirli ondalık gösterimi kesre çevirme',
          bilgi: [
            '<b>Pay:</b> sayının virgülsüz hâlinden devretmeyen kısım çıkarılır.',
            '<b>Payda:</b> virgülden sonra devreden her basamak için 9, devretmeyen her basamak için 0 yazılır (önce 9\'lar, sonra 0\'lar).',
            `0,${D(4)} = ${F(4, 9)}; 0,${D(36)} = ${F(36, 99)} = ${F(4, 11)}; 0,1${D(6)} = ${F('16 − 1', 90)} = ${F(15, 90)} = ${F(1, 6)}`
          ],
          ornek: {
            soru: `0,2${D(3)} sayısını en sade kesir olarak yazınız.`,
            cozum: ['Sayının virgülsüz hâli 23, devretmeyen kısım 2 → pay 23 − 2 = 21', 'Virgülden sonra 1 devreden (9), 1 devretmeyen (0) basamak → payda 90', `${F(21, 90)} = ${F(7, 30)}`],
            cevap: `0,2${D(3)} = ${F(7, 30)}`
          },
          dikkat: `0,2${D(3)} ile 0,${D(23)} farklı sayılardır: ilkinde yalnızca 3, ikincisinde 23 tekrar eder. 0,${D(23)} = ${F(23, 99)}\'dur.`
        }
      ]
    }
  };

  // Her konu için önerilen online test (test.html?test=…). 7. sınıf testleri bütün konuları karışık sorar.
  const TEST = {
    carpanlar: 'ck-carpan', 'ebob-ekok': 'ck-ebob-1', 'aralarinda-asal': 'ck-asal',
    'tam-sayi-kuvvetleri': 'tam-sayi', 'temel-kurallar': 'kurallar-1', 'ondalik-cozumleme': 'ondalik', 'onun-kuvvetleri': 'ondalik', 'bilimsel-gosterim': 'bilimsel',
    'tam-kare': 'kk-temel', yaklasik: 'kk-yaklasik-1', 'a-kok-b': 'kk-karma-1', 'carpma-bolme': 'kk-carpma', 'toplama-cikarma': 'kk-toplama', 'ondalik-karekok': 'kk-temel', 'gercek-sayilar': 'kk-temel'
  };
  Object.values(window.OZETLER).forEach(u => u.konular.forEach(k => { k.test = TEST[k.id] || (u.sinif === 7 ? 'yedi-test-1' : ''); }));
})();
