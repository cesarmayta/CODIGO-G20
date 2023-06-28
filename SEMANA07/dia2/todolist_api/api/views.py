from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

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
    
class TareaDetailView(APIView):
    
    def get_object(self,pk):
        try:
            return Tarea.objects.get(pk=pk)
        except:
            raise Http404
        
    def get(self,request,pk):
        data = self.get_object(pk)
        serializer = TareaSerializer(data)
        return Response(serializer.data)
    
    
    
    