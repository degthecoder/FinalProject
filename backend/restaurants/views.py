from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import render

from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer

# Create your views here.
@api_view(['GET'])
def list_restaurants(request):
    restaurants = Restaurant.objects.all()
    serializer = RestaurantSerializer(restaurants, many=True)
    return Response()