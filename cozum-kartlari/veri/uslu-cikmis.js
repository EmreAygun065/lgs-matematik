// LGS çıkmış sorular (Üslü İfadeler) — çözüm kartı verisi
const F = (a, b) => `<span class="frac"><span>${a}</span><span>${b}</span></span>`;

// ---------- Şekiller ----------
const figBizim = `
<svg viewBox="0 0 360 230" width="360" role="img" aria-label="Afiş: her satırda Bizim Çocuklar yazıyor">
  <rect x="110" y="8" width="230" height="214" rx="6" fill="none" stroke="var(--accent)" stroke-width="2"/>
  <text x="100" y="45" text-anchor="end" font-size="14">1. satır</text>
  <text x="122" y="47" font-size="24" font-family="Georgia, serif" font-weight="700">Bizim Çocuklar</text>
  <text x="100" y="88" text-anchor="end" font-size="14">2. satır</text>
  <text x="122" y="90" font-size="24" font-family="Georgia, serif" font-weight="700">Bizim Çocuklar</text>
  <circle cx="128" cy="115" r="2.5" fill="var(--fig-stroke)"/><circle cx="128" cy="135" r="2.5" fill="var(--fig-stroke)"/><circle cx="128" cy="155" r="2.5" fill="var(--fig-stroke)"/>
  <text x="100" y="196" text-anchor="end" font-size="14">9. satır</text>
  <text x="122" y="198" font-size="24" font-family="Georgia, serif" font-weight="700">B · · ·</text>
</svg>`;

