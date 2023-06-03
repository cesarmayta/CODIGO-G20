from flask import Flask, request
from db import db
from flask_migrate import Migrate
from controllers.countrys_controller import CountrysController

app = Flask(__name__)
migrate = Migrate(app, db)

app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost:5432/jobs'

db.init_app(app)

@app.route('/')
def index():
    return 'Mi API de FLask funciona 😎'

@app.route('/countrys', methods=['GET', 'POST'])
def countrys():
    controller = CountrysController()
    method = request.method
    if method == 'GET':
        return controller.getAll()
    else:
        return controller.create()

if __name__ == '__main__':
    app.run(debug=True)