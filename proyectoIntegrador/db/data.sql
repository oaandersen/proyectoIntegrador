USE proyectointegrador;

/* Creamos tabla usuarios */
CREATE TABLE usuarios (
/*	nombreColumna		tipoDato		Restricciones*/
	  id	INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre 			    VARCHAR(50)			NOT NULL,
    apellido 		    VARCHAR(50)			NOT NULL,
    email 			    VARCHAR(50)			NOT NULL,
    usuario 		    VARCHAR(50)			NOT NULL,
    contrasenia 	    VARCHAR(50)			NOT NULL,
    fechaNacimiento	DATE 			    	NOT NULL,
    numeroDocumento	INT 			    	NOT NULL,
    foto			    VARCHAR(300)		
);

/* Creamos tabla productos */
CREATE TABLE `proyectointegrador`.`producto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `img` VARCHAR(45) NULL,
  `nombre_producto` VARCHAR(100) NULL,
  `descripcion` VARCHAR(300) NULL,
  `fecha_carga` DATE NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `proyectointegrador`.`comentarios` (
  `id` INT NOT NULL AUTO_INCREMENT, 
  `nombre` VARCHAR(50) NULL,
  `comentario` VARCHAR(300) NULL,
  `img_perfil` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
/* Script de carga */
