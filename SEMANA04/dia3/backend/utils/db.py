from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
ma = Marshmallow()
migrate = Migrate()
cors = CORS()
jwt = JWTManager()