
USE producto;

CREATE TABLE vehiculo (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
imagen			    VARCHAR(300)		    	,
marca				    VARCHAR(50)		NOT NULL,
modelo		    	VARCHAR(50)		NOT NULL,
variante		    VARCHAR(50)	    			,
anio				    INT			     	NOT NULL,
descripcion	    VARCHAR(50)		NOT NULL,
fechaCarga	    DATE    			NOT NULL
);

CREATE TABLE usuario (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email 				  VARCHAR(50) NOT NULL,
usuario 			  VARCHAR(50) NOT NULL,
contrasenia 		VARCHAR(50) NOT NULL,
fecha_nacimiento 	DATE 			NOT NULL,
numero_documento 	INT 			NOT NULL,
foto_perfil 		VARCHAR(500) 	
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre 			  	VARCHAR(50) 	NOT NULL,
comentario 			VARCHAR(50) 	NOT NULL,
foto_perfil			VARCHAR(500) 	
);

INSERT INTO `` (`id`,`image`,`brand`,`model`,`variant`,`year`,`description`,`upload_date`) VALUES (1,'llll','Alfa Romeo','4C','Spider 33 Stradale Tributo',2020,'Ninguna','2022-06-06');
INSERT INTO `` (`id`,`name`,`comment`,`profile_img`) VALUES (1,'Usuario Prueba','Este comentario es una prueba','lll');
INSERT INTO `` (`id`,`email`,`user`,`password`,`birth_date`,`dni`,`profile_img`) VALUES (1,'usuarioprueba@gmail.com','Usuario Prueba','contraseniaprueba','2001-01-01',44444444,NULL);
