## Para crear un entorno virtual con python
```
python -m venv nombre_entorno
```

## Para activar el entorno virtual
```
# Windows
nombre_entorno\Scripts\activate

# Linux
source nombre_entorno/bin/activate

# Mac
source nombre_entorno/bin/activate

# git bash
source nombre_entorno/Scripts/activate
```

## Para desactivar el entorno virtual
```
deactivate
```

## Para instalar las dependencias
```
pip install nombre_paquete
```

## Para crear un archivo de requerimientos
```
pip freeze > requirements.txt
```

## Para instalar las dependencias de un archivo de requerimientos
```
pip install -r requirements.txt
```