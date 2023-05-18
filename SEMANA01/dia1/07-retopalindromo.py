"""
crear un programa que ingrese un texto y indique si es palindromo o no
palindromo es cuando un texto se lee igual al derecho y al reves
ejemplo:
oso
ana
anita lava la tina
atar a la rata
"""
fraseInicial = input("escribe una frase : ")
fraseInicial = fraseInicial.replace(' ','')
fraseInicial = fraseInicial.lower()
fraseReversa = fraseInicial[::-1]
if(fraseInicial == fraseReversa):
    print(" es un palindromo")
else:
    print("no es palindromo")