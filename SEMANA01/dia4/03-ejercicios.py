# Ejercicio: Invertir una oración
# input: años 6 kitty
# output: kitty 6 años

def solucion(sentencia):
    nueva_sentencia = sentencia.split(" ")[::-1]
    resultado = ""
    for palabra in nueva_sentencia:
        resultado = resultado + palabra + " "
    resultado.strip()
    return resultado

if __name__ == '__main__':
    sentencia = input("Ingrese una oración: ")
    resultado = solucion(sentencia)
    print(resultado)