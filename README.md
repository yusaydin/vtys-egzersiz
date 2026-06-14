# VFS Global Randevu Takip Asistanı 🚀

Bu proje, VFS Global web sitesinde randevu uygunluğunu izleyen, form doldurma süreçlerini kolaylaştıran ve randevu açıldığında sesli/Telegram uyarısı gönderen bir **Chrome Uzantısı (Extension)** aracıdır.

VFS Global'in katı Cloudflare ve SMS OTP (MFA) korumalarını aşmak için **yarı-otomatik (asistan)** mantıkla tasarlanmıştır. Güvenli tarayıcınız üzerinden çalıştığı için hesap banı veya IP engellemesi riski minimumdur.

---

## 🛠️ Kurulum Adımları

### 1. Eklentiyi Google Chrome'a Yükleme
1. Bu projeyi bilgisayarınıza indirin.
2. Google Chrome tarayıcınızı açın ve adres çubuğuna `chrome://extensions/` yazıp gidin.
3. Sağ üst köşede bulunan **"Geliştirici modu" (Developer mode)** seçeneğini aktif hale getirin.
4. Sol üstte çıkan **"Paketlenmemiş öğe yükle" (Load unpacked)** butonuna tıklayın.
5. Proje klasörünün içindeki `extension` klasörünü seçip yükleyin.
6. Uzantı, Chrome araç çubuğunuza eklenecektir. (Sağ üstteki yapboz simgesine tıklayıp sabitleyebilirsiniz).

---

## 🤖 Telegram Bot Kurulumu (Bildirim Almak İçin)

Randevu açıldığında telefonunuza anlık bildirim gelmesini istiyorsanız aşağıdaki adımları takip edin:

1. **Bot Oluşturma:**
   - Telegram uygulamasını açın ve arama kısmına `@BotFather` yazın.
   - BotFather ile konuşma başlatıp `/newbot` komutunu gönderin.
   - Botunuza bir isim ve ardından sonu `bot` ile biten bir kullanıcı adı (username) girin (Örn: `VfsTakipciBot`).
   - BotFather size bir **HTTP API Token** verecektir. Bu sizin **Telegram Bot Token** değerinizdir.

2. **Chat ID Öğrenme:**
   - Telegram arama kısmına `@userinfobot` yazın.
   - Bu botla konuşma başlatıp `Start` butonuna tıkladığınızda size `Id: XXXXXXXXX` şeklinde bir numara verecektir. Bu numara sizin **Telegram Chat ID** değerinizdir.

3. **Botu Aktifleştirme:**
   - Yeni oluşturduğunuz botun sohbet sayfasına gidip `/start` komutunu gönderin (Bunu yapmazsanız bot size mesaj gönderemez).

---

## 📈 Kullanım Kılavuzu

1. **Ayarları Yapılandırın:**
   - Chrome'daki uzantı simgemize tıklayarak arayüzü açın.
   - VFS formlarında seçmek istediğiniz **Vize Kategorisi** ve **Vize Alt Kategorisi** isimlerini (VFS sitesinde göründüğü haliyle, örn: `Schengen Visa`, `Tourism`) yazın.
   - Telegram Token ve Chat ID bilgilerinizi girip **"Telegram Test Mesajı Gönder"** butonuna basarak bağlantıyı test edin.
   - Yenileme sıklığını (Önerilen: 3 veya 4 dakika) ayarlayın.
   - Ayarlar otomatik olarak kaydedilecektir.

2. **VFS Global Oturumu Açın:**
   - Tarayıcınızdan normal bir şekilde VFS Global randevu sistemine girin.
   - E-posta, şifre ve telefonunuza gelen **SMS OTP** kodunu girerek sisteme manuel olarak giriş yapın.

3. **Takibi Başlatın:**
   - Giriş yaptıktan sonra eklenti simgesine tıklayıp **"Takibi Başlat"** butonuna basın.
   - Eklenti, form aşamalarını otomatik doldurarak son sayfaya geçecek ve ayarladığınız sürelerde sayfayı yenileyerek randevu durumunu kontrol edecektir.
   - **Önemli:** Takip sırasında VFS sayfasının açık olduğu sekmeyi kapatmayın (arka planda durabilir).

4. **Alarm Durumu:**
   - Randevu açıldığı an tarayıcınız yüksek sesli alarm çalacak ve Telegram'dan telefonunuza mesaj gelecektir. Hemen tarayıcı sekmene dönüp randevunuzu manuel olarak onaylayabilirsiniz!
   - Oturumunuz kapandığında (session timeout) sistem sizi uyarmak için farklı bir ton çalacak ve Telegram'dan *"Oturumunuz Sonlandı"* uyarısı atacaktır. Bu durumda tekrar manuel giriş yapıp takibi başlatabilirsiniz.

---

## ⚠️ Güvenlik ve Önemli Notlar
*   **İnsansı Beklemeler:** Eklenti sayfalar arası geçişlerde 1.5 - 3.5 saniye arasında rastgele bekler. Bu, bot korumalarını (Cloudflare) atlatmak için kritik öneme sahiptir.
*   **Gizlilik:** Verileriniz tamamen tarayıcınızın yerel belleğinde (`chrome.storage`) saklanır ve hiçbir üçüncü taraf sunucuyla paylaşılmaz.
