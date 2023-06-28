from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Tarea
from .serializers import TareaSerializer

class IndexView(APIView):
    
    def get(self,request):
        context = {
            'status':True,
            'content':'servidor activo'
        }
        return Response(context)
    
class TareaView(APIView):
    
    def get(self,request):
        data = Tarea.objects.all()
        serializer = TareaSerializer(data,many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = TareaSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    
    
    