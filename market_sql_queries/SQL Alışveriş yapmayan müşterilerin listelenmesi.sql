-- Alış veriş yapmayan müşterilerin listelenmesi
SELECT M.Ad,M.MusteriNo,M.Telefon FROM musteri AS M
LEFT JOIN satis AS S
ON S.MusteriNo = M.MusteriNo
WHERE S.MusteriNo IS NULL