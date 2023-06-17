from django.shortcuts import render

from .models import Autor,Post

# Create your views here.
def index(request):
    list_post = Post.objects.all()
    
    context = {
        'posts':list_post
    }
    return render(request,'index.html',context)

def post(request):
    return render(request,'post.html')