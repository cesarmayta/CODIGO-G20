from rest_framework import generics

from .models import (
    Mesa,Categoria
)

from .serializers import (
    CategoriaSerializer,
    MesaSerializer
)

class CategoriaView(generics.ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    
class MesaView(generics.ListCreateAPIView):
    queryset = Mesa.objects.all()
    serializer_class = MesaSerializer