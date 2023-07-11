-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: db_pos_backend_g20
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_empleado`
--

DROP TABLE IF EXISTS `tbl_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_empleado` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `emp_foto` varchar(255) COLLATE utf8_bin NOT NULL,
  `emp_tipo` varchar(50) COLLATE utf8_bin NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `tbl_empleado_usuario_id_6fa89867_fk_auth_user_id` FOREIGN KEY (`usuario_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_empleado`
--

LOCK TABLES `tbl_empleado` WRITE;
/*!40000 ALTER TABLE `tbl_empleado` DISABLE KEYS */;
INSERT INTO `tbl_empleado` VALUES (1,'image/upload/v1688181865/gyd430ua1x2pqjdzset9.jpg','mozo',2);
/*!40000 ALTER TABLE `tbl_empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_categoria`
--

DROP TABLE IF EXISTS `tbl_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_categoria` (
  `categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria_nom` varchar(100) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_categoria`
--

LOCK TABLES `tbl_categoria` WRITE;
/*!40000 ALTER TABLE `tbl_categoria` DISABLE KEYS */;
INSERT INTO `tbl_categoria` VALUES (1,'ENTRADAS'),(2,'PRINCIPALES'),(3,'BEBIDAS'),(4,'POSTRES');
/*!40000 ALTER TABLE `tbl_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_mesa`
--

DROP TABLE IF EXISTS `tbl_mesa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_mesa` (
  `mesa_id` int(11) NOT NULL AUTO_INCREMENT,
  `mesa_nro` varchar(10) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`mesa_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_mesa`
--

LOCK TABLES `tbl_mesa` WRITE;
/*!40000 ALTER TABLE `tbl_mesa` DISABLE KEYS */;
INSERT INTO `tbl_mesa` VALUES (1,'1'),(2,'2'),(3,'3'),(4,'4'),(5,'5');
/*!40000 ALTER TABLE `tbl_mesa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_plato`
--

DROP TABLE IF EXISTS `tbl_plato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_plato` (
  `plato_id` int(11) NOT NULL AUTO_INCREMENT,
  `plato_nom` varchar(200) COLLATE utf8_bin NOT NULL,
  `plato_img` varchar(255) COLLATE utf8_bin NOT NULL,
  `plato_pre` decimal(10,2) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  PRIMARY KEY (`plato_id`),
  KEY `tbl_plato_categoria_id_cc821925_fk_tbl_categoria_categoria_id` (`categoria_id`),
  CONSTRAINT `tbl_plato_categoria_id_cc821925_fk_tbl_categoria_categoria_id` FOREIGN KEY (`categoria_id`) REFERENCES `tbl_categoria` (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_plato`
--

LOCK TABLES `tbl_plato` WRITE;
/*!40000 ALTER TABLE `tbl_plato` DISABLE KEYS */;
INSERT INTO `tbl_plato` VALUES (1,'TEQUEÑOS','image/upload/v1688005804/spg0lvq6hzna9shm7v7b.jpg',15.00,1),(2,'CAUSA','image/upload/v1688006026/nc5idxilvezmwpjavrjt.jpg',14.00,1),(3,'ceviche de pescado','image/upload/v1688006042/kfpvmvolqce1kt6fc0dv.png',20.00,2),(4,'arroz chaufa','image/upload/v1688006058/mping4r9xbc3t7kes7oz.webp',22.00,2),(5,'CUSQUEÑA TRIGO','image/upload/v1688006074/umuq6wlphv7oanvtdiaj.jpg',12.00,3),(6,'INKA KOLA','image/upload/v1688006088/cydalzpbtcacbpcwua7c.webp',7.00,3),(7,'PISCO SOUR','image/upload/http://res.cloudinary.com/dju8yfs37/image/upload/v1688228989/doulrsuqiyknvl8kymwa.jpg',10.00,3);
/*!40000 ALTER TABLE `tbl_plato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_pedido`
--

DROP TABLE IF EXISTS `tbl_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_pedido` (
  `pedido_id` int(11) NOT NULL AUTO_INCREMENT,
  `pedido_fech` datetime(6) DEFAULT NULL,
  `pedido_nro` varchar(100) COLLATE utf8_bin NOT NULL,
  `pedido_est` varchar(100) COLLATE utf8_bin NOT NULL,
  `mesa_id` int(11) NOT NULL,
  `usu_id` int(11) NOT NULL,
  PRIMARY KEY (`pedido_id`),
  KEY `tbl_pedido_mesa_id_111d7a6b_fk_tbl_mesa_mesa_id` (`mesa_id`),
  KEY `tbl_pedido_usu_id_d14c6130_fk_auth_user_id` (`usu_id`),
  CONSTRAINT `tbl_pedido_mesa_id_111d7a6b_fk_tbl_mesa_mesa_id` FOREIGN KEY (`mesa_id`) REFERENCES `tbl_mesa` (`mesa_id`),
  CONSTRAINT `tbl_pedido_usu_id_d14c6130_fk_auth_user_id` FOREIGN KEY (`usu_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_pedido`
--

LOCK TABLES `tbl_pedido` WRITE;
/*!40000 ALTER TABLE `tbl_pedido` DISABLE KEYS */;
INSERT INTO `tbl_pedido` VALUES (1,'2023-06-30 08:23:34.000000','48d36492-0d02-4e80-a7ee-98fb9ea4e379','solicitado',1,1),(2,'2023-06-30 08:24:06.000000','dbea9271-92bd-4b14-952e-01f37549828b','solicitado',1,1),(3,'2023-06-30 08:21:36.000000','8f6e9937-e7f8-49d9-86e3-09e8ab537146','solicitado',2,1),(4,'2023-06-30 08:31:23.000000','0da6d263-f665-44d8-89aa-0f4015c567c7','solicitado',3,1),(5,'2023-06-30 08:32:17.000000','8e00606e-4e3d-4acb-9e23-4d594b03b1b7','solicitado',4,1),(6,'2023-07-01 10:01:04.000000','c8bf3097-9729-4808-b1a0-b79a1b02a117','solicitado',1,1),(7,'2023-07-01 11:59:33.000000','1517cd3f-654b-41c6-94d7-8bb16fed4030','solicitado',1,1);
/*!40000 ALTER TABLE `tbl_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_pedido_plato`
--

DROP TABLE IF EXISTS `tbl_pedido_plato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_pedido_plato` (
  `pedidoplato_id` int(11) NOT NULL AUTO_INCREMENT,
  `pedidoplato_cant` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `plato_id` int(11) NOT NULL,
  PRIMARY KEY (`pedidoplato_id`),
  KEY `tbl_pedido_plato_pedido_id_03e70b3a_fk_tbl_pedido_pedido_id` (`pedido_id`),
  KEY `tbl_pedido_plato_plato_id_245e2de6_fk_tbl_plato_plato_id` (`plato_id`),
  CONSTRAINT `tbl_pedido_plato_pedido_id_03e70b3a_fk_tbl_pedido_pedido_id` FOREIGN KEY (`pedido_id`) REFERENCES `tbl_pedido` (`pedido_id`),
  CONSTRAINT `tbl_pedido_plato_plato_id_245e2de6_fk_tbl_plato_plato_id` FOREIGN KEY (`plato_id`) REFERENCES `tbl_plato` (`plato_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_pedido_plato`
--

LOCK TABLES `tbl_pedido_plato` WRITE;
/*!40000 ALTER TABLE `tbl_pedido_plato` DISABLE KEYS */;
INSERT INTO `tbl_pedido_plato` VALUES (1,1,1,1),(2,1,1,4),(3,1,1,6),(4,1,2,1),(5,1,2,4),(6,1,2,6),(7,1,3,1),(8,1,3,4),(9,1,4,2),(10,1,4,3),(11,1,4,5),(12,1,5,4),(13,1,5,6),(14,1,6,3),(15,1,6,5),(16,1,7,1),(17,1,7,7),(18,1,7,3);
/*!40000 ALTER TABLE `tbl_pedido_plato` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-10 19:37:25
