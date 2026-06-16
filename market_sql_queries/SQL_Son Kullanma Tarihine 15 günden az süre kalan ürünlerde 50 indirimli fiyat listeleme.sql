SELECT UrunAd AS "Ürün Adı",
SonKullanmaTarihi AS "SKT",
DATEDIFF(SonKullanmaTarihi,NOW()) 
AS "Kaç Gün Var",
Fiyat AS "Fiyatı",
Fiyat*0.5 AS "İndirimli Ürün Fiyatı"
FROM urun
WHERE DATEDIFF(SonKullanmaTarihi,NOW()) <=15