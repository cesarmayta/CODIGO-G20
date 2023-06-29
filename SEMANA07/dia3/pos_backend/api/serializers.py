from rest_framework import serializers

from .models import (
    Mesa,Categoria,Plato
)

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'
        
class MesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mesa
        fields = '__all__'
        
class PlatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plato
        fields = '__all__'
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['plato_img'] = instance.plato_img.url
        return representation
    
class CategoriaPlatoSerializer(serializers.ModelSerializer):
    Platos = PlatoSerializer(many=True,read_only=True)
    
    class Meta:
        model = Categoria
        fields = ['categoria_id','categoria_nom','Platos']