# Visualizar una base de datos
SHOW DATABASES;

# Crear un base de datos
CREATE DATABASE codigo;

# Crear una tabla
CREATE TABLE alumnos(
	id int,
    nombre varchar(255),
    apellido varchar(255)
);

# Seleccionar tablar
SELECT * FROM codigo.alumnos;

# Insertar datos en una tabla
INSERT INTO codigo.alumnos (
	id,
    nombre,
    apellido
) VALUES (
	1,
    'Cesar',
    'Mayta'
);

# Insertar datos en grupo
INSERT INTO codigo.alumnos (
	id,
    nombre,
    apellido
) VALUES
(2, 'Miguel', 'Ramos'),
(3, 'Eduardo', 'De Rivero'),
(4, 'Jose', 'Rivas'),
(5, 'Jorge', 'Garnica'),
(6, 'Paolo', 'Guerrero'),
(7, 'Jefferson', 'Farfan'),
(8, 'Cristiano', 'Ronaldo'),
(9, 'Lionel', 'Messi'),
(10, 'Neymar', 'Jr');

# Consultar algunas columnas de una tabla
SELECT id, nombre FROM codigo.alumnos;

# Sentencia WHERE
SELECT id, nombre FROM codigo.alumnos WHERE id > 4;

# Operadores AND, OR, NOT
SELECT * FROM codigo.alumnos WHERE id < 8 AND id > 3;

# Order By
SELECT * FROM codigo.alumnos ORDER BY nombre DESC;
SELECT * FROM codigo.alumnos ORDER BY apellido DESC, nombre ASC;

# Update
SET SQL_SAFE_UPDATES = 0;
UPDATE codigo.alumnos
SET nombre = 'Alfred', apellido = 'Sanchez'
WHERE id = 4;
SET SQL_SAFE_UPDATES = 1;

# Delete
SET SQL_SAFE_UPDATES = 0;
DELETE FROM codigo.alumnos WHERE id = 10;
SET SQL_SAFE_UPDATES = 1;

# Like
SELECT * FROM codigo.alumnos;
SELECT * FROM codigo.alumnos WHERE nombre LIKE 'c%';
SELECT * FROM codigo.alumnos WHERE nombre LIKE '%o';
SELECT * FROM codigo.alumnos WHERE nombre LIKE '%e%';
SELECT * FROM codigo.alumnos WHERE nombre LIKE '_e%';
SELECT * FROM codigo.alumnos WHERE nombre LIKE '__o%';
SELECT * FROM codigo.alumnos WHERE id REGEXP '[0-5]';
