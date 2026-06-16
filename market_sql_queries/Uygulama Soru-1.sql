-- 1-) Müşterilerin satın almış oldukları müşteriad müşteri soyad,urunno,urunad,fiyat,şatış tarihi ürünleri listeleyiniz. 
-- Yiğit Açıkgöz  Cevapladı
SELECT M.Ad,M.Soyad,U.UrunNo,U.UrunAd,U.Fiyat,S.Tarih FROM satis AS S
INNER JOIN urun AS U
ON S.UrunNo = U.UrunNo
INNER JOIN musteri AS M
ON M.MusteriNo = S.MusteriNo;
