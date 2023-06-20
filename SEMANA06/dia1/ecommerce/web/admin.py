from django.contrib import admin
from django.db import models
from ckeditor.widgets import CKEditorWidget

# Register your models here.
from .models import (
    Categoria,Marca,
    Producto,ProductoImagen
)

admin.site.register(Categoria)
admin.site.register(Marca)
admin.site.register(ProductoImagen)

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre','categoria','marca','precio')
    list_filter = ('categoria','marca')
    list_editable = ('precio',)
    formfield_overrides = {
        models.TextField: {'widget':CKEditorWidget},
    }
