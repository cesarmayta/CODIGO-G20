from rest_framework import serializers

class AlumnoSerializer(serializers.Serializer):
    nombre = serializer.CharField()
    email = serializer.EmailField()