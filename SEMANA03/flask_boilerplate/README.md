# Migraciones

## Instalar flask-migrate

```bash
pip install flask-migrate
```

## Inicializar migraciones (esto se hace una sola vez)

Este comando nos creará una carpeta llamada migrations con un archivo llamado alembic.ini y una carpeta llamada versions.

```bash
flask db init
```

## Generar las migraciones

Este comando nos creará un archivo en la carpeta versions con el nombre de la migración.

```bash
flask db migrate -m "Nombre de la migración"
```

## Aplicamos las migraciones 

Este comando nos aplicará las migraciones a la base de datos.

```bash
flask db upgrade
```
