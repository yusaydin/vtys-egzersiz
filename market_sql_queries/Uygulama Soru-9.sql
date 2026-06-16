-- 9-) Satış yapmayan kasiyerleri listeleyen sorguyu yazınız.
-- 5 dakika
SELECT k.* FROM market.kasiyer as k
LEFT OUTER JOIN market.satis as s
ON k.KasiyerNo = s.KasiyerNo
WHERE s.SatisNo is null