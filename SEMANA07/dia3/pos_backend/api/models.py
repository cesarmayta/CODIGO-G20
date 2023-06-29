from django.db import models

# Create your models here.
class Mesa(models.Model):
    mesa_id = models.AutoField(primary_key=True)
    mesa_nro = models.CharField(max_length=10,verbose_name='Nro Mesa')
    
    class Meta:
        db_table = 'tbl_mesa'
        
    def __str__(self):
        return self.mesa_nro
    
class Categoria(models.Model):
    categoria_id = models.AutoField(primary_key=True)
    categoria_nom = models.CharField(max_length=100,verbose_name='Nombre')
    
    class Meta:
        db_table = 'tbl_categoria'
        
    def __str__(self):
        return self.categoria_nom