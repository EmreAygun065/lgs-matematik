// Soru verisi dosyalarının kullandığı ortak yardımcılar (kesir, kart, tablo, ızgara, svg).
const F = (a, b) => `<span class="frac"><span>${a}</span><span>${b}</span></span>`;
// Karekök: R(8) → √8, R(3, 2) → 2√3 (kökün üstünde çizgi olur)
const R = (x, k = '') => `${k}<span class="kok">√<span>${x}</span></span>`;
// Kart sırası: kartlar(['2<sup>3</sup>', …], 'red')
const kartlar = (arr, cls = '') => `<div class="cards ${cls}">${arr.map(x => `<span>${x}</span>`).join('')}</div>`;
// Basit tablo: tablo([['Başlık1','Başlık2'], ['a','b'], …])
const tablo = rows => `<table class="t"><tr>${rows[0].map(h => `<th>${h}</th>`).join('')}</tr>${rows.slice(1).map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table>`;
// Izgara: hücre metni "b:B" → b sınıfı (renk) + B yazısı; "x:" → kenarsız boş hücre
const izgara = rows => `<table class="grid">${rows.map(r => `<tr>${r.map(c => { const [cls, txt] = c.includes(':') ? c.split(/:(.*)/s) : ['', c]; return `<td class="${cls}">${txt}</td>`; }).join('')}</tr>`).join('')}</table>`;
const svg = (w, h, inner, label) => `<svg viewBox="0 0 ${w} ${h}" width="${w}" role="img" aria-label="${label}">${inner}</svg>`;
const kaynak = s => `<p class="note kaynak">Orijinal şekil için kaynak PDF'in ${s}. sayfasına bakabilirsiniz.</p>`;
