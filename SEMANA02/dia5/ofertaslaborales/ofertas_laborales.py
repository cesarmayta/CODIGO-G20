import requests
from bs4 import BeautifulSoup

class OfertaLaboral:
    
    def __init__(self):
        self.url = "https://www.computrabajo.com.pe/"
        
    def obtener_ofertas(self,busqueda):
        url_ofertas = self.url + "trabajo-de-" + busqueda
        print(url_ofertas)
        url_resultado = requests.get('https://pe.computrabajo.com/empleos-en-la-libertad-en-sayapullo')
        print(url_resultado.status_code)
        resultado = []
        if(url_resultado.status_code == 200):
            html = BeautifulSoup(url_resultado.text,'html.parser')
            print(html)
            ofertas_lab = html.find_all('div',{'class':'w100'})
            print("ofertas : ")
            print(ofertas_lab)
            for oferta in ofertas_lab:
                titulo = oferta.find('a',{'class':'js-o-link fc_base'})
                empresa = oferta.find('a',{'class':'fc_base'})
                imagen = oferta.find('img',{'class':'lazy'})
                imagen_url = imagen['src']
                oferta_url = titulo['href']
                
                dic_oferta = {
                    'titulo':titulo,
                    'empresa':empresa,
                    'imagen':imagen_url,
                    'url':oferta_url
                }
                resultado.append(dic_oferta)
        else:
            print('error : ' + str(url_resultado))
        
        return resultado
        