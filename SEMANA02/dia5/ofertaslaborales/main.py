from flask import Flask,request,render_template
from ofertas_laborales import OfertaLaboral

app = Flask(__name__)

@app.route('/')
def index():
    busqueda = 'flask'
    ofertas = OfertaLaboral()
    lista_ofertas = ofertas.obtener_ofertas(busqueda)
    context = {
        'ofertas':lista_ofertas
    }
    print(context)
    return render_template('index.html',**context)

app.run(debug=True)