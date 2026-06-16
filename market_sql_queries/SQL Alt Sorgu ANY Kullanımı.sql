 -- Elektronik Şarküteri Temizlik kategorilerindeki ürünlerin fiyatlarının üstünde
 -- fiyat değerine sahip ürünlerin listelenmesi
 SELECT * FROM urun WHERE Fiyat>ANY(SELECT Fiyat FROM urun WHERE KategoriNo IN (1,2,3))
/*
Yukarıdaki sorgunun OR ifadeleriyle yazımı
SELECT * FROM urun WHERE Fiyat>20 OR Fiyat>23 OR Fiyat>22.99 OR Fiyat>25.99  
OR Fiyat>3000 OR Fiyat>18 OR Fiyat>3200 OR Fiyat>4800
*/
