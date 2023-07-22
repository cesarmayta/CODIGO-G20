from rest_framework.routers import DefaultRouter
from django.urls import path,include

from . import views

router = DefaultRouter()

router.register(r'mesa',views.MesaViewSet,basename='mesa')
router.register(r'categoria',views.CategoriaViewSet,basename='categoria')
router.register(r'plato',views.PlatoViewSet,basename='plato')

urlpatterns = [
    path('',include(router.urls)),
    path('plato/img/upload',views.UploadPlatoImageView.as_view())
]