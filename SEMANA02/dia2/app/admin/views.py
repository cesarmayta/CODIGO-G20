from flask import render_template,request,redirect,url_for,flash,session
from . import admin

import pyrebase
from app.firebase_config import firebaseConfig

fb_app = pyrebase.initialize_app(firebaseConfig)
auth = fb_app.auth()

@admin.route('/')
def index():
    if('token' not in session):
        return redirect(url_for('admin.login'))
    
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
            session['token'] = usuario['idToken']
            return redirect(url_for('admin.index'))
        except:
            print("usuario no valido")
            flash("usuario password invalidos")
        
    return render_template('admin/login.html')

@admin.route('/logout')
def logout():
    session.pop('token')
    return redirect(url_for('admin.index'))