from django.contrib import admin
from django.urls import path, include
from restaurants import views  

urlpatterns = [
    path('list/', views.list_restaurants, name = "list_restaurants")
]