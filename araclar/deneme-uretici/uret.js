// Kullanım:  node uret.js <soru-dosyası>          → yalnızca denetler
//            node uret.js <soru-dosyası> yaz      → denetimden geçerse cozum-kartlari/veri/deneme-N.js dosyalarını yazar
// Soru dosyası örneği: deneme-4-5-6.js. Her sorunun cevap() fonksiyonu sonucu bağımsız hesaplar;
// hesap işaretli doğru şıkla uyuşmazsa ya da bir yanlış şık da doğru çıkarsa hiçbir dosya yazılmaz.
const fs = require('fs'), path = require('path');
const { D } = require(path.resolve(process.argv[2] || 'deneme-4-5-6.js'));
const L = 'ABCD', UNITE = { C: 'Çarpanlar ve Katlar', U: 'Üslü İfadeler' };
const kesir = s => s.replace(/F\(([^,()]+),([^()]+)\)/g, '<span class="frac"><span>$1</span><span>$2</span></span>');
const num = s => {
  let t = String(s).replace(/F\((−?[\d,]+),([\d,]+)\)/g, '($1/$2)').replace(/<sup>([^<]+)<\/sup>/g, '**($1)')
    .replace(/−/g, '-').replace(/·/g, '*').replace(/,/g, '.').replace(/\s+/g, '');
  if (!/^[\d.\-+*/()]+$/.test(t)) return NaN;
  try { return Function('return ' + t)(); } catch (e) { return NaN; }
};
const bilimselMi = s => /^[1-9](,\d+)? · 10<sup>−?\d+<\/sup>$/.test(s);
const esit = (a, b) => Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
let hata = 0;
const hataVer = (k, m) => { hata++; console.log('  ✗', k, m); };
for (const [id, sorular] of Object.entries(D)) {
  const cikti = [], harf = { A: 0, B: 0, C: 0, D: 0 }, konu = {}, sira = [];
  sorular.forEach((q, i) => {
    const k = `${id} #${i + 1}`;
    const tum = [q.dogru, ...q.yanlis];
    if (new Set(tum).size !== 4) hataVer(k, 'şıklar tekrar ediyor');
    let opts;
    const c = q.cevap();
    if (q.sabitSira) {
      opts = q.sabitSira;
      if ([...opts].sort().join('|') !== [...tum].sort().join('|')) hataVer(k, 'sabitSira şıklarla uyuşmuyor');
    } else {
      const v = tum.map(x => q.deger !== undefined && x === q.dogru ? q.deger : num(x));
      // Sayısal şıklar küçükten büyüğe dizilir; eşit değerlilerde (bilimsel gösterim tuzakları) yerSon doğru şıkkı sona alır.
      const sirala = q.yerSon ? (a, b) => a[1] - b[1] || (a[0] === q.dogru) - (b[0] === q.dogru) : (a, b) => a[1] - b[1];
      opts = v.every(x => !isNaN(x)) ? tum.map((x, j) => [x, v[j]]).sort(sirala).map(x => x[0]) : tum;
    }
    const ans = opts.indexOf(q.dogru);
    // Doğrulama
    if (Array.isArray(c)) {
      const dogrular = c.map((x, j) => x ? j : -1).filter(j => j >= 0);
      if (dogrular.length !== 1 || dogrular[0] !== ans) hataVer(k, `seçenek denetimi: doğru sayılan ${dogrular.map(j => L[j])}, işaretli ${L[ans]}`);
    } else if (c === true) { /* cebirsel denetim cevap() içinde yapıldı */ }
    else if (typeof c === 'string') { if (c !== q.dogru) hataVer(k, `hesap ${c}, işaretli ${q.dogru}`); }
    else {
      const hedef = q.deger !== undefined ? q.deger : num(q.dogru);
      if (!esit(c, hedef)) hataVer(k, `hesap ${c}, işaretli ${q.dogru} (${hedef})`);
      q.yanlis.forEach(y => { const yv = num(y); if (!isNaN(yv) && esit(yv, c) && !(q.bilimsel && !bilimselMi(y))) hataVer(k, `yanlış şık da doğru: ${y}`); });
      if (q.bilimsel && !bilimselMi(q.dogru)) hataVer(k, 'doğru şık bilimsel gösterimde değil');
    }
    if (c === false || (typeof c === 'number' && isNaN(c))) hataVer(k, 'hesap başarısız');
    harf[L[ans]]++; konu[q.konu] = (konu[q.konu] || 0) + 1; sira.push(q.u + L[ans]);
    const o = { no: i + 1, unite: UNITE[q.u], konu: q.konu, q: kesir(q.q), opts: opts.map(kesir), ans };
    if (q.long) o.long = true;
    o.steps = q.adim.map(kesir); o.answer = `Cevap: <b>${L[ans]}</b>`;
    if (q.tuzak) o.trap = kesir(q.tuzak);
    cikti.push(o);
  });
  const ck = sorular.filter(q => q.u === 'C').length;
  console.log(`${id}: ${sorular.length} soru (Ç ${ck}, Ü ${sorular.length - ck}) | harfler ${JSON.stringify(harf)} | sıra ${sira.join(' ')}`);
  console.log('   konular', JSON.stringify(konu));
  const n = id.split('-')[1];
  const js = `// Deneme ${n} · denemeye özel sorular (Çarpanlar ve Katlar + Üslü İfadeler).
// Bu sorular sitenin başka hiçbir sayfasında (çözüm kartı, çalışma kâğıdı, test) yer almaz.
// MEB örnek sorularının mantığıyla yazılmış yeni sorular ve özgün sorulardan oluşur; her sorunun cevabı hesapla doğrulanmıştır.
// Yayındaki bir denemenin sorularını ya da sırasını değiştirmeyin: öğretmen paneli eski sonuçları bu sıraya göre eşler.
window.DENEME_SORULARI = window.DENEME_SORULARI || {};
window.DENEME_SORULARI['${id}'] = ${JSON.stringify(cikti, null, 1)};
`;
  if (process.argv[3] === 'yaz' && !hata) fs.writeFileSync(path.join(__dirname, '../../cozum-kartlari/veri', `${id}.js`), js);
}
console.log(hata ? `HATA: ${hata}` : 'Bütün sorular doğrulandı.');
process.exit(hata ? 1 : 0);
