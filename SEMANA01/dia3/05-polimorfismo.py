class Persona:
    def __init__(self,nom,ema):
        self.nombre = nom
        self.email = ema
        
    def mostrar(self):
        print("NOMBRE : " + self.nombre)
        print("EMAIL : " + self.email)
        
class Alumno(Persona):
    
    def __init__(self,nom,ema,nota):
        super().__init__(nom,ema)
        self.nota = nota
        
    def mostrar(self):
        print('*'*20 + "DATOS DEL ALUMNO")
        super().mostrar()
        print('NOTA : ' + str(self.nota))
        
alumno1 = Alumno('carla perez','cperez@gmail.com',20)
alumno1.mostrar()