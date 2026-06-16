-- Ürün tablosundaki Kategori sütunun KategoriNo 
-- olarak değiştirilmesi ve yabancı anahtar özelliği verilmesi
ALTER TABLE `market`.`urun` 
CHANGE COLUMN `Kategori` `KategoriNo` INT(11) NOT NULL ;
ALTER TABLE `market`.`urun` 
ADD CONSTRAINT `fk_kategori`
  FOREIGN KEY (`KategoriNo`)
  REFERENCES `market`.`kategori` (`KategoriNo`);