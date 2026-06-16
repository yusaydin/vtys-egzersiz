-- 5-) Her bir müşterinin hangi markadan kaç adet ürün aldığını  listeleyen sorguyu yazınız.
-- 5 dakika
SELECT m.MusteriNo,m.ad,m.Soyad,ma.MarkaAd,SUM(s.Adet) AS 'Adet' FROM market.musteri AS 
m INNER JOIN market.satis AS s
ON m.MusteriNo = s.MusteriNo
INNER JOIN market.urun AS u
ON s.UrunNo = u.UrunNo
INNER JOIN market.marka AS ma
ON u.MarkaNo = ma.MarkaNo
GROUP BY m.Ad,ma.MarkaAd