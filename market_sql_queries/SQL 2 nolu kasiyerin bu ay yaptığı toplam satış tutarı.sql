-- Bu ay 2 nolu kasiyerin yaptığı toplam satış tutarı
SELECT SUM(U.Fiyat*S.Adet) FROM satis AS S
INNER JOIN urun AS U
ON U.UrunNo = S.UrunNo
WHERE KasiyerNo = 2
AND MONTH(Tarih) = MONTH(NOW())


