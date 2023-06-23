from django.shortcuts import render,redirect


from .models import (
    Categoria,Marca,Producto
)
# Create your views here.
def index(request):
    lista_productos = Producto.objects.all()
    lista_categorias = Categoria.objects.all()
    lista_marcas = Marca.objects.all()
    
    context = {
        'productos':lista_productos,
        'categorias':lista_categorias,
        'marcas':lista_marcas
    }
    return render(request,'index.html',context)

"""
-------- CATALOGO DE PRODUCTOS -----------------------
"""

def productos_por_categoria(request,categoria_id):
    obj_categoria = Categoria.objects.get(pk=categoria_id)
    #lista_productos = Producto.objects.filter(categoria=obj_categoria)
    lista_productos = obj_categoria.producto_set.all()
    lista_categorias = Categoria.objects.all()
    lista_marcas = Marca.objects.all()
    
    context = {
        'productos':lista_productos,
        'categorias':lista_categorias,
        'marcas':lista_marcas
    }
    return render(request,'index.html',context)

def productos_por_marca(request,marca_id):
    obj_marca = Marca.objects.get(pk=marca_id)
    lista_productos = obj_marca.producto_set.all()
    lista_categorias = Categoria.objects.all()
    lista_marcas = Marca.objects.all()
    
    context = {
        'productos':lista_productos,
        'categorias':lista_categorias,
        'marcas':lista_marcas
    }
    return render(request,'index.html',context)

def producto_por_nombre(request):
    
    nombre = request.POST['nombre']
    
    lista_productos = Producto.objects.filter(nombre__icontains=nombre.upper())
    lista_categorias = Categoria.objects.all()
    lista_marcas = Marca.objects.all()
    
    context = {
        'productos':lista_productos,
        'categorias':lista_categorias,
        'marcas':lista_marcas
    }
    return render(request,'index.html',context)

def producto_detalle(request,producto_id):
    obj_producto = Producto.objects.get(pk=producto_id)
    context = {
        'producto':obj_producto
    }
    return render(request,'producto.html',context)

"""
-------- CARRITO DE COMPRAS -----------------------
"""
from .cart import Cart

def carrito(request):
    return render(request,'carrito.html')

def agregar_carrito(request,producto_id):
    if request.method == 'POST':
        cantidad = int(request.POST['cantidad'])
    else:
        cantidad = 1
    
    obj_producto = Producto.objects.get(pk=producto_id)
    
    carrito_producto = Cart(request)
    carrito_producto.add(obj_producto,cantidad)

    return render(request,'carrito.html')

def eliminar_producto_carrito(request,producto_id):
    carrito_producto = Cart(request)
    carrito_producto.delete(producto_id)
    
    return render(request,'carrito.html')

def limpiar_carrito(request):
    carrito_producto = Cart(request)
    carrito_producto.clear()
    
    return render(request,'carrito.html')


"""
-------- USUARIOS Y CLIENTES -----------------------
"""
from django.contrib.auth.models import User
from django.contrib.auth import login,authenticate
from .models import Cliente
from .forms import ClienteForm

def crear_usuario(request):
    if request.method == 'POST':
        data_usuario = request.POST['usuario']
        data_password = request.POST['password']
        
        nuevo_usuario = User.objects.create_user(username=data_usuario,password=data_password)
        if nuevo_usuario is not None:
            login(request,nuevo_usuario)
            return redirect('/cuenta')
        
    
    return render(request,'login.html')
      
def login_usuario(request):
    context = {}
    if request.method == 'POST':
        data_usuario = request.POST['usuario']
        data_password = request.POST['password']
        
        usuario_auth = authenticate(request,
                                     username=data_usuario,
                                     password=data_password)
        if usuario_auth is not None:
            login(request,usuario_auth)
            return redirect('/cuenta')
        else:
            context = {
                'mensaje':'Datos Incorrectos'
            }
            
    return render(request,'login.html',context) 

def actualizar_cliente(request):
    mensaje = ''
    if request.method == "POST":
        frm_cliente = ClienteForm(request.POST)
        if frm_cliente.is_valid():
            data = frm_cliente.cleaned_data
            
            #actualizar el usuario
            act_usuario = User.objects.get(pk=request.user.id)
            act_usuario.first_name = data['nombre']
            act_usuario.last_name = data['apellidos']
            act_usuario.email = data['email']
            act_usuario.save()
            
            try:
                obj_cliente = Cliente.objects.get(usuario=request.user)
                obj_cliente.dni = data['dni']
                obj_cliente.direccion = data['direccion']
                obj_cliente.telefono = data['telefono']
                obj_cliente.fecha_nacimiento = data['fecha_nacimiento']
                obj_cliente.save()
            except:
                #registrar cliente
                new_cliente = Cliente()
                new_cliente.usuario = act_usuario
                new_cliente.dni = data['dni']
                new_cliente.direccion = data['direccion']
                new_cliente.telefono = data['telefono']
                new_cliente.fecha_nacimiento = data['fecha_nacimiento']
                new_cliente.save()
            
            mensaje = 'Datos Actualizados con Exito'
        else:
            mensaje = 'No se pudo actualizar los datos'
            
    context = {
        'mensaje':mensaje,
        'form':frm_cliente
    }
    
    return render(request,'cuenta.html',context)
        
def cuenta_usuario(request):
    
    try:
        obj_cliente = Cliente.objects.get(usuario=request.user)
        data_cliente = {
            'nombre':request.user.first_name,
            'apellidos':request.user.last_name,
            'email':request.user.email,
            'direccion':obj_cliente.direccion,
            'telefono':obj_cliente.telefono,
            'dni':obj_cliente.dni,
            'fecha_nacimiento':obj_cliente.fecha_nacimiento
        }
        
    except:
        data_cliente = {
            'nombre':request.user.first_name,
            'apellidos':request.user.last_name,
            'email':request.user.email
        }
    
    frm_cliente = ClienteForm(data_cliente)
    context = {
        'form':frm_cliente
    }
    return render(request,'cuenta.html',context)
            
    
    
    
        