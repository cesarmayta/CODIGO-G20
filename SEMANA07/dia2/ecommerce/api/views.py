from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

from web.models import Categoria,Producto,Marca
from .serializers import (
    CategoriaSerializer,MarcaSerializer,
    ProductoSerializer,CategoriaProductoSerializer)

class CategoriaView(generics.ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    
class CategoriaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categoria.objects.all()
    lookup_field = 'pk'
    serializer_class = CategoriaSerializer
    
class MarcaView(generics.ListCreateAPIView):
    queryset = Marca.objects.all()
    serializer_class = MarcaSerializer
    
class MarcaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Marca.objects.all()
    lookup_field = 'pk'
    serializer_class = MarcaSerializer
    
class ProductoView(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    
class CategoriaProductosView(generics.RetrieveAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaProductoSerializer
    