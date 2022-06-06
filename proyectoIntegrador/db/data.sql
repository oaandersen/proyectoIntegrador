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
email 			  VARCHAR(50) 	NOT NULL,
user 		  	  VARCHAR(50) 	NOT NULL,
password 		  VARCHAR(50) 	NOT NULL,
birth_date 	  DATE 		    	NOT NULL,
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
INSERT INTO `` (`id`,`email`,`user`,`password`,`birth_date`,`dni`,`profile_img`) VALUES (1,'usuarioprueba@gmail.com','Usuario Prueba','contraseniaprueba','2001-01-01',44444444,NULL);

/* Inserts vehicles */
INSERT INTO `` (`id`,`image`,`brand`,`model`,`variant`,`year`,`description`,`upload_date`) VALUES (1,'llll','Alfa Romeo','4C','Spider 33 Stradale Tributo',2020,'Ninguna','2022-06-06');

/* Inserts comments */
INSERT INTO `` (`id`,`name`,`comment`,`profile_img`) VALUES (1,'Usuario Prueba','Este comentario es una prueba','lll');
