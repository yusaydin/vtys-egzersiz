-- Bu ay yapılan toplam satış tutarı
SELECT SUM(U.Fiyat*S.Adet) AS 'Toplam Tutar' FROM satis AS S
INNER JOIN urun AS U
ON U.UrunNo = S.UrunNo
WHERE MONTH(NOW()) = MONTH(Tarih)

