-- ÜrünAdılarını Kategori Adlarıyla birlikte listeleyen sorgu
/*SELECT UrunAd, KategoriAd 
FROM urun AS u,kategori AS k
WHERE k.KategoriNo = u.KategoriNo
*/
-- n tablo üzerinde n-1 ilişkilendirme şartı olmalı
/*SELECT UrunAd, KategoriAd 
FROM urun AS u INNER JOIN kategori AS k
ON k.KategoriNo = u.KategoriNo*/
-- Urun adlarını Kategori Ad ve Marka Adına göre listeyen sorgu
/*
SELECT UrunAd, KategoriAd, MarkaAd
FROM urun AS u, kategori AS k, marka AS m
WHERE u.KategoriNo = k.KategoriNo AND m.MarkaNo = u.MarkaNo
*/
/*SELECT UrunAd, KategoriAd, MarkaAd
FROM urun AS u 
INNER JOIN kategori AS k ON k.KategoriNo = u.KategoriNo
INNER JOIN marka AS m ON m.MarkaNo = u.MarkaNo
*/


