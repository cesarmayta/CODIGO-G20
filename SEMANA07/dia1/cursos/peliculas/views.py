from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Pelicula 
from .serializers import PeliculaSerializer

@api_view(['GET'])
def index(request):
    context = {
        'status':True,
        'content':'Api rest con DRF'
    }
    
    return Response(context)

@api_view(['GET'])
def get_pelicula(request):
    data = Pelicula.objects.all()
    serializer = PeliculaSerializer(data,many=True)
    
    context = {
        'status':True,
        'content':serializer.data
    }
    
    return Response(context)
