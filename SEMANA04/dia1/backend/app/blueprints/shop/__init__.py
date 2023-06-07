from flask import Blueprint

shop = Blueprint('shop',__name__,url_prefix='/')

from .resources import index