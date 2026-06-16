SELECT S.SatisNo,U.UrunAd,S.UrunNo FROM satis AS S
RIGHT JOIN urun AS U
ON S.UrunNo = U.UrunNo
WHERE S.UrunNo IS NULL
ORDER BY S.UrunNo