function figABCD(withDims) {
  const s = 1.7, R = (x, y, w, h, c) => `<rect x="${40 + x * s}" y="${30 + y * s}" width="${w * s}" height="${h * s}" fill="${c}" stroke="var(--fig-stroke)" stroke-width="1.2"/>`;
  const B = 'var(--fig-blue)';
  let g = '';
  g += R(32, 32, 160, 96, 'var(--fig-yellow)');
  [[0,0,32,64],[0,64,32,64],[32,0,64,32],[96,0,64,32],[160,0,64,32],[192,32,32,64],[192,96,32,64],[0,128,64,32],[64,128,64,32],[128,128,64,32]]
    .forEach(r => g += R(...r, B));
  if (!withDims) g += `<text x="${40 + 112 * s}" y="${30 + 84 * s}" text-anchor="middle" font-size="17" style="fill:#1f2328">Sarı</text>`;
  g += `<text x="34" y="26" text-anchor="end" font-size="17">D</text><text x="${46 + 224 * s}" y="26" font-size="17">C</text>`;
  g += `<text x="34" y="${46 + 160 * s}" text-anchor="end" font-size="17">A</text><text x="${46 + 224 * s}" y="${46 + 160 * s}" font-size="17">B</text>`;
  if (withDims) {
    const X = v => 40 + v * s, Y = v => 30 + v * s;
    const lab = 'style="fill:var(--red);font-weight:700" font-size="18"';
    const dim = (x1, y1, x2, y2, label, dx, dy, anchor = 'middle') =>
      `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--red)" stroke-width="2.5"/>` +
      (label ? `<text x="${(x1 + x2) / 2 + dx}" y="${(y1 + y2) / 2 + dy}" text-anchor="${anchor}" ${lab}>${label}</text>` : '');
    g += dim(X(0), Y(160) + 26, X(192), Y(160) + 26, '3 · 2⁶', 0, 22);
    g += dim(X(192) + 3, Y(160) + 26, X(224), Y(160) + 26, '2⁵', 0, 22);
    g += dim(X(224) + 26, Y(0), X(224) + 26, Y(32) - 3, '2⁵', 10, 6, 'start');
    g += dim(X(224) + 26, Y(32), X(224) + 26, Y(160), '2 · 2⁶', 10, 6, 'start');
    g += dim(X(32), Y(80), X(192), Y(80), '5 · 2⁵', 0, -10);
    g += dim(X(150), Y(32), X(150), Y(128), '3 · 2⁵', 8, 30, 'start');
  }
  const W = 40 + 224 * s + (withDims ? 110 : 40), H = 30 + 160 * s + (withDims ? 70 : 30);
  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="ABCD dikdörtgeni, ortada sarı bölge">${g}</svg>`;
}

function figPist(solution) {
  const fin = 600, m = 6.6, X = d => fin - d * m;
  let g = '';
  g += `<rect x="${X(86)}" y="80" width="${86 * m}" height="120" fill="var(--blue-soft)" stroke="var(--fig-stroke)" stroke-width="1.2"/>`;
  g += `<line x1="${X(86)}" y1="140" x2="${fin}" y2="140" stroke="var(--yellow-line)" stroke-width="5"/>`;
  g += `<text x="${X(86) + 8}" y="132" font-size="15">Sarı çizgi</text>`;
  g += `<line x1="${fin}" y1="48" x2="${fin}" y2="200" stroke="var(--fig-stroke)" stroke-width="4"/>`;
  g += `<text x="${fin + 20}" y="140" font-size="15" font-weight="700" transform="rotate(-90 ${fin + 20} 140)" text-anchor="middle">BİTİŞ</text>`;
  const tr = [['K', 45, 77, '2⁵ m'], ['L', 32, 41, '3² m'], ['M', 12, 28, '4² m'], ['N', 0, 8, '2³ m']];
  tr.forEach(([n, a, b, l]) => {
    g += `<rect x="${X(b)}" y="48" width="${(b - a) * m}" height="32" fill="var(--card)" stroke="var(--fig-stroke)" stroke-width="1.2"/>`;
    g += `<text x="${(X(a) + X(b)) / 2}" y="70" text-anchor="middle" font-size="18" font-weight="700">${n}</text>`;
    g += `<text x="${(X(a) + X(b)) / 2}" y="38" text-anchor="middle" font-size="17">${l}</text>`;
  });
  [[8, 12], [28, 32], [41, 45]].forEach(([a, b]) => g += `<text x="${(X(a) + X(b)) / 2}" y="100" text-anchor="middle" font-size="14">4 m</text>`);
  let H = 210;
  if (solution) {
    // Bitişe uzaklık ekseni
    const y = 250;
    g += `<text x="${X(86)}" y="${y - 16}" font-size="14" style="fill:var(--muted)">Bitişe uzaklık (m)</text>`;
    g += `<line x1="${X(84)}" y1="${y}" x2="${X(-3)}" y2="${y}" stroke="var(--fig-stroke)" stroke-width="1.2"/>`;
    [0, 8, 12, 28, 32, 41, 45, 77].forEach(d => {
      g += `<line x1="${X(d)}" y1="${y - 6}" x2="${X(d)}" y2="${y + 6}" stroke="var(--fig-stroke)"/>`;
      g += `<text x="${X(d)}" y="${y + 24}" text-anchor="middle" font-size="15">${d}</text>`;
    });
    g += `<rect x="${X(41)}" y="${y - 10}" width="${9 * m}" height="128" fill="var(--red)" opacity=".13"/>`;
    // Arkadaki sporcu aralığı
    g += `<rect x="${X(77)}" y="${y + 38}" width="${32 * m}" height="16" rx="8" fill="var(--blue)"/>`;
    g += `<text x="${(X(77) + X(45)) / 2}" y="${y + 74}" text-anchor="middle" font-size="16" style="fill:var(--blue);font-weight:700">arkadaki: 45 – 77</text>`;
    // Öndeki sporcu aralığı
    g += `<rect x="${X(31)}" y="${y + 38}" width="${32 * m}" height="16" rx="8" fill="var(--green)"/>`;
    g += `<text x="${(X(31) + X(-1)) / 2}" y="${y + 74}" text-anchor="middle" font-size="16" style="fill:var(--green);font-weight:700">öndeki: −1 – 31</text>`;
    g += `<text x="${(X(41) + X(32)) / 2}" y="${y + 140}" text-anchor="middle" font-size="16" style="fill:var(--red);font-weight:700">L: 32 – 41 ✗</text>`;
    H = 400;
  }
  return `<svg viewBox="0 0 640 ${H}" width="640" role="img" aria-label="Koşu parkuru ve tribünler">${g}</svg>`;
}

function figKare(solution) {
  const o = 30, S = 300, a = 60, h = 30;
  let g = '';
  const R = (x, y, w, hh, c, lbl, rot) => {
    let r = `<rect x="${o + x}" y="${o + y}" width="${w}" height="${hh}" fill="${c}" stroke="var(--fig-stroke)" stroke-width="1.2"/>`;
    if (lbl) {
      const cx = o + x + w / 2, cy = o + y + hh / 2 + 5;
      r += `<text x="${cx}" y="${cy}" text-anchor="middle" font-size="17" style="fill:#1f2328" ${rot ? `transform="rotate(${rot} ${cx} ${cy - 5})"` : ''}>${lbl}</text>`;
    }
    return r;
  };
  g += R(0, 0, a, a, 'var(--fig-red)', solution ? 'a' : 'Kırmızı', solution ? 0 : -40);
  g += R(a, 0, S - a, h, 'var(--fig-blue)');
  g += R(a, h, S - a, h, 'var(--fig-red)', 'Kırmızı');
  g += R(0, a, h, S - a, 'var(--fig-blue)');
  g += R(h, a, h, S - a, 'var(--fig-red)', 'Kırmızı', -90);
  for (let i = 0; i < 8; i++) g += R(a, a + i * h, S - a, h, 'var(--fig-blue)');
  const dx = solution ? 110 : 14;
  g += `<line x1="${o + S + dx}" y1="${o}" x2="${o + S + dx}" y2="${o + S}" stroke="var(--red)" stroke-width="1.5"/>`;
  g += `<text x="${o + S + dx + 6}" y="${o + S / 2}" font-size="17">5⁴ cm</text>`;
  if (solution) {
    const lab = 'font-size="17" style="fill:var(--red);font-weight:700"';
    g += `<text x="${o + S / 2 + a / 2}" y="${o - 8}" text-anchor="middle" ${lab}>5⁴ − a</text>`;
    g += `<text x="${o - 6}" y="${o + a / 2 + 5}" text-anchor="end" ${lab}>a</text>`;
    // Sağ kenar: 2 sıra (a/2) + 8 sıra (a/2)
    g += `<line x1="${o + S + 12}" y1="${o + 1}" x2="${o + S + 12}" y2="${o + a - 1}" stroke="var(--red)" stroke-width="2.5"/>`;
    g += `<text x="${o + S + 20}" y="${o + a / 2 + 6}" ${lab}>2 · a/2</text>`;
    g += `<line x1="${o + S + 12}" y1="${o + a + 1}" x2="${o + S + 12}" y2="${o + S}" stroke="var(--red)" stroke-width="2.5"/>`;
    g += `<text x="${o + S + 20}" y="${o + a + (S - a) / 2 + 6}" ${lab}>8 · a/2</text>`;
  }
  const W = o + S + dx + 70;
  return `<svg viewBox="0 0 ${W} ${o + S + 20}" width="${W}" role="img" aria-label="Kare kâğıt: 1 kare ve 12 eş dikdörtgen">${g}</svg>`;
}

// ---------- Sorular ----------
const QUESTIONS = [
  {
    no: 2, yil: 2026,
    q: `<p>Millî futbol takımımızı desteklemek amacıyla hazırlanan afişin her bir satırına, kelimelerin ilk harfleri büyük harf olacak biçimde iki kelimeden oluşan <b>“Bizim Çocuklar”</b> ifadesi şekildeki gibi birer kez yazılmıştır.</p>`
      + `<div class="fig">${figBizim}</div>`
      + `<p>Bu afiş hazırlanırken içinde 2<sup>4</sup> mL mürekkep bulunan bir kalem kullanılmıştır. Afişe yazılan her bir büyük harf için 2<sup>−2</sup> mL, her bir küçük harf için ise 2<sup>−3</sup> mL mürekkep harcanmış ve 9. satırdaki ifade yazılırken kalemdeki mürekkep bitmiştir.</p>`
      + `<p class="ask">Buna göre, bu afiş çalışmasında aşağıdaki harflerden hangisinin yazımı tamamlandığında kalemdeki mürekkep bitmiştir?</p>`,
    opts: ['Ç', 'u', 'o', 'z'], ans: 0,
    hints: [
      `Üslü sayıları normal sayılara çevir: 2<sup>4</sup>, 2<sup>−2</sup> ve 2<sup>−3</sup> kaç eder?`,
      `Önce <b>bir satırın</b> kaç mL harcadığını bul. Büyük ve küçük harfleri ayrı say.`
    ],
    steps: [
      `Sayıları sadeleştirelim: 2<sup>4</sup> = 16 mL, büyük harf 2<sup>−2</sup> = ${F(1, 4)} = ${F(2, 8)} mL, küçük harf 2<sup>−3</sup> = ${F(1, 8)} mL. <br>Her şeyi <b>${F(1, 8)} mL</b> birimiyle düşünmek işi kolaylaştırır.`,
      `Bir satırdaki harfleri sayalım: <b>Büyük harf:</b> B, Ç → 2 tane. <b>Küçük harf:</b> i, z, i, m, o, c, u, k, l, a, r → 11 tane. (Boşluk harf değildir!)`,
      `Bir satırın harcadığı mürekkep: 2 · ${F(2, 8)} + 11 · ${F(1, 8)} = ${F(4, 8)} + ${F(11, 8)} = <b>${F(15, 8)} mL</b>`,
      `İlk 8 satır: 8 · ${F(15, 8)} = <b>15 mL</b>. Kalemde 16 − 15 = <b>1 mL = ${F(8, 8)} mL</b> kalır. Bu da 9. satırda bittiğini doğrular.`,
      `9. satırı harf harf takip edelim (kalan ${F(8, 8)}):<br>B (büyük, ${F(2, 8)}) → kalan ${F(6, 8)}<br>i, z, i, m (4 küçük, ${F(4, 8)}) → kalan ${F(2, 8)}<br>Ç (büyük, ${F(2, 8)}) → kalan <b>0</b>.`
    ],
    answer: `Mürekkep <b>Ç</b> harfi tamamlandığında biter. Cevap: <b>A</b>`,
    trap: `“Ç” büyük harftir ve 2 birim harcar. Öğrenci Ç'yi küçük harf sanırsa mürekkebin “o”da bittiğini düşünür (C şıkkı). Ayrıca kelimeler arasındaki boşluğu harf gibi saymamak gerekir.`
  },
  {
    no: 5, yil: 2024,
    q: `<p>Kenarlarının uzunlukları 2<sup>5</sup> cm ve 2<sup>6</sup> cm olan 10 adet mavi özdeş dikdörtgenin kenarları aşağıdaki gibi çakıştırılarak ABCD dikdörtgeni oluşturulmuştur.</p>`
      + `<div class="fig">${figABCD(false)}</div>`
      + `<p class="ask">Buna göre, ABCD dikdörtgeninin içinde kalan sarı renkli dikdörtgensel bölgenin çevresinin uzunluğu kaç santimetredir?</p>`,
    opts: ['2<sup>6</sup>·3<sup>2</sup>', '3·2<sup>7</sup>', '2<sup>9</sup>', '3·2<sup>9</sup>'], ans: 2,
    hints: [
      `Her mavi dikdörtgenin kısa kenarı 2<sup>5</sup>, uzun kenarı 2<sup>6</sup>. Şekilde hangi parçanın yatay, hangisinin dikey durduğuna bak.`,
      `Önce büyük dikdörtgenin AB ve BC kenarlarını bul. Sarının kenarları, bunlardan iki tarafındaki kısa kenarlar çıkarılarak bulunur.`
    ],
    steps: [
      `Mavi dikdörtgen: kısa kenar <b>2<sup>5</sup> = 32</b>, uzun kenar <b>2<sup>6</sup> = 64</b>. Dikkat: 2<sup>6</sup> = 2 · 2<sup>5</sup>.`,
      `<b>AB (alt kenar):</b> Altta 3 yatay dikdörtgen (3 · 2<sup>6</sup>) ve sağ sütunun genişliği (2<sup>5</sup>) var.<br>AB = 3 · 2<sup>6</sup> + 2<sup>5</sup> = 6 · 2<sup>5</sup> + 2<sup>5</sup> = <b>7 · 2<sup>5</sup></b>`,
      `<b>BC (sağ kenar):</b> Sağda 2 dikey dikdörtgen (2 · 2<sup>6</sup>) ve üst sıranın yüksekliği (2<sup>5</sup>) var.<br>BC = 2 · 2<sup>6</sup> + 2<sup>5</sup> = 4 · 2<sup>5</sup> + 2<sup>5</sup> = <b>5 · 2<sup>5</sup></b>`,
      `Sarı bölge her kenardan bir kısa kenar (2<sup>5</sup>) kadar içeride:<br>Genişlik = 7 · 2<sup>5</sup> − 2 · 2<sup>5</sup> = <b>5 · 2<sup>5</sup></b><br>Yükseklik = 5 · 2<sup>5</sup> − 2 · 2<sup>5</sup> = <b>3 · 2<sup>5</sup></b>`
        + `<div class="fig">${figABCD(true)}</div>`,
      `Çevre = 2 · (5 · 2<sup>5</sup> + 3 · 2<sup>5</sup>) = 2 · 8 · 2<sup>5</sup> = 2<sup>1</sup> · 2<sup>3</sup> · 2<sup>5</sup> = <b>2<sup>9</sup></b> (= 512 cm)`
    ],
    answer: `Sarı bölgenin çevresi <b>2<sup>9</sup> cm</b>. Cevap: <b>C</b>`,
    trap: `Soru <b>alanı değil çevreyi</b> soruyor. Ayrıca sayıları hep “… · 2<sup>5</sup>” şeklinde tutmak, toplama yaparken üsleri karıştırmayı önler (2<sup>5</sup> + 2<sup>5</sup> = 2<sup>6</sup>, 2<sup>10</sup> değil!).`
  },
  {
    no: 13, yil: 2021,
    q: `<p>Dikdörtgen şeklindeki bir koşu parkuru ve bu parkurun uzun kenarı üzerine yerleştirilmiş dikdörtgen şeklindeki K, L, M ve N tribünleri aşağıda modellenmiştir. Modele göre bitiş çizgisi ile N tribününün kenarlarından biri doğrusaldır.</p>`
      + `<div class="fig">${figPist(false)}</div>`
      + `<p>Bu parkurun uzun kenarlarına paralel olan sarı çizgi üzerinde bitiş çizgisine doğru koşan iki sporcudan biri K tribünü karşısından geçerken öndeki sporcuyla arasında 46 m mesafe vardır.</p>`
      + `<p class="ask">Buna göre öndeki sporcunun konumu ile ilgili aşağıdakilerden hangisi <u>kesinlikle yanlıştır</u>?</p>`,
    opts: ['Bitiş çizgisini geçmiştir.', 'M tribününün karşısındadır.', 'L tribünü ile M tribünü arasındadır.', 'L tribününün karşısındadır.'], ans: 3, long: true,
    hints: [
      `Tribün uzunluklarını hesapla: 2<sup>5</sup>, 3<sup>2</sup>, 4<sup>2</sup>, 2<sup>3</sup>. Sonra her tribünün <b>bitiş çizgisine</b> uzaklığını yaz.`,
      `Arkadaki sporcu K'nın en başında da olabilir, en sonunda da. İki uç durumu ayrı ayrı düşün.`
    ],
    steps: [
      `Uzunluklar: K = 2<sup>5</sup> = <b>32 m</b>, L = 3<sup>2</sup> = <b>9 m</b>, M = 4<sup>2</sup> = <b>16 m</b>, N = 2<sup>3</sup> = <b>8 m</b>. Aralar 4'er metre.`,
      `Bitiş çizgisinden geriye doğru ölçelim:<br>N: 0 – 8 · boşluk: 8 – 12 · M: 12 – 28 · boşluk: 28 – 32 · L: 32 – 41 · boşluk: 41 – 45 · <b>K: 45 – 77</b>`,
      `Arkadaki sporcu K'nın karşısında, yani bitişe uzaklığı <b>45 m ile 77 m</b> arasında.`,
      `Öndeki sporcu 46 m daha önde: 45 − 46 = −1 ile 77 − 46 = 31 arası. <br>Yani öndeki sporcu <b>bitişi en fazla 1 m geçmiş</b> olabilir ya da <b>bitişe 31 m'den yakın</b>dır.`
        + `<div class="fig">${figPist(true)}</div>`,
      `Şıkları kontrol edelim:<br>A) Bitişi geçmiş (−1 ile 0 arası) → <b>mümkün</b><br>B) M karşısında (12 – 28) → <b>mümkün</b><br>C) L ile M arasında (28 – 32) → <b>mümkün</b><br>D) L karşısında (32 – 41) → 31'den büyük, <b>imkânsız</b>`
    ],
    answer: `Öndeki sporcu hiçbir durumda L tribününün karşısında olamaz. Cevap: <b>D</b>`,
    trap: `“Kesinlikle yanlış”, <b>hiçbir durumda olamayan</b> demektir. Arkadaki sporcu için tek bir nokta seçmek yanlış sonuç verir. K'nın iki ucunu (45 ve 77) ayrı ayrı denemek gerekir.`
  },
  {
    no: 15, yil: 2020,
    q: `<p>Bir kenarının uzunluğu 5<sup>4</sup> cm olan kare şeklindeki kâğıdın bir yüzüne aşağıdaki gibi 12 eş dikdörtgen ve 1 kare çizilmiştir. Bu şekillerden kare ve 2 eş dikdörtgen kırmızıya boyanmıştır.</p>`
      + `<div class="fig">${figKare(false)}</div>`
      + `<p class="ask">Buna göre kırmızı bölgelerin alanları toplamı kaç santimetrekaredir?</p>`,
    opts: ['2·5<sup>7</sup>', '5<sup>7</sup>', '2·5<sup>6</sup>', '5<sup>6</sup>'], ans: 1,
    hints: [
      `Küçük karenin kenarına <b>a</b> de. Karenin yanındaki iki dikdörtgen üst üste konunca kenarı a oluyor, yani dikdörtgenin kısa kenarı kaç?`,
      `Sağ alttaki 8 dikdörtgen üst üste dizilmiş. Bunların toplam yüksekliği neye eşit?`
    ],
    steps: [
      `Karenin kenarı <b>a</b> olsun. Karenin sağındaki 2 dikdörtgen üst üste a yüksekliğini dolduruyor → her dikdörtgenin kısa kenarı <b>a/2</b>.`,
      `Dikdörtgenin uzun kenarı = büyük karenin kenarı − a = <b>5<sup>4</sup> − a</b>.`
        + `<div class="fig">${figKare(true)}</div>`,
      `Sağ kenarı yukarıdan aşağı topla: üstteki 2 dikdörtgen + alttaki 8 dikdörtgen = 10 · (a/2) = 5<sup>4</sup> → 5a = 5<sup>4</sup> → <b>a = 5<sup>3</sup></b> (= 125 cm)`,
      `Dikdörtgenin kenarları: kısa = 5<sup>3</sup>/2, uzun = 5<sup>4</sup> − 5<sup>3</sup> = 5<sup>3</sup>(5 − 1) = 4 · 5<sup>3</sup>.<br>Bir dikdörtgenin alanı = ${F('5<sup>3</sup>', 2)} · 4 · 5<sup>3</sup> = <b>2 · 5<sup>6</sup></b>`,
      `Kırmızı alan = kare + 2 dikdörtgen = 5<sup>6</sup> + 2 · (2 · 5<sup>6</sup>) = 5<sup>6</sup> + 4 · 5<sup>6</sup> = 5 · 5<sup>6</sup> = <b>5<sup>7</sup></b>`
    ],
    answer: `Kırmızı bölgelerin toplam alanı <b>5<sup>7</sup> cm²</b>. Cevap: <b>B</b>`,
    trap: `Şeklin ölçüsüz olduğunu unutup gözle oran tahmin etmek. Ayrıca 5<sup>6</sup> + 4 · 5<sup>6</sup> toplamında üsler toplanmaz, <b>katsayılar</b> toplanır: 1 + 4 = 5 → 5 · 5<sup>6</sup> = 5<sup>7</sup>.`
  },
  {
    no: 16, yil: 2020,
    q: `<p>Bir fabrikada üretilen mavi ve kırmızı renkli otomobiller bir galeriye iki tır ile taşınmaktadır. Bu otomobillerin birer adedinin kütleleri Tablo 1'de, tırların taşıdığı otomobillerin sayıları Tablo 2'de gösterilmiştir.</p>`
      + `<table class="t"><caption><b>Tablo 1:</b> Otomobillerin Kütleleri</caption><tr><th>Otomobil</th><th>Kütle (kg)</th></tr><tr><td>Mavi otomobil</td><td>4<sup>5</sup></td></tr><tr><td>Kırmızı otomobil</td><td>2<sup>11</sup></td></tr></table>`
      + `<table class="t"><caption><b>Tablo 2:</b> Tırların Taşıdığı Otomobil Sayıları</caption><tr><th>Tır</th><th>Mavi otomobil</th><th>Kırmızı otomobil</th></tr><tr><td>A</td><td></td><td></td></tr><tr><td>B</td><td>4</td><td>3</td></tr></table>`
      + `<p>A tırı ile taşınan mavi ve kırmızı otomobillerin sayıları birbirine eşittir.</p>`
      + `<p class="ask">İki tırın taşıdığı otomobillerin toplam kütlesi 2<sup>14</sup> kg olduğuna göre A tırı ile taşınan otomobil sayısı kaçtır?</p>`,
    opts: ['2', '4', '6', '8'], ans: 1,
    hints: [
      `Kütleleri aynı tabana çevir: 4<sup>5</sup> = 2<sup>?</sup>`,
      `Her şeyi “… · 2<sup>10</sup>” şeklinde yazarsan hesap çok kolaylaşır.`
    ],
    steps: [
      `Mavi: 4<sup>5</sup> = (2<sup>2</sup>)<sup>5</sup> = <b>2<sup>10</sup></b> kg. Kırmızı: 2<sup>11</sup> = <b>2 · 2<sup>10</sup></b> kg.`,
      `B tırı: 4 · 2<sup>10</sup> + 3 · (2 · 2<sup>10</sup>) = 4 · 2<sup>10</sup> + 6 · 2<sup>10</sup> = <b>10 · 2<sup>10</sup></b> kg`,
      `Toplam: 2<sup>14</sup> = 2<sup>4</sup> · 2<sup>10</sup> = <b>16 · 2<sup>10</sup></b> kg → A tırı: 16 · 2<sup>10</sup> − 10 · 2<sup>10</sup> = <b>6 · 2<sup>10</sup></b> kg`,
      `A tırında <b>n</b> mavi, <b>n</b> kırmızı otomobil olsun: n · 2<sup>10</sup> + n · 2 · 2<sup>10</sup> = 3n · 2<sup>10</sup> = 6 · 2<sup>10</sup> → <b>n = 2</b>`,
      `A tırındaki otomobil sayısı: 2 mavi + 2 kırmızı = <b>4</b>`
    ],
    answer: `A tırı ile <b>4</b> otomobil taşınmıştır. Cevap: <b>B</b>`,
    trap: `n = 2 bulunca hemen A şıkkını işaretlemek! Soru bir renkteki sayıyı değil, <b>toplam otomobil sayısını</b> soruyor: 2 + 2 = 4.`
  },
  {
    no: 19, yil: 2019,
    q: `<p>Aşağıda sadece ön yüzlerinde birer üslü ifadenin yazılı olduğu 4 mavi ve 4 kırmızı kart verilmiştir.</p>`
      + `<p class="cards-label">Mavi Kartlar</p><div class="cards"><span>2<sup>−2</sup></span><span>2<sup>3</sup></span><span>2<sup>−1</sup></span><span>2<sup>4</sup></span></div>`
      + `<p class="cards-label">Kırmızı Kartlar</p><div class="cards red"><span>4<sup>−1</sup></span><span>4<sup>−3</sup></span><span>4<sup>2</sup></span><span>4<sup>0</sup></span></div>`
      + `<p>Mavi kartlardaki her bir üslü ifade kırmızı kartlardaki kendisine denk olmayan her bir üslü ifade ile birer kez çarpılarak yeni üslü ifadeler elde ediliyor.</p>`
      + `<p class="ask">Elde edilen bu üslü ifadelerden ikisinin birbirine oranı <u>en çok</u> kaçtır?</p>`,
    opts: ['2<sup>12</sup>', '2<sup>15</sup>', '2<sup>16</sup>', '2<sup>17</sup>'], ans: 1,
    hints: [
      `Kırmızı kartları 2 tabanına çevir. Hangi mavi kart hangi kırmızı karta denk?`,
      `Oranın en çok olması için <b>en büyük çarpımı en küçük çarpıma</b> bölmelisin.`
    ],
    steps: [
      `Kırmızıları 2 tabanında yazalım: 4<sup>−1</sup> = <b>2<sup>−2</sup></b>, 4<sup>−3</sup> = <b>2<sup>−6</sup></b>, 4<sup>2</sup> = <b>2<sup>4</sup></b>, 4<sup>0</sup> = <b>2<sup>0</sup></b>.`,
      `Denk olanlar birbiriyle <b>çarpılamaz</b>: mavi 2<sup>−2</sup> ile kırmızı 4<sup>−1</sup>, mavi 2<sup>4</sup> ile kırmızı 4<sup>2</sup>.`,
      `<b>En büyük çarpım</b> (üsleri toplayıp en büyüğünü arıyoruz): 2<sup>4</sup> · 4<sup>2</sup> yasak! Seçenekler: 2<sup>4</sup> · 2<sup>0</sup> = 2<sup>4</sup> veya 2<sup>3</sup> · 2<sup>4</sup> = <b>2<sup>7</sup></b> → en büyük 2<sup>7</sup>.`,
      `<b>En küçük çarpım:</b> en küçük mavi 2<sup>−2</sup>, en küçük kırmızı 2<sup>−6</sup> (bunlar denk değil, çarpılabilir): 2<sup>−2</sup> · 2<sup>−6</sup> = <b>2<sup>−8</sup></b>.`,
      `En büyük oran: ${F('2<sup>7</sup>', '2<sup>−8</sup>')} = 2<sup>7 − (−8)</sup> = <b>2<sup>15</sup></b>`
    ],
    answer: `İki ifadenin oranı en çok <b>2<sup>15</sup></b> olur. Cevap: <b>B</b>`,
    trap: `“Denk olmayan” şartını unutup 2<sup>4</sup> · 4<sup>2</sup> = 2<sup>8</sup> alan öğrenci 2<sup>8</sup> / 2<sup>−8</sup> = 2<sup>16</sup> bulur (C şıkkı). Bir de 7 − (−8) işleminde işaret hatası yapılırsa 2<sup>−1</sup> gibi anlamsız sonuçlar çıkar.`
  }
];


