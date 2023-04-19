from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from restaurants.models import Restaurant

# Create your views here.

def filter_restaurants(spec, name):
    print("here")
    print("Specification: ", spec, "  Name: ", name)
    restaurants = Restaurant.objects.all()
    return Restaurant.objects.filter(spec=name).order_by("-id")