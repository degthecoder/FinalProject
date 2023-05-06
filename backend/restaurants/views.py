from django.shortcuts import render
from django.http import JsonResponse
import requests
import json
from rest_framework.decorators import api_view
from backend.constants import get_user_town

from restaurants.models import Restaurant
from customer.views import retrieve_preferences

# Create your views here.
@api_view(['GET'])
def retrieve_near_restaurants(request):
    print("const user town: ", get_user_town())
    town = get_user_town()
    filtered_restaurants = Restaurant.filter_restaurants('town','e', town, 'id')

    nearby_restaurants = [] 
    # Display matching restaurant information 
    for restaurant in filtered_restaurants:
        #print("ID:", restaurant.id,"  Name:", restaurant.name, "  Cuisine:", restaurant.cuisine, "  Town:", restaurant.town, "rate: ",restaurant.overall_rating)
        restaurant_dict = {"name" : restaurant.name, "cuisine": restaurant.cuisine, "ambiance": restaurant.ambiance, "overall_rating": restaurant.overall_rating}
        nearby_restaurants.append(restaurant_dict)
    
    print(retrieve_preferences(request))


    return JsonResponse(nearby_restaurants, safe=False)