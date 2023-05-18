numero1 = input("Número 1 : ")
numero2 = input("Número 2 : ")
operacion = input("Operacion(suma,resta) : ")

if(operacion == "suma"):
    resultado = int(numero1) + int(numero2)
elif(operacion == "resta"):
    resultado = int(numero1) - int(numero2)
else:
    print("No se encontro la operación solicitada...")
    exit()
 
print("Resultado : " + str(resultado))