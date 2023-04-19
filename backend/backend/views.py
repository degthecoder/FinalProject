from django.shortcuts import render
from django.http import JsonResponse
import requests
import json
from . import constants  
from restaurants.models import Restaurant

def index(request):
   
    return render(request, 'index.html')

def retrieve_location(request):
    user_ip = requests.get('https://api.ipify.org?format=json') #IP API
    ip_data = json.loads(user_ip.text)
    res = requests.get('http://ip-api.com/json/' + ip_data["ip"]) #Getting detailed location from IP
    location_data_one = res.text
    location_data = json.loads(location_data_one)
    #print(type(location_data))  

    city,zone = constants.city_zone_name(location_data["lat"],location_data["lon"])
    
    returned_city = city + ", Zone: " + str(zone)


    location_dict= {"city" : returned_city, "ip" : ip_data["ip"]}


    # Restaurant listing test : TO BE DELETED
    cuisine = "French"
    filtered_restaurants = Restaurant.objects.filter_restaurants('cuisine',cuisine)

    # Iterate over the results and do something with each restaurant
    for restaurant in filtered_restaurants:
        print("ID:", restaurant.id,"  Budget:", restaurant.budget)


    return JsonResponse(location_dict)
    
    