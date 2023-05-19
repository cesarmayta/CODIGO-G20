dias = ['lunes','martes','miercoles']
print(dias)
print(dias[0])
print(dias[0:2])
#agregar valor a una lista
dias.append('jueves')
print(dias)
dias.append(5)
print(dias)
#eliminar un valor de la lista
dias.pop(1)
print(dias)
del dias[1:3]
print(dias)
#actualizar un valor de la lista
dias[1] = "martes"
print(dias)

#recorrer una lista
print("for 1 : ")
for contador in range(len(dias)):
    print(dias[contador])
print("for 2 : ")
for dia in dias:
    print("este es el día " + dia)