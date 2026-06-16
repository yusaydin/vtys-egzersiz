SELECT K.Ad, COUNT(*) FROM Satis AS S
INNER JOIN kasiyer AS K
ON K.KasiyerNo = S.KasiyerNo
GROUP BY K.KasiyerNo
ORDER BY COUNT(*) 
LIMIT 0,1
