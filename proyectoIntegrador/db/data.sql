CREATE SCHEMA proyecto_db;

USE proyecto_db;

CREATE TABLE vehicles (
id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT,
image		      VARCHAR(300)	       	,
brand			    VARCHAR(50)		NOT NULL,
model		      VARCHAR(50)		NOT NULL,
variant		    VARCHAR(50)	      		,
year		      INT		     	  NOT NULL,
description	  VARCHAR(50)		NOT NULL,
upload_date	  DATE    		  NOT NULL
);

CREATE TABLE user (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user 	 		  VARCHAR(50) 	NOT NULL,
email	  	      VARCHAR(50) 	NOT NULL,
password 		  VARCHAR(50) 	NOT NULL,
date	  DATE 		    	NOT NULL,
dni 		  	  INT           NOT NULL,
profile_img   VARCHAR(500) 	
);

CREATE TABLE comments (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name 			  	VARCHAR(50) 	NOT NULL,
comment 			VARCHAR(50) 	NOT NULL,
profile_img		VARCHAR(500) 	
);
/* Inserts users */
INSERT INTO `user` (`id`,`email`,`user`,`password`,`birth_date`,`dni`,`profile_img`) VALUES (1,'usuarioprueba@gmail.com','Usuario Prueba','contraseniaprueba','2001-01-01',44444444,NULL);

/* Inserts vehicles */
INSERT INTO `vehicles` (`id`,`image`,`brand`,`model`,`variant`,`year`,`description`,`upload_date`) VALUES (1,'llll','Alfa Romeo','4C','Spider 33 Stradale Tributo',2020,'Ninguna','2022-06-06');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `year`, `description`, `upload_date`) VALUES ('2', 'llll', 'Aston Martin', 'Valhalla', '2022', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('3', 'llll', 'Audi', 'R8', 'V10 performance RWD Spyder', '2022', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('4', 'llll', 'BMW', 'M4', 'Competition Coupe M xdrive', '2022', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('5', 'llll', 'Bentley', 'Mulliner', 'Flying Spur', '2022', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('6', 'llll', 'Bugatti ', 'Chiron', 'Super Sport 300', '2021', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('7', 'lll', 'Cadillac', 'CT5', 'V Blackwing', '2022', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('8', 'lll', 'Chevrolet', 'Corvette', 'Z06', '2023', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `year`, `description`, `upload_date`) VALUES ('9', 'lll', 'Chrysler', '300', '2015', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('10', 'lll', 'Dodge  Charger', 'SRT Hellcat', 'Redeye', '2021', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('11', 'lll', 'Ferrari', '812', 'Competizione', '2021', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('12', 'lll', 'Ford', 'Mustang', 'Shelby GT500', '2022', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `year`, `description`, `upload_date`) VALUES ('13', 'lll', 'GMC', 'Canyon', '2021', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('14', 'lll', 'Honda', 'Civic', 'Type R Limited Edition', '2021', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('15', 'lll', 'Jaguar', 'F-Type', 'Convertible', '2021', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `year`, `description`, `upload_date`) VALUES ('16', 'lll', 'Jeep', 'Grand Cherokee', '2022', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `year`, `description`, `upload_date`) VALUES ('17', 'lll', 'Koenigsegg', 'Regera', '2015', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('18', 'lll', 'Lamborghini', 'Countach', 'LPI 800-4', '2022', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('19', 'lll', 'Maserati', 'Quattroporte', 'Trofeo', '2021', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `year`, `description`, `upload_date`) VALUES ('20', 'lll', 'McLaren', 'Elva', '2021', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('21', 'lll', 'Mercedes-Benz', 'AMG', 'SL 63', '2022', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('22', 'lll', 'Pagani', 'Huayra', 'Roadster BC', '2020', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('23', 'lll', 'Porsche', 'Taycan', 'Turbo S Sport Turismo', '2022', 'Ninguna', '2022-06-08');
INSERT INTO `proyecto_db`.`vehicles` (`id`, `image`, `brand`, `model`, `variant`, `year`, `description`, `upload_date`) VALUES ('24', 'lll', 'Rolls-Royce', 'Ghost', 'Black Badge', '2022', 'Ninguna', '2022-06-08');

/* Inserts comments */
INSERT INTO `comments` (`id`,`name`,`comment`,`profile_img`) VALUES (1,'Usuario Prueba','Este comentario es una prueba','lll');
