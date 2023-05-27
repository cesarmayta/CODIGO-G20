from flask import Flask,render_template,request

from . import portafolio

from app import fb
from app import perfil

@portafolio.route('/')
def index():
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
    return render_template('portafolio/index.html',**context)

@portafolio.route('/portafolio')
def proyectos():
    lista_proyectos = fb.get_collection('proyectos')
    print(lista_proyectos)
    context = {
        'proyectos':lista_proyectos
    }
    return render_template('portafolio/portafolio.html',**context)

@portafolio.route('/acercade')
def acercade():
    return render_template('portafolio/acercade.html')

@portafolio.route('/contacto')
def contacto():
    return render_template('portafolio/contacto.html')
