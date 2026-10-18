# Emre Hoca · LGS Matematik — proje defteri

Bu dosya, siteyle ilgili yeni bir sohbette kaldığımız yerden devam edebilmek için tutulan çalışma defteridir.
Site herkese açıktır; bu dosya da sitede görünür. Bu yüzden buraya şifre, öğrenci adı ya da kişisel bilgi **yazılmaz**.

## Kim, ne, nerede

- **Emre Hoca**: özel bir dershanede 8. sınıf (LGS) matematik öğretmeni. Türkçe, samimi ve sade konuşulur ("hocam").
  Teknik ayrıntıyı değil, ne yapması gerektiğini adım adım ister.
- **Site:** https://emreaygun065.github.io/lgs-matematik/ (GitHub Pages, `main` dalından yayınlanır).
- **Depo:** `EmreAygun065/lgs-matematik`. Çalışma dalı: `claude/epic-goldberg-152s3j`.
- **Birden çok Claude oturumu** bu depoda çalışıyor (ör. 7. sınıf bölümü ayrı bir oturumda yapıldı).
  İşe başlamadan önce `git fetch origin main` ile ana daldaki yenilikler alınır ve çalışma dalına **birleştirilir** (merge; rebase/force yok).

## Çalışma düzeni (önemli)

1. Değişiklik çalışma dalında yapılır, denenir, gönderilir (push).
2. Emre Hoca'ya önizleme gösterilir.
3. `main`'e **yalnızca Emre Hoca "Yayınla" dedikten sonra** gönderilir (hızlı ileri: `git push origin HEAD:main`).
4. Commit kimliği: `-c user.name="Emre Aygün" -c user.email=<Emre Hoca'nın e-postası>`.
5. **Önbellek:** Ortak bir JS/CSS dosyası değişince, onu yükleyen bütün HTML'lerde `?v=` numarası yenilenir.
   Yoksa tarayıcılar eski dosyayı kullanır ve sayfa bozulur (karekök sayfalarında bu bir kez yaşandı).
6. Ağ notu: Bulut ortamından github.io'ya ve script.google.com'a erişilemiyor. Bu yüzden testler dosyalar `file://` ile açılarak yapılır:
   - Playwright, Chromium yolu `/opt/pw-browsers/chromium`.
   - Google sonuç servisi Node'da sahte bir E-Tablo ile taklit edilerek denenir.

## Sitenin içeriği

