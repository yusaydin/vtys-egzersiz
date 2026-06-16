SELECT k.KasiyerNo, k.ad,k.Soyad,u.UrunNo,u.fiyat, SUM(u.UrunNo) as "toplamUrun",(s.Adet*u.Fiyat*SUM(u.UrunNo)) as toplamFiyat
FROM market.kasiyer as k
INNER JOIN market.satis as s
ON k.KasiyerNo = s.KasiyerNo
INNER JOIN market.urun AS u
ON s.SatisNo = u.UrunNo
GROUP BY k.ad, UrunNo;