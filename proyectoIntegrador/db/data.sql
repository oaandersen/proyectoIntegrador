    CREATE SCHEMA proyecto_db;

    USE proyecto_db;

    CREATE TABLE user (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name 	 		    VARCHAR(50) 	    NOT NULL,
    email	  	        VARCHAR(50) 	    NOT NULL UNIQUE,
    password 		    VARCHAR(100) 	    NOT NULL,
    date	            DATE 		    	NOT NULL,
    dni 		  	    INT                 NOT NULL,
    profile_img         VARCHAR(500) 	
    );


    CREATE TABLE producto (
    id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT,
    image		        VARCHAR(300)	       	,
    brand			    VARCHAR(100)		NOT NULL,
    model		        VARCHAR(100)		NOT NULL,
    variant		        VARCHAR(100)	    NOT NULL ,
    year		        INT		     	    NOT NULL,
    description	        VARCHAR(500)		NOT NULL,
    upload_date	        DATE    		    NOT NULL,
    user_id				INT				    UNSIGNED,
    FOREIGN KEY (user_id) REFERENCES user(id)
    );

    CREATE TABLE comments (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    cm_user_id				INT				UNSIGNED,
    producto_id 			INT				UNSIGNED,
    comment 			VARCHAR(50) 	NOT NULL,
    FOREIGN KEY (cm_user_id) REFERENCES user(id),
    FOREIGN KEY (producto_id) REFERENCES producto(id)
    );

    CREATE TABLE followers(
    id 	INT	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id_follower	INT 		UNSIGNED,
    user_id_followed	INT			UNSIGNED,
    FOREIGN KEY (user_id_follower) REFERENCES user(id),
    FOREIGN KEY (user_id_followed) REFERENCES user(id)
    );

    /* Inserts producto */
    INSERT INTO producto (id,image,brand,model,variant,year,description,upload_date) 
    VALUES (1,'Alfa-Romeo-4C-Spider-33 Stradale Tributo.jpeg','Alfa Romeo','4C','Spider 33 Stradale Tributo',2020,'Ninguna descripcion ha sido detallada hasta el momento.','2022-06-06');

    INSERT INTO producto (id, image, brand, model,variant, year, description, upload_date) 
    VALUES ('2', 'Aston_Martin-Valhalla-2022-1600-01.jpeg', 'Aston Martin','S', 'Valhalla', '2022', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('3', 'Audi-R8_V10_performance_RWD_Spyder-2022-1600-01.jpeg', 'Audi', 'R8', 'V10 performance RWD Spyder', '2022', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('4', 'BMW-M4_Competition_Coupe_M_xDrive-2022-1600-01.jpeg', 'BMW', 'M4', 'Competition Coupe M xdrive', '2022', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('5', 'Bentley-Flying_Spur-2020-1600-01.jpeg', 'Bentley', 'Mulliner', 'Flying Spur', '2022', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('6', 'Bugatti-Chiron_Super_Sport_300-2021-1600-01.jpeg', 'Bugatti ', 'Chiron', 'Super Sport 300', '2021', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('7', 'Cadillac-CT5-V_Blackwing-2022-1600-02.jpeg', 'Cadillac', 'CT5', 'V Blackwing', '2022', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('8', 'Chevrolet-Corvette_Z06-2023-1600-01.jpeg', 'Chevrolet', 'Corvette', 'Z06', '2023', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('9', 'Chrysler-300-2015-1600-01.jpeg', 'Chrysler','S', '300', '2015', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('10', 'Dodge-Charger_SRT_Hellcat_Redeye-2021-1600-03.jpeg', 'Dodge  Charger', 'SRT Hellcat', 'Redeye', '2021', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('11', 'Ferrari-812_Competizione-2021-1600-01.jpeg', 'Ferrari', '812', 'Competizione', '2021', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('12', 'Ford-Mustang_Shelby_GT500-2022-1600-01.jpeg', 'Ford', 'Mustang', 'Shelby GT500', '2022', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('13', 'GMC-Canyon-2021-1600-01.jpeg', 'GMC', 'Canyon', 'S', '2021', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('14', 'Honda-Civic_Type_R_Limited_Edition-2021-1600-01.jpeg', 'Honda', 'Civic', 'Type R Limited Edition', '2021', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('15', 'Jaguar-F-Type_Convertible-2021-1600-01.jpeg', 'Jaguar', 'F-Type', 'Convertible', '2021', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('16', 'Jeep-Grand_Cherokee-2022-1600-01.jpeg', 'Jeep', 'Grand Cherokee', 'S', '2022', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, Variant, year, description, upload_date) 
    VALUES ('17', 'Koenigsegg-Regera-2015-1600-01.jpeg', 'Koenigsegg', 'Regera', 'S', '2015', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('18', 'Lamborghini-Countach_LPI_800-4-2022-1600-03.jpeg', 'Lamborghini', 'Countach', 'LPI 800-4', '2022', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('19', 'Maserati-Quattroporte_Trofeo-2021-1600-01.jpeg', 'Maserati', 'Quattroporte', 'Trofeo', '2021', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('20', 'McLaren-Elva-2021-1600-01.jpeg', 'McLaren', 'Elva', 'S', '2021', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('21', 'Mercedes-Benz-SL_63_AMG-2022-1600-01.jpeg', 'Mercedes-Benz', 'AMG', 'SL 63', '2022', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('22', 'Pagani-Huayra_Roadster_BC-2020-1600-01.jpeg', 'Pagani', 'Huayra', 'Roadster BC', '2020', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('23', 'Porsche-Taycan_Turbo_S_Sport_Turismo-2022-1600-01.jpeg', 'Porsche', 'Taycan', 'Turbo S Sport Turismo', '2022', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    INSERT INTO producto (id, image, brand, model, variant, year, description, upload_date) 
    VALUES ('24', 'Rolls-Royce-Ghost_Black_Badge-2022-1600-01.jpeg', 'Rolls-Royce', 'Ghost', 'Black Badge', '2022', 'Ninguna descripcion ha sido detallada hasta el momento.', '2022-06-08');

    /* Inserts users */

INSERT INTO `user` (`id`,`name`,`email`,`password`,`date`,`dni`,`profile_img`) 
VALUES (1,'Julian Araujo','araujoj@udesa.edu.ar','$2a$10$w3oGpY63peygRjhjwoaLRu1Q5BkJQohUZopnh/2v.eBfMKmG5qVZy','2001-12-20',43724883,'imgPerfil-1655927750080.jpg');

INSERT INTO `user` (`id`,`name`,`email`,`password`,`date`,`dni`,`profile_img`) 
VALUES (2,'Oliver Andersen','oandersen@udesa.edu.ar','$2a$10$w6BVm8B6mIJ5Hmpl2K.wF.UV/oW.BdZFX3gdKSkr2/SlZNV7h4iOC','2002-07-22',44738639,'imgPerfil-1655927839296.png');

INSERT INTO `user` (`id`,`name`,`email`,`password`,`date`,`dni`,`profile_img`) 
VALUES (3,'Nicolas Tufro','ntufro@udesa.edu.ar','$2a$10$lyq4x6Dg62WpuiuP2CC4tOAhorY29jSTQS6zvyIo9nUYE6bFKof.y','2002-08-05',44238393,'imgPerfil-1655927932941.jpeg');


    /* Inserts comments */

    INSERT INTO `proyecto_db`.`comments` (`cm_user_id`, `producto_id`, `comment`) 
    VALUES ('1', '7', 'Me encanta este auto, es mi favorito!');  

    INSERT INTO `proyecto_db`.`comments` (`cm_user_id`, `producto_id`, `comment`) 
    VALUES ('1', '23', 'Creo que lo voy a agregar a mi coleccion.');

    INSERT INTO `proyecto_db`.`comments` (`cm_user_id`, `producto_id`, `comment`) 
    VALUES ('1', '14', 'Definitivamente lo vale, mira que belleza!');





