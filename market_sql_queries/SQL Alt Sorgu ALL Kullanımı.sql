 -- Elektronik Şarküteri Temizlik kategorilerindeki ürünlerin fiyatlarının altında
 -- fiyat değerine sahip ürünlerin listelenmesi
SELECT * FROM urun WHERE Fiyat<ALL(SELECT Fiyat FROM urun WHERE KategoriNo IN (1,2,3))
-- SELECT * FROM urun WHERE Fiyat<20 AND Fiyat<23 AND Fiyat<22.99 AND Fiyat<25.99  AND Fiyat<3000 AND Fiyat<18 AND Fiyat<3200 AND Fiyat<4800
