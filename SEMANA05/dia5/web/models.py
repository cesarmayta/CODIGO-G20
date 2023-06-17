from django.db import models

# Create your models here.
class Autor(models.Model):
    name = models.CharField(max_length=200,verbose_name='Nombre')
    email = models.EmailField(unique=True)
    
    def __str__(self):
        return self.name
    
class Post(models.Model):
    title = models.CharField(max_length=100,verbose_name='Titulo')
    description = models.TextField(help_text='Resumen',verbose_name='Descripción')
    content = models.TextField()
    date_register = models.DateField()
    autor = models.ForeignKey(Autor,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title
    