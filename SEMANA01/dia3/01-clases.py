class Automovil:
    def __init__(self,aa,pl,col,mar):
        self.año = aa
        self.placa = pl
        self.color = col
        self.marca = mar
        
    def encender(self):
        print('encender ' + self.marca)
    
    def avanzar(self):
        print('avanzar ' + self.marca)
        
    
vw = Automovil(1970,'CH-1234','Amarillo','Volkswagen')
vw.encender()
        
    
