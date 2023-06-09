from flask import Blueprint

authentication = Blueprint('authentication',__name__, url_prefix='/')

from .resources import user