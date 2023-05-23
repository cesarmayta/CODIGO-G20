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
        
class Profesor(Persona):
    
    def __init__(self,nom,ema,esp):
        super().__init__(nom,ema)
        self.especialidad = esp
        
    def mostrar(self):
        print('*'*20 + "DATOS DEL PROFESOR")
        super().mostrar()
        print('ESPECIALIDAD : ' + self.especialidad)    
        
alumno1 = Alumno('carla perez','cperez@gmail.com',20)
alumno1.mostrar()
profesor1 = Profesor('Cesar Mayta','cesarmayta@gmail.com','BACKEND')
profesor1.mostrar()
profesor2 = Profesor('Jorge Garnica','jorge@gmail.com','FRONTEND')
profesor2.mostrar()