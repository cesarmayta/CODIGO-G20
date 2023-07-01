from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField
# Create your models here.

class Empleado(models.Model):
    EMP_TIPO_CHOICES = (
        ('admin','Administrador'),
        ('cajero','Cajero'),
        ('mozo','Mozo')
    )
    usuario = models.OneToOneField(User,on_delete=models.RESTRICT)
    emp_foto = CloudinaryField('image',default='')
    emp_tipo = models.CharField(max_length=50,choices=EMP_TIPO_CHOICES)
    
    class Meta:
        db_table = 'tbl_empleado'
        
    def __str__(self):
        return self.usuario.username
