import requests
from bs4 import BeautifulSoup

class TipoCambioSunat:
    
    def __init__(self):
        self.url = requests.get('https://www.sunat.gob.pe/')
        
    def obtener_tipo_cambio(self):
        if(self.url.status_code == 200):
            html = BeautifulSoup(self.url.text,'html.parser')
            tipo_cambio_venta = html.find('strong',{'id':'sell-rate'})
            print(tipo_cambio_venta.get_text())
        else:
            print('error' + str(self.url.status_code))
            
class TipoCambioSbs:
        def __init__(self):
            self.url = requests.get('https://www.sbs.gob.pe/app/pp/SISTIP_PORTAL/Paginas/Publicacion/TipoCambioPromedio.aspx')
            
        def obtener_tipo_cambio(self):
            if(self.url.status_code == 200):
                html = BeautifulSoup(self.url.text,'html.parser')
                tipo_cambio_dolar = html.find('tr',{'id':'ctl00_cphContent_rgTipoCambio_ctl00__0'})
                compra = tipo_cambio_dolar.find('td',{'class':'APLI_fila2'})
                print("Compra : " + compra.get_text())
                venta = tipo_cambio_dolar.find('td',{'class':'APLI_fila2'}).findNext('td')
                print("Venta : " + venta.get_text())
            else:
                print('error' + str(self.url.status_code))
                
        def obtener_compra_dolares(self):
            if(self.url.status_code == 200):
                html = BeautifulSoup(self.url.text,'html.parser')
                tipo_cambio_dolar = html.find('tr',{'id':'ctl00_cphContent_rgTipoCambio_ctl00__0'})
                compra = tipo_cambio_dolar.find('td',{'class':'APLI_fila2'})
                return float(compra.get_text())
            else:
                print('error' + str(self.url.status_code))


###
dolares = input("Ingrese monto a vender en dolares : ")
cambio = TipoCambioSbs()
compra = cambio.obtener_compra_dolares()
soles = float(dolares) * compra
print("Tu monto en soles al tipo de cambio del día es :" + str(soles))