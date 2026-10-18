// Ana sayfadaki "Senin için" bölümü: LGS geri sayımı, bugün tekrar zamanı gelen sorular ve en zayıf konular için öneri.
// Her şey bu cihazdaki çözüm geçmişinden (gecmis.js) hesaplanır; hiçbir yere gönderilmez.
// Önce ayarlar.js, soru verileri, sinavlar.js, gecmis.js, tekrar.js ve veri/ozet.js yüklenmelidir.
// Sayfada: <section id="seninIcin" data-seviye="8 | 7" data-kok="cozum-kartlari/"> … <div id="oneriler"></div> … </section> ve isteğe bağlı <div id="geriSayim"></div>
(function () {
  const kutu = document.getElementById('seninIcin');
  if (!kutu) return;
  const seviye = kutu.dataset.seviye === '7' ? '7' : '8';
  const KOK = kutu.dataset.kok || '';
  const kacis = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // 1) LGS geri sayımı (yalnızca 8. sınıf)
  const sayac = document.getElementById('geriSayim');
  if (sayac && seviye === '8' && window.LGS_TARIHI) {
    const [y, a, g] = window.LGS_TARIHI.split('-').map(Number), hedef = new Date(y, a - 1, g);
    const bugun = new Date(); bugun.setHours(0, 0, 0, 0);
    const gun = Math.round((hedef - bugun) / 86400000);
    if (gun >= 0) {
      sayac.innerHTML = `<span class="sayac-sayi">${gun === 0 ? 'Bugün' : gun.toLocaleString('tr-TR')}</span>`
        + `<span class="sayac-yazi">${gun === 0 ? 'LGS günü, başarılar!' : 'gün kaldı'}</span>`
        + `<span class="sayac-tarih">LGS · ${hedef.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}${window.LGS_TARIHI_KESIN ? '' : ' (tahmini)'}</span>`;
      sayac.hidden = false;
    }
  }

  // Bu seviyenin sınavları: kod → sorular
  const SINAVLAR = new Map();
  (window.TESTLER || []).filter(t => t.seviye === seviye).forEach(t => SINAVLAR.set(t.id, t.sorular()));
  if (seviye === '8') (window.DENEMELER || []).forEach(d => SINAVLAR.set(d.id, d.sorular));
  const gecmis = (window.gecmisOku ? gecmisOku() : []).filter(k => k && SINAVLAR.has(k.kod) && Array.isArray(k.cevaplar));
  const ogrenci = gecmis.length ? gecmis[gecmis.length - 1].ogrenci : '';   // bu cihazda en son çözen öğrenci
  const benim = gecmis.filter(k => k.ogrenci === ogrenci);
  const seviyeParam = seviye === '7' ? '&seviye=7' : '';

  // 2) Bugün tekrar edilecek sorular
  const ogrenilen = window.ogrenilenler ? ogrenilenler() : new Set();
  const yanlislar = window.yanlisSorular ? yanlisSorular(gecmis, SINAVLAR, ogrenci).filter(x => !ogrenilen.has(x.anahtar)) : [];
  const bilgiler = yanlislar.map(tekrarBilgisi);
  const bugunku = bilgiler.filter(b => b.bugun).length;
  const sonraki = bilgiler.map(b => b.sonraki).sort()[0];
  const tekrarHtml = !yanlislar.length ? ''
    : bugunku ? `<div class="senin-kart tekrar-kart"><p class="kart-baslik">🔁 Tekrar zamanı</p>
        <p><b class="buyuk-sayi">${bugunku}</b> soru bugün tekrar edilmeyi bekliyor.</p>
        <p class="kucuk">Yanlış yaptığın sorular 1, 3 ve 7 gün sonra tekrar karşına çıkar. Üçünde de doğru yaparsan öğrenilmiş sayılır.</p>
        <a class="dugme-ana" href="${KOK}yanlislarim.html?tekrar=1${seviyeParam}">Tekrar et</a></div>`
    : `<div class="senin-kart tekrar-kart"><p class="kart-baslik">🔁 Tekrar zamanı</p>
        <p>Bugün tekrar edilecek soru yok. 👏</p>
        <p class="kucuk">Sıradaki tekrar: <b>${gunYaz(sonraki)}</b>. ${yanlislar.length} soru tekrar sırasında.</p>
        <a class="dugme-ikincil" href="${KOK}yanlislarim.html${seviye === '7' ? '?seviye=7' : ''}">Yanlışlarıma bak</a></div>`;

  // 3) Konu başarısı: her sınavın en son çözümü, konu konu doğru oranı
  const son = new Map();
  benim.forEach(k => son.set(k.kod, k));
  const konular = new Map();
  son.forEach(k => {
    SINAVLAR.get(k.kod).forEach((q, i) => {
      if (!q || !q.konu || i >= k.cevaplar.length) return;
      const anahtar = (q.unite || '') + '|' + q.konu;
      const s = konular.get(anahtar) || { konu: q.konu, unite: q.unite || '', d: 0, t: 0 };
      s.t++; if (k.cevaplar[i] === q.ans) s.d++;
      konular.set(anahtar, s);
    });
  });
  // Konu adı → özet kaydı (ünite kodu, kart ve test bağlantıları)
  const ozetBul = ad => {
    for (const [kod, u] of Object.entries(window.OZETLER || {})) {
      if (String(u.sinif) !== seviye) continue;
      const k = u.konular.find(x => x.ad === ad);
      if (k) return { kod, k };
    }
    return null;
  };
  const yeterli = [...konular.values()].filter(s => s.t >= 4).map(s => ({ ...s, oran: s.d / s.t }));
  const zayiflar = yeterli.filter(s => s.oran < 0.7).sort((a, b) => a.oran - b.oran || b.t - a.t).slice(0, 2);

  const satir = s => {
    const o = ozetBul(s.konu), yuzde = Math.round(s.oran * 100);
    const baglanti = [
      o ? `<a href="${KOK}ozet.html?unite=${o.kod}#${o.k.id}">📄 Konu özeti</a>` : '',
      o && o.k.kart ? `<a href="${KOK}${o.k.kart}${o.k.kart.includes('?') ? '' : '?konu=' + encodeURIComponent(s.konu)}">📘 Çözüm kartları</a>` : '',
      o && o.k.test ? `<a href="${KOK}test.html?test=${encodeURIComponent(o.k.test)}">📝 Test çöz</a>` : '',
      `<a href="${KOK}yanlislarim.html?konu=${encodeURIComponent(s.konu)}${seviyeParam}">📒 Yanlışlarım</a>`
    ].filter(Boolean).join('');
    return `<li class="${o ? 'u-' + o.kod : ''}">
      <div class="oneri-ust"><b>${kacis(s.konu)}</b><span class="oneri-oran">%${yuzde} doğru <small>(${s.t} sorudan ${s.d})</small></span></div>
      <span class="cubuk" role="img" aria-label="Doğru oranı yüzde ${yuzde}"><i style="width:${yuzde}%"></i></span>
      <div class="oneri-baglanti">${baglanti}</div></li>`;
  };
  const oneriHtml = !son.size
    ? `<div class="senin-kart oneri-kart"><p class="kart-baslik">🎯 Sana özel öneri</p>
        <p>İlk online testini çözdüğünde hangi konuya çalışman gerektiğini burada göstereceğim.</p>
        <a class="dugme-ikincil" href="${KOK}test.html${seviye === '7' ? '?seviye=7' : ''}">Bir test seç</a></div>`
    : !yeterli.length
    ? `<div class="senin-kart oneri-kart"><p class="kart-baslik">🎯 Sana özel öneri</p>
        <p>Öneri için biraz daha soru çözmen gerekiyor. Bir konudan en az 4 soru çözünce o konudaki durumunu burada görürsün.</p></div>`
    : !zayiflar.length
    ? `<div class="senin-kart oneri-kart"><p class="kart-baslik">🎯 Sana özel öneri</p>
        <p>${yeterli.length < konular.size ? 'Yeterince soru çözdüğün' : 'Çözdüğün bütün'} konularda doğru oranın %70'in üstünde. 👏</p>
        <p class="kucuk">${seviye === '8' ? 'Şimdi kendini LGS gibi bir denemede dene.' : 'Henüz çözmediğin bir testle devam et.'}</p>
        <a class="dugme-ikincil" href="${KOK}${seviye === '8' ? 'deneme.html' : 'test.html?seviye=7'}">${seviye === '8' ? 'Deneme çöz' : 'Test seç'}</a></div>`
    : `<div class="senin-kart oneri-kart"><p class="kart-baslik">🎯 Sana özel öneri</p>
        <p>Çözdüğün testlere göre en çok şu ${zayiflar.length === 1 ? 'konuya' : 'konulara'} çalışmalısın:</p>
        <ul class="oneri-liste">${zayiflar.map(satir).join('')}</ul></div>`;

  // 4) Haftanın meydan okuması (yalnızca 8. sınıf): bu haftanın sorularını çözdüyse sonucu, çözmediyse "Çöz" düğmesi
  const simdi = new Date();
  const bu = seviye === '8' ? (window.TESTLER || []).find(t => t.meydan && t.meydan.baslangic <= simdi && simdi < t.meydan.bitis) : null;
  let meydanHtml = '';
  if (bu) {
    const k = [...benim].reverse().find(x => x.kod === bu.id);
    const soruSay = bu.sorular().length, dk = Math.round(soruSay * (bu.soruSuresi || 150) / 60);
    const yeni = bu.meydan.bitis.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', weekday: 'long' });
    meydanHtml = `<div class="senin-kart meydan-kart"><p class="kart-baslik">🏆 Haftanın meydan okuması</p>
      <p><b>${bu.meydan.hafta}. hafta</b> · ${soruSay} zor soru · ${dk} dakika</p>
      ${k ? `<p>✓ Bu haftanın sorularını çözdün: <b>${k.dogru}/${soruSay}</b> doğru.</p>
        <p class="kucuk">Yeni sorular ${yeni} geliyor. Yanlış yaptığın soruların çözümleri Yanlışlarım sayfasında.</p>`
      : `<p class="kucuk">LGS'nin en zor soru tiplerinden 5 soru. Sonucun hocana gider. Yeni sorular ${yeni} geliyor.</p>
        <a class="dugme-ana" href="${KOK}test.html?test=${encodeURIComponent(bu.id)}">Meydan okumayı çöz</a>`}</div>`;
  }

  const kap = document.getElementById('oneriler');
  const yan = meydanHtml + tekrarHtml;
  if (kap) kap.innerHTML = oneriHtml + (yan ? `<div class="senin-yan">${yan}</div>` : '');
  kutu.hidden = false;
})();
