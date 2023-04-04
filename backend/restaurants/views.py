from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import render

from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer

# Create your views here.
def list_restaurants():
    print("here")
    restaurants = Restaurant.objects.all()
    serializer = RestaurantSerializer(restaurants, many=True)
    print(serializer.data)
    return Response(serializer.data)