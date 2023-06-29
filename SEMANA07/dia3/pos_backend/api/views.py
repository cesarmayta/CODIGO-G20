from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models.functions import Lower

from .models import (
    Mesa,Categoria,Plato
)

from .serializers import (
    CategoriaSerializer,
    MesaSerializer,
    PlatoSerializer,
    CategoriaPlatoSerializer
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
    
class CategoriaPlatosView(generics.RetrieveAPIView):
    queryset = Categoria.objects.all()
    lookup_url_kwarg = 'categoria_id'
    serializer_class = CategoriaPlatoSerializer
    
class SearchPlatoView(APIView):
    
    def get(self,request,search):
        data = Plato.objects.filter(plato_nom__icontains=search)
        serializer = PlatoSerializer(data,many=True)
        return Response(serializer.data)