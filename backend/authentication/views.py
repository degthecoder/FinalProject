from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
import json

from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate,login
from restaurants.models import Restaurant


@api_view(['POST'])
def retrieve_user(request):

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
        print("ID:", restaurant.id,"  Budget:", restaurant.budget, "  Town:", restaurant.town)

    # Another example with equal operator on the name
    name = "Exotic Fufu"
    filtered_restaurants = Restaurant.filter_restaurants('name','e', name, 'id')

    # Display matching restaurant information 
    for restaurant in filtered_restaurants:
        print("ID:", restaurant.id,"  Budget:", restaurant.budget, "  Name:", restaurant.name)

    ########################### END OF RESTAURANT FILTERING ########################## 


    userd= request.data  
    user_name=userd["username"]
    user_password=userd["password"] 
    user_dict= { "email" : user_name, "password" : user_password }
    #print(user_dict["email"], user_dict["password"])

    user_auth = authenticate(username = user_name,password = user_password)
#     print("retrieve  a"  + str(user_auth))
    if user_auth is not None:
          bool = login(request,user_auth)
          print("true")
          return Response( True)
                
    else:
          print(messages.error(request,"login failed"))
          print("false")
          return Response( False)
          

    return Response(userd)
    
@api_view(['POST'])
def signup(request):
    user_info = request.data
    username = user_info["username"]
    email = user_info["email"]
    password = user_info["password"]
    try:
        myuser = User.objects.create_user(username,email,password)
        myuser.save()
        print("sign up ")
        print(username)
        print(email)
        print(password)
    # print("this " + str(myuser))
    except:
        print("Username taken.")
        return Response(False)
    #messages.success(request, "Account created succesfully")
    
    return Response(True)