SELECT UrunAd AS "Ürün Adı",
SonKullanmaTarihi AS "SKT",
DATEDIFF(SonKullanmaTarihi,NOW()) 
AS "Kaç Gün Var"
FROM urun
-- WHERE SonKullanmaTarihi < NOW()
-- WHERE SonKullanmaTarihi > NOW()