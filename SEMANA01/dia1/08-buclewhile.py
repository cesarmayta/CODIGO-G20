contador = 1
while(contador <= 3):
    print(contador)
    contador += 1
    
resultado = 0
continuar = 'si'
while(continuar == 'si'):
    numero = int(input("ingrese un número : "))
    resultado += numero
    continuar = input("¿desea ingresar mas números?")
    
print(resultado)