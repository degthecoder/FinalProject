from django.shortcuts import render

from django.http import JsonResponse
import requests
import json
from rest_framework.decorators import api_view
from backend.constants import get_user_id
from customer.models import Customer
# Create your views here.
@api_view(['POST'])
def insert_cuisine_preferences(request):
    data = request.data
    this_customer = Customer(user_customer_id=get_user_id(),cuisine_preference =list(data.keys()))
    this_customer.save()
    return JsonResponse(list(data.keys()),safe=False)

@api_view(['POST'])
def insert_ambiance_preferences(request):
    data = request.data
    this_customer = Customer.objects.get(user_customer_id=get_user_id())
    this_customer.ambiance_preference=list(data.keys())
    this_customer.save()
    return JsonResponse(list(data.keys()),safe=False)

@api_view(['POST'])
def insert_flavor_preferences(request):
    data = request.data
    this_customer = Customer.objects.get(user_customer_id=get_user_id())
    this_customer.flavor_preference=list(data.keys())
    this_customer.save()
    return JsonResponse(list(data.keys()),safe=False)

@api_view(['POST'])
def insert_interest_preferences(request):
    data = request.data
    this_customer = Customer.objects.get(user_customer_id=get_user_id())
    this_customer.interest_preference=list(data.keys())
    this_customer.save()
    return JsonResponse(list(data.keys()),safe=False)

@api_view(['GET'])
def retrieve_preferences(request):
    this_customer = Customer.objects.get(user_customer_id=get_user_id())
    interest_preferences = this_customer.interest_preference
    ambiance_preferences = this_customer.ambiance_preference
    cuisine_preferences = this_customer.cuisine_preference
    flavor_preferences = this_customer.flavor_preference
    budget = this_customer.budget_customer
    return JsonResponse({"interest": interest_preferences, 
                         "ambiance": ambiance_preferences, 
                         "cuisine": cuisine_preferences,
                         "flavor": flavor_preferences,
                         "budget": budget})