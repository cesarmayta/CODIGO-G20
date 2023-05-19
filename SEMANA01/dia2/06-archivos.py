f = open('empresas.txt','w')
f.write('1010,empresa1,lima')
f.close()

fr = open('empresas.txt','r')
data_empresas = fr.read()
print(data_empresas)
fr.close()