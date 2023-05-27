from flask import render_template,request,redirect,url_for,flash,session
from . import admin

import pyrebase
from app.firebase_config import firebaseConfig

fb_app = pyrebase.initialize_app(firebaseConfig)
auth = fb_app.auth()

from app import fb

from .forms import ProyectoForm

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

@admin.route('/proyectos',methods=['GET','POST'])
def proyectos():
    if('token' not in session):
        return redirect(url_for('admin.login'))
    
    lista_proyectos = fb.get_collection('proyectos')
    proyecto_form = ProyectoForm()
    
    if proyecto_form.validate_on_submit():
        #registrar nuevo proyecto
        data_nuevo_proyecto = {
            'nombre': proyecto_form.nombre.data,
            'descripcion':proyecto_form.descripcion.data,
            'imagen':proyecto_form.imagen.data
        }
        nuevo_proyecto = fb.insert_document('proyectos',data_nuevo_proyecto)
        print(nuevo_proyecto)
        
        return redirect(url_for('admin.proyectos'))
    
    #print(lista_proyectos)
    
    context = {
        'proyectos':lista_proyectos,
        'proyecto_form':proyecto_form
    }
    return render_template('admin/proyectos.html',**context)

@admin.route('/proyecto/<id>',methods=['GET','POST'])
def proyecto(id=''):
    if('token' not in session):
        return redirect(url_for('admin.login'))
    
    lista_proyectos = fb.get_collection('proyectos')
    proyecto_data = fb.get_document('proyectos',id)
    print(proyecto_data)
    proyecto_form = ProyectoForm(data=proyecto_data)
    
    ##actualizamos el proyecto
    if proyecto_form.validate_on_submit():
        
        data_proyecto_actualizar = {
            'nombre': proyecto_form.nombre.data,
            'descripcion':proyecto_form.descripcion.data,
            'imagen':proyecto_form.imagen.data
        }
        
        proyecto_actualizado = fb.update_document('proyectos',id,data_proyecto_actualizar)
        
        return redirect(url_for('admin.proyectos'))
    
    
    
    context = {
        'proyectos':lista_proyectos,
        'proyecto_form':proyecto_form
    }
    
    return render_template('admin/proyectos.html',**context)


@admin.route('/delproyecto/<id>')
def del_proyecto(id=''):
    if('token' not in session):
        return redirect(url_for('admin.login'))
    
    resultado_del_proyecto = fb.delete_document('proyectos',id)
    if(resultado_del_proyecto == True):
        return redirect(url_for('admin.proyectos'))
        