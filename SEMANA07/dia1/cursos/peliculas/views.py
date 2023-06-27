from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def index(request):
    context = {
        'status':True,
        'content':'Api rest con DRF'
    }
    
    return Response(context)
