for contador in range(1,5,2):
    print(contador)
    
#crear un programa que pida ingresar un numero y muestra la tabla de multiplicar
#de este este del 1 al 12
tabla = input("Ingrese tabla a multiplicar : ")

for contador in range(1,13,1):
    resultado = contador * int(tabla)
    print(tabla," X ",contador," = ",resultado)