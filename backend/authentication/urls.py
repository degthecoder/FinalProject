from django.contrib import admin
from django.urls import path, include
from authentication import views  

urlpatterns = [
    path('', views.retrieve_user, name='login'),
    path('', views.signup, name = "sign-up")
]
