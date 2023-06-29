from django.db import models

from cloudinary.models import CloudinaryField

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
    
class Plato(models.Model):
    plato_id = models.AutoField(primary_key=True)
    plato_nom = models.CharField(max_length=200,
                                 verbose_name='Nombre')
    plato_img = CloudinaryField('image',default='')
    plato_pre = models.DecimalField(max_digits=10,
                                    decimal_places=2,
                                    default=0,
                                    verbose_name='Precio')
    categoria_id = models.ForeignKey(Categoria,related_name='Platos',
                                     db_column='categoria_id',
                                     on_delete=models.RESTRICT,
                                     verbose_name='Categoria')
    
    class Meta:
        db_table = 'tbl_plato'
        
    def __str__(self):
        return self.plato_nom