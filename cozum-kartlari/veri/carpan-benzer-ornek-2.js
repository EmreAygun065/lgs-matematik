// MEB örnek sorularına benzer yeni sorular 21–40 (Çarpanlar ve Katlar)
(function () {
  const { CA, EB, AA } = CK_KONU;

  CK_BENZER_ORNEK.push(
  {
    no: 21, konu: EB,
    q: `<p>K, M, Y renkli boncuklardan 5'er tane var; her renk farklı bir asal sayıyı temsil ediyor. 1. çubukta M, M, K, Y; 2. çubukta K, K, M, Y, Y, Y; 3. çubukta kalanlar var. Çubukların altına boncuk sayılarının çarpımı yazılıyor: 90, A ve B.</p><p class="ask">Hangisi <u>kesinlikle</u> doğrudur?</p>`,
    opts: ['A · B = 2⁴ · 3³ · 5⁴', 'A = 2² · 3 · 5³', 'B = 2 · 3² · 5²', 'EBOB(A, B) = 60'], ans: 0, long: true,
    hints: [`90 = 2 · 3² · 5 → M iki kez → M = 3.`],
    steps: [`K ve Y, 2 ile 5 (sırası belli değil). 3. çubuk: 2 K, 2 M, 1 Y`, `A = K² · 3 · Y³, B = K² · 9 · Y → A · B = K⁴ · 3³ · Y⁴ = 2⁴ · 3³ · 5⁴ her durumda`, `K = 2 ise EBOB 60, K = 5 ise 150 → yalnızca <b>A</b> kesin`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 22, konu: EB,
    q: `<p>60 günlük planda bir grup A salonunda 3 günde bir, B salonunda 4 günde bir gösteri yapacak; ikisi aynı güne denk gelirse yalnızca birinde yapacak. A salonunda 18 gösteri yapılmış.</p><p class="ask">B salonunda kaç gösteri yapılmıştır?</p>`,
    opts: ['10', '11', '12', '13'], ans: 2,
    hints: [`A 20, B 15 gün; 12'nin katı 5 gün çakışıyor.`],
    steps: [`A: 15 tek gün + 3 ortak gün = 18 → ortak günlerin 2'si B'ye`, `B: 10 tek gün + 2 = <b>12</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 23, konu: EB,
    q: `<p>240 cm ve 96 cm'lik iki çubuk, bütün parçalar eşit olacak biçimde kesiliyor ve 4'er parçadan kare çerçeveler yapılıyor; parça artmıyor.</p><p class="ask">İki renkteki çerçeve sayıları farkı <u>en az</u> kaçtır?</p>`,
    opts: ['2', '3', '4', '6'], ans: 1,
    hints: [`Bir çerçeve 4d; 4d, EBOB(240, 96) = 48'i böler.`],
    steps: [`4d = 48 → 240 / 48 = 5, 96 / 48 = 2`, `Fark <b>3</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 24, konu: EB,
    q: `<p>540 yumurta 40'tan az ve eşit sayıda yumurta alan kolilere konuyor. Bir kısmı satılınca 396 yumurta kalıyor.</p><p class="ask">En az kaç koli satılmıştır?</p>`,
    opts: ['4', '6', '8', '12'], ans: 0,
    hints: [`Koli 540 ve 396'yı böler.`],
    steps: [`EBOB = 36 → koli 36`, `Satılan 144 → <b>4</b> koli`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 25, konu: EB,
    q: tablo([['Kurs', 'A', 'B', 'C'], ['Öğrenci', '36', '54', '45']]) + `<p>Sınıflar 10'dan fazla, 20'den az öğrencili; iki kursun sınıfları alt katta eşit mevcutlu, diğer kursunkiler üst katta eşit mevcutlu.</p><p class="ask">Açılan sınıf sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['8', '9', '10', '11'], ans: 0,
    hints: [`Alttaki iki kursun EBOB'unun 10–20 arası böleni gerekir.`],
    steps: [`A–B: EBOB 18 → 2 + 3 = 5; C: 15'er → 3 → 8`, `A–C ve B–C: EBOB 9 → olmaz`, `<b>8</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 26, konu: EB,
    q: `<p>Eşit aralıklı (doğal sayı metre) flamalar: önce maviler (başlangıçta bir mavi), sonra kırmızılar, sonra yeşiller (bitişte bir yeşil). İlk kırmızı 720 m'de, ilk yeşil 1200 m'de. Kırmızı sayısı yeşilden 2 fazla.</p><p class="ask">Başlangıç ile bitiş arası <u>en az</u> kaç metredir?</p>`,
    opts: ['1320', '1440', '1560', '1600'], ans: 0,
    hints: [`Aralık d, 720 ve 480'i böler.`],
    steps: [`Kırmızı 480/d, yeşil 480/d − 2 ≥ 1 → d ≤ 160; d, EBOB = 240'ı böler → d = 120`, `Yeşil 2 → bitiş 1200 + 120 = <b>1320</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 27, konu: EB,
    q: `<p>Eni 3 cm olan iki eş çıtadan biri yeşil çerçevelere (iç kare kenarına tam oturan 4 parça), diğeri turuncu çerçevelere (fırıldak biçiminde 4 parça) kesiliyor. İç bölge çevresi 48 cm olan kare. Parça artmıyor.</p><p class="ask">En az kaç çerçeve yapılır?</p>`,
    opts: ['5', '7', '8', '9'], ans: 3,
    hints: [`İç kenar 12 → yeşil parça 12, turuncu parça 15 cm.`],
    steps: [`Yeşil çerçeve 48, turuncu 60 cm → çıta EKOK = 240`, `5 + 4 = <b>9</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 28, konu: EB,
    q: `<p>20 metreden kısa bir kaldırıma 60 cm'lik gri taş sıraları arasına 45 cm kenarlı kare sarı taşlar tek sıra, boşluksuz ve bölünmeden diziliyor.</p><p class="ask">Sarı taş sayısı <u>en çok</u> kaçtır?</p>`,
    opts: ['36', '38', '40', '44'], ans: 2,
    hints: [`Uzunluk EKOK(60, 45) = 180'in katı.`],
    steps: [`2000'den küçük en büyük kat 1800`, `1800 / 45 = <b>40</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 29, konu: EB,
    q: `<p>480 kırmızı ve 360 mavi bilye, kutularda eşit sayıda ve tek renk olacak biçimde en az kutuya konuyor. Kırmızı kutu 50 TL, top 40 TL. Gün sonunda kırmızı kutu ve top gelirleri eşit; satılmayan mavi kutu sayısı satılmayan kırmızınınkinin 2 katı. Üç üründen toplam 520 TL gelir elde ediliyor.</p><p class="ask">Bir mavi kutu kaç TL'dir?</p>`,
    opts: ['30', '40', '50', '60'], ans: 1,
    hints: [`EBOB(480, 360) = 120 → 4 kırmızı, 3 mavi kutu.`],
    steps: [`50r = 40t → r, 4'ün katı → r = 4, t = 5`, `Satılmayan kırmızı 0 → satılmayan mavi 0 → 3 mavi satıldı`, `200 + 200 + 3p = 520 → p = <b>40</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 30, konu: CA,
    q: `<p>Bir kat planının üst sırasında 18 m², arşiv ve 12 m²; ortada boydan boya 40 m² koridor; alt sırada 20 m², mutfak ve 28 m² var. Kenarlar doğal sayı.</p><p class="ask">Arşiv ve mutfağın alanları toplamı <u>en az</u> kaçtır?</p>`,
    opts: ['36', '42', '48', '62'], ans: 1,
    hints: [`Genişlik 40'ı böler. Sıra yüksekliklerini dene.`],
    steps: [`Üst yükseklik 2 → genişlikler 9, 6. Alt yükseklik 4 → genişlikler 5, 7. Plan eni 20`, `Arşiv (20 − 15) · 2 = 10, mutfak (20 − 12) · 4 = 32 → 42`, `Diğer yükseklik seçimleri 42'den küçük sonuç vermez → <b>42</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 31, konu: EB,
    q: `<p>İki kumbarada 168 ve 72 madenî 1 TL var. Her gün çok olandan diğerindeki kadar para alınıp harcanıyor; bir süre sonra iki kumbaradaki para eşitleniyor.</p><p class="ask">Son durumda bir kumbarada kaç TL vardır?</p>`,
    opts: ['12', '18', '24', '36'], ans: 2,
    hints: [`Bu işlem EBOB'u korur.`],
    steps: [`168, 72 → 96, 72 → 24, 72 → 24, 48 → 24, 24`, `Sonuç EBOB(168, 72) = <b>24</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 32, konu: EB,
    q: `<p>48 kırmızı ve 80 mavi kalem, en fazla 12 kalem alan 36 kutuya, her kutuda eşit sayıda ve tek renk olacak biçimde konup satılıyor.</p><p class="ask">Satışa sunulan kutu sayısı <u>en fazla</u> kaçtır?</p>`,
    opts: ['16', '24', '32', '36'], ans: 2,
    hints: [`d, EBOB = 16'yı böler; 128/d ≤ 36.`],
    steps: [`d ≥ 3,6 → d = 4 → <b>32</b> kutu`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 33, konu: EB,
    q: tablo([['Traktör', 'A', 'B', 'C', 'D'], ['TL / dekar', '12', '18', '10', '25']]) + `<p>A ve B 40 dekardan küçük bir araziyi, C ve D 100 dekardan küçük bir araziyi eşit yakıt tutarlarıyla sürüyor. Alanlar doğal sayı.</p><p class="ask">Toplam yakıt tutarı <u>en fazla</u> kaç TL'dir?</p>`,
    opts: ['1704', '1804', '1904', '2004'], ans: 2,
    hints: [`12a = 18b → a = 3k, b = 2k. 10c = 25d → c = 5m, d = 2m.`],
    steps: [`5k < 40 → k = 7 → her biri 252 → 504`, `7m < 100 → m = 14 → her biri 700 → 1400`, `Toplam <b>1904</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 34, konu: EB,
    q: `<p>12 kg domatesten 1 kg, 5 kg biberden 1 kg salça çıkıyor. 240 kg domates ve 90 kg biberin salçası, karışmadan ve artmadan doğal sayı kilogramlık eşit kavanozlara konacak.</p><p class="ask">En az kaç kavanoz gerekir?</p>`,
    opts: ['13', '16', '19', '38'], ans: 2,
    hints: [`20 kg domates, 18 kg biber salçası.`],
    steps: [`EBOB(20, 18) = 2 kg`, `10 + 9 = <b>19</b> kavanoz`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 35, konu: EB,
    q: `<p>A noktasından aynı anda başlayan Ali bir turu 90 sn'de, Eren 60 sn'de, Mehmet 45 sn'de koşuyor. Yarım saat sonra Ali her turu 120 sn'de koşmaya başlıyor. Koşu 1 saat sürüyor.</p><p class="ask">Ali'nin A noktasındaki karşılaşmalarıyla ilgili hangisi doğrudur?</p>`,
    opts: ['Mehmet ile ilk yarım saatte 15 kez karşılaşmıştır.', 'Eren ile ikinci yarım saatte ilk yarım saate göre daha az karşılaşmıştır.', 'Mehmet ile toplam karşılaşma sayısı, Eren ile toplamdan fazladır.', 'İkinci yarım saatte Eren ile karşılaşma sayısı, Mehmet ile karşılaşma sayısının 3 katıdır.'], ans: 3, long: true,
    hints: [`İlk yarım saat: EKOK(90, 60) = 180, EKOK(90, 45) = 90.`],
    steps: [`İlk yarım saat: Eren 10, Mehmet 20 kez`, `İkinci yarım saat (Ali 1800 + 120k, k = 1…15): Eren 15 kez; Mehmet k = 3, 6, …, 15 → 5 kez`, `15 = 3 · 5 → <b>D</b> doğru`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 36, konu: EB,
    q: `<p>09.00'da başlayan yayınlarda A radyosu 10 dk müzik + 5 dk reklam, B radyosu 20 dk müzik + 4 dk reklam yapıyor (ikisi de müzikle başlıyor). Banu açtığında ikisinde de reklam var.</p><p class="ask">Banu radyoları hangi saatte açmış olabilir?</p>`,
    opts: ['09.40', '09.44', '09.50', '10.12'], ans: 1,
    hints: [`A reklamı: 15'e bölümden kalan 10–14. B reklamı: 24'e bölümden kalan 20–23.`],
    steps: [`09.44 → 44: 15'e kalan 14 ✓, 24'e kalan 20 ✓`, `40: 24'e kalan 16 ✗ · 50: 15'e kalan 5 ✗ · 72: 24'e kalan 0 ✗`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 37, konu: EB,
    q: tablo([['Kutu', '1', '2', '3', '4'], ['Şeker', '36', '48', '50', '75']]) + `<p>Kutular ikişerli iki gruba ayrılıyor; her grup, poşetlerde eşit sayıda ve tek tür şeker olacak biçimde poşetleniyor. Her poşette 2'den fazla şeker var.</p><p class="ask">Farklı türden iki poşetteki şeker sayıları farkı <u>en fazla</u> kaçtır?</p>`,
    opts: ['13', '19', '21', '22'], ans: 3,
    hints: [`Gruptaki poşet büyüklüğü iki kutunun ortak böleni ve 2'den büyük.`],
    steps: [`{36, 48} → 3, 4, 6, 12; {50, 75} → 5, 25`, `Diğer eşleşmelerde 50 ile 36 ya da 48'in 2'den büyük ortak böleni yok`, `En fazla 25 − 3 = <b>22</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 38, konu: EB,
    q: `<p>Teker yarıçapları 25 cm ve 35 cm olan iki bisiklet aynı mesafeyi tekerler tam tur atarak gidiyor.</p><p class="ask">Mesafe <u>en az</u> kaç santimetredir? (π = 3)</p>`,
    opts: ['525', '1050', '1575', '2100'], ans: 1,
    hints: [`Çevreler 150 ve 210 cm.`],
    steps: [`EKOK(150, 210) = <b>1050</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 39, konu: CA,
    q: `<p>Bir okulda 1–4. katlarda sınıflar 1'den 6'ya numaralı; salon numarası kat ve sınıf numarası yan yana yazılarak oluşuyor (örneğin 2. kat 5. sınıf: 25). Eylül ve Zeynep, salon numarası asal olmayan ve yalnızca bir asal çarpanı olan farklı salonlarda sınava giriyor.</p><p class="ask">İki salon numarasının toplamı <u>en fazla</u> kaçtır?</p>`,
    opts: ['41', '48', '57', '64'], ans: 2,
    hints: [`Asal kuvvetleri ara: 11–16, 21–26, 31–36, 41–46.`],
    steps: [`Uygunlar: 16 = 2⁴, 25 = 5², 32 = 2⁵`, `En büyük toplam 25 + 32 = <b>57</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 40, konu: EB,
    q: `<p>21 km'lik bir koşunun sol tarafına eşit aralıklı su, sağ tarafına eşit aralıklı gıda istasyonları kuruluyor; bitişte karşılıklı birer istasyon olacak.</p><p class="ask">Hangi aralıklarda karşılıklı istasyon sayısı <u>en az</u> olur? (Su – Gıda)</p>`,
    opts: ['1,5 km – 2 km', '2 km – 2,5 km', '1,5 km – 2,5 km', '2,5 km – 3 km'], ans: 3, long: true,
    hints: [`Karşılıklılar bitişten geriye EKOK aralıklarla dizilir.`],
    steps: [`EKOK: 6, 10, 7,5, 15 km`, `Sayılar (bitiş dâhil): 4, 3, 3, 2`, `En az: <b>D</b>`],
    answer: `Cevap: <b>D</b>`
  }
  );
})();
