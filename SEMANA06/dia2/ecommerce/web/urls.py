from django.urls import path

from . import views

app_name = 'web'

urlpatterns = [
    path('',views.index,name='index'),
    path('categoria/<int:categoria_id>',views.productos_por_categoria,name='categoria'),
    path('marca/<int:marca_id>',views.productos_por_marca,name='marca'),
    path('busqueda',views.producto_por_nombre,name='busqueda'),
    path('producto/<int:producto_id>',views.producto_detalle,name='producto')
]