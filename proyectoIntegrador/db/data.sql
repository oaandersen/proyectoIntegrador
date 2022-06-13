CREATE SCHEMA proyecto_db;

USE proyecto_db;

CREATE TABLE producto (
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
name 	 		  VARCHAR(50) 	NOT NULL,
email	  	      VARCHAR(50) 	NOT NULL,
password 		  VARCHAR(50) 	NOT NULL,
date	  DATE 		    	NOT NULL,
dni 		  	  INT           NOT NULL,
profile_img   VARCHAR(500) 	
);

CREATE TABLE comments (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name 			  	VARCHAR(50) 	NOT NULL,
user_id				INT				UNSIGNED,
producto_id 			INT				UNSIGNED,
comment 			VARCHAR(50) 	NOT NULL,
profile_img		VARCHAR(500) ,
FOREIGN KEY (user_id) REFERENCES user(id),
FOREIGN KEY (producto_id) REFERENCES producto(id)
);

CREATE TABLE followers(
id 	INT	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id_follower	INT 		UNSIGNED,
user_id_followed	INT			UNSIGNED,
FOREIGN KEY (user_id_follower) REFERENCES user(id),
FOREIGN KEY (user_id_followed) REFERENCES user(id)
);
/* Inserts users */
INSERT INTO user (id, email, name, password, date, dni, profile_img) 
VALUES (1, 'usuarioprueba@gmail.com','Usuario Prueba', 'contra','2001-01-01', 44444444, NULL);

/* Inserts producto */
INSERT INTO producto (id,image,brand,model,variant,year,description,upload_date) 
VALUES (1,'../public/images/products/Alfa-Romeo-4C-Spider-33 Stradale Tributo.jpeg','Alfa Romeo','4C','Spider 33 Stradale Tributo',2020,'Ninguna','2022-06-06');

INSERT INTO proyecto_db.producto (id, image, brand, model, year, description, upload_date) 
VALUES ('2', '../public/images/products/Aston_Martin-Valhalla-2022-1600-01.jpeg', 'Aston Martin', 'Valhalla', '2022', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('3', '../public/images/products/Audi-R8_V10_performance_RWD_Spyder-2022-1600-01.jpeg', 'Audi', 'R8', 'V10 performance RWD Spyder', '2022', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('4', '../public/images/products/BMW-M4_Competition_Coupe_M_xDrive-2022-1600-01.jpeg', 'BMW', 'M4', 'Competition Coupe M xdrive', '2022', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('5', '../public/images/products/Bentley-Flying_Spur-2020-1600-01.jpeg', 'Bentley', 'Mulliner', 'Flying Spur', '2022', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('6', '../public/images/products/Bugatti-Chiron_Super_Sport_300-2021-1600-01.jpeg', 'Bugatti ', 'Chiron', 'Super Sport 300', '2021', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('7', '../public/images/products/Cadillac-CT5-V_Blackwing-2022-1600-02.jpeg', 'Cadillac', 'CT5', 'V Blackwing', '2022', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('8', '../public/images/products/Chevrolet-Corvette_Z06-2023-1600-01.jpeg', 'Chevrolet', 'Corvette', 'Z06', '2023', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, year, description, upload_date) 
VALUES ('9', '../public/images/products/Chrysler-300-2015-1600-01.jpeg', 'Chrysler', '300', '2015', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('10', '../public/images/products/Dodge-Charger_SRT_Hellcat_Redeye-2021-1600-03.jpeg', 'Dodge  Charger', 'SRT Hellcat', 'Redeye', '2021', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('11', '../public/images/products/Ferrari-812_Competizione-2021-1600-01.jpeg', 'Ferrari', '812', 'Competizione', '2021', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('12', '../public/images/products/Ford-Mustang_Shelby_GT500-2022-1600-01.jpeg', 'Ford', 'Mustang', 'Shelby GT500', '2022', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, year, description, upload_date) 
VALUES ('13', '../public/images/products/GMC-Canyon-2021-1600-01.jpeg', 'GMC', 'Canyon', '2021', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('14', '../public/images/products/Honda-Civic_Type_R_Limited_Edition-2021-1600-01.jpeg', 'Honda', 'Civic', 'Type R Limited Edition', '2021', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('15', '../public/images/products/Jaguar-F-Type_Convertible-2021-1600-01.jpeg', 'Jaguar', 'F-Type', 'Convertible', '2021', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, year, description, upload_date) 
VALUES ('16', '../public/images/products/Jeep-Grand_Cherokee-2022-1600-01.jpeg', 'Jeep', 'Grand Cherokee', '2022', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, year, description, upload_date) 
VALUES ('17', '../public/images/products/Koenigsegg-Regera-2015-1600-01.jpeg', 'Koenigsegg', 'Regera', '2015', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('18', '../public/images/products/Lamborghini-Countach_LPI_800-4-2022-1600-03.jpeg', 'Lamborghini', 'Countach', 'LPI 800-4', '2022', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('19', '../public/images/products/Maserati-Quattroporte_Trofeo-2021-1600-01.jpeg', 'Maserati', 'Quattroporte', 'Trofeo', '2021', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, year, description, upload_date) 
VALUES ('20', '../public/images/products/McLaren-Elva-2021-1600-01.jpeg', 'McLaren', 'Elva', '2021', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('21', '../public/images/products/Mercedes-Benz-SL_63_AMG-2022-1600-01.jpeg', 'Mercedes-Benz', 'AMG', 'SL 63', '2022', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('22', '../public/images/products/Pagani-Huayra_Roadster_BC-2020-1600-01.jpeg', 'Pagani', 'Huayra', 'Roadster BC', '2020', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('23', '../public/images/products/Porsche-Taycan_Turbo_S_Sport_Turismo-2022-1600-01.jpeg', 'Porsche', 'Taycan', 'Turbo S Sport Turismo', '2022', 'Ninguna', '2022-06-08');

INSERT INTO proyecto_db.producto (id, image, brand, model, variant, year, description, upload_date) 
VALUES ('24', '../public/images/products/Rolls-Royce-Ghost_Black_Badge-2022-1600-01.jpeg', 'Rolls-Royce', 'Ghost', 'Black Badge', '2022', 'Ninguna', '2022-06-08');

/* Inserts comments */
INSERT INTO comments (id,name,comment,profile_img) VALUES (1,'Usuario Prueba','Este comentario es una prueba','../public/images/products/');
