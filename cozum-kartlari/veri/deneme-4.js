// Deneme 4 · denemeye özel sorular (Çarpanlar ve Katlar + Üslü İfadeler).
// Bu sorular sitenin başka hiçbir sayfasında (çözüm kartı, çalışma kâğıdı, test) yer almaz.
// MEB örnek sorularının mantığıyla yazılmış yeni sorular ve özgün sorulardan oluşur; her sorunun cevabı hesapla doğrulanmıştır.
// Yayındaki bir denemenin sorularını ya da sırasını değiştirmeyin: öğretmen paneli eski sonuçları bu sıraya göre eşler.
window.DENEME_SORULARI = window.DENEME_SORULARI || {};
window.DENEME_SORULARI['deneme-4'] = [
 {
  "no": 1,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>Bir okulun bahçesine dikdörtgen biçiminde bir gösteri alanı çizilecektir. Gösteri alanının kenar uzunlukları metre cinsinden birer doğal sayı olacak ve bu dikdörtgenin alanı 180 m² olacaktır. Ayrıca güvenlik için dikdörtgenin kısa kenarı 6 metreden uzun olmalıdır.</p><p class=\"ask\">Buna göre bu koşullara uygun kaç farklı gösteri alanı çizilebilir?</p>",
  "opts": [
   "3",
   "4",
   "5",
   "9"
  ],
  "ans": 0,
  "steps": [
   "Kenarlar çarpımı 180 olan doğal sayı ikilileri: 1 ve 180, 2 ve 90, 3 ve 60, 4 ve 45, 5 ve 36, 6 ve 30, 9 ve 20, 10 ve 18, 12 ve 15",
   "Kısa kenarı 6'dan büyük olanlar: 9 ve 20, 10 ve 18, 12 ve 15 → <b>3</b> farklı alan"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "6 ve 30'luk alanda kısa kenar 6 metredir; \"6'dan uzun\" koşulunu sağlamaz."
 },
 {
  "no": 2,
  "unite": "Üslü İfadeler",
  "konu": "Tam sayı kuvvetleri",
  "q": "<p class=\"ask\">a = −1 ve b = −2 olduğuna göre a<sup>2025</sup> · b<sup>3</sup> − (a · b)<sup>2</sup> + b<sup>0</sup> ifadesinin değeri kaçtır?</p>",
  "opts": [
   "−11",
   "−3",
   "3",
   "5"
  ],
  "ans": 3,
  "steps": [
   "a<sup>2025</sup> = (−1)<sup>2025</sup> = −1 (tek kuvvet), b<sup>3</sup> = (−2)<sup>3</sup> = −8 → çarpımları (−1) · (−8) = 8",
   "a · b = (−1) · (−2) = 2 → 2<sup>2</sup> = 4; b<sup>0</sup> = 1",
   "8 − 4 + 1 = <b>5</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "Negatif iki sayının çarpımı pozitiftir: (−1) · (−8) = +8."
 },
 {
  "no": 3,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p>Bir laboratuvarda incelenen bakteriler her 20 dakikada bir ikiye bölünerek çoğalmaktadır. Saat 10.00'da kapta 2<sup>6</sup> bakteri vardır. Saat 12.00'de kaptaki bakterilerin yarısı ilaçla yok ediliyor; kalan bakteriler aynı hızla çoğalmaya devam ediyor.</p><p class=\"ask\">Buna göre saat 13.00'te kapta kaç bakteri bulunur?</p>",
  "opts": [
   "2<sup>11</sup>",
   "2<sup>12</sup>",
   "2<sup>13</sup>",
   "2<sup>14</sup>"
  ],
  "ans": 3,
  "steps": [
   "10.00 ile 12.00 arasında 120 ÷ 20 = 6 bölünme olur: 2<sup>6</sup> · 2<sup>6</sup> = 2<sup>12</sup>",
   "Yarısı yok edilince 2<sup>12</sup> ÷ 2 = 2<sup>11</sup> bakteri kalır",
   "12.00 ile 13.00 arasında 3 bölünme: 2<sup>11</sup> · 2<sup>3</sup> = <b>2<sup>14</sup></b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "Bakteri sayısını yarıya indirmek, üssü yarıya indirmek değildir: 2<sup>12</sup>'nin yarısı 2<sup>6</sup> değil, 2<sup>11</sup>'dir."
 },
 {
  "no": 4,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir terzi 84 m ve 126 m uzunluğundaki iki kumaş topunu, hiç kumaş artmayacak biçimde eşit uzunlukta parçalara ayıracaktır. Her parçanın uzunluğu metre cinsinden bir doğal sayı olacak ve 10 metreden kısa olacaktır.</p><p class=\"ask\">Terzi en az sayıda parça elde etmek istediğine göre toplam kaç parça elde eder?</p>",
  "opts": [
   "5",
   "15",
   "30",
   "35"
  ],
  "ans": 2,
  "steps": [
   "Parça uzunluğu hem 84'ü hem 126'yı bölmeli: EBOB(84, 126) = 42'nin bölenleri → 1, 2, 3, 6, 7, 14, 21, 42",
   "Parça sayısının en az olması için uzunluk en büyük olmalı; ama 10 metreden kısa olmalı → 7 m",
   "84 ÷ 7 + 126 ÷ 7 = 12 + 18 = <b>30</b> parça"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "EBOB 42 bulunup 5 parça denirse \"10 metreden kısa\" koşulu unutulmuş olur."
 },
 {
  "no": 5,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">x = 2<sup>−3</sup> ve y = 4<sup>2</sup> olduğuna göre (x · y)<sup>−2</sup> ÷ y<sup>−1</sup> işleminin sonucu kaçtır?</p>",
  "opts": [
   "<span class=\"frac\"><span>1</span><span>16</span></span>",
   "<span class=\"frac\"><span>1</span><span>4</span></span>",
   "2",
   "4"
  ],
  "ans": 3,
  "steps": [
   "y = 4<sup>2</sup> = 2<sup>4</sup> → x · y = 2<sup>−3</sup> · 2<sup>4</sup> = 2<sup>1</sup> = 2",
   "(x · y)<sup>−2</sup> = 2<sup>−2</sup> = <span class=\"frac\"><span>1</span><span>4</span></span>",
   "y<sup>−1</sup> ile bölmek y ile çarpmaktır: <span class=\"frac\"><span>1</span><span>4</span></span> · 16 = <b>4</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "Negatif kuvvetle bölmek, pozitif kuvvetle çarpmaya eşittir."
 },
 {
  "no": 6,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>Ece'nin dolap şifresi dört basamaklı bir doğal sayıdır. Bu sayının asal çarpanları yalnızca 2 ve 3'tür. Ayrıca şifre, bu özelliğe sahip dört basamaklı sayıların en küçüğüdür.</p><p class=\"ask\">Buna göre şifrenin rakamları toplamı kaçtır?</p>",
  "opts": [
   "9",
   "12",
   "15",
   "18"
  ],
  "ans": 0,
  "steps": [
   "Sayı 2<sup>a</sup> · 3<sup>b</sup> biçimindedir (a ≥ 1, b ≥ 1) ve en az 1000 olmalıdır",
   "Adaylar: 2<sup>7</sup> · 3<sup>2</sup> = 1152, 2<sup>4</sup> · 3<sup>4</sup> = 1296, 2 · 3<sup>6</sup> = 1458 … (2<sup>2</sup> · 3<sup>5</sup> = 972 üç basamaklıdır)",
   "En küçüğü 1152 → 1 + 1 + 5 + 2 = <b>9</b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "1024 = 2<sup>10</sup> dört basamaklıdır ama asal çarpanları arasında 3 yoktur."
 },
 {
  "no": 7,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir konser sahnesinde kırmızı ışık 15 saniyede bir, mavi ışık 25 saniyede bir, yeşil ışık ise 20 saniyede bir yanmaktadır. Üç ışık saat 20.00'de aynı anda yanmıştır.</p><p class=\"ask\">Buna göre saat 20.00'den sonra saat 20.30'a kadar geçen sürede (20.30 dâhil), kırmızı ve mavi ışığın birlikte yandığı ancak yeşil ışığın yanmadığı kaç an vardır?</p>",
  "opts": [
   "6",
   "18",
   "24",
   "30"
  ],
  "ans": 1,
  "steps": [
   "Kırmızı ve mavi EKOK(15, 25) = 75 saniyede bir birlikte yanar: 30 dakikada 1800 ÷ 75 = 24 kez",
   "Üçü birlikte EKOK(15, 25, 20) = 300 saniyede bir yanar: 1800 ÷ 300 = 6 kez",
   "Yeşilin yanmadığı anlar: 24 − 6 = <b>18</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "24, kırmızı ve mavinin birlikte yandığı bütün anların sayısıdır; yeşilin de yandığı 6 an çıkarılmalıdır."
 },
 {
  "no": 8,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">3<sup>x</sup> + 3<sup>x</sup> + 3<sup>x</sup> = <span class=\"frac\"><span>9<sup>4</sup></span><span>27</span></span> olduğuna göre x kaçtır?</p>",
  "opts": [
   "2",
   "3",
   "4",
   "5"
  ],
  "ans": 2,
  "steps": [
   "Sol taraf: 3 · 3<sup>x</sup> = 3<sup>x + 1</sup>",
   "Sağ taraf: 9<sup>4</sup> = 3<sup>8</sup>, 27 = 3<sup>3</sup> → 3<sup>8 − 3</sup> = 3<sup>5</sup>",
   "x + 1 = 5 → x = <b>4</b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "3<sup>x</sup> + 3<sup>x</sup> + 3<sup>x</sup> toplamı 3<sup>3x</sup> değil, 3 · 3<sup>x</sup> = 3<sup>x + 1</sup> olur."
 },
 {
  "no": 9,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir hastanede Ahmet Bey 6 günde bir, Zeynep Hanım 8 günde bir, Ali Bey ise 10 günde bir nöbet tutmaktadır. Üçü 1 Mart Pazartesi günü birlikte nöbet tutmuştur.</p><p class=\"ask\">Buna göre üçü bir sonraki ortak nöbetlerini hangi tarihte ve haftanın hangi gününde tutar? (Mart ve mayıs ayları 31, nisan ayı 30 gündür.)</p>",
  "opts": [
   "28 Haziran Pazartesi",
   "29 Haziran Pazartesi",
   "29 Haziran Salı",
   "30 Haziran Salı"
  ],
  "ans": 2,
  "long": true,
  "steps": [
   "Üçünün birlikte nöbet tuttuğu günler EKOK(6, 8, 10) = 120 günde bir tekrarlanır",
   "1 Mart'tan 1 Haziran'a 31 + 30 + 31 = 92 gün vardır; 1 Haziran'dan sonra 120 − 92 = 28 gün daha geçmelidir → 1 Haziran'dan 28 gün sonrası 29 Haziran'dır",
   "120 = 7 · 17 + 1 → pazartesiden 1 gün sonra: <b>29 Haziran Salı</b>"
  ],
  "answer": "Cevap: <b>C</b>"
 },
 {
  "no": 10,
  "unite": "Üslü İfadeler",
  "konu": "Ondalık çözümleme",
  "q": "<p>Bir sayının çözümlenmiş hâli a · 10<sup>2</sup> + 3 · 10<sup>0</sup> + b · 10<sup>−1</sup> + 4 · 10<sup>−2</sup> biçimindedir. a ve b birer rakamdır.</p><p class=\"ask\">Bu sayı 503,6 ile 503,7 arasında olduğuna göre a + b kaçtır?</p>",
  "opts": [
   "11",
   "12",
   "13",
   "14"
  ],
  "ans": 0,
  "steps": [
   "10<sup>1</sup> terimi olmadığından sayının onlar basamağı 0, birler basamağı 3'tür; yüzde birler basamağı 4'tür",
   "Sayının 503,6 ile 503,7 arasında olması için a = 5 ve b = 6 olmalı: 503,64",
   "a + b = 5 + 6 = <b>11</b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "10<sup>1</sup> terimi yazılmadığı için onlar basamağı 0'dır."
 },
 {
  "no": 11,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p>Güneş'ten çıkan ışık Dünya'ya yaklaşık 500 saniyede ulaşmaktadır. Işık bir saniyede yaklaşık 3 · 10<sup>5</sup> km yol almaktadır.</p><p class=\"ask\">Buna göre Dünya ile Güneş arasındaki uzaklığın kilometre cinsinden bilimsel gösterimi hangisidir?</p>",
  "opts": [
   "1,5 · 10<sup>7</sup>",
   "3,5 · 10<sup>7</sup>",
   "15 · 10<sup>7</sup>",
   "1,5 · 10<sup>8</sup>"
  ],
  "ans": 3,
  "steps": [
   "Uzaklık = hız · süre = 3 · 10<sup>5</sup> · 500",
   "500 = 5 · 10<sup>2</sup> → 3 · 5 · 10<sup>5 + 2</sup> = 15 · 10<sup>7</sup>",
   "Katsayı 1 ile 10 arasında olmalı: 15 · 10<sup>7</sup> = <b>1,5 · 10<sup>8</sup></b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "15 · 10<sup>7</sup> doğru değerdir ama katsayı 10'dan büyük olduğu için bilimsel gösterim değildir."
 },
 {
  "no": 12,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p>a, b ve c birbirinden farklı doğal sayılardır ve bu sayıların herhangi ikisi aralarında asaldır. a &lt; b &lt; c ve a · b · c = 180'dir.</p><p class=\"ask\">Buna göre bu koşulları sağlayan kaç farklı (a, b, c) üçlüsü vardır?</p>",
  "opts": [
   "4",
   "5",
   "6",
   "8"
  ],
  "ans": 0,
  "steps": [
   "180 = 2<sup>2</sup> · 3<sup>2</sup> · 5. Sayılar ikişer ikişer aralarında asal olduğundan iki tane 2 çarpanı (yani 4) aynı sayıda bulunmalıdır; iki tane 3 çarpanı (yani 9) için de durum aynıdır. Bu yüzden 4, 9 ve 5 bölünmeden sayılara dağıtılır",
   "Üçlüler: (4, 5, 9), (1, 5, 36), (1, 9, 20), (1, 4, 45)",
   "(1, 1, 180) olamaz çünkü sayılar farklı olmalı → <b>4</b> üçlü"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "1 her sayıyla aralarında asaldır; üçlülerde 1 de kullanılabilir."
 },
 {
  "no": 13,
  "unite": "Üslü İfadeler",
  "konu": "Tam sayı kuvvetleri",
  "q": "<p>a &lt; 0 &lt; b olmak üzere aşağıdaki ifadeler veriliyor:</p><p>I. a<sup>2</sup> · b<sup>3</sup> &nbsp;&nbsp; II. (a · b)<sup>3</sup> &nbsp;&nbsp; III. −a<sup>4</sup> · b &nbsp;&nbsp; IV. (−a)<sup>3</sup> · b<sup>2</sup></p><p class=\"ask\">Buna göre bu ifadelerden kaç tanesinin değeri negatiftir?</p>",
  "opts": [
   "1",
   "2",
   "3",
   "4"
  ],
  "ans": 1,
  "steps": [
   "I. a<sup>2</sup> pozitif, b<sup>3</sup> pozitif → pozitif",
   "II. a · b negatif, negatif bir sayının küpü negatif → negatif",
   "III. a<sup>4</sup> · b pozitif, önündeki eksi işaretiyle negatif → negatif",
   "IV. −a pozitif, küpü pozitif; b<sup>2</sup> pozitif → pozitif",
   "Negatif olanlar II ve III → <b>2</b> tane"
  ],
  "answer": "Cevap: <b>B</b>"
 },
 {
  "no": 14,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir kütüphanedeki kitaplar 6'şarlı, 8'erli ya da 10'arlı paketlere ayrıldığında her seferinde 3 kitap açıkta kalmaktadır. Kütüphanedeki kitap sayısı 300'den fazla, 400'den azdır.</p><p class=\"ask\">Buna göre kitap sayısının rakamları toplamı kaçtır?</p>",
  "opts": [
   "6",
   "9",
   "10",
   "12"
  ],
  "ans": 3,
  "steps": [
   "Kitap sayısının 3 eksiği 6'ya, 8'e ve 10'a tam bölünür: EKOK(6, 8, 10) = 120",
   "Kitap sayısı 120'nin bir katından 3 fazladır: 123, 243, 363, … → 300 ile 400 arasında yalnızca 363",
   "3 + 6 + 3 = <b>12</b>"
  ],
  "answer": "Cevap: <b>D</b>"
 },
 {
  "no": 15,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p>Bir kenarı 2<sup>5</sup> cm olan kare biçimindeki bir kâğıt, her seferinde tam ortadan ikiye katlanıyor.</p><p class=\"ask\">Kâğıt 6 kez katlandığında oluşan katlı parçanın üst yüzünün alanı kaç santimetrekare olur?</p>",
  "opts": [
   "2<sup>3</sup>",
   "2<sup>4</sup>",
   "2<sup>5</sup>",
   "2<sup>6</sup>"
  ],
  "ans": 1,
  "steps": [
   "Kâğıdın alanı (2<sup>5</sup>)<sup>2</sup> = 2<sup>10</sup> cm²",
   "Her katlama üst yüzün alanını yarıya indirir: 6 katlamada alan 2<sup>6</sup>'ya bölünür",
   "2<sup>10</sup> ÷ 2<sup>6</sup> = <b>2<sup>4</sup></b> cm²"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "Kenar uzunluğu 2<sup>5</sup>'tir ama alan 2<sup>10</sup>'dur; işlem alan üzerinden yapılmalıdır."
 },
 {
  "no": 16,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Ayrıt uzunlukları 30 cm, 42 cm ve 54 cm olan dikdörtgenler prizması biçimindeki bir kutu, özdeş küplerle hiç boşluk kalmayacak biçimde doldurulacaktır. Küplerin bir ayrıtının uzunluğu santimetre cinsinden bir doğal sayıdır.</p><p class=\"ask\">Buna göre kutuyu doldurmak için <u>en az</u> kaç küp gerekir?</p>",
  "opts": [
   "105",
   "210",
   "315",
   "630"
  ],
  "ans": 2,
  "steps": [
   "Küp sayısının en az olması için küpün ayrıtı en büyük olmalı: EBOB(30, 42, 54) = 6 cm",
   "Her ayrıta sığan küp sayısı: 30 ÷ 6 = 5, 42 ÷ 6 = 7, 54 ÷ 6 = 9",
   "5 · 7 · 9 = <b>315</b> küp"
  ],
  "answer": "Cevap: <b>C</b>"
 },
 {
  "no": 17,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p>Bir sınıftaki 30 öğrenciye 1'den 30'a kadar numaralar verilmiştir. Öğretmen, numarası 12 ile aralarında asal olan öğrencileri bir grupta topluyor.</p><p class=\"ask\">Buna göre bu gruptaki öğrencilerden kaçının numarası asal sayı <u>değildir</u>?</p>",
  "opts": [
   "2",
   "3",
   "4",
   "10"
  ],
  "ans": 0,
  "steps": [
   "12 = 2<sup>2</sup> · 3 → 12 ile aralarında asal olan numaralar 2'ye ve 3'e bölünmez",
   "Gruptakiler: 1, 5, 7, 11, 13, 17, 19, 23, 25, 29",
   "Asal olmayanlar 1 ve 25 → <b>2</b> öğrenci"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "1 asal sayı değildir ama her sayıyla aralarında asaldır; 25 de 12 ile aralarında asaldır ama asal değildir."
 },
 {
  "no": 18,
  "unite": "Üslü İfadeler",
  "konu": "10'un kuvvetleri",
  "q": "<p>Bir yazıcı kâğıdının kalınlığı 8 · 10<sup>−2</sup> mm'dir. Kâğıtlar 500 yapraklık paketler hâlinde satılmaktadır.</p><p class=\"ask\">25 paket kâğıt üst üste konulursa oluşan yığının yüksekliği kaç metre olur?</p>",
  "opts": [
   "0,1",
   "1",
   "10",
   "100"
  ],
  "ans": 1,
  "steps": [
   "Yaprak sayısı: 25 · 500 = 12 500 = 1,25 · 10<sup>4</sup>",
   "Yükseklik: 8 · 10<sup>−2</sup> · 1,25 · 10<sup>4</sup> = 10 · 10<sup>2</sup> = 1000 mm",
   "1000 mm = <b>1 m</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "Sonuç milimetre olarak 1000 bulunur; soru metre istiyor."
 },
 {
  "no": 19,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p>Bir bilgisayar bir saniyede 4 · 10<sup>9</sup> işlem yapabilmektedir.</p><p class=\"ask\">Buna göre bu bilgisayar 2,4 · 10<sup>13</sup> işlemi kaç dakikada tamamlar?</p>",
  "opts": [
   "10",
   "60",
   "100",
   "6000"
  ],
  "ans": 2,
  "steps": [
   "Süre = (2,4 · 10<sup>13</sup>) ÷ (4 · 10<sup>9</sup>) = 0,6 · 10<sup>4</sup> = 6000 saniye",
   "6000 ÷ 60 = <b>100</b> dakika"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "6000, saniye cinsinden süredir; dakikaya çevrilmelidir."
 },
 {
  "no": 20,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>1'den 30'a kadar olan sayıların her biri ayrı bir karta yazılmıştır. Ayşe bu 30 kart arasından, üzerindeki sayının tam olarak 4 pozitif böleni olan kartların hepsini seçiyor.</p><p class=\"ask\">Buna göre Ayşe'nin seçtiği kartların kaç tanesinde tek sayı yazılıdır?</p>",
  "opts": [
   "2",
   "3",
   "4",
   "9"
  ],
  "ans": 1,
  "steps": [
   "Tam 4 böleni olan sayılar ya iki farklı asal sayının çarpımıdır (p · q) ya da bir asal sayının küpüdür (p<sup>3</sup>)",
   "30'a kadar: 6, 8, 10, 14, 15, 21, 22, 26, 27 → 9 kart",
   "Tek olanlar 15, 21, 27 → <b>3</b> kart"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "9, seçilen bütün kartların sayısıdır; soru yalnızca tek sayı yazılı kartları soruyor."
 }
];
