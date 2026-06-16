CREATE VIEW v_UrunBilgileri AS
SELECT U.UrunAd,K.KategoriAd,M.MarkaAd
FROM market.urun AS U
INNER JOIN kategori AS K
ON K.KategoriNo = U.KategoriNO
INNER JOIN marka AS M
ON M.MarkaNo = U.MarkaNo

