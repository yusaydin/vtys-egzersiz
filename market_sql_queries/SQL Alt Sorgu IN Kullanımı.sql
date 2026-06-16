-- 7.aydan önce satılan ürünlerin listelenmesi 
-- ilişkisel sorgu yazılmadan alt sorgularla yapılabilir.
SELECT * FROM market.urun WHERE UrunNo IN (SELECT UrunNo FROM market.satis WHERE MONTH(Tarih)<7 )