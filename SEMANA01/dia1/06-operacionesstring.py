mensaje = "Hola Mundo"
#len : obtiene la longitud de una cadena de texto
#['H','o','l','a',' ','M','u','n','d','o']
print(len(mensaje))
#find : busca un texto dentro de otro texto
mensaje2 = mensaje.find("a")
print(mensaje2)
#replace : reemplaza un texto por otro
mensaje3 = mensaje.replace("l","P")
print(mensaje3)
print(mensaje.upper())
print(mensaje.lower())

#cortar una cadena de texto
#['H','o','l','a',' ','M','u','n','d','o']
mensaje4 = mensaje[2:7]
print(mensaje4)

for letra in mensaje:
    print(letra)
    
mensaje5 = mensaje[:5]
print(mensaje5)

mensaje6 = mensaje[::-1]
print(mensaje6)