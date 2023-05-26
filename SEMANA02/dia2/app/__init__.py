from flask import Flask

#importamos blueprints
from .portafolio import portafolio

def create_app():
    app = Flask(__name__)
    
    app.register_blueprint(portafolio)
    
    return app