from django.shortcuts import render

from django.http import JsonResponse
import requests
import json
from rest_framework.decorators import api_view
from backend.constants import get_user_id
from customer.models import Customer
# Create your views here.
@api_view(['POST'])
def insert_preferences(request):
    data = request.data
    this_customer = Customer(user_customer_id=get_user_id(),cuisine_preference =list(data.keys()))
    this_customer.save()
    


    return JsonResponse(list(data.keys()),safe=False)