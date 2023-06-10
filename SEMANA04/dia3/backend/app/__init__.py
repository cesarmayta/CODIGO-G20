from flask import Flask, render_template

from flask_cors import CORS
from .blueprints.shop import shop
from .blueprints.authentication import authentication
from .config import Config

def create_app():
    
    app = Flask(__name__)
    
    CORS(app)
    
    app.config.from_object(Config)
    
    app.register_blueprint(shop)
    app.register_blueprint(authentication)

    @app.route('/swagger')
    def swagger():
        return render_template('swagger.html')
    
    return app
