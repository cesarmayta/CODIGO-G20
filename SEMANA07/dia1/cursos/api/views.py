from django.http import JsonResponse
from .models import Curso

def index(request):
    context = {
        'status':True,
        'content':'mi primer api rest con django'
    }
    
    return JsonResponse(context)

def curso(request):
    lista_cursos = Curso.objects.all()
    
    context = {
        'status':True,
        'content':list(lista_cursos.values())
    }
    
    return JsonResponse(context)