class Usuario:
    email = 'cesarmayta@gmail.com'
    __password = 'codigo2023'
    
    def login(self,email,password):
        if(self.email == email and self.__password == password):
            print("Bienvenido " + self.email)
        else:
            print("datos incorrectos")
            
usuario1 = Usuario()
email = input('ingrese email: ')
password = input('ingrese password: ')
usuario1.login(email,password)
print(usuario1.__password)
       
            