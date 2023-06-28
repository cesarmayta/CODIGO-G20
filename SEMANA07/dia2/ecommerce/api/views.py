from rest_framework.views import APIView
from rest_framework.response import Response

from web.models import Categoria,Producto
from .serializers import CategoriaSerializer

class CategoriaView(APIView):
    
    def get(self,request):
        data = Categoria.objects.all()
        serializer = CategoriaSerializer(data,many=True)
        return Response(serializer.data)