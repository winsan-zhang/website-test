CREATE DATABASE IF NOT EXISTS `html5`;
USE `html5`;

DROP TABLE IF EXISTS `html5_user`;
CREATE TABLE `html5_user`(
  `id` INT UNSIGNED AUTO_INCREMENT KEY,
  `username` CHAR(20) NOT NULL UNIQUE,
  `password` CHAR(32) NOT NULL,
  `regTime` INT UNSIGNED
)charset=`utf8`;