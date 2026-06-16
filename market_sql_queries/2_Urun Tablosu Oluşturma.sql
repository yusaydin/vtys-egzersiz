CREATE TABLE `urun` (
  `UrunNo` int(11) NOT NULL AUTO_INCREMENT,
  `UrunAd` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Kategori` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Marka` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Fiyat` float NOT NULL,
  `SonKullanmaTarihi` date NOT NULL,
  PRIMARY KEY (`UrunNo`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
