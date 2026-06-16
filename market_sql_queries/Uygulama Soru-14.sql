-- 14-) Müşterilerin hangi markalardan alış veriş yaptığını listeleyen sorguyu yazınız.
--  Muhammed Diri Cevapladı
SELECT mu.MusteriNo,mu.Ad,u.UrunAd,m.MarkaNo,m.MarkaAd FROM market.musteri as mu
inner join market.satis as s
on mu.MusteriNo = s.MusteriNo
inner join market.urun as u
on s.UrunNo = u.UrunNo
inner join market.marka as m
on u.MarkaNo = m.MarkaNo;