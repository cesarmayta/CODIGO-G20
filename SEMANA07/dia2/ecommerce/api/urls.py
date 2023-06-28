from django.urls import path

from . import views


urlpatterns = [
    path('categoria',views.CategoriaView.as_view()),
    path('categoria/<int:pk>',views.CategoriaDetailView.as_view()),
    path('marca',views.MarcaView.as_view()),
    path('marca/<int:pk>',views.MarcaDetailView.as_view())
]