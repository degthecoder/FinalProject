from django.shortcuts import render

from django.http import JsonResponse
import requests
import json
from rest_framework.decorators import api_view
# Create your views here.
@api_view(['POST'])
def insert_preferences(request):

    print(request.data)
    print("----")
    data = request.data.get("Greek")
    print(data)

    print("HEEEEEELLLOOOOOOOO")
    print(request)



    return JsonResponse([],safe=False)