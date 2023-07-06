-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: db_ofertas
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
-- Table structure for table `tbl_categoria`
--

DROP TABLE IF EXISTS `tbl_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_categoria` (
  `categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria_descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_categoria`
--

LOCK TABLES `tbl_categoria` WRITE;
/*!40000 ALTER TABLE `tbl_categoria` DISABLE KEYS */;
INSERT INTO `tbl_categoria` VALUES (1,'FRONTEND DEVELOPER'),(2,'BACKEND'),(3,'fullstack developer'),(4,'MOBILE DEV'),(5,'python'),(8,'data engineer'),(13,'UI/UX'),(14,'python developer'),(15,''),(16,'asdfas'),(17,'PROJECT MANAGER');
/*!40000 ALTER TABLE `tbl_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_empresa`
--

DROP TABLE IF EXISTS `tbl_empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_empresa` (
  `empresa_id` int(11) NOT NULL AUTO_INCREMENT,
  `empresa_nombre` varchar(255) NOT NULL,
  `empresa_descripcion` longtext,
  `empresa_logo` varchar(255) DEFAULT NULL,
  `empresa_beneficios` longtext,
  PRIMARY KEY (`empresa_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_empresa`
--

LOCK TABLES `tbl_empresa` WRITE;
/*!40000 ALTER TABLE `tbl_empresa` DISABLE KEYS */;
INSERT INTO `tbl_empresa` VALUES (1,'CODIGO.EDU.PE','Bootcamp de codigo','https://rlcingenieros.com/web/wp-content/uploads/2019/12/logo07.jpg',NULL),(2,'ad','asdf','18268213_1.jfif',NULL),(3,'GLOBANT PERU SAC','GLOBANT international company','https://www.globant.com/themes/custom/globant_corp_theme/images/2019/globant-logo-dark.svg','trabaja desde donde quieras'),(4,'GLOBANT PERU SAC','GLOBANT international company',NULL,NULL);
/*!40000 ALTER TABLE `tbl_empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_experiencia`
--

DROP TABLE IF EXISTS `tbl_experiencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_experiencia` (
  `experiencia_id` int(11) NOT NULL AUTO_INCREMENT,
  `experiencia_descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`experiencia_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_experiencia`
--

LOCK TABLES `tbl_experiencia` WRITE;
/*!40000 ALTER TABLE `tbl_experiencia` DISABLE KEYS */;
INSERT INTO `tbl_experiencia` VALUES (1,'Junior');
/*!40000 ALTER TABLE `tbl_experiencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_jornada`
--

DROP TABLE IF EXISTS `tbl_jornada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_jornada` (
  `jornada_id` int(11) NOT NULL AUTO_INCREMENT,
  `jornada_descripcion` varchar(45) NOT NULL,
  PRIMARY KEY (`jornada_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_jornada`
--

LOCK TABLES `tbl_jornada` WRITE;
/*!40000 ALTER TABLE `tbl_jornada` DISABLE KEYS */;
INSERT INTO `tbl_jornada` VALUES (5,'TIEMPO COMPLETOD');
/*!40000 ALTER TABLE `tbl_jornada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_modalidad`
--

DROP TABLE IF EXISTS `tbl_modalidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_modalidad` (
  `modalidad_id` int(11) NOT NULL AUTO_INCREMENT,
  `modalidad_descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`modalidad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_modalidad`
--

LOCK TABLES `tbl_modalidad` WRITE;
/*!40000 ALTER TABLE `tbl_modalidad` DISABLE KEYS */;
INSERT INTO `tbl_modalidad` VALUES (1,'Remoto'),(2,'presencial'),(3,'Hibrido'),(4,'freelance'),(5,'asdf');
/*!40000 ALTER TABLE `tbl_modalidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_oferta`
--

DROP TABLE IF EXISTS `tbl_oferta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_oferta` (
  `oferta_id` int(11) NOT NULL AUTO_INCREMENT,
  `oferta_fregistro` date NOT NULL,
  `oferta_titulo` varchar(255) NOT NULL,
  `oferta_descripcion` longtext,
  `oferta_requerimientos` longtext,
  `oferta_salario` double NOT NULL,
  `oferta_url` varchar(255) DEFAULT NULL,
  `empresa_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `experiencia_id` int(11) NOT NULL,
  `jornada_id` int(11) NOT NULL,
  `modalidad_id` int(11) NOT NULL,
  PRIMARY KEY (`oferta_id`),
  KEY `fk_tbl_oferta_tbl_empresa` (`empresa_id`),
  KEY `fk_tbl_oferta_tbl_categoria1` (`categoria_id`),
  KEY `fk_tbl_oferta_tbl_experiencia1` (`experiencia_id`),
  KEY `fk_tbl_oferta_tbl_jornada1` (`jornada_id`),
  KEY `fk_tbl_oferta_tbl_modalidad1` (`modalidad_id`),
  CONSTRAINT `fk_tbl_oferta_tbl_categoria1` FOREIGN KEY (`categoria_id`) REFERENCES `tbl_categoria` (`categoria_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_oferta_tbl_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `tbl_empresa` (`empresa_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_oferta_tbl_experiencia1` FOREIGN KEY (`experiencia_id`) REFERENCES `tbl_experiencia` (`experiencia_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_oferta_tbl_jornada1` FOREIGN KEY (`jornada_id`) REFERENCES `tbl_jornada` (`jornada_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_oferta_tbl_modalidad1` FOREIGN KEY (`modalidad_id`) REFERENCES `tbl_modalidad` (`modalidad_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_oferta`
--

LOCK TABLES `tbl_oferta` WRITE;
/*!40000 ALTER TABLE `tbl_oferta` DISABLE KEYS */;
INSERT INTO `tbl_oferta` VALUES (1,'2023-03-09','Python developer','necesito un python developer','que se egresado de codigo',7000,'https://cesarmayta.github.io/',1,3,1,5,4),(2,'2023-03-09','React Developer','react para crear proyecto para codigo','egresado de codigo',5000,'https://cesarmayta.github.io/',1,1,1,5,1);
/*!40000 ALTER TABLE `tbl_oferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_oferta_etapa`
--

DROP TABLE IF EXISTS `tbl_oferta_etapa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_oferta_etapa` (
  `oferta_etapa_id` int(11) NOT NULL AUTO_INCREMENT,
  `oferta_etapa_descripcion` varchar(255) NOT NULL,
  `oferta_etapa_posterior_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`oferta_etapa_id`),
  KEY `fk_tbl_oferta_etapa_tbl_oferta_etapa1` (`oferta_etapa_posterior_id`),
  CONSTRAINT `fk_tbl_oferta_etapa_tbl_oferta_etapa1` FOREIGN KEY (`oferta_etapa_posterior_id`) REFERENCES `tbl_oferta_etapa` (`oferta_etapa_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_oferta_etapa`
--

LOCK TABLES `tbl_oferta_etapa` WRITE;
/*!40000 ALTER TABLE `tbl_oferta_etapa` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_oferta_etapa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_oferta_postulante`
--

DROP TABLE IF EXISTS `tbl_oferta_postulante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_oferta_postulante` (
  `oferta_postulante_id` int(11) NOT NULL AUTO_INCREMENT,
  `oferta_postulante_fregistro` date NOT NULL,
  `oferta_postulante_seleccionado` char(1) NOT NULL DEFAULT '0',
  `oferta_id` int(11) NOT NULL,
  `postulante_id` int(11) NOT NULL,
  `oferta_etapa_id` int(11) NOT NULL,
  PRIMARY KEY (`oferta_postulante_id`),
  KEY `fk_tbl_oferta_postulante_tbl_oferta1` (`oferta_id`),
  KEY `fk_tbl_oferta_postulante_tbl_postulante1` (`postulante_id`),
  KEY `fk_tbl_oferta_postulante_tbl_oferta_etapa1` (`oferta_etapa_id`),
  CONSTRAINT `fk_tbl_oferta_postulante_tbl_oferta1` FOREIGN KEY (`oferta_id`) REFERENCES `tbl_oferta` (`oferta_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_oferta_postulante_tbl_oferta_etapa1` FOREIGN KEY (`oferta_etapa_id`) REFERENCES `tbl_oferta_etapa` (`oferta_etapa_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_oferta_postulante_tbl_postulante1` FOREIGN KEY (`postulante_id`) REFERENCES `tbl_postulante` (`postulante_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_oferta_postulante`
--

LOCK TABLES `tbl_oferta_postulante` WRITE;
/*!40000 ALTER TABLE `tbl_oferta_postulante` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_oferta_postulante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_postulante`
--

DROP TABLE IF EXISTS `tbl_postulante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_postulante` (
  `postulante_id` int(11) NOT NULL AUTO_INCREMENT,
  `postulante_nombres` varchar(255) NOT NULL,
  `postulante_apellidos` varchar(255) NOT NULL,
  `postulante_doc_identidad` varchar(255) DEFAULT NULL,
  `postulante_tipodoc_ide` int(11) NOT NULL DEFAULT '1',
  `postulante_fnacimiento` date NOT NULL,
  `postulante_celular` varchar(100) DEFAULT NULL,
  `postulante_email` varchar(255) DEFAULT NULL,
  `postulante_estado` char(1) DEFAULT '1',
  PRIMARY KEY (`postulante_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_postulante`
--

LOCK TABLES `tbl_postulante` WRITE;
/*!40000 ALTER TABLE `tbl_postulante` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_postulante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_postulante_estudio`
--

DROP TABLE IF EXISTS `tbl_postulante_estudio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_postulante_estudio` (
  `postulante_estudio_id` int(11) NOT NULL,
  `postulante_estudio_lugar` varchar(255) NOT NULL,
  `postulante_estudio_especialidad` varchar(255) NOT NULL,
  `postulante_estudio_finicio` date NOT NULL,
  `postulante_estudio_ffin` date NOT NULL,
  `postulante_estudio_sinterminar` char(1) NOT NULL DEFAULT '0',
  `tbl_postulante_postulante_id` int(11) NOT NULL,
  PRIMARY KEY (`postulante_estudio_id`),
  KEY `fk_tbl_postulante_estudio_tbl_postulante1` (`tbl_postulante_postulante_id`),
  CONSTRAINT `fk_tbl_postulante_estudio_tbl_postulante1` FOREIGN KEY (`tbl_postulante_postulante_id`) REFERENCES `tbl_postulante` (`postulante_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_postulante_estudio`
--

LOCK TABLES `tbl_postulante_estudio` WRITE;
/*!40000 ALTER TABLE `tbl_postulante_estudio` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_postulante_estudio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_postulante_experiencia`
--

DROP TABLE IF EXISTS `tbl_postulante_experiencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_postulante_experiencia` (
  `postulante_experiencia` int(11) NOT NULL AUTO_INCREMENT,
  `postulante_experiencia_empresa` varchar(255) NOT NULL,
  `postulante_experiencia_cargo` varchar(255) NOT NULL,
  `postulante_experiencia_resumen` longtext,
  `postulante_experiencia_finicio` date NOT NULL,
  `postulante_experiencia_ffin` date DEFAULT NULL,
  `postulante_experiencia_vigente` char(1) NOT NULL DEFAULT '0',
  `postulante_id` int(11) NOT NULL,
  PRIMARY KEY (`postulante_experiencia`),
  KEY `fk_tbl_postulante_experiencia_tbl_postulante1` (`postulante_id`),
  CONSTRAINT `fk_tbl_postulante_experiencia_tbl_postulante1` FOREIGN KEY (`postulante_id`) REFERENCES `tbl_postulante` (`postulante_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_postulante_experiencia`
--

LOCK TABLES `tbl_postulante_experiencia` WRITE;
/*!40000 ALTER TABLE `tbl_postulante_experiencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_postulante_experiencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_usuario`
--

DROP TABLE IF EXISTS `tbl_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_usuario` (
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_nombre` varchar(200) NOT NULL,
  `usuario_password` varchar(200) NOT NULL,
  PRIMARY KEY (`usuario_id`),
  UNIQUE KEY `usuario_nombre` (`usuario_nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_usuario`
--

LOCK TABLES `tbl_usuario` WRITE;
/*!40000 ALTER TABLE `tbl_usuario` DISABLE KEYS */;
INSERT INTO `tbl_usuario` VALUES (1,'admin','$2a$10$82htOmqWOF67SUWcHyQ4huXPdbv4Sv9dGzmaYb/Nm61LA7sGJLSja'),(3,'cmayta','$2a$10$5QVFEFmgYdNWnTPhLA6iL.mt13GbD0MMJPcpuegqZZjvLduDn96iy');
/*!40000 ALTER TABLE `tbl_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_ofertas'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-05 19:43:37
