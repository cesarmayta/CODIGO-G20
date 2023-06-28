from rest_framework import serializers

from web.models import Categoria,Marca,Producto

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'
        
class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = '__all__'
        
class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ['id','nombre','precio','imagen','marca','categoria']
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['categoria'] = instance.categoria.nombre
        representation['marca'] = instance.marca.nombre
        return representation
    
class CategoriaProductoSerializer(serializers.ModelSerializer):
    Productos = ProductoSerializer(many=True,read_only=True)
    class Meta:
        model = Categoria
        fields = ['id','nombre','Productos']
        
class MarcaProductoSerializer(serializers.ModelSerializer):
    Productos = ProductoSerializer(many=True,read_only=True)
    class Meta:
        model = Marca
        fields = ['id','nombre','Productos']