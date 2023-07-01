from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated

from .models import (
    Mesa,Categoria,Plato,
    Pedido
)

from .serializers import (
    CategoriaSerializer,
    MesaSerializer,
    PlatoSerializer,
    CategoriaPlatoSerializer,
    PedidoSerializerPOST,
    PedidoSerializerGET
)

class CategoriaView(generics.ListAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    
class MesaView(generics.ListAPIView):
    queryset = Mesa.objects.all()
    serializer_class = MesaSerializer
    
class PlatoView(generics.ListAPIView):
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
    
class PedidoRegisterView(generics.CreateAPIView):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializerPOST
    
class PedidoView(generics.ListAPIView):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializerGET
    permission_classes = [IsAuthenticated]