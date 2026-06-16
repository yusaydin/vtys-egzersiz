-- Elektronik Kategorisinde Ortalama Fiyatın Altındaki Ürünlerin Listelenmesi
SELECT * FROM urun WHERE 
Fiyat<(SELECT AVG(Fiyat) FROM urun GROUP BY KategoriNo HAVING 
KategoriNo=(SELECT KategoriNo FROM kategori WHERE KategoriAd='Elektronik')) 
AND KategoriNo = (SELECT KategoriNo FROM kategori WHERE KategoriAd='Elektronik')
ORDER BY Fiyat 