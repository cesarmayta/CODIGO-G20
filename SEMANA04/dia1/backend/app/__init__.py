from flask import Flask

from .blueprints.shop import shop
from .blueprints.authentication import authentication
from .config import Config

def create_app():
    
    app = Flask(__name__)
    
    app.config.from_object(Config)
    
    app.register_blueprint(shop)
    app.register_blueprint(authentication)
    
    return app
