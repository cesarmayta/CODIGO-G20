from django.contrib import admin

# Register your models here.
from .models import (
    Mesa,Categoria,Plato
)

admin.site.register(Mesa)
admin.site.register(Categoria)
admin.site.register(Plato)