| Bölüm | Neler var |
|---|---|
| **Çarpanlar ve Katlar** | 15 çıkmış, 78 MEB örnek; her ikisinin benzerleri; çalışma kâğıtları; 6 online test |
| **Üslü İfadeler** | 21 çıkmış, 80 MEB örnek; benzerler; çalışma kâğıtları; 6 online test |
| **Kareköklü İfadeler** | 31 çıkmış, 83 MEB örnek; benzerler; çalışma kâğıtları; 7 online test |
| **Deneme sınavı** | 6 deneme, her biri 20 soru / 40 dk (10 Çarpanlar ve Katlar + 10 Üslü İfadeler) |
| **Yanlışlarım ve Boşlarım** | Öğrencinin yanlış ve boş sorularını tekrar çözdüğü sayfa (`yanlislarim.html`). **Aralıklı tekrar:** her yanlış soru 1, 3 ve 7 gün sonra "Bugün tekrar et" listesine düşer; üçünde de doğru yapılırsa öğrenildi sayılır |
| **Konu özetleri** | `ozet.html?unite=carpan / uslu / karekok / yedi`: her konu için bilgiler, çözümlü örnek, sık yapılan hata; tahta modu ve yazdırma. İçerik `veri/ozet.js` |
| **Senin için** (ana sayfalar) | LGS geri sayımı (yalnızca 8. sınıf), bugün tekrar edilecek soru sayısı ve en zayıf 2 konu için öneri (özet, kart, test, yanlışlarım bağlantıları) |
| **Öğretmen paneli** | `panel.html`; şifreyle açılır; ana sayfanın altındaki küçük bağlantıdan girilir |
| **7. sınıf** (ayrı giriş: `7-sinif/index.html`) | Tam Sayılar ve Rasyonel Sayılar: tanı testi (`yedi-tanima`, 12 soru · 30 dk, yalnızca tanıma düzeyi) ve görselli 3 karma test (`yedi-test-1..3`, 12'şer soru · 30 dk); online ve yazdırılabilir |

- **7. ve 8. sınıf birbirinden ayrı:**
  - 7. sınıfın şubeleri yalnızca 7-A ve 7-B.
  - Ortak sayfalar (test, yanlışlarım, çalışma kâğıdı) her öğrenciye yalnızca kendi seviyesinin içeriğini gösterir. Seviyeyi testin kodundan ya da `?seviye=7` parametresinden anlar.
  - 7. sınıf test kodları **`yedi-`** ile başlar. Apps Script de seviyeyi bu önekten anlar; 7'li öğrenci 8. sınıf sınavı, 8'li öğrenci 7. sınıf sınavı gönderemez.
  - 7. sınıf şekilleri `veri/yedi-sekil.js` dosyasındadır (termometre, sayı doğrusu vb.; açık ve koyu tema).

- **Online testler:** soru başına 2,5 dk. **Denemeler:** LGS gibi 40 dk; net = D − Y ÷ 3.
- **Çıkmış ve MEB örnek soruların cevapları:**
  - Kendi çözümlerimizle girildi.
  - Çarpanlar ve Katlar cevapları Emre Hoca'nın gönderdiği resmî anahtarla karşılaştırıldı, hepsi tuttu.
- **Deneme 1–3:** Sitedeki benzer soru setlerinden derlendi; bu sorular sitede açıkta durur.
- **Deneme 4–6:** Denemeye özel, sitenin başka yerinde olmayan 60 soru (`veri/deneme-4/5/6.js`). LGS düzeyine çıkarıldı, Türkçesi bağımsız bir dil incelemesinden geçti.

## Dosya yapısı

- `index.html`: 8. sınıf ana sayfası. `7-sinif/index.html`: 7. sınıf ana sayfası.
- `cozum-kartlari/*.html`: sayfalar (çözüm kartları, `calisma-kagidi`, `test`, `deneme`, `panel`, `yanlislarim`).
- `cozum-kartlari/veri/*.js`: soru verisi.
  - Soru biçimi: `{no, konu, q, opts[4], ans, long?, hints?, steps[], answer, trap?, unite?}`.
- `cozum-kartlari/ortak/`
  - `yardimci.js`: F (kesir), R (kök), tablo, svg yardımcıları.
  - `motor.js`: çözüm kartı motoru. `stil.css`: tema.
  - `ayarlar.js`:
    - `SONUC_ADRESI`: Google Apps Script adresi.
    - `SINIFLAR`: 7-A, 7-B, 8-A … 8-E. `seviyeSiniflari(7)` bir seviyenin şubelerini verir.
    - `adHatasi()`: ad soyad denetimi.
  - `sinavlar.js`: `TESTLER` ve `DENEMELER` listeleri. Deneme 4 ve sonrası `window.DENEME_SORULARI`'ndan eklenir.
  - `gozetim.js`: sayfadan ayrılma takibi, şık sırası ve soru sırası karıştırma.
  - `gecmis.js`: öğrencinin cihazındaki çözüm geçmişi (Yanlışlarım sayfası ve ana sayfadaki ilerleme çubukları okur).
  - `tekrar.js`: aralıklı tekrar (localStorage `tekrar`; 1–3–7 gün) ve yanlış soruları toplayan ortak `yanlisSorular()`.
  - `oneri.js`: ana sayfadaki "Senin için" bölümü. Konu başarısı her sınavın en son çözümünden hesaplanır; en az 4 sorusu çözülmüş ve %70'in altında kalan en zayıf 2 konu önerilir. Bu yüzden ana sayfalar soru verilerini de (sayfa göründükten sonra) yükler.
  - `ayarlar.js` → `LGS_TARIHI` (şimdilik **2027-06-06, tahmini**; Emre Hoca kesin tarihi söyleyince düzeltilir ve `LGS_TARIHI_KESIN = true` yapılır).
  - Çözüm kartı sayfaları `?konu=…` ile o konu seçili açılır; Yanlışlarım `?konu=…` ve `?tekrar=1` alır.
  - `veri/ozet.js`: konu özetleri. Konu adları test sorularındaki `konu` ile aynı olmalı (öneriler bu adla eşleşir). Örnekler testlerdeki sorulardan farklı seçildi; özet bir testin cevabını vermemeli.
  - `giris.css` + `ilerleme.js`: 8. ve 7. sınıf ana sayfalarının tasarımı (kareli defter başlığı, başlık yazı tipi Google Fonts'tan Bricolage Grotesque) ve ünite karolarındaki ilerleme çubukları.
    - İlerleme, `data-ilerleme="kod1,kod2,…"` ile yazılan test kodlarından hesaplanır. **Yeni test ya da deneme eklenince ana sayfadaki bu listeye de kodu eklenir.**
  - **Ünite renkleri** (`stil.css`, `--u-carpan` mavi, `--u-uslu` deniz yeşili, `--u-karekok` mor, `--u-yedi` hardal; açık ve koyu tema): ana sayfadaki ünite karoları ve bölümleri (`.u-carpan` … sınıfları) ile çözüm kartı, test ve çalışma kâğıdı başlıkları (`<html data-unite="…">`; motor.js, test.html ve calisma-kagidi.html ayarlar) bu rengi alır. Turuncu yalnızca marka ve ana düğmeler içindir. Yeni ünite eklenince renk de eklenir.
  - `stil.css` içinde telefon düzeni (`max-width: 640px`): sayfa başlığı sabit değil, marka konu seçimli sayfalarda gizli, geniş tablolar yana kayar.
- `apps-script/sonuc-servisi.gs`: Google E-Tablo'ya yapıştırılan sonuç servisi kodu.
- `araclar/deneme-uretici/`: deneme sorularını hesapla doğrulayıp veri dosyası üreten araç (aşağıda).

## Sonuç sistemi (Google E-Tablo + Apps Script)

**Akış**
- Test ve deneme bitince sonuç `SONUC_ADRESI`'ne POST edilir.
- Testler **Sonuçlar**, denemeler **Denemeler** sayfasına yazılır.
- Denetimden geçmeyenler **Reddedilenler** sayfasına not düşülür: saat, sebep, ad, sınıf.

**Panel**
- Sonuçları GET ile okur, `?sifre=` ile.
- Şifre yalnızca Emre Hoca'nın Apps Script'indeki `PANEL_SIFRE` satırındadır, **depoda yoktur**.

**Kodu güncelleme** (Emre Hoca yapar)
1. GitHub'da `apps-script/sonuc-servisi.gs` → "Copy raw file".
2. Apps Script'e yapıştır, `PANEL_SIFRE` satırını yeniden doldur.
3. Dağıt → Dağıtımları yönet → kalem → **Yeni sürüm** → Dağıt. Adres değişmez.
4. Kurulduğunu kontrol: Apps Script'te `sadelestir`, `sinifDuzelt` ve `satirlariOku` aranır.

**Kodun yaptığı denetimler**
- Ad: harf dışı karakter, sesli harfsiz kelime, uygunsuz kelime ve kök listesi (Türkçe harfsiz yazımlar da yakalanır).
- Sınıf: `SINIFLAR` listesinde olmalı. "8 A", "8a", "8/A" gibi yazımlar 8-A'ya çevrilir.
- Sayıların tutarlılığı: D + Y + B = soru sayısı; puan, net ve cevap listesi birbirini tutmalı.
- Süre: cevaplanan soru başına 8 saniyeden kısa süreler reddedilir.
- `EK_BILGILER` ve `UNITELER` sabit listedir; dışarıdan yeni sütun açılamaz.
- Sınıf seviyesi ile sınav uyuşmalı: `yedi-` sınavları yalnızca 7'lerden, diğerleri yalnızca 8'lerden kabul edilir.
- **Başlık satırı:**
  - Başlık satırı kaymışsa (ör. sayfa sıralanınca) aşağıdaki eski başlık satırı **aynen** en üste taşınır; yeni başlık yazılmaz, böylece sütun sırası bozulmaz.
  - Başlık satırı sabitlenir.
  - Okurken her sonuç satırı, onu tutarlı okuyan başlıkla eşlenir (`satirlariOku`).
  - `tabloyuDuzelt()`: Emre Hoca isterse Apps Script'ten bir kez çalıştırıp tabloyu tek başlık altında yeniden düzenleyebilir.
- Panel de eski, kaymış okunmuş satırları biçimlerine bakarak doğru alanlara yerleştirir.

**Değişiklik yaparken**
- Yeni şube açılırsa iki yere eklenir (7. sınıf şubeleri `7-` ile başlamalı):
  - `ayarlar.js` → `SINIFLAR` (biz ekleriz),
  - Apps Script → `SINIFLAR` (Emre Hoca ekler).
- Site ile Google kodunun sırası: önce site yayınlanır, sonra Google kodu güncellenir.

## Gözetim ve kopya önlemleri

- **Sayfadan ayrılma:** Başka sekmeye ya da uygulamaya geçiş ve sayfayı kapatıp açma sayılır (3 sn altı sayılmaz). Öğrenci uyarılır; sayı ve süre sonuçla gider.
- **Karıştırma:** Sorular ve şıklar her öğrencide farklı sıradadır. Cevaplar, süreler ve panel analizi **asıl sıraya** göre tutulur.
- **Panelde "Dikkat" sütunu:**
  - ⚠ sayfadan çıktı.
  - ⚡ çok hızlı: soru başına 30 sn altında çözüp %70 ve üstü doğru yapmak, ya da cevapladığı soru başına 20 sn altında kalmak.
- **Saldırı geçmişi (Ekim 2026):** Yazılım bilen biri Google adresine elle sahte kayıtlar gönderdi (XSS denemeleri, formül, argo isimler, "TestPayload/evil" sütunları).
  - Panel ve tablo hiçbir zaman ele geçirilmedi.
  - Yukarıdaki denetimler bu olaydan sonra eklendi.
  - **Hâlâ açık:** gerçekçi görünen sahte bir kayıt girilebilir. Kalıcı çözüm olarak önerilen ama henüz yapılmayan işler aşağıda.

## Deneme hazırlama kuralı (Emre Hoca'nın isteği)

"Deneme hazırla" dendiğinde:

**Sorular**
- Sorular **denemeye özel ve yeni** yazılır. Çıkmış sorular, MEB örnek soruları ya da sitedeki benzer soru setlerindeki (`veri/*-benzer-*.js`) sorular **birebir kullanılmaz**.
- "Benzer" demek **mantığı benzer** demektir: aynı kazanım, aynı çözüm fikri, LGS tarzı. Bağlam, sayılar ve soru kökü farklı olur.
- Sorular sitede başka bir yerde görünmemeli ki öğrenci cevaplarını bulamasın.
- "Örnek sorular olsun" denirse: MEB örneklerinin mantığıyla yazılmış yeni sorular + özgün sorular.

**Düzey ve dil (Emre Hoca'nın geri bildirimi)**
- Tek adımlı kolay sorular istenmiyor: LGS düzeyinde, çok adımlı, koşullu, bağlamlı sorular.
- Dil tam cümleli ve anlaşılır olmalı: "… olacaktır. Buna göre … kaçtır?"
- Telgraf üslubu ve iki anlama gelen ifadeler olmamalı (ör. "basamak atlayarak" yerine "basamakları ikişer ikişer çıkıyor").
- Yazdıktan sonra bağımsız bir dil incelemesi yaptırılır.

**Biçim**
- LGS gibi 20 soru, 40 dakika; üniteler karışık.
- Her soruda `konu`, `unite`, 4 şık, `ans`, `steps`, `answer` bulunur; varsa `trap` (tuzak notu).
- Konu dağılımı:
  - Çarpanlar ve Katlar: 3 çarpanlar, 5 EBOB-EKOK, 2 aralarında asal.
  - Üslü İfadeler: 2 tam sayı kuvvetleri, 4 temel kurallar, 1 ondalık çözümleme, 1 10'un kuvvetleri, 2 bilimsel gösterim.
- Cevap harfleri dengeli olur (her harf 5).
- Deneme soruları `veri/deneme-N.js` dosyalarında tutulur. Çözüm kartı ve çalışma kâğıdı sayfalarına eklenmez.
- Dosya `deneme.html`, `panel.html` ve `yanlislarim.html`'e `<script>` olarak eklenir; ana sayfadaki deneme sayısı güncellenir.

**Doğrulama: `araclar/deneme-uretici/`**
- Her soru, cevabı bağımsız hesaplayan bir `cevap()` fonksiyonuyla yazılır.
- `node uret.js <soru-dosyası>` denetler. `… yaz` denetimden geçerse veri dosyalarını üretir.
- Sayısal şıklar küçükten büyüğe dizilir. Harf dengesi yanlış şıklar seçilerek sağlanır.
- Örnek ve yayındaki hâl: `deneme-4-5-6.js`.

**Yayındaki denemeler**
- Yayındaki bir denemenin sorularını ya da sırasını **değiştirme**; panel eski sonuçları bu sıraya göre eşler.
- Hata bulunursa düzeltilmiş hâli yeni id ile yeni deneme olarak eklenir.

## Bekleyen işler ve fikirler (Emre Hoca'ya önerildi, karar bekliyor)

- **Öğrenci kodu:**
  - Her öğrenciye 5 haneli kod verilir; ad yazma kutusu kalkar.
  - "Öğrenciler" sayfası ve tek tuşla kod üretme olur; her denemeye tek sonuç kabul edilir; süre Google'da tutulur.
  - Sahte kayıtları tamamen keser. Emre Hoca "şimdilik silerek devam" dedi.
- **Kayıtları sil düğmesi:** Yanlışlarım sayfasına "Bu cihazdaki kayıtlarımı sil" düğmesi (ortak bilgisayarlar için).
- **Kendi alan adı:** Örneğin emrehoca.com; GitHub Pages'e bağlanır. Adında "meb" geçmemeli. İsterse ücretsiz kısa adres için depo `emreaygun065.github.io` olarak yeniden adlandırılabilir.
- **Kaynak ve gizlilik notları:**
  - MEB soruları sayfalarına kaynak notu: "MEB'e aittir, ücretsiz ve eğitim amaçlı, kaynak gösterilerek kullanılmıştır".
  - Giriş ekranına KVKK bilgilendirme cümlesi.
- **Gelir ve tanıtım fikirleri:**
  - YouTube çözüm videoları; video düzenleme ffmpeg ile yapılabilir.
  - Dershanesine panel ve deneme sistemini tanıtan bir sayfa.
  - Diğer öğretmenlere kendi sorularından deneme paketleri.
  - Çalıştığı dershanenin sözleşmesi kontrol edilmeli.
- **Yeni üniteler:** 8. sınıfın sıradaki ünitelerinin PDF'leri bekleniyor. Karekök için deneme henüz yok. 7. sınıfta yalnızca 1. temanın tanıma bölümü var; sonraki konular bekleniyor.
- **Kayıp sonuç:** Sınıf listesinden önce açılmış bir denemenin sonucu "8 A" yazımı yüzünden reddedildi; o öğrencinin sonucunun Emre Hoca tarafından elle girilmesi önerildi. Kod artık bu yazımları kabul ediyor.
