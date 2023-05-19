import os
import time
"""
CRUD
C = CREATE
R = READ
U = UPDATE
D = DELETE
"""
empresa = {
    'ruc':'20520549740',
    'razon_social':'1 ONE S.A.C.',
    'ciudad':'LIMA'
}
listaEmpresas = []
opcion = 0
ANCHO = 50
while(opcion != 5):
    #time.sleep(1)
    print("="*ANCHO)
    print(" "*int(ANCHO/5) + "REGISTRO DE EMPRESAS PERUANAS")
    print("="*ANCHO)
    print("""
          [1] REGISTRAR EMPRESA
          [2] LISTADO DE EMPRESAS
          [3] ACTUALIZAR EMPRESA
          [4] ELIMINAR EMPRESA
          [5] SALIR DEL PROGRAMA
          """)
    print("="*ANCHO)
    opcion = int(input("INGRESE UNA OPCIÓN DEL MENU :"))
    os.system("clear")
    print("su opción es : " + str(opcion))
    time.sleep(1)
    os.system("clear")
    time.sleep(1)