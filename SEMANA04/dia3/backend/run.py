from app import create_app
from utils.db import db , migrate, cors, jwt

app = create_app()

with app.app_context():
    db.init_app(app)
    migrate.init_app(app,db)
    cors.init_app(app)
    jwt.init_app(app)
