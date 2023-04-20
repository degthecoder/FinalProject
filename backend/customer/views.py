from django.shortcuts import render

from django.http import JsonResponse
import requests
import json
from rest_framework.decorators import api_view
# Create your views here.
@api_view(['POST'])
def insert_preferences(request):

    data = request.data
    return JsonResponse(list(data.keys()),safe=False)