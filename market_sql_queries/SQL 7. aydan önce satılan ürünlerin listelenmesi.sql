-- 7. aydan önce satılan ürünlerin listelenmesi
SELECT * FROM urun WHERE UrunNo IN (SELECT UrunNo FROM satis WHERE MONTH(Tarih)<7)
