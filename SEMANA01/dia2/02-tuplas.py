dias = ("lunes","martes","miercoles","jueves",'viernes')

print(dias)
dias = list(dias)
dias.append("sabado")
dias = tuple(dias)
print(dias)

for dia in dias:
    print(dia)