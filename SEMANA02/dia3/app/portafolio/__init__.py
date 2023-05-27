from flask import Blueprint

portafolio = Blueprint('portafolio',__name__,url_prefix='/')

from . import views