from django.urls import path
# from same todo directory . means
from . import views

urlpatterns = [
    path('', views.home, name = 'home')
]