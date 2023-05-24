from flask import Flask,request,render_template

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>Hola mundo flask</h1>'

@app.route('/saludo')
def saludo():
    nombre = request.args.get('nombre','no hay nombre')
    return '<center>Hola {}</center>'.format(nombre)

@app.route('/suma')
def suma():
    n1 = request.args.get('n1','0')
    n2 = request.args.get('n2','0')
    resultado = int(n1) + int(n2)
    return '<h1>la suma de {} + {} es {}</h1>'.format(n1,n2,resultado)

@app.route('/resta/<int:n1>/<int:n2>')
def resta(n1=0,n2=0):
    resultado = n1 - n2
    return '<h1>la resta de {} - {} es {}</h1>'.format(n1,n2,resultado)

@app.route('/calculadora')
def calculadora():
    return render_template('index.html')
    
@app.route('/resultado',methods=['POST'])
def resultado():
    if request.method == "POST":
        n1 = request.form['n1']
        n2 = request.form['n2']
        suma = int(n1) + int(n2)
        
    return render_template('index.html',resultado=suma)
        

app.run(debug=True)