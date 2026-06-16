CREATE TABLE marka (
  MarkaNo int(11) NOT NULL AUTO_INCREMENT,
  MarkaAd varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (MarkaNo)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
CREATE TABLE kategori (
  KategoriNo int(11) NOT NULL AUTO_INCREMENT,
  KategoriAd varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (KategoriNo)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE urun (
  UrunNo int(11) NOT NULL AUTO_INCREMENT,
  UrunAd varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  MarkaNo int(11) NOT NULL,
  KategoriNo int(11) NOT NULL,
  Fiyat float NOT NULL,
  SonKullanmaTarih date NOT NULL,
  Ozellik text COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (UrunNo),
  KEY fk_kategori (KategoriNo),
  KEY fk_marka (MarkaNo),
  KEY i_ozellik (Ozellik(1024)),
  CONSTRAINT fk_kategori FOREIGN KEY (KategoriNo) REFERENCES kategori (KategoriNo),
  CONSTRAINT fk_marka FOREIGN KEY (MarkaNo) REFERENCES marka (MarkaNo)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