function figSayiDogrusu(points) {
  const X = v => 330 + v * 30, y = 70;
  const seg = [[-10, -5, '#e5484d', 'Kırmızı'], [-5, 0, '#3b9ede', 'Mavi'], [0, 5, '#46a758', 'Yeşil'], [5, 10, '#6e56cf', 'Mor']];
  let g = `<line x1="${X(-11)}" y1="${y}" x2="${X(11)}" y2="${y}" stroke="var(--fig-stroke)" stroke-width="1.5" marker-start="url(#ok)" marker-end="url(#ok)"/>`;
  seg.forEach(([a, b, c, n]) => {
    g += `<line x1="${X(a)}" y1="${y}" x2="${X(b)}" y2="${y}" stroke="${c}" stroke-width="6"/>`;
    g += `<text x="${(X(a) + X(b)) / 2}" y="${y - 18}" text-anchor="middle" font-size="16">${n}</text>`;
  });
  [-10, -5, 0, 5, 10].forEach(v => {
    g += `<line x1="${X(v)}" y1="${y - 7}" x2="${X(v)}" y2="${y + 7}" stroke="var(--fig-stroke)" stroke-width="1.5"/>`;
    g += `<text x="${X(v)}" y="${y + 28}" text-anchor="middle" font-size="16">${v}</text>`;
  });
  let H = 110;
  if (points) {
    points.forEach(([v, lbl], i) => {
      g += `<circle cx="${X(v)}" cy="${y}" r="7" fill="var(--accent)" stroke="var(--card)" stroke-width="2"/>`;
      g += `<text x="${X(v)}" y="${y + 52 + (i % 2) * 22}" text-anchor="middle" font-size="15" style="fill:var(--accent);font-weight:700">${lbl}</text>`;
    });
    H = 150;
  }
  return `<svg viewBox="0 0 660 ${H}" width="660" role="img" aria-label="Renkli bölümlere ayrılmış sayı doğrusu">
    <defs><marker id="ok" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="var(--fig-stroke)"/></marker></defs>${g}</svg>`;
}

