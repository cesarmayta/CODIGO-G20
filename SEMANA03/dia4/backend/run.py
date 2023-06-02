from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

""" CONFIGURANDO SQL ALCHEMY """
app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/lista_tareas'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

### CREAR MI PRIMERA TABLA CON EL ORM ###
class Tarea(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    descripcion = db.Column(db.String(200),nullable=False)
    estado = db.Column(db.String(100),nullable=False)
    
    def __init__(self,descripcion,estado):
        self.descripcion = descripcion
        self.estado = estado
        
db.create_all()
print("se creo la tabla en la base de datos")
""" 
CREATE TABLE tarea(
    id INT PRIMARY KEY NOT NULL,
    descripcion VARCHAR(200),
    estado = VARCHAR(100)
)
"""


@app.route('/')
def index():
    context = {
        'status':True,
        'content':'servidor activo'
    }
    
    return jsonify(context)



if __name__ == '__main__':
    app.run(debug=True)
