-- Ürün olmayan kategoriler listelenmesi
SELECT K.KategoriAd FROM kategori AS K 
LEFT JOIN urun AS U 
ON K.KategoriNo = U.KategoriNo
WHERE U.KategoriNo IS NULL

