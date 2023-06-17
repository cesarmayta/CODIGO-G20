from django.shortcuts import render

from .models import Autor,Post,Comment

# Create your views here.
def index(request):
    list_post = Post.objects.all()
    
    context = {
        'posts':list_post
    }
    return render(request,'index.html',context)

def post(request,post_id):
    obj_post = Post.objects.get(pk=post_id)
    
    if request.method == "POST":
        comment_text = request.POST['comment']
        new_comment = Comment()
        new_comment.post = obj_post
        new_comment.text = comment_text
        new_comment.save()
        
    
    context = {
        'post':obj_post
    }
    
    
    return render(request,'post.html',context)