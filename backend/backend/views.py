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


    ########################### START OF RESTAURANT FILTERING ########################### 
    ##################################  TO BE MOVED   ###################################

    # Enter the specification on value
    cuisine = "Italian"

    # Call the filtered restaurants with the following parameters: 
    # (field_name_to_field_on , operator , field_value_to_match , field_name_to_order_by)
    filtered_restaurants = Restaurant.filter_restaurants('cuisine','e',cuisine, 'id')

    # Display matching restaurant information
    for restaurant in filtered_restaurants:
        print("ID:", restaurant.id,"Cuisine:", restaurant.cuisine,"  Budget:", restaurant.budget)

    # Another example with less than or equal to operator on the budget
    budget = 2
    filtered_restaurants = Restaurant.filter_restaurants('budget','lte', budget, 'id')

    # Display matching restaurant information
    for restaurant in filtered_restaurants:
        print("ID:", restaurant.id,"  Budget:", restaurant.budget)

    ########################### END OF RESTAURANT FILTERING ########################## 

    return JsonResponse(location_dict)
    
    