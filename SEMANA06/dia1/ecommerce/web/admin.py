from django.contrib import admin
from django.db import models
from ckeditor.widgets import CKEditorWidget
from django.utils.html import format_html

# Register your models here.
from .models import (
    Categoria,Marca,
    Producto,ProductoImagen
)

admin.site.register(Categoria)
admin.site.register(Marca)

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre','categoria','marca','precio')
    list_filter = ('categoria','marca')
    list_editable = ('precio',)
    formfield_overrides = {
        models.TextField: {'widget':CKEditorWidget},
    }

@admin.register(ProductoImagen)
class ProductoImagenAdmin(admin.ModelAdmin):
    
    def imagen_html(self,obj):
        return format_html('<img src={} width=150px />'.format(obj.imagen.url))
    
    imagen_html.short_description = 'Image'
    
    list_display = ('producto','imagen_html')
    list_filter = ('producto',)