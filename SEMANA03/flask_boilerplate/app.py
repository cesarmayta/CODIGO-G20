from flask import Flask
from db import db
from ma import ma
from flask_migrate import Migrate
from routes.countrys_router import countrys_router

app = Flask(__name__)
migrate = Migrate(app, db)

app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost:5432/jobs'

ma.init_app(app)
db.init_app(app)

app.register_blueprint(countrys_router, url_prefix='/api-v1')

if __name__ == '__main__':
    app.run(debug=True)