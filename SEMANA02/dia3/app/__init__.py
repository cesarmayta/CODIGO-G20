from flask import Flask
from app.firebase import FirebaseAdmin
from app.github import GitHubProfile
from flask_bootstrap import Bootstrap4

fb = FirebaseAdmin()
perfil = GitHubProfile()

#importamos blueprints
from .portafolio import portafolio
from .admin import admin

from .config import Config

def create_app():
    app = Flask(__name__)
    
    bootstrap = Bootstrap4(app)
    
    app.config.from_object(Config)
    
    app.register_blueprint(portafolio)
    app.register_blueprint(admin)
    
    return app