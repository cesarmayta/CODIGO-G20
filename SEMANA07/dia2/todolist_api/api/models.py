from django.db import models

# Create your models here.
class Tarea(models.Model):
    
    ESTADO_CHOICES = (
        ('pendiente','PENDIENTE'),
        ('terminado','TERMINADO')
    )
    
    descripcion = models.CharField(max_length=200)
    fecha_registro = models.DateField(auto_now_add=True)
    estado = models.CharField(max_length=20,choices=ESTADO_CHOICES,default='pendiente')
    
    def __str__(self):
        return self.descripcion