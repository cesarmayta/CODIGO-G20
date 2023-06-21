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