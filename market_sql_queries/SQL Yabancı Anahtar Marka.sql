ALTER TABLE `market`.`urun` 
CHANGE COLUMN `Marka` `MarkaNo` INT(11) NOT NULL;
ALTER TABLE `market`.`urun` 
ADD CONSTRAINT `fk_marka`
  FOREIGN KEY (`MarkaNo`)
  REFERENCES `market`.`marka` (`MarkaNo`);