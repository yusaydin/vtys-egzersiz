SELECT CONCAT(K.Ad," ",K.Soyad) AS "Ad Soyad", S.KasiyerNo 
FROM kasiyer AS K
LEFT JOIN satis AS S
ON K.KasiyerNo = S.KasiyerNo
WHERE S.KasiyerNo IS NULL