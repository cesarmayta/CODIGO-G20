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

####### metodo post
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def post_curso(request):
    json_data = json.loads(request.body)
    
    titulo =  json_data['titulo']
    descripcion = json_data['descripcion']
    
    obj_curso = Curso.objects.create(
        titulo=titulo,descripcion=descripcion
    )
    
    dic_curso = {
        'id':obj_curso.id,
        'titulo':obj_curso.titulo,
        'descripcion':obj_curso.descripcion
    }
    
    context = {
        'status':True,
        'content':dic_curso
    }
    
    return JsonResponse(context)