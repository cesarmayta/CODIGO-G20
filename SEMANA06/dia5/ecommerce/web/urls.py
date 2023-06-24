from django.urls import path

from . import views

app_name = 'web'

urlpatterns = [
    path('',views.index,name='index'),
    path('categoria/<int:categoria_id>',views.productos_por_categoria,name='categoria'),
    path('marca/<int:marca_id>',views.productos_por_marca,name='marca'),
    path('busqueda',views.producto_por_nombre,name='busqueda'),
    path('producto/<int:producto_id>',views.producto_detalle,name='producto'),
    path('cart',views.carrito,name='carrito'),
    path('cart/add/<int:producto_id>',views.agregar_carrito,name='cart_add'),
    path('cart/del/<int:producto_id>',views.eliminar_producto_carrito,name='cart_del'),
    path('cart/clear',views.limpiar_carrito,name='cart_clear'),
    path('auth/register',views.crear_usuario,name='auth_register'),
    path('cuenta',views.cuenta_usuario,name='cuenta'),
    path('auth/login',views.login_usuario,name='auth_login'),
    path('auth/logout',views.logout_usuario,name='auth_logout'),
    path('cliente/act',views.actualizar_cliente,name='cliente_act'),
    path('pedido',views.pedido,name='pedido'),
    path('pedido/add',views.registrar_pedido,name='pedido_add')
]