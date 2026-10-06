// MEB örnek sorularına benzer yeni sorular 63–83 (Kareköklü İfadeler)
(function () {
  const { TK, YK, AB, CB, TC, ON, GS } = KK_KONU;
  const ST = 'stroke="var(--fig-stroke)"';

  const t83 = svg(260, 200, (() => {
    const cw = 36, ch = 40, o = 20;
    let g = '';
    const boya = (x, y) => `<rect x="${o + x * cw}" y="${o + y * ch}" width="${cw}" height="${ch}" fill="#f37fc0"/>`;
    for (let x = 0; x < 6; x++) g += boya(x, 0);
    for (let y = 1; y < 4; y++) g += boya(2, y);
    for (let i = 0; i <= 6; i++) g += `<line x1="${o + i * cw}" y1="${o}" x2="${o + i * cw}" y2="${o + 4 * ch}" stroke="#777"/>`;
    for (let j = 0; j <= 4; j++) g += `<line x1="${o}" y1="${o + j * ch}" x2="${o + 6 * cw}" y2="${o + j * ch}" stroke="#777"/>`;
    return g + `<text x="${o + 3 * cw}" y="${o + 4 * ch + 18}" text-anchor="middle" font-size="12">6√3 metre</text><text x="${o + 6 * cw + 6}" y="${o + 2 * ch}" font-size="12">8√2 m</text>`;
  })(), 'Duvar 6 sütun ve 4 satır eş dikdörtgene bölünmüş; üst satırın tamamı ve 3. sütunun alt üç parçası boyalı');

  KK_BENZER_ORNEK.push(
  {
    no: 63, konu: YK,
    q: `<p>Bir taburenin yüksekliği her tam turda ${R(2)} cm artıyor. En kısa hâli 40 cm, en uzun hâli 52 cm'dir. Tabure en kısa hâlinden en uzun hâline getiriliyor.</p><p class="ask">En çok kaç tam tur döndürülmüştür?</p>`,
    opts: ['5', '6', '7', '8'], ans: 3,
    hints: [`n${R(2)} ≤ 12.`],
    steps: [`n ≤ ${F(12, R(2))} = 6${R(2)} ≈ 8,49 → en çok <b>8</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 64, konu: YK,
    q: `<p>Sekiz dilimli bir hedef tahtasının dilimlerinde 9'dan 16'ya kadar sayılar var. Her dilimin iç kısmı beyaz, dış kısmı kırmızıdır. Beyaza isabet sayının kendisi kadar, kırmızıya isabet sayının karekökü (tam kare değilse kareköküne en yakın tam sayı) kadar puan kazandırır. Bir atıcının iki atışı aynı dilimin farklı renklerine isabet etmiştir.</p><p class="ask">Atıcının puanı hangisi <u>olamaz</u>?</p>`,
    opts: ['13', '16', '18', '20'], ans: 1,
    hints: [`9 → 9 + 3, 10 → 10 + 3, …, 16 → 16 + 4.`],
    steps: [`9–12: kırmızı 3 → 12, 13, 14, 15 · 13–16: kırmızı 4 → 17, 18, 19, 20`, `<b>16</b> elde edilemez`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 65, konu: TC,
    q: `<p>Derece kürsüsündeki 1, 2 ve 3 numaralı kare yüzlerin alanları sırasıyla 1210, 640 ve 490 cm<sup>2</sup> dir. Kürsüye çıkan üç sporcunun başları aynı hizadadır.</p><p class="ask">1. ile 3. arasındaki boy farkı, 2. ile 3. arasındaki boy farkının kaç katıdır?</p>`,
    opts: ['2', '3', '4', '5'], ans: 2,
    hints: [`Kürsü yükseklikleri: ${R(1210)}, ${R(640)}, ${R(490)}.`],
    steps: [`11${R(10)}, 8${R(10)}, 7${R(10)}`, `1–3: 4${R(10)} · 2–3: ${R(10)} → <b>4</b> kat`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 66, konu: YK,
    q: `<p>Bir robot 5 × 2 birim karelik ızgarada sol alttan sağ üste gidecek. Tam sayı olmayan bir kareköklü sayı girilince robot, sayının en yakın olduğu doğal sayı kadar ilerler: sayı o doğal sayıdan büyükse sağa, küçükse yukarı.</p><p class="ask">Hangi iki sayı girilirse robot bitişe ulaşır?</p>`,
    opts: [`${R(26)} ile ${R(3)}`, `${R(20)} ile ${R(3)}`, `${R(26)} ile ${R(6)}`, `${R(24)} ile ${R(3)}`], ans: 0,
    hints: [`Gerekli: 5 sağa, 2 yukarı.`],
    steps: [`${R(26)} ≈ 5,10 → 5 sağa · ${R(3)} ≈ 1,73 → 2 yukarı ✓`, `${R(20)} → 4 sağa ✗ · ${R(6)} ≈ 2,45 → 2 sağa ✗ · ${R(24)} ≈ 4,90 → 5 yukarı ✗`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 67, konu: YK,
    q: `<p>Yaya geçidindeki tabela kırmızı ışığa kalan süreyi tam saniye olarak gösteriyor. Tabelada 15 yazarken yürümeye başlayan Kerem, saniyede 1 m hızla, kırmızı ışık yanmadan 3 saniye önce karşıya geçiyor.</p><p class="ask">Yaya geçidinin uzunluğu hangisi olabilir?</p>`,
    opts: [R(30, 2), R(3, 6), R(10, 4), R(33, 2)], ans: 3,
    hints: [`Kalan süre 14 ile 15 saniye arası.`],
    steps: [`Yürüme süresi 11 ile 12 saniye arası → 121 < L² ≤ 144`, `2${R(33)} = <b>${R(132)}</b> ✓ (${R(120)}, ${R(54)}, ${R(160)} olmaz)`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 68, konu: CB,
    q: `<p>Kenarları doğal sayı olan dikdörtgen bir kartın üzerindeki kare fotoğrafın alanı, kartın alanının % 45'idir. Fotoğrafın kenarı ${R(2, 3)} cm'dir.</p><p class="ask">Kartın çevresi kaç santimetredir?</p>`,
    opts: ['26', '28', '44', '84'], ans: 0,
    hints: [`Fotoğraf 18 cm² → kart 40 cm².`],
    steps: [`Kart: 1 × 40, 2 × 20, 4 × 10, 5 × 8. Fotoğrafın kenarı ≈ 4,24 sığmalı → yalnızca 5 × 8`, `Çevre <b>26</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 69, konu: YK,
    q: `<p>Puan = (kırmızı üçgenin gösterdiği sayının karekökünden büyük en küçük doğal sayı) × (mavi üçgenin gösterdiği sayının karekökünden küçük en büyük doğal sayı). Kırmızı 230'u, mavi 75'i gösteriyor.</p><p class="ask">Kaç puan kazanılır?</p>`,
    opts: ['120', '128', '135', '144'], ans: 1,
    hints: [`15² = 225, 16² = 256; 8² = 64, 9² = 81.`],
    steps: [`${R(230)} ≈ 15,2 → 16 · ${R(75)} ≈ 8,7 → 8`, `16 · 8 = <b>128</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 70, konu: CB,
    q: `<p>Boyu eninin 2 katı olan dikdörtgen bir flama, ${R(288)} m'lik direkte yarıya indirilmiş: direğin tepesine ve zemine uzaklığı ${R(50)} m.</p><p class="ask">Flamanın alanı kaç metrekaredir?</p>`,
    opts: ['8', '12', '16', '24'], ans: 2,
    hints: [`${R(288)} = 12${R(2)}, ${R(50)} = 5${R(2)}.`],
    steps: [`En: 12${R(2)} − 10${R(2)} = 2${R(2)}; boy 4${R(2)}`, `Alan 2${R(2)} · 4${R(2)} = <b>16</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 71, konu: CB,
    q: `<p>Alanı 240 cm<sup>2</sup> olan dikdörtgen kartondan hiç parça artmadan 12 özdeş kare kesiliyor.</p><p class="ask">Kartonun çevresi <u>en az</u> kaç santimetredir?</p>`,
    opts: [R(5, 28), R(5, 32), R(5, 52), R(5, 56)], ans: 0,
    hints: [`Kare 20 cm² → kenar 2${R(5)}. Diziliş 1 × 12, 2 × 6 ya da 3 × 4.`],
    steps: [`1 × 12: 52${R(5)} · 2 × 6: 32${R(5)} · 3 × 4: 2(6${R(5)} + 8${R(5)}) = <b>${R(5, 28)}</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 72, konu: YK,
    q: `<p>Alanı 45 m<sup>2</sup> olan kare bahçenin çevresine 3 sıra tel çekilecek. Tel fiyatları: 50 m'den az 12 TL, 50–79 m 11 TL, 80–99 m 10,5 TL, 100 m ve üstü 10 TL.</p><p class="ask">Telin metresi kaç lira olur?</p>`,
    opts: ['10', '10,5', '11', '12'], ans: 1,
    hints: [`Kenar 3${R(5)}; 3 sıra: 3 · 4 · 3${R(5)}.`],
    steps: [`36${R(5)} = ${R(6480)}; 80² = 6400 < 6480 < 8100 → 80 ile 90 arası`, `80–99 m → <b>10,5 TL</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 73, konu: GS,
    q: `<p>Öğretmen “İki farklı irrasyonel sayının çarpımı rasyonel olabilir.” diyor ve öğrenciler örnek buluyor:</p>`
      + tablo([['Öğrenci', 'Sayılar'], ['Kerem', `${R(2, 3)} ile ${R(12)}`], ['Doruk', `${R(18)} ile ${R(50)}`], ['Tunahan', `${R(3, 2)} ile ${R(27)}`], ['Eylül', `${R(20)} ile ${R(45)}`]])
      + `<p class="ask">Hangi öğrencinin örneği ifadeye uygun <u>değildir</u>?</p>`,
    opts: ['Kerem', 'Doruk', 'Tunahan', 'Eylül'], ans: 0,
    hints: [`Çarpımları hesapla.`],
    steps: [`Kerem: 3${R(2)} · 2${R(3)} = 6${R(6)} → irrasyonel ✗`, `Doruk: ${R(900)} = 30 · Tunahan: 2${R(3)} · 3${R(3)} = 18 · Eylül: ${R(900)} = 30`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 74, konu: CB,
    q: `<p>Kare bir karton; alanları tam kare olmayan A ve B doğal sayıları olan iki kareye ve alanı C olan iki eş dikdörtgene ayrılıyor. C, 4'ten büyük bir tam kare doğal sayıdır.</p><p class="ask">Kartonun alanı <u>en az</u> kaçtır?</p>`,
    opts: ['36', '48', '54', '64'], ans: 1,
    hints: [`C = ${R('AB')}; C = 9 için AB = 81.`],
    steps: [`C = 9 → AB = 81: A = 3, B = 27 (ikisi de tam kare değil)`, `Alan 3 + 27 + 2 · 9 = <b>48</b> (kenar ${R(3)} + 3${R(3)} = 4${R(3)})`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 75, konu: YK,
    q: `<p>Ayrıtları ${R(30)} cm, ${R(30)} cm ve 0,5 cm olan 12 taş eşit aralıklarla diziliyor; ilk taş itilince her taş bir sonrakini deviriyor. Ardışık taşlar arası tam sayıdır. A ilk taşın dış yüzünde, B son taşın dış yüzündedir.</p><p class="ask">|AB| en fazla kaç santimetredir?</p>`,
    opts: ['55', '58', '61', '66'], ans: 2,
    hints: [`Aralık ${R(30)} ≈ 5,48'den küçük olmalı.`],
    steps: [`Aralık en fazla 5`, `AB = 12 · 0,5 + 11 · 5 = <b>61</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 76, konu: CB,
    q: `<p>Boyutları ${R(2, 12)} cm ve ${R(2, 15)} cm olan kartona ${R(3, 2)} cm × ${R(3, 3)} cm boyutlarında 6 fotoğraf yapıştırılıyor.</p><p class="ask">Fotoğraflar kartonun yüzde kaçını kaplar?</p>`,
    opts: ['15', '20', '25', '30'], ans: 3,
    hints: [`Karton 360 cm², fotoğraf 18 cm².`],
    steps: [`6 · 18 = 108 → 108 / 360 = % <b>30</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 77, konu: TK,
    q: `<p>Her birinde eşit sayıda boncuk olan 52 kutu Mete ile Zeynep arasında paylaşılıyor. Mete'nin kutu sayısı bir tam kare, Zeynep'in kutu sayısı Mete'ninkinden fazla ve Zeynep'in kutularında toplam 3<sup>6</sup> boncuk var.</p><p class="ask">Mete'nin kutularındaki toplam boncuk sayısı kaçtır?</p>`,
    opts: ['5² · 3³', '5³ · 3²', '3⁶', '15³'], ans: 0,
    hints: [`52 − k², 3<sup>6</sup>'yı bölmeli ve k²'den büyük olmalı.`],
    steps: [`52 − k²: k = 5 → 27 = 3³ ✓ (k = 7 → 3, ama Mete'ninkinden az)`, `Kutu başına 3⁶ / 3³ = 27`, `Mete: 25 · 27 = <b>5² · 3³</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 78, konu: YK,
    q: `<p>Oyuncuların forma numaraları: 7, 11, 14, 18, 23, 26, 33, 39, 47, 50, 62. Her oyuncu, numarasının kareköküne en yakın tam sayı kadar basket atıyor.</p><p class="ask">Alp ile aynı sayıda basket atan başka oyuncu yoksa Alp'in numarası kaçtır?</p>`,
    opts: ['18', '33', '47', '62'], ans: 3,
    hints: [`Her numara için karekökün en yakın tam sayısını bul.`],
    steps: [`7, 11 → 3 · 14, 18 → 4 · 23, 26 → 5 · 33, 39 → 6 · 47, 50 → 7`, `62 → 8 tek → <b>62</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 79, konu: YK,
    q: `<p>1'den 25'e kadar numaralı toplar 1–5 numaralı torbalara atılıyor: tam kare ise kareköküne eşit, değilse kareköküne en yakın numaralı torbaya.</p><p class="ask">4. torbada kaç top olur?</p>`,
    opts: ['5', '6', '7', '8'], ans: 3,
    hints: [`3,5 < ${R('n')} < 4,5.`],
    steps: [`12,25 < n < 20,25 → 13, …, 20 → <b>8</b> top`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 80, konu: TK,
    q: `<p>1'den 100'e kadar sayıların yazılı olduğu kartta 5'in pozitif kuvvetleri sarıya, 2'nin pozitif kuvvetleri maviye, tam kareler kırmızıya boyanıyor. Sarı + kırmızı turuncu, mavi + kırmızı mor oluyor.</p><p class="ask">Mor ve turuncu kare sayıları hangisidir?</p>`,
    opts: ['Mor 3, Turuncu 1', 'Mor 2, Turuncu 1', 'Mor 3, Turuncu 2', 'Mor 1, Turuncu 3'], ans: 0, long: true,
    hints: [`5'in kuvvetleri: 5, 25. 2'nin kuvvetleri: 2, 4, 8, 16, 32, 64.`],
    steps: [`Turuncu: 25 → 1 · Mor: 4, 16, 64 → 3`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 81, konu: YK,
    q: `<p>Program: 1) Sayıyı oku. 2) Karekökünü al. 3) Tam sayıysa 5'e git, değilse 4'ten devam et. 4) Birler basamağına yuvarla, 2'ye dön. 5) Sonucu yaz.</p><p class="ask">80 girilirse ekranda ne yazar?</p>`,
    opts: ['2', '3', '4', '9'], ans: 1,
    hints: [`${R(80)} ≈ 8,94.`],
    steps: [`${R(80)} ≈ 8,94 → 9 → ${R(9)} = 3 → ekrana <b>3</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 82, konu: YK,
    q: `<p>Öğretmen, karekökünün en yakın olduğu doğal sayı 4 olan tüm <u>tam kare olmayan</u> sayılar için birim karelerden birer şekil çizilmesini istiyor.</p><p class="ask">Kaç şekil çizilmelidir?</p>`,
    opts: ['5', '6', '7', '8'], ans: 2,
    hints: [`12,25 < n < 20,25.`],
    steps: [`13, …, 20 → 8 sayı; 16 tam kare → <b>7</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 83, konu: CB,
    q: `<p>Kenarları ${R(2, 8)} m ve ${R(3, 6)} m olan duvar eş dikdörtgenlere ayrılıp bazı parçalar boyanmıştır.</p><div class="fig">${t83}</div>`
      + tablo([['Tüp', 'Boyadığı alan (m²)'], ['A', R(6, 2)], ['B', R(6)], ['C', R(6, 4)]]) + `<p class="ask">Her tüpten en az bir tane kullanıldığına göre en az kaç tüp kullanılmıştır?</p>`,
    opts: ['6', '7', '8', '9'], ans: 1,
    hints: [`Parça: ${F(R(2, 8), 4)} × ${F(R(3, 6), 6)} = 2${R(2)} × ${R(3)}.`],
    steps: [`Parça alanı 2${R(6)}; boyalı 9 parça → 18${R(6)}`, `2a + b + 4c = 18, en az a + b + c: c = 3, a = 2, b = 2 → <b>7</b>`],
    answer: `Cevap: <b>B</b>`
  }
  );
})();
