## No olvidar las variables de entorno
```
FLASK_APP = run.py
FLASK_DEBUG = True
```
## Archivo yaml para swagger

Este archivo solo nos sirve para hacer la conversion a json, luego de haber usado el editor de swagger

## Renderizar la ruta swagger

Para renderizar el swagger primero tenemos que crear una ruta `/swagger.json` que será consumido por el html `/templates/swagger.html`