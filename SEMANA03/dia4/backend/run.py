from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

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

""" USO DE MARSHMALLOW """
ma = Marshmallow(app)
class TareaSchema(ma.Schema):
    class Meta:
        fields = ('id','descripcion','estado')


@app.route('/')
def index():
    context = {
        'status':True,
        'content':'servidor activo'
    }
    
    return jsonify(context)

@app.route('/tarea',methods=['POST'])
def set_tarea():
    descripcion = request.json['descripcion']
    estado = request.json['estado']
    
    #insert into tarea...
    nueva_tarea = Tarea(descripcion,estado)
    db.session.add(nueva_tarea)
    db.session.commit()
    
    data_schema = TareaSchema()
    
    context = {
        'status':True,
        'content': data_schema.dump(nueva_tarea)
    }
    
    return jsonify(context)

@app.route('/tarea')
def get_tarea():
    data = Tarea.query.all() # select id,descripcion,estado from tarea
    data_schema = TareaSchema(many=True)
    
    context = {
        'status':True,
        'content':data_schema.dump(data)
    }
    
    return jsonify(context)
    

if __name__ == '__main__':
    app.run(debug=True)
