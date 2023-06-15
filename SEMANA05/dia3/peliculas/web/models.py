from django.db import models

# Create your models here.
class Pelicula(models.Model):
    titulo = models.CharField(max_length=200)
    imagen = models.CharField(max_length=200)
    duracion = models.IntegerField()
    
    def __str__(self):
        return self.titulo