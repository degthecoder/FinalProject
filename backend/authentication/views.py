from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
import json

from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate,login


@api_view(['POST'])
def retrieve_user(request):
   
    userd= request.data  
    user_name=userd["username"]
    user_password=userd["password"] 
    user_dict= { "email" : user_name, "password" : user_password }
    #print(user_dict["email"], user_dict["password"])

    user_auth = authenticate(username = user_name,password = user_password)
    print("retrieve  a"  + str(user_auth))
    if user_auth is not None:
          bool = login(request,user_auth)
          print("true")
          return Response()
                
    else:
          print(messages.error(request,"login failed"))
          print("false")
          return Response(userd)
          

    return Response(userd)
    
@api_view(['POST'])
def signup(request):
        

        user_info = request.data
        print("sign up ")
        username = user_info["username"]
        print(username)
        email = user_info["email"]
        print(email)
        password = user_info["password"]
        print(password)


        myuser = User.objects.create_user(username,email,password)
        print("this " + str(myuser))
        myuser.save()

        #messages.success(request, "Account created succesfully")
        
        return Response(user_info)