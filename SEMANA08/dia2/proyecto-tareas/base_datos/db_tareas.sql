
-- Volcando estructura para tabla db_tareas.tarea
CREATE TABLE IF NOT EXISTS `tarea` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(200) NOT NULL,
  `estado` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_tareas.tarea: ~4 rows (aproximadamente)
INSERT INTO `tarea` (`id`, `descripcion`, `estado`) VALUES
	(1, 'Estudiar python', 'pendiente'),
	(2, 'repasar clase de profe cesar', 'pendiente'),
	(3, 'crear frontend de proyecto api', 'pendiente'),
	(4, 'crear app en react', 'pendiente');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
