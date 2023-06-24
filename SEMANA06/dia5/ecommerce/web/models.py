from django.db import models

# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length=200)
    
    class Meta:
        db_table = 'tbl_categoria'
        
    def __str__(self):
        return self.nombre
    
class Marca(models.Model):
    nombre = models.CharField(max_length=200)
    
    class Meta:
        db_table = 'tbl_marca'
        
    def __str__(self):
        return self.nombre
    
class Producto(models.Model):
    categoria = models.ForeignKey(Categoria,on_delete=models.RESTRICT)
    marca = models.ForeignKey(Marca,on_delete=models.RESTRICT)
    nombre = models.CharField(max_length=250)
    descripcion = models.TextField(null=True)
    precio = models.DecimalField(max_digits=10,decimal_places=2)
    imagen = models.ImageField(upload_to='productos',blank=True)
    
    class Meta:
        db_table = 'tbl_producto'
        
    def __str__(self):
        return self.nombre

    
class ProductoImagen(models.Model):
    producto = models.ForeignKey(Producto,on_delete=models.CASCADE)
    imagen = models.ImageField(upload_to='galeria',null=True)
    
    class Meta:
        db_table = 'tbl_producto_imagen'
        verbose_name = 'Galeria de Fotos'
        verbose_name_plural = 'Galeria de Fotos'
        
    def __str__(self):
        return self.producto.nombre
    
from django.contrib.auth.models import User

class Cliente(models.Model):
    usuario = models.OneToOneField(User,on_delete=models.CASCADE)
    dni = models.CharField(max_length=20)
    telefono = models.CharField(max_length=20)
    fecha_nacimiento = models.DateField(null=True)
    direccion = models.TextField()
    
    class Meta:
        db_table = 'tbl_cliente'
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
    
    def __str__(self):
        return self.dni
    
class Pedido(models.Model):
    
    ESTADO_CHOICES = (
        ('1','Solicitado'),
        ('2','Pagado')
    )
    
    cliente = models.ForeignKey(Cliente,on_delete=models.RESTRICT)
    fecha_registro = models.DateTimeField(auto_now_add=True)
    nro_pedido = models.CharField(max_length=20,null=True)
    direccion_envio = models.TextField(null=True)
    monto_total = models.DecimalField(max_digits=10,decimal_places=2,default=0)
    estado = models.CharField(max_length=1,default='1',choices=ESTADO_CHOICES)
    
    class Meta:
        db_table = 'tbl_pedido'
        verbose_name = 'Pedido'
        verbose_name_plural = 'Pedidos'
        
    def __str__(self):
        return self.nro_pedido
    
class PedidoDetalle(models.Model):
    pedido = models.ForeignKey(Pedido,on_delete=models.RESTRICT)
    producto = models.ForeignKey(Producto,on_delete=models.RESTRICT)
    cantidad = models.IntegerField(default=1)
    subtotal = models.DecimalField(max_digits=10,decimal_places=2)
    
    class Meta:
        db_table = 'tbl_pedido_detalle'
        verbose_name = 'Pedido Detalle'
        verbose_name_plural = 'Pedido Detalles'
        
    def __str__(self):
        return self.producto.nombre
    