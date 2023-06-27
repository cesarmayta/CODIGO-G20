from rest_framework import serializers

from .models import Alumno

"""
class AlumnoSerializer(serializers.Serializer):
    nombre = serializers.CharField()
    email = serializers.EmailField()
    
    def create(self,validated_data):
        return Alumno.objects.create(**validated_data)
"""
class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = '__all__'