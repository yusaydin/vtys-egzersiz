-- Vestel Buzdolabı isimli ürünün marka değerinin vestel olarak güncellenmesi
UPDATE `market`.`urun`
SET `MarkaNo` = (SELECT MarkaNo FROM marka WHERE MarkaAd='Vestel')
WHERE `UrunNo` = (SELECT UrunNo FROM urun WHERE UrunAd='Vestel Buzdolabı');
