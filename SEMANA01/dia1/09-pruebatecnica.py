"""
EJERCICIOS 02:
INGRESE UN TEXTO Y UN DIVISOR Y 
LUEGO MUESTRE EL MISMO TEXTO PERO DIVIDO POR EL DIVISOR
EJEMPLO:
INGRESO 
TEXTO = ABCDEFG
DIVISOR = 2
RESULTADO:
AB
CD
EF
G
"""
#ENTRADA
texto = input('ingrese un texto : ')
divisor = int(input('ingrese un divisor:'))
#PROCESO
# ['A','B','C','D','E','F','G']
# CONTADOR = 0,DIVISOR = 2
# CONTADOR = 2,CONTADOR + DIVISOR = 4
for contador in range(0,len(texto),divisor):
    #SALIDA
    salida = texto[contador:contador+divisor]
    print(salida)
    
    