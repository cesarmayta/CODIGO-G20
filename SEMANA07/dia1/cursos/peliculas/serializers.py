from rest_framework import serializers

class PeliculaSerializer(serializers.Serializer):
    titulo = serializers.CharField()
    descripcion = serializers.CharField()
