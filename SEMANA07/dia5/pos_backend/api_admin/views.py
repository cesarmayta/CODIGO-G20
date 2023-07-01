from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from api.models import (
    Mesa,Categoria,Plato
)

from api.serializers import (
    MesaSerializer,CategoriaSerializer,
    PlatoSerializer
)

class MesaViewSet(viewsets.ModelViewSet):
    queryset = Mesa.objects.all()
    serializer_class = MesaSerializer