from flask import Flask
from db import db
from flask_migrate import Migrate
from models.users_model import UsersModel
from models.countrys_model import CountrysModel
from models.companys_model import CompanysModel
from models.jobs_model import JobsModel

app = Flask(__name__)
migrate = Migrate(app, db)

app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost:5432/jobs'

db.init_app(app)

@app.route('/')
def index():
    return 'Mi API de FLask funciona 😎'

if __name__ == '__main__':
    app.run(debug=True)