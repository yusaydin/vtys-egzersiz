-- Her bir kategorinin ortalama fiyat bilgisini bulan sorgu
ALTER VIEW ortalamaFiyatKategori AS
SELECT AVG(Fiyat) AS "OrtalamaFiyat",K.KategoriAd FROM urun AS U
INNER JOIN kategori AS K
ON K.KategoriNo = U.KategoriNo
GROUP BY K.KategoriAd
