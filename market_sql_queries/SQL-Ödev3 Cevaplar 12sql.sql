SELECT U.UrunAd,M.MarkaAd,U.SonKullanmaTarih,U.Fiyat 
FROM urun AS U
INNER JOIN marka AS M
ON M.MarkaNo = U.MarkaNo
WHERE Fiyat = (SELECT MAX(Fiyat) FROM urun)


