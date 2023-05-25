from flask import Flask,render_template,request
from github import GitHubProfile
from firebase import FirebaseAdmin

app = Flask(__name__)

fb = FirebaseAdmin()

@app.route('/')
def index():
    perfil = GitHubProfile()
    redes_sociales = fb.get_collection('redes_sociales')
    context = {
        'nombre':perfil.nombre,
        'imagen':perfil.imagen,
        'biografia':perfil.biografia,
        'ubicacion':perfil.ubicacion,
        'github':perfil.github,
        'twitter':perfil.twitter,
        'redes':redes_sociales
    }
    return render_template('index.html',**context)

@app.route('/portafolio')
def portafolio():
    lista_proyectos = fb.get_collection('proyectos')
    print(lista_proyectos)
    context = {
        'proyectos':lista_proyectos
    }
    return render_template('portafolio.html',**context)

@app.route('/acercade')
def acercade():
    return render_template('acercade.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

app.run(debug=True)