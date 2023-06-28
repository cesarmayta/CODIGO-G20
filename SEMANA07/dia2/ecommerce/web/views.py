from django.shortcuts import render,redirect
from django.urls import reverse


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
    lista_productos = obj_categoria.Productos.all()
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
    lista_productos = obj_marca.Productos.all()
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
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.decorators import login_required

from .models import Cliente
from .forms import ClienteForm

def crear_usuario(request):
    pagina_destino = request.GET.get('next','/cuenta')
    context = {
        'destino':pagina_destino
    }
    if request.method == 'POST':
        data_usuario = request.POST['usuario']
        data_password = request.POST['password']
        data_destino = request.POST['destino']
        
        nuevo_usuario = User.objects.create_user(username=data_usuario,password=data_password)
        if nuevo_usuario is not None:
            login(request,nuevo_usuario)
            return redirect(data_destino)
        
    
    return render(request,'login.html',context)

    
def login_usuario(request):
    pagina_destino = request.GET.get('next','/cuenta')
    context = {
        'destino':pagina_destino
    }
    if request.method == 'POST':
        data_usuario = request.POST['usuario']
        data_password = request.POST['password']
        data_destino = request.POST['destino']
        
        usuario_auth = authenticate(request,
                                     username=data_usuario,
                                     password=data_password)
        if usuario_auth is not None:
            login(request,usuario_auth)
            return redirect(data_destino)
        else:
            context = {
                'destino':pagina_destino,
                'mensaje':'Datos Incorrectos'
            }
            
    return render(request,'login.html',context) 

@login_required(login_url='/auth/login')
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

@login_required(login_url='/auth/login')
def cuenta_usuario(request):
    data = {
    }
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
        data.update(data_cliente)
        
    except:
        if request.user.first_name != '':
            data.update({'nombre':request.user.first_name})
        
        if request.user.last_name != '':
            data.update({'apellidos':request.user.last_name})
            
        if request.user.email != '':
            data.update({'email':request.user.last_name})
        
        
    print(data)
    if data == {} :
        frm_cliente = ClienteForm()
    else:
        frm_cliente = ClienteForm(data)
        
    context = {
        'form':frm_cliente
    }
    return render(request,'cuenta.html',context)

def logout_usuario(request):
    logout(request)
    return redirect('/auth/login')

"""
-------- PEDIDOS -----------------------
"""
from paypal.standard.forms import PayPalPaymentsForm
from .models import Pedido,PedidoDetalle

@login_required(login_url='/auth/login')
def pedido(request):
    data = {}
    if request.user.first_name != '':
        data.update({'nombre':request.user.first_name})
        
    if request.user.last_name != '':
        data.update({'apellidos':request.user.last_name})
            
    if request.user.email != '':
        data.update({'email':request.user.email})
        
    try:
        obj_cliente = Cliente.objects.get(usuario=request.user)
        if obj_cliente.telefono != '':
            data.update({'telefono':obj_cliente.telefono})
        if obj_cliente.direccion != '':
            data.update({'direccion':obj_cliente.direccion})
        if obj_cliente.dni != '':
            data.update({'dni':obj_cliente.dni})
    except:
        pass
        
    if data == {} :
        frm_cliente = ClienteForm()
    else:
        frm_cliente = ClienteForm(data)
        
    context = {
        'form':frm_cliente
    }
    
    return render(request,'pedido.html',context)
            
    
@login_required(login_url='/login')
def registrar_pedido(request):
    context = {}
    if request.method == "POST":
        #actualizamos datos del usuario
        act_usuario = User.objects.get(pk=request.user.id)
        act_usuario.first_name = request.POST['nombre']
        act_usuario.last_name = request.POST['apellidos']
        act_usuario.email = request.POST['email']
        act_usuario.save()
        
        # registramos o actualizamos el cliente
        try:
            obj_cliente = Cliente.objects.get(usuario=request.user)
            obj_cliente.telefono = request.POST['telefono']
            obj_cliente.direccion = request.POST['direccion']
            obj_cliente.dni = request.POST['dni']
            obj_cliente.save()
        except:
            obj_cliente = Cliente()
            obj_cliente.telefono = request.POST['telefono']
            obj_cliente.direccion = request.POST['direccion']
            obj_cliente.dni = request.POST['dni']
            obj_cliente.save()
            
        #registramos el pdido
        obj_pedido = Pedido()
        obj_pedido.cliente = obj_cliente
        obj_pedido.save()
        
        #registramos el detalle del pedido
        carrito = request.session.get('cart')
        total = 0
        for key,value in carrito.items():
            obj_producto = Producto.objects.get(pk=value['producto_id'])
            detalle = PedidoDetalle()
            detalle.pedido = obj_pedido
            detalle.producto = obj_producto
            detalle.cantidad = int(value['cantidad'])
            detalle.subtotal = float(value['subtotal'])
            total += float(value['subtotal'])
            detalle.save()
            
        #actualizar pedido
        nro_pedido = 'PED' + obj_pedido.fecha_registro.strftime('%Y') + str(obj_pedido.id)
        obj_pedido.nro_pedido = nro_pedido
        obj_pedido.monto_total = total
        obj_pedido.save()
        
        request.session['pedido_id'] = obj_pedido.id
        
        #creamos formulario de pago de paypal
        paypal_dict = {
            "business": "sb-f55mh26405210@business.example.com",
            "amount": total,
            "item_name": 'compra de tienda ecommerce nro : '+ nro_pedido,
            "invoice": nro_pedido,
            "notify_url": request.build_absolute_uri(reverse('paypal-ipn')),
            "return": request.build_absolute_uri('/pago'),
            "cancel_return": request.build_absolute_uri('/')
        }

        # Create the instance.
        form = PayPalPaymentsForm(initial=paypal_dict)
        
        context = {
            'pedido':obj_pedido,
            'form':form
        }
        
        #limpiar el carrito
        carrito.clear()
        
    return render(request,'pedido_confirmado.html',context)

def registro_pago(request):
    paypal_payer_id = request.GET.get('PayerID',None)
    pedido_id = request.session.get('pedido_id')
    context = {}
    
    if paypal_payer_id is not None:
        obj_pedido = Pedido.objects.get(pk=pedido_id)
        
        print(obj_pedido)
        obj_pedido.estado = '2'
        payer_id = paypal_payer_id
        obj_pedido.save()
        
        context = {
            'pedido':obj_pedido
        }
    
    return render(request,'gracias.html',context)
            
            
            
    
        