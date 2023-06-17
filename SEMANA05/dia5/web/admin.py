from django.contrib import admin

# Register your models here.
from .models import Autor,Post

admin.site.register(Autor)
admin.site.register(Post)
                    