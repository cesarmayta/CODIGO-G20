from flask import Flask,request,render_template
import requests
import json

app = Flask(__name__)
api_token='ponaquitutoken'


@app.route('/')
def index():
    return render_template('ruc.html')

@app.route('/consultaruc',methods=['POST'])
def consulta_ruc():
    razon_social = ''
    if request.method == "POST":
        ruc = request.form['ruc']
        url = "https://apiperu.dev/api/ruc/"+ruc+"?api_token="+api_token
        print(url)
        response = requests.get(url)
    
        if response.status_code == 200:
            data_ruc = json.loads(response.text)
            print(data_ruc)
            razon_social = data_ruc['data']['nombre_o_razon_social']
            
            
        
    return render_template('ruc.html',rsocial=razon_social)
            
        

app.run(debug=True)