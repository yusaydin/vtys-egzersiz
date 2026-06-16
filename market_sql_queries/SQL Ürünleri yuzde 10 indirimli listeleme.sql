SELECT UrunAd AS "Ürün Adı",
Fiyat AS "Fiyatı",
Fiyat*0.9 AS "%10 İndirimli Fiyat"
FROM urun
ORDER BY Fiyat

-- UrunAd,Fiyat,Kategori Mark