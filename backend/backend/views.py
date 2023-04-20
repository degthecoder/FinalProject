from django.shortcuts import render
from django.http import JsonResponse
import requests
import json
from rest_framework.decorators import api_view

from . import constants  


def index(request):
   
    return render(request, 'index.html')

@api_view(['POST'])
def retrieve_location(request):
    
    d = request.data

    #print(d)
    if len(d.keys()) !=0:

        #print("d_name:", d["d_name"])
        kd = d["town"]
        print("Town: ",kd)
    
    #user_ip = requests.get('https://api.ipify.org?format=json') #IP API
    #ip_data = json.loads(user_ip.text)
    #res = requests.get('http://ip-api.com/json/' + ip_data["ip"]) #Getting detailed location from IP
    #location_data_one = res.text
    #location_data = json.loads(location_data_one)
    #print(type(location_data))  

    #city,zone = constants.city_zone_name(location_data["lat"],location_data["lon"])
    
    #returned_city = city + ", Zone: " + str(zone)
    location_dict = {"city" : "ab"}

    




    return JsonResponse(location_dict)
    
    