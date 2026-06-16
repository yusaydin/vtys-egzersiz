-- Bu yıl her ay toplam satış tutarını bulan sorgu
SELECT SUM(S.Adet*U.Fiyat),MONTH(S.Tarih)
FROM urun AS U
INNER JOIN satis AS S
ON U.UrunNo = S.UrunNo
WHERE YEAR(S.Tarih) = YEAR(NOW())
GROUP BY MONTH(S.Tarih)
