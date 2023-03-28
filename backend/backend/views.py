from django.shortcuts import render
from django.http import JsonResponse
import requests
import json


def index(request):
   
    return render(request, 'index.html')

def retrieve_location(request):
    user_ip = requests.get('https://api.ipify.org?format=json') #IP API
    ip_data = json.loads(user_ip.text)
    res = requests.get('http://ip-api.com/json/' + ip_data["ip"]) #Getting detailed location from IP
    location_data_one = res.text
    location_data = json.loads(location_data_one)
    print(type(location_data))  
    location_dict= {"city" : location_data["city"], "ip" : ip_data["ip"]}
    return JsonResponse(location_dict)
    
    