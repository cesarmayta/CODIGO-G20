from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from django.contrib.auth.models import User
from .models import Empleado


class LoginSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls,user):
        token = super().get_token(user)
        
        token['usu_nom'] = user.first_name + ' '+ user.last_name
        token['usu_id'] = user.id
        
        empleado = Empleado.objects.get(usuario=user)
        token['usu_img'] = empleado.emp_foto.url
        token['usu_tipo'] = empleado.emp_tipo
        
        return token