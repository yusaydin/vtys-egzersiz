-- Hangi kategori de kaç çeşit ürün olduğunu bulan sorgu
SELECT COUNT(U.UrunNo) AS "Adet",K.KategoriAd AS "Kategori Adı" FROM kategori AS K
INNER JOIN urun AS U
ON U.KategoriNo = K.KategoriNo
GROUP BY K.KategoriNo