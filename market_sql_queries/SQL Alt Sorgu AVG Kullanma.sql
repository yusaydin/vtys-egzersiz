-- Fiyatı ortalama fiyat değerinden büyük olan ürünlerin listelenmesi
SELECT * FROM urun WHERE Fiyat<(SELECT AVG(Fiyat) FROM urun) ORDER BY Fiyat  
