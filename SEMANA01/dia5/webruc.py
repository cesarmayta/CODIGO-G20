from flask import Flask,request,render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('ruc.html')

app.run(debug=True)