const YENI = [
  {
    no: 1, yil: 2026,
    q: `<p>1 kg toryumdan elde edilen enerji ile 3,5·10<sup>6</sup> kg kömürden elde edilen enerji birbirine eşittir. Günümüz teknolojisinde 10<sup>5</sup> kg kömürden elde edilen enerji ile 80 adet elektrikli aracın enerji ihtiyacı karşılanmaktadır.</p>`
      + `<p class="ask">Buna göre, 28 adet elektrikli aracın enerji ihtiyacını karşılamak için kaç kilogram toryum gereklidir?</p>`,
    opts: ['10<sup>2</sup>', '10', '10<sup>−1</sup>', '10<sup>−2</sup>'], ans: 3,
    hints: [
      `Önce 28 araç için kaç kg <b>kömür</b> gerektiğini bul.`,
      `Sonra bu kömürün kaç kg toryuma denk geldiğini bul: 1 kg toryum ↔ 3,5·10<sup>6</sup> kg kömür.`
    ],
    steps: [
      `80 araç ↔ 10<sup>5</sup> kg kömür. 28 araç ↔ ${F('28', '80')} · 10<sup>5</sup> = 0,35 · 10<sup>5</sup> = <b>3,5 · 10<sup>4</sup> kg kömür</b>`,
      `Her 3,5 · 10<sup>6</sup> kg kömür 1 kg toryuma denk. Gereken toryum: ${F('3,5 · 10<sup>4</sup>', '3,5 · 10<sup>6</sup>')} = 10<sup>4 − 6</sup> = <b>10<sup>−2</sup> kg</b>`
    ],
    answer: `28 araç için <b>10<sup>−2</sup> kg</b> toryum gerekir. Cevap: <b>D</b>`,
    trap: `Bölmeyi ters yapmak: 3,5·10<sup>6</sup> / 3,5·10<sup>4</sup> = 10<sup>2</sup> bulan öğrenci A'yı işaretler. Toryum çok verimli, yani <b>çok az</b> toryum gerekmesi beklenir.`
  },
  {
    no: 3, yil: 2025,
    q: `<p>Bir düzgün altıgeni oluşturan 6 adet eşkenar üçgenden her birinin alanı 36 cm<sup>2</sup> dir.</p>`
      + `<p class="ask">Buna göre, bu düzgün altıgenin alanı kaç santimetrekaredir?</p>`,
    opts: ['6', '6<sup>2</sup>', '6<sup>3</sup>', '6<sup>4</sup>'], ans: 2,
    hints: [`36 sayısını 6'nın kuvveti olarak yaz.`],
    steps: [
      `Altıgenin alanı = 6 · 36`,
      `36 = 6<sup>2</sup> olduğundan 6 · 6<sup>2</sup> = 6<sup>1 + 2</sup> = <b>6<sup>3</sup></b> (= 216 cm²)`
    ],
    answer: `Altıgenin alanı <b>6<sup>3</sup> cm²</b>. Cevap: <b>C</b>`,
    trap: `Tek bir üçgenin alanını (36 = 6<sup>2</sup>) cevap sanmak → B.`
  },
  {
    no: 4, yil: 2025,
    q: `<p>Deposunda 1024 litre sıvı gübre bulunan ve bir traktör yardımıyla çekilen bir makinenin kollarında bulunan 24 adet musluğun her birinden 1 dakikada 2<sup>2</sup> litre sıvı gübre, toprak yüzeyine püskürtülerek gübreleme yapılmaktadır.</p>`
      + `<p>Bu makine 8 dakika boyunca sabit hızla ilerlediğinde 48 dekarlık bir tarla gübrelenmiştir.</p>`
      + `<p class="ask">Buna göre, depoda kalan gübreyle aynı şekilde gübrelemeye devam edildiğinde kaç dekar tarla daha gübrelenebilir?</p>`,
    opts: ['3 · 2<sup>3</sup>', '2<sup>4</sup>', '3 · 2<sup>2</sup>', '2<sup>3</sup>'], ans: 1,
    hints: [
      `1 dakikada toplam kaç litre gübre harcanıyor? (24 musluk!)`,
      `8 dakikada harcanan gübre ile 48 dekar arasında bir oran kur.`
    ],
    steps: [
      `1 dakikada: 24 · 2<sup>2</sup> = <b>96 L</b>. 8 dakikada: 8 · 96 = <b>768 L</b> → 48 dekar.`,
      `Depoda kalan: 1024 − 768 = <b>256 L</b>.`,
      `768 L → 48 dekar ise 256 L (768'in üçte biri) → 48 / 3 = <b>16 dekar = 2<sup>4</sup></b>`
    ],
    answer: `Kalan gübreyle <b>2<sup>4</sup> = 16 dekar</b> daha gübrelenir. Cevap: <b>B</b>`,
    trap: `Musluk sayısını (24) unutmak ya da kalan gübre yerine depodaki 1024 L'nin tamamını kullanmak. Soru “kaç dekar <b>daha</b>” diyor.`
  },
  {
    no: 6, yil: 2024,
    q: `<p>Tam kapasiteyle çalıştığında Türkiye'nin elektrik ihtiyacının önemli bir kısmını karşılayacak olan Akkuyu Nükleer Güç Santrali'yle, 60 yıllık süreçte 21 × 10<sup>8</sup> ton karbon emisyonu engellenecektir.</p>`
      + `<p class="ask">Buna göre Akkuyu Nükleer Güç Santrali'nin tam kapasiteyle çalıştığında 1 yılda engelleyeceği karbon emisyonunun <u>kilogram</u> cinsinden bilimsel gösterimi aşağıdakilerden hangisidir?</p>`,
    opts: ['3,5 × 10<sup>7</sup>', '3,5 × 10<sup>10</sup>', '21 × 10<sup>7</sup>', '2,1 × 10<sup>10</sup>'], ans: 1, long: true,
    hints: [`Önce 1 yıllık miktarı ton olarak bul, sonra kilograma çevir (1 ton = 10<sup>3</sup> kg).`],
    steps: [
      `1 yılda: ${F('21 × 10<sup>8</sup>', '60')} = 0,35 × 10<sup>8</sup> = <b>3,5 × 10<sup>7</sup> ton</b>`,
      `Kilograma çevir: 3,5 × 10<sup>7</sup> × 10<sup>3</sup> = <b>3,5 × 10<sup>10</sup> kg</b>`
    ],
    answer: `1 yılda <b>3,5 × 10<sup>10</sup> kg</b>. Cevap: <b>B</b>`,
    trap: `Altı çizili “kilogram” kelimesini kaçırıp ton cinsinden cevabı (3,5 × 10<sup>7</sup>) işaretlemek → A. 21 × 10<sup>7</sup> ise bilimsel gösterim değildir (katsayı 10'dan küçük olmalı).`
  },
  {
    no: 7, yil: 2023,
    q: `<div class="fig">${figSayiDogrusu()}</div>`
      + `<p>1<sup>−5</sup>, (−3)<sup>2</sup>, 2<sup>−3</sup>, −3<sup>2</sup> üslü ifadeleri yukarıdaki sayı doğrusunda, değerlerine karşılık gelen noktalara yerleştirilecektir.</p>`
      + `<p class="ask">Buna göre, hangi renkteki doğru parçası üzerine <u>en fazla</u> sayıda üslü ifade yerleştirilir?</p>`,
    opts: ['Kırmızı', 'Mavi', 'Yeşil', 'Mor'], ans: 2,
    hints: [`(−3)<sup>2</sup> ile −3<sup>2</sup> aynı şey değil! Parantez neyin karesinin alındığını gösterir.`],
    steps: [
      `1<sup>−5</sup> = ${F(1, '1<sup>5</sup>')} = <b>1</b> → yeşil (0 ile 5 arası)`,
      `(−3)<sup>2</sup> = (−3)·(−3) = <b>9</b> → mor`,
      `2<sup>−3</sup> = ${F(1, 8)} → yeşil`,
      `−3<sup>2</sup> = −(3·3) = <b>−9</b> → kırmızı`
        + `<div class="fig">${figSayiDogrusu([[1, '1⁻⁵'], [9, '(−3)²'], [0.125, '2⁻³'], [-9, '−3²']])}</div>`
    ],
    answer: `Yeşil parçaya 2 ifade gelir. Cevap: <b>C</b>`,
    trap: `−3<sup>2</sup>'yi 9 sanmak. Parantez yoksa üs sadece 3'e aittir: −3<sup>2</sup> = −9. Ayrıca negatif üs sayıyı negatif yapmaz: 2<sup>−3</sup> = 1/8 > 0.`
  },
  {
    no: 8, yil: 2023,
    q: `<p>Dört farklı markaya ait televizyonun TL cinsinden fiyatlarının asal çarpanlarının çarpımı şeklinde yazılışı aşağıda gösterilmiştir. Bu asal çarpanlardan küçük olanı a'dır.</p>`
      + `<table class="t"><tr><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>a<sup>3</sup> · b<sup>5</sup></td><td>a<sup>4</sup> · b<sup>4</sup></td><td>a<sup>6</sup> · b<sup>3</sup></td><td>a<sup>2</sup> · b<sup>6</sup></td></tr></table>`
      + `<p class="ask">Bu televizyonlardan birinin fiyatı 10 000 TL olduğuna göre, televizyonların <u>en ucuzu</u> aşağıdakilerden hangisidir?</p>`,
    opts: ['K', 'L', 'M', 'N'], ans: 2,
    hints: [`10 000'i asal çarpanlarına ayır. Hangi televizyonun yazılışına uyuyor?`],
    steps: [
      `10 000 = 10<sup>4</sup> = 2<sup>4</sup> · 5<sup>4</sup> → bu L televizyonu. Küçük asal <b>a = 2</b>, büyük asal <b>b = 5</b>.`,
      `K = 2<sup>3</sup> · 5<sup>5</sup> = 8 · 3125 = 25 000<br>M = 2<sup>6</sup> · 5<sup>3</sup> = 64 · 125 = <b>8000</b><br>N = 2<sup>2</sup> · 5<sup>6</sup> = 4 · 15 625 = 62 500`,
      `En ucuz: <b>M (8000 TL)</b>`
    ],
    answer: `En ucuz televizyon <b>M</b>. Cevap: <b>C</b>`,
    trap: `a ile b'yi karıştırmak: a = 5 alınırsa en ucuz N çıkar. Soru “küçük olan asal çarpan a” diyor.`
  },
  {
    no: 9, yil: 2023,
    q: `<p>Bir buğday ekme makinesinin toprağa tohum bırakan 16 adet bölümü vardır. <u>Her bir bölümden</u> her 15 saniyede 4<sup>5</sup> adet buğday tanesi toprağa ekilmektedir. Bir buğday tanesinin kütlesi 2<sup>−5</sup> gramdır.</p>`
      + `<p class="ask">Buna göre, bu makine 60 dakikada kaç gram buğday ekmiştir?</p>`,
    opts: ['15·2<sup>13</sup>', '15·2<sup>11</sup>', '60·2<sup>13</sup>', '60·2<sup>10</sup>'], ans: 0,
    hints: [`60 dakikada kaç tane “15 saniye” var?`, `Hepsini 2'nin kuvveti olarak yaz: 4<sup>5</sup> = 2<sup>?</sup>, 16 = 2<sup>?</sup>`],
    steps: [
      `60 dakika = 3600 saniye = 3600 / 15 = <b>240</b> tane 15 saniye. 240 = 15 · 2<sup>4</sup>`,
      `Bir bölüm 15 sn'de 4<sup>5</sup> = <b>2<sup>10</sup></b> tane eker. 16 = 2<sup>4</sup> bölüm.`,
      `Toplam tane: 2<sup>4</sup> · 15 · 2<sup>4</sup> · 2<sup>10</sup> = 15 · 2<sup>18</sup>`,
      `Kütle: 15 · 2<sup>18</sup> · 2<sup>−5</sup> = <b>15 · 2<sup>13</sup></b> gram`
    ],
    answer: `Makine 60 dakikada <b>15 · 2<sup>13</sup> g</b> buğday eker. Cevap: <b>A</b>`,
    trap: `16 bölümü unutmak (altı çizili!) ya da 60 dakikayı 60 tane 15 saniye sanmak.`
  },
  {
    no: 10, yil: 2023,
    q: `<p>Bir markette başlangıçta <u>eşit kütlelerde</u> kekik, nane, kimyon ve karabiber vardır. Bu ürünlerin belli miktarları satıldıktan sonra kalan kütleleri aşağıda verilmiştir.</p>`
      + `<table class="t"><tr><th>Ürün</th><th>Kalan Kütle (kg)</th></tr><tr><td>Kekik</td><td>4810 × 10<sup>−3</sup></td></tr><tr><td>Nane</td><td>155000 × 10<sup>−6</sup></td></tr><tr><td>Kimyon</td><td>0,000232 × 10<sup>5</sup></td></tr><tr><td>Karabiber</td><td>0,0379 × 10<sup>4</sup></td></tr></table>`
      + `<p class="ask">Buna göre, başlangıçta bu ürünlerden birinin kilogram cinsinden kütlesi aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['0,0000258 × 10<sup>7</sup>', '0,00625 × 10<sup>4</sup>', '3800000 × 10<sup>−5</sup>', '5010000 × 10<sup>−4</sup>'], ans: 3, long: true,
    hints: [`Önce kalan kütleleri normal sayıya çevir. Başlangıçtaki kütle, kalanların en büyüğünden az olabilir mi?`],
    steps: [
      `Kalanlar: kekik 4,81 kg · nane 0,155 kg · kimyon 23,2 kg · karabiber <b>379 kg</b>`,
      `Başlangıçta hepsi eşitti ve satış sadece azaltır → başlangıç kütlesi en az <b>379 kg</b> olmalı.`,
      `Şıklar: A) 258 · B) 62,5 · C) 38 · D) <b>501</b> → yalnızca D 379'dan büyük.`
    ],
    answer: `Başlangıç kütlesi 501 kg olabilir. Cevap: <b>D</b>`,
    trap: `0,0379 × 10<sup>4</sup> = 379'dur, 37,9 değil! Virgülü 4 basamak kaydırmak gerekir. Hatalı kaydıran C'yi (38) seçer.`
  },
  {
    no: 11, yil: 2022,
    q: `<table class="grid"><tr><td>25<sup>0</sup></td><td>81<sup>2</sup></td><td>25<sup>2</sup></td></tr><tr><td>5<sup>4</sup></td><td>36<sup>10</sup></td><td>1<sup>10</sup></td></tr><tr><td>10<sup>1</sup></td><td>3<sup>8</sup></td><td>6<sup>20</sup></td></tr></table>`
      + `<p>Yukarıda verilen dokuz adet kutudan her birine bir üslü ifade yazılmıştır. Bu üslü ifadelerden birbirine denk olanların bulunduğu kutular aynı renge boyanacaktır.</p>`
      + `<p class="ask">Buna göre, <u>boyanmayan</u> kutudaki üslü ifade aşağıdakilerden hangisidir?</p>`,
    opts: ['81<sup>2</sup>', '6<sup>20</sup>', '25<sup>0</sup>', '10<sup>1</sup>'], ans: 3,
    hints: [`Tabanları asal sayıların kuvveti olarak yaz: 81 = 3<sup>?</sup>, 25 = 5<sup>?</sup>, 36 = 6<sup>?</sup>`],
    steps: [
      `25<sup>0</sup> = 1 ve 1<sup>10</sup> = 1 → <b>eş</b>`,
      `81<sup>2</sup> = (3<sup>4</sup>)<sup>2</sup> = 3<sup>8</sup> → <b>eş</b>`,
      `25<sup>2</sup> = (5<sup>2</sup>)<sup>2</sup> = 5<sup>4</sup> → <b>eş</b>`,
      `36<sup>10</sup> = (6<sup>2</sup>)<sup>10</sup> = 6<sup>20</sup> → <b>eş</b>`,
      `Geriye kalan <b>10<sup>1</sup></b> hiçbiriyle eş değil.`
    ],
    answer: `Boyanmayan kutu <b>10<sup>1</sup></b>. Cevap: <b>D</b>`,
    trap: `25<sup>0</sup>'ı 25 ya da 0 sanmak. Sıfırdan farklı her sayının 0. kuvveti 1'dir; 1'in her kuvveti de 1'dir.`
  },
  {
    no: 12, yil: 2022,
    q: `<p>Aşağıdaki tabloda bir bitkinin aylık uzama miktarları verilmiştir.</p>`
      + `<table class="t"><tr><th>Ay</th><th>Uzama Miktarı (mm)</th></tr><tr><td>Nisan</td><td>0,081·10<sup>4</sup></td></tr><tr><td>Mayıs</td><td>0,19·10<sup>3</sup></td></tr><tr><td>Haziran</td><td>0,0025·10<sup>5</sup></td></tr></table>`
      + `<p class="ask">Buna göre, bu bitkinin tablodaki üç aylık toplam uzama miktarının milimetre cinsinden bilimsel gösterimi aşağıdakilerden hangisidir?</p>`,
    opts: ['1,25·10<sup>3</sup>', '1,25·10<sup>4</sup>', '2,735·10<sup>12</sup>', '2,735·10<sup>11</sup>'], ans: 0,
    hints: [`Toplama yapmadan önce her sayıyı normal (ondalık) sayıya çevir.`],
    steps: [
      `Nisan: 0,081 · 10<sup>4</sup> = <b>810</b> · Mayıs: 0,19 · 10<sup>3</sup> = <b>190</b> · Haziran: 0,0025 · 10<sup>5</sup> = <b>250</b>`,
      `Toplam: 810 + 190 + 250 = <b>1250</b>`,
      `Bilimsel gösterim: 1250 = <b>1,25 · 10<sup>3</sup></b>`
    ],
    answer: `Toplam uzama <b>1,25 · 10<sup>3</sup> mm</b>. Cevap: <b>A</b>`,
    trap: `Toplamada üsleri toplamak (4 + 3 + 5 = 12) ya da katsayıları toplamak (0,081 + 0,19 + 0,0025)! Farklı kuvvetler doğrudan toplanmaz.`
  },
  {
    no: 14, yil: 2021,
    q: `<p>Aşağıdaki tabloda Ordu, Giresun ve Trabzon şehirlerini ziyaret eden turistlerin sayıları verilmiştir.</p>`
      + `<table class="t"><tr><th>Şehirler</th><th>Turist Sayısı</th></tr><tr><td>Ordu</td><td>0,125 · 10<sup>6</sup></td></tr><tr><td>Giresun</td><td>9,5 · 10<sup>4</sup></td></tr><tr><td>Trabzon</td><td>x · 10<sup>7</sup></td></tr></table>`
      + `<p>Trabzon'u ziyaret eden turistlerin sayısı, Ordu'yu ziyaret eden turistlerin sayısından az ve Giresun'u ziyaret eden turistlerin sayısından fazladır.</p>`
      + `<p class="ask">Buna göre x'in alabileceği değerlerden biri aşağıdakilerden hangisidir?</p>`,
    opts: ['10<sup>−3</sup>', '3 · 10<sup>−3</sup>', '10<sup>−2</sup>', '3 · 10<sup>−2</sup>'], ans: 2,
    hints: [`Ordu ve Giresun'u normal sayıya çevir. Trabzon bu ikisinin arasında olmalı.`],
    steps: [
      `Ordu: 0,125 · 10<sup>6</sup> = <b>125 000</b> · Giresun: 9,5 · 10<sup>4</sup> = <b>95 000</b>`,
      `Şıkları x · 10<sup>7</sup> olarak dene:<br>A) 10<sup>−3</sup> · 10<sup>7</sup> = 10 000 ✗<br>B) 3 · 10<sup>−3</sup> · 10<sup>7</sup> = 30 000 ✗<br>C) 10<sup>−2</sup> · 10<sup>7</sup> = <b>100 000</b> ✓<br>D) 3 · 10<sup>−2</sup> · 10<sup>7</sup> = 300 000 ✗`
    ],
    answer: `95 000 < 100 000 < 125 000. Cevap: <b>C</b>`,
    trap: `x'in kendisini 95 000 ile 125 000 arasında aramak. x, 10<sup>7</sup> ile çarpılınca turist sayısını veriyor.`
  },
  {
    no: 17, yil: 2020,
    q: `<p>Bir basketbol takımındaki beş oyuncunun boy uzunluklarının çözümlenmiş şekli aşağıdaki tabloda verilmiştir.</p>`
      + `<table class="t"><tr><th>İsim</th><th>Boy Uzunluğu (cm)</th></tr>`
      + `<tr><td>Ayça</td><td>2·10<sup>2</sup> + 1·10<sup>0</sup> + 1·10<sup>−1</sup></td></tr>`
      + `<tr><td>Beyza</td><td>1·10<sup>2</sup> + 7·10<sup>1</sup> + 5·10<sup>0</sup> + 5·10<sup>−1</sup></td></tr>`
      + `<tr><td>Ceyda</td><td>1·10<sup>2</sup> + 8·10<sup>1</sup> + 4·10<sup>0</sup></td></tr>`
      + `<tr><td>Derya</td><td>1·10<sup>2</sup> + 8·10<sup>1</sup> + 7·10<sup>0</sup> + 2·10<sup>−1</sup></td></tr>`
      + `<tr><td>Esra</td><td>1·10<sup>2</sup> + 8·10<sup>1</sup> + 5·10<sup>0</sup> + 6·10<sup>−1</sup></td></tr></table>`
      + `<p>Takımın antrenörü, boyu 185 santimetreden kısa olan oyunculardan birini oyun kurucu olarak oynatacaktır.</p>`
      + `<p class="ask">Buna göre verilen oyuncular arasında oyun kurucu olarak oynayabilecek kaç oyuncu vardır?</p>`,
    opts: ['4', '3', '2', '1'], ans: 2,
    hints: [`Her boyu ondalık sayı olarak yaz. Dikkat: Ayça'da 10<sup>1</sup> basamağı yok!`],
    steps: [
      `Ayça: 200 + 1 + 0,1 = <b>201,1</b> · Beyza: 100 + 70 + 5 + 0,5 = <b>175,5</b>`,
      `Ceyda: 100 + 80 + 4 = <b>184</b> · Derya: 100 + 80 + 7 + 0,2 = <b>187,2</b> · Esra: 100 + 80 + 5 + 0,6 = <b>185,6</b>`,
      `185'ten kısa olanlar: Beyza (175,5) ve Ceyda (184) → <b>2 oyuncu</b>`
    ],
    answer: `Oyun kurucu olabilecek <b>2</b> oyuncu var. Cevap: <b>C</b>`,
    trap: `Esra'yı “185” sanmak: 185,6 cm, 185'ten uzundur. Ayça'da onlar basamağının 0 olduğunu kaçırıp 21,1 gibi yanlış okumak.`
  },
  {
    no: 18, yil: 2019,
    q: `<p>Uçakla seyahat eden bir yolcu, kütlesi 8 kg'dan az olan valizini kabine alabilmektedir.</p>`
      + `<p>Aycan'ın valizinin kütlesi 9,08 kg'dır. Bu valizdeki bazı eşyaların kütlelerinin çözümlenmiş şekli aşağıdaki tabloda verilmiştir.</p>`
      + `<table class="t"><tr><th>Eşya</th><th>Kütlesi (kg)</th></tr><tr><td>Ayakkabı</td><td>9·10<sup>−1</sup> + 8·10<sup>−2</sup></td></tr><tr><td>Kitap</td><td>1·10<sup>0</sup> + 1·10<sup>−1</sup></td></tr><tr><td>Mont</td><td>9·10<sup>−1</sup> + 5·10<sup>−3</sup></td></tr><tr><td>Tablet</td><td>1·10<sup>0</sup> + 9·10<sup>−3</sup></td></tr></table>`
      + `<p class="ask">Aycan, valizinden bu dört eşyadan hangisini çıkarırsa valizini kabine alabilir?</p>`,
    opts: ['Tablet', 'Ayakkabı', 'Kitap', 'Mont'], ans: 2,
    hints: [`Valizin 8 kg'ın altına inmesi için en az ne kadar çıkarmak gerekir?`],
    steps: [
      `9,08 − 8 = 1,08 → çıkarılan eşya <b>1,08 kg'dan ağır</b> olmalı (8 kg'dan <u>az</u> olması gerekiyor).`,
      `Ayakkabı 0,98 · Kitap <b>1,1</b> · Mont 0,905 · Tablet 1,009`,
      `1,08'den ağır olan tek eşya kitap: 9,08 − 1,1 = 7,98 kg < 8 ✓`
    ],
    answer: `Kitabı çıkarırsa valiz 7,98 kg olur. Cevap: <b>C</b>`,
    trap: `Tableti 1,09 sanmak: 9·10<sup>−3</sup> binde 9'dur → 1,009. Basamak değerine dikkat!`
  },
  {
    no: 20, yil: 2018,
    q: `<p>0,00013 × 10<sup>a</sup> ifadesinin değeri 1000'den büyüktür.</p>`
      + `<p class="ask">Buna göre a'nın alabileceği <u>en küçük</u> tam sayı değeri kaçtır?</p>`,
    opts: ['8', '7', '6', '5'], ans: 1,
    hints: [`0,00013'ü bilimsel gösterimle yaz: 1,3 · 10<sup>?</sup>`],
    steps: [
      `0,00013 = 1,3 · 10<sup>−4</sup> → ifade 1,3 · 10<sup>a − 4</sup>`,
      `a = 6: 1,3 · 10<sup>2</sup> = 130 ✗ (1000'den küçük)<br>a = 7: 1,3 · 10<sup>3</sup> = <b>1300</b> ✓`
    ],
    answer: `a en az <b>7</b> olmalı. Cevap: <b>B</b>`,
    trap: `1000 = 10<sup>3</sup> olduğu için “a − 4 > 3 → a ≥ 8” demek. 1,3 · 10<sup>3</sup> zaten 1000'den büyük!`
  },
  {
    no: 21, yil: 2018,
    q: `<p>400 metrelik düz bir yarış pistine başlangıç noktasına uzaklıkları metre cinsinden 2'nin pozitif tam sayı kuvvetleri olacak şekilde yerleştirilebilecek en fazla sayıda engel yerleştiriliyor. Bu pistte 8 atletin yarıştığı bir engelli koşusunda yarışmacılardan biri 20. metrede, bir diğeri 50. metrede yarışı bırakıyor.</p>`
      + `<p class="ask">Diğer yarışmacılar yarışı tamamladığına göre yarış bittiğinde atletlerin her birinin üzerinden atladığı engel sayılarının toplamı kaçtır?</p>`,
    opts: ['57', '63', '64', '72'], ans: 0,
    hints: [`2'nin pozitif kuvvetlerini 400'e kadar yaz: 2, 4, 8, …`],
    steps: [
      `Engeller: 2, 4, 8, 16, 32, 64, 128, 256 → <b>8 engel</b> (512 > 400). 2<sup>0</sup> = 1 pozitif kuvvet değil.`,
      `20. metrede bırakan: 2, 4, 8, 16 → <b>4 engel</b>. 50. metrede bırakan: 2, …, 32 → <b>5 engel</b>.`,
      `Kalan 6 atlet: 6 · 8 = <b>48</b>. Toplam: 4 + 5 + 48 = <b>57</b>`
    ],
    answer: `Toplam <b>57</b> engel atlanmıştır. Cevap: <b>A</b>`,
    trap: `1. metreye de engel koymak (2<sup>0</sup> = 1, “pozitif” kuvvet değil) ya da 8 atletin hepsini yarışı bitirmiş saymak (64).`
  }
];

window.KART_SETI = {
  baslik: 'Üslü İfadeler',
  vurgu: 'LGS Çıkmış Sorular (2018–2026)',
  sorular: [...QUESTIONS, ...YENI].sort((a, b) => a.no - b.no)
};
