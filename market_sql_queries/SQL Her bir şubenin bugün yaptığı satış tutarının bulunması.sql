-- Her bir şubenin bugün yaptığı satış tutarının bulunması
SELECT SU.Ad, SUM(S.Adet*U.Fiyat) FROM satis AS S
INNER JOIN urun AS U
ON U.UrunNo = S.UrunNo
INNER JOIN sube AS SU
ON SU.SubeNo = S.SubeNo
WHERE DATEDIFF(NOW(),S.Tarih) = 0
GROUP BY s.SubeNo
-- 20 TL'nin altında satış yapan şubeler için aşağıdaki şartın eklenmesi 
-- lazım 
-- HAVING SUM(S.Adet*U.Fiyat) <20