from django.contrib import admin

# Register your models here.
from .models import (
    Categoria,Marca,
    Producto,ProductoImagen
)

admin.site.register(Categoria)
admin.site.register(Marca)
admin.site.register(Producto)
admin.site.register(ProductoImagen)
