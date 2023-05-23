class Persona:
    def __init__(self,nom,ema):
        self.nombre = nom
        self.email = ema
    
    def mostrar(self):
        print("NOMBRE : " + self.nombre)
        print("Email : " + self.email)
        
class Alumno(Persona):
    nota = 0
    
    def mostrar_alumno(self):
        print("NOMBRE : " + self.nombre)
        print("EMAIL  : " + self.email)
        print("NOTA   : " + str(self.nota))
        

class Profesor(Persona):
    especialidad = ""
    
    def mostrar_profesor(self):
        print("NOMBRE : " + self.nombre)
        print("EMAIL : " + self.email)
        print("ESPECIALIDAD :" + self.especialidad)

alumno1 = Alumno('Carlos Tello','ctello@gmail.com')
alumno1.nota = 15
alumno1.mostrar_alumno()

profesor1 = Profesor('Jorge Garnica','jorge@gmail.com')
profesor1.especialidad = "FRONTEND"
profesor1.mostrar_profesor()