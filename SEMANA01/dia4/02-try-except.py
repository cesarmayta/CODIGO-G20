def dividir(dividendo, divisor):
    return dividendo / divisor

if __name__ == '__main__':
    try:
      dividendo = int(input("Ingrese el dividendo: "))
      divisor = int(input("Ingrese el divisor: "))
      resultado = dividir(dividendo, divisor)
      if resultado == 5:
        raise Exception("El resultado no deberia ser 5")
      print(resultado)
    # except ValueError as a:
    #    print("Solo se aceptan numeros enteros", a)
    # except ZeroDivisionError as e:
    #    print("No se puede dividir entre cero", e)
    except Exception as error:
       print(error)
    finally:
       print("Se ha finalizado el proceso")