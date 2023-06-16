from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('post',views.post,name='post')
]