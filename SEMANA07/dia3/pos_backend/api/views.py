from rest_framework import generics

from .models import (
    Mesa,Categoria,Plato
)

from .serializers import (
    CategoriaSerializer,
    MesaSerializer,
    PlatoSerializer
)

class CategoriaView(generics.ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    
class MesaView(generics.ListCreateAPIView):
    queryset = Mesa.objects.all()
    serializer_class = MesaSerializer
    
class PlatoView(generics.ListCreateAPIView):
    queryset = Plato.objects.all()
    serializer_class = PlatoSerializer