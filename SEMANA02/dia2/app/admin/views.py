from flask import render_template,request
from . import admin

import pyrebase
from app.firebase_config import firebaseConfig

fb_app = pyrebase.initialize_app(firebaseConfig)
auth = fb_app.auth()

@admin.route('/')
def index():
    return render_template('admin/index.html')


""" VISTAS PARA LOGIN """
@admin.route('/login',methods=['GET','POST'])
def login():
    if request.method == "POST":
        email = request.form['email']
        password = request.form['password']
        try:
            usuario = auth.sign_in_with_email_and_password(email,password)
            data_usuario = auth.get_account_info(usuario['idToken'])
            print(data_usuario)
        except:
            print("usuario no valido")
        
    return render_template('admin/login.html')