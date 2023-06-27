from django.http import JsonResponse

def index(request):
    context = {
        'status':True,
        'content':'mi primer api rest con django'
    }
    
    return JsonResponse(context)