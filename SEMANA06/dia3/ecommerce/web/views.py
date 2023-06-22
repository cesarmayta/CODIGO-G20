from django.shortcuts import render


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
    cantidad = 1
    
    obj_producto = Producto.objects.get(pk=producto_id)
    
    carrito_producto = Cart(request)
    carrito_producto.add(obj_producto,cantidad)
    
    print(request.session.get("cart"))
    
    return render(request,'carrito.html')

def eliminar_producto_carrito(request,producto_id):
    carrito_producto = Cart(request)
    carrito_producto.delete(producto_id)
    
    return render(request,'carrito.html')