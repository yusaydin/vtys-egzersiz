-- 4-) Her bir müşterinin hangi kategorilerden kaç adet ürün aldığını  listeleyen sorguyu yazınız.

SELECT M.MusteriNo,M.Ad,K.KategoriAd,SUM(S.Adet) AS 'Adet' FROM satis AS S
INNER JOIN urun AS U
ON U.UrunNo = S.UrunNo
INNER JOIN musteri AS M
ON M.MusteriNo = S.MusteriNo
INNER JOIN kategori AS K
ON K.KategoriNo = U.KategoriNo
GROUP BY M.MusteriNo,K.KategoriNo;