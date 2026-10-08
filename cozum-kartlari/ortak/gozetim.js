// Sınav sırasında öğrencinin sayfadan ayrılmasını (başka sekme, başka uygulama, sayfayı kapatıp açma) izler
// ve şıkları öğrenciye göre karıştırır. test.html ve deneme.html kullanır.
(function () {
  const ESIK_SN = 3;   // 3 saniyeden kısa ayrılmalar (bildirim, sistem penceresi) sayılmaz

  // durum: sayfanın localStorage'a kaydettiği nesne; sonuçlar durum.cikis içinde tutulur → yenilemede kaybolmaz.
  // kaydet: durumu saklayan fonksiyon; uyar(cikis): öğrenci sayfaya döndüğünde uyarıyı gösteren fonksiyon.
  window.gozetimBaslat = function (durum, kaydet, uyar) {
    const c = durum.cikis = durum.cikis || { sayi: 0, sn: 0, acik: null };
    const simdi = () => Date.now();
    const kapat = (bitis) => {
      const sn = Math.round((bitis - c.acik) / 1000);
      if (sn >= ESIK_SN) { c.sayi++; c.sn += sn; }
      c.acik = null;
      return sn >= ESIK_SN;
    };
    // Sayfa kapatılıp yeniden açıldıysa ya da yenilendiyse aradaki süre de dışarıda geçmiş sayılır.
    if (c.acik) kapat(simdi());
    else if (durum.sonGorulme && simdi() - durum.sonGorulme > ESIK_SN * 1000) { c.acik = durum.sonGorulme; kapat(simdi()); }
    durum.sonGorulme = simdi();
    kaydet();
    if (c.sayi) setTimeout(() => uyar(c), 0);

    const guncelle = () => {
      if (window.gozetimSessiz) return;   // sayfanın kendi onay penceresi açıkken sayılmaz
      const disarida = document.hidden || !document.hasFocus();
      if (disarida && !c.acik) { c.acik = simdi(); kaydet(); }
      else if (!disarida && c.acik) { if (kapat(simdi())) uyar(c); kaydet(); }
    };
    const nabiz = setInterval(() => { if (!c.acik) { durum.sonGorulme = simdi(); kaydet(); } }, 2000);
    ['visibilitychange', 'blur', 'focus', 'pageshow'].forEach(o => (o === 'visibilitychange' ? document : window).addEventListener(o, guncelle));
    guncelle();

    return function bitir() {
      clearInterval(nabiz);
      ['visibilitychange', 'blur', 'focus', 'pageshow'].forEach(o => (o === 'visibilitychange' ? document : window).removeEventListener(o, guncelle));
      if (c.acik) kapat(simdi());
      return { sayi: c.sayi, sn: c.sn };
    };
  };

  // Her soru için şıkların ekranda görüneceği sıra (asıl şık numaraları). Öğrenciden öğrenciye değişir.
  window.sikSirasiYap = function (sorular) {
    return sorular.map(q => {
      const a = q.opts.map((_, j) => j);
      for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
      return a;
    });
  };

  // Soruların öğrencinin ekranında görüneceği sıra: sira[ekrandaki konum] = asıl soru numarası.
  // Cevaplar ve süreler yine asıl sıraya göre kaydedilir; öğretmen paneli bu sayede bozulmaz.
  window.soruSirasiYap = function (n) {
    const a = Array.from({ length: n }, (_, i) => i);
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };

  window.cikisMetni = (c) => {
    const dk = `${Math.floor(c.sn / 60)}:${String(c.sn % 60).padStart(2, '0')}`;
    return `${c.sayi} kez, toplam ${dk}`;
  };
})();
