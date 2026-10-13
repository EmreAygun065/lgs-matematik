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
  "q": "<p>Bir sınıftaki 36 öğrenci, her sırada eşit sayıda öğrenci olacak biçimde sıralara oturtulacak. Bir sırada <u>en az</u> 2, <u>en çok</u> 12 öğrenci oturabiliyor.</p><p class=\"ask\">Kaç farklı oturma düzeni kurulabilir?</p>",
  "opts": [
   "3",
   "4",
   "5",
   "6"
  ],
  "ans": 3,
  "steps": [
   "Sıradaki öğrenci sayısı 36'nın bir böleni olmalı: 1, 2, 3, 4, 6, 9, 12, 18, 36",
   "2 ile 12 arasındakiler: 2, 3, 4, 6, 9, 12 → <b>6</b> düzen"
  ],
  "answer": "Cevap: <b>D</b>"
 },
 {
  "no": 2,
  "unite": "Üslü İfadeler",
  "konu": "Tam sayı kuvvetleri",
  "q": "<p class=\"ask\">(−2)<sup>3</sup> + (−1)<sup>20</sup> − 2<sup>2</sup> + (−3)<sup>0</sup> işleminin sonucu kaçtır?</p>",
  "opts": [
   "−12",
   "−10",
   "−8",
   "2"
  ],
  "ans": 1,
  "steps": [
   "(−2)<sup>3</sup> = −8 (negatif tabanın tek kuvveti negatif)",
   "(−1)<sup>20</sup> = 1, 2<sup>2</sup> = 4, (−3)<sup>0</sup> = 1",
   "−8 + 1 − 4 + 1 = <b>−10</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "2<sup>2</sup>'nin önündeki eksi, kuvvetten sonra uygulanır: − 2<sup>2</sup> = −4."
 },
 {
  "no": 3,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p>Bir laboratuvarda bakteriler her saat sonunda ikiye bölünerek çoğalıyor. Deney 2<sup>6</sup> bakteriyle başlıyor.</p><p class=\"ask\">5 saat sonra kaç bakteri olur?</p>",
  "opts": [
   "2<sup>5</sup>",
   "2<sup>6</sup>",
   "2<sup>10</sup>",
   "2<sup>11</sup>"
  ],
  "ans": 3,
  "steps": [
   "Her saat sayı 2 ile çarpılır: 5 saatte 2<sup>5</sup> ile çarpılır",
   "2<sup>6</sup> · 2<sup>5</sup> = 2<sup>6+5</sup> = <b>2<sup>11</sup></b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "2<sup>5</sup> yalnızca 5 saatteki artış katıdır; başlangıçtaki 2<sup>6</sup> bakteri unutulmamalı."
 },
 {
  "no": 4,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir terzi 84 m ve 126 m uzunluğundaki iki kumaş topunu, hiç kumaş artmayacak biçimde eşit uzunlukta parçalara kesecek. Parçalar <u>mümkün olan en uzun</u> boyda olacak.</p><p class=\"ask\">Toplam kaç parça elde edilir?</p>",
  "opts": [
   "5",
   "6",
   "7",
   "10"
  ],
  "ans": 0,
  "steps": [
   "Parça boyu iki uzunluğu da bölmeli ve en büyük olmalı: EBOB(84, 126) = 42 m",
   "84 ÷ 42 = 2, 126 ÷ 42 = 3 → 2 + 3 = <b>5</b> parça"
  ],
  "answer": "Cevap: <b>A</b>"
 },
 {
  "no": 5,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">a = 3<sup>−2</sup> olduğuna göre 27 · a<sup>3</sup> ifadesinin değeri kaçtır?</p>",
  "opts": [
   "<span class=\"frac\"><span>1</span><span>27</span></span>",
   "<span class=\"frac\"><span>1</span><span>9</span></span>",
   "<span class=\"frac\"><span>1</span><span>3</span></span>",
   "3"
  ],
  "ans": 0,
  "steps": [
   "a<sup>3</sup> = (3<sup>−2</sup>)<sup>3</sup> = 3<sup>−6</sup>",
   "27 = 3<sup>3</sup> → 3<sup>3</sup> · 3<sup>−6</sup> = 3<sup>−3</sup> = <b>1/27</b>"
  ],
  "answer": "Cevap: <b>A</b>"
 },
 {
  "no": 6,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>Ece'nin dolap şifresi, asal çarpanları <u>yalnızca</u> 2 ve 3 olan (ikisi de bulunan) dört basamaklı <u>en küçük</u> sayıdır.</p><p class=\"ask\">Şifrenin rakamları toplamı kaçtır?</p>",
  "opts": [
   "7",
   "9",
   "12",
   "18"
  ],
  "ans": 1,
  "steps": [
   "Sayı 2<sup>a</sup> · 3<sup>b</sup> biçiminde (a, b ≥ 1) ve 1000 ya da daha büyük olmalı",
   "Adaylar: 2<sup>7</sup> · 3<sup>2</sup> = 1152, 2<sup>4</sup> · 3<sup>4</sup> = 1296, 2 · 3<sup>6</sup> = 1458 … (2<sup>2</sup> · 3<sup>5</sup> = 972 dört basamaklı değil, 1024 = 2<sup>10</sup>'da 3 yok)",
   "En küçüğü 1152 → 1 + 1 + 5 + 2 = <b>9</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "1024 = 2<sup>10</sup> dört basamaklı en küçük aday gibi görünür ama asal çarpanları arasında 3 yoktur."
 },
 {
  "no": 7,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir sahnedeki kırmızı ışık 15 saniyede bir, mavi ışık 25 saniyede bir yanıyor. İki ışık saat 20.00.00'da birlikte yandı.</p><p class=\"ask\">20.00.00'dan sonra 20.10.00'a kadar (20.10.00 dâhil) iki ışık kaç kez daha birlikte yanar?</p>",
  "opts": [
   "6",
   "7",
   "8",
   "9"
  ],
  "ans": 2,
  "steps": [
   "Birlikte yanma aralığı EKOK(15, 25) = 75 saniye",
   "10 dakika = 600 saniye → 600 ÷ 75 = <b>8</b> kez"
  ],
  "answer": "Cevap: <b>C</b>"
 },
 {
  "no": 8,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">2<sup>n</sup> + 2<sup>n</sup> + 2<sup>n</sup> + 2<sup>n</sup> = 2<sup>10</sup> olduğuna göre n kaçtır?</p>",
  "opts": [
   "6",
   "7",
   "8",
   "9"
  ],
  "ans": 2,
  "steps": [
   "Dört eşit terimin toplamı: 4 · 2<sup>n</sup> = 2<sup>2</sup> · 2<sup>n</sup> = 2<sup>n+2</sup>",
   "n + 2 = 10 → n = <b>8</b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "Toplama işleminde üsler toplanmaz: 2<sup>n</sup> + 2<sup>n</sup> ≠ 2<sup>2n</sup>."
 },
 {
  "no": 9,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Boyutları 48 cm ve 72 cm olan dikdörtgen biçimindeki bir pano, birbirinin aynısı kare karolarla boşluk kalmadan ve karolar kesilmeden kaplanacak.</p><p class=\"ask\">Bu iş için <u>en az</u> kaç karo gerekir?</p>",
  "opts": [
   "6",
   "12",
   "24",
   "36"
  ],
  "ans": 0,
  "steps": [
   "Karo sayısının en az olması için karo kenarı en büyük olmalı: EBOB(48, 72) = 24 cm",
   "(48 ÷ 24) · (72 ÷ 24) = 2 · 3 = <b>6</b> karo"
  ],
  "answer": "Cevap: <b>A</b>"
 },
 {
  "no": 10,
  "unite": "Üslü İfadeler",
  "konu": "Ondalık çözümleme",
  "q": "<p class=\"ask\">Çözümlenmiş hâli 4 · 10<sup>2</sup> + 7 · 10<sup>0</sup> + 3 · 10<sup>−2</sup> olan sayı hangisidir?</p>",
  "opts": [
   "407,03",
   "407,3",
   "470,3",
   "4070,03"
  ],
  "ans": 0,
  "steps": [
   "4 · 100 = 400, 7 · 1 = 7, 3 · 0,01 = 0,03",
   "400 + 7 + 0,03 = <b>407,03</b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "10<sup>1</sup> basamağı yok: onlar basamağına 0 yazılır."
 },
 {
  "no": 11,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p>Dünya'nın Güneş'e ortalama uzaklığı yaklaşık 150 000 000 km'dir.</p><p class=\"ask\">Bu uzaklığın bilimsel gösterimi hangisidir?</p>",
  "opts": [
   "1,5 · 10<sup>7</sup>",
   "15 · 10<sup>7</sup>",
   "0,15 · 10<sup>9</sup>",
   "1,5 · 10<sup>8</sup>"
  ],
  "ans": 3,
  "steps": [
   "Bilimsel gösterimde katsayı 1 ile 10 arasında olmalı (1 ≤ a < 10)",
   "150 000 000 = 1,5 · 100 000 000 = <b>1,5 · 10<sup>8</sup></b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "15 · 10<sup>7</sup> ve 0,15 · 10<sup>9</sup> aynı sayıya eşittir ama bilimsel gösterim değildir."
 },
 {
  "no": 12,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p>a ve b aralarında asal iki doğal sayıdır. a · b = 72 ve a &lt; b'dir.</p><p class=\"ask\">Bu koşulları sağlayan kaç farklı (a, b) ikilisi vardır?</p>",
  "opts": [
   "2",
   "3",
   "4",
   "6"
  ],
  "ans": 0,
  "steps": [
   "72 = 2<sup>3</sup> · 3<sup>2</sup>. Aralarında asal olmaları için 2'lerin hepsi bir sayıda, 3'lerin hepsi bir sayıda toplanmalı",
   "İkililer: (1, 72) ve (8, 9) → <b>2</b> tane"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "(4, 18) ya da (6, 12) çarpımı 72 eder ama ortak böleni 1'den büyüktür."
 },
 {
  "no": 13,
  "unite": "Üslü İfadeler",
  "konu": "Tam sayı kuvvetleri",
  "q": "<p class=\"ask\">Aşağıdakilerden hangisinin değeri negatiftir?</p>",
  "opts": [
   "(−2)<sup>4</sup>",
   "−(−3)<sup>2</sup>",
   "(−1)<sup>−3</sup> · (−1)",
   "(−5)<sup>0</sup>"
  ],
  "ans": 1,
  "steps": [
   "(−2)<sup>4</sup> = 16, (−5)<sup>0</sup> = 1",
   "(−1)<sup>−3</sup> = −1 → (−1) · (−1) = 1",
   "−(−3)<sup>2</sup> = −9 → <b>negatif</b>"
  ],
  "answer": "Cevap: <b>B</b>"
 },
 {
  "no": 14,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir kütüphanedeki kitaplar 6'şarlı, 8'erli ve 10'arlı paketlendiğinde her seferinde 3 kitap artıyor. Kitap sayısı 300'den fazla, 400'den azdır.</p><p class=\"ask\">Kitap sayısının rakamları toplamı kaçtır?</p>",
  "opts": [
   "6",
   "9",
   "10",
   "12"
  ],
  "ans": 3,
  "steps": [
   "Kitap sayısının 3 eksiği 6, 8 ve 10'un ortak katı: EKOK(6, 8, 10) = 120",
   "Kitap sayısı 120k + 3: 123, 243, 363, … → 300 ile 400 arasında yalnızca 363",
   "3 + 6 + 3 = <b>12</b>"
  ],
  "answer": "Cevap: <b>D</b>"
 },
 {
  "no": 15,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">(0,25)<sup>−2</sup> · 2<sup>−3</sup> işleminin sonucu kaçtır?</p>",
  "opts": [
   "<span class=\"frac\"><span>1</span><span>2</span></span>",
   "2",
   "4",
   "8"
  ],
  "ans": 1,
  "steps": [
   "0,25 = <span class=\"frac\"><span>1</span><span>4</span></span> = 2<sup>−2</sup> → (0,25)<sup>−2</sup> = 2<sup>4</sup> = 16",
   "16 · 2<sup>−3</sup> = 2<sup>4</sup> · 2<sup>−3</sup> = 2<sup>1</sup> = <b>2</b>"
  ],
  "answer": "Cevap: <b>B</b>"
 },
 {
  "no": 16,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Ayrıtları 30 cm, 42 cm ve 54 cm olan dikdörtgenler prizması biçimindeki bir kutu, birbirinin aynısı küplerle boşluk kalmadan doldurulacak. Küplerin ayrıtı santimetre cinsinden tam sayı ve <u>mümkün olan en büyük</u> değerdedir.</p><p class=\"ask\">Kutuya kaç küp sığar?</p>",
  "opts": [
   "105",
   "210",
   "315",
   "630"
  ],
  "ans": 2,
  "steps": [
   "Küp ayrıtı EBOB(30, 42, 54) = 6 cm",
   "(30 ÷ 6) · (42 ÷ 6) · (54 ÷ 6) = 5 · 7 · 9 = <b>315</b>"
  ],
  "answer": "Cevap: <b>C</b>"
 },
 {
  "no": 17,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p class=\"ask\">12 ile aralarında asal olan ve 30'dan küçük doğal sayıların kaç tanesi asal sayı <u>değildir</u>?</p>",
  "opts": [
   "1",
   "2",
   "3",
   "4"
  ],
  "ans": 1,
  "steps": [
   "12 = 2<sup>2</sup> · 3 → 2'ye ve 3'e bölünmeyen sayılar 12 ile aralarında asaldır",
   "1, 5, 7, 11, 13, 17, 19, 23, 25, 29",
   "Asal olmayanlar: 1 ve 25 → <b>2</b> tane"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "1 asal sayı değildir ama her sayıyla aralarında asaldır."
 },
 {
  "no": 18,
  "unite": "Üslü İfadeler",
  "konu": "10'un kuvvetleri",
  "q": "<p>Bir hücrenin çapı 0,00008 m'dir. Bu hücrelerden 10<sup>4</sup> tanesi yan yana diziliyor.</p><p class=\"ask\">Oluşan dizinin uzunluğu kaç santimetredir?</p>",
  "opts": [
   "0,8",
   "8",
   "80",
   "800"
  ],
  "ans": 2,
  "steps": [
   "0,00008 · 10<sup>4</sup> = 0,8 m (virgül 4 basamak sağa kayar)",
   "0,8 m = <b>80 cm</b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "0,8 metredir; soru santimetre istiyor."
 },
 {
  "no": 19,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p class=\"ask\">(3,2 · 10<sup>−4</sup>) · (5 · 10<sup>6</sup>) işleminin sonucunun bilimsel gösterimi hangisidir?</p>",
  "opts": [
   "1,6 · 10<sup>2</sup>",
   "8,2 · 10<sup>2</sup>",
   "1,6 · 10<sup>3</sup>",
   "16 · 10<sup>2</sup>"
  ],
  "ans": 2,
  "steps": [
   "Katsayılar çarpılır: 3,2 · 5 = 16; üsler toplanır: 10<sup>−4+6</sup> = 10<sup>2</sup>",
   "16 · 10<sup>2</sup> = 1,6 · 10<sup>3</sup> → <b>1,6 · 10<sup>3</sup></b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "16 · 10<sup>2</sup> doğru sonuçtur ama katsayı 10'dan büyük olduğu için bilimsel gösterim değildir."
 },
 {
  "no": 20,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>Bir kırtasiyedeki 360 kalem, her kutuda eşit sayıda kalem olacak biçimde kutulara konulacak. Kutu sayısı da kutudaki kalem sayısı da 1'den büyük olacak.</p><p class=\"ask\">Kaç farklı biçimde kutulama yapılabilir?</p>",
  "opts": [
   "18",
   "20",
   "21",
   "22"
  ],
  "ans": 3,
  "steps": [
   "360 = 2<sup>3</sup> · 3<sup>2</sup> · 5 → bölen sayısı (3 + 1) · (2 + 1) · (1 + 1) = 24",
   "Kutudaki kalem sayısı 1 ve 360 olamaz → 24 − 2 = <b>22</b>"
  ],
  "answer": "Cevap: <b>D</b>"
 }
];
