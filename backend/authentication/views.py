from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
import json

from django.contrib.auth.models import User
from django.contrib import messages

@api_view(['POST'])
def retrieve_user(request):
   
    userd= request.data  
    user_email=userd["email"]
    user_password=userd["password"] 
    user_dict= { "email" : user_email, "password" : user_password }
    print(user_dict["email"], user_dict["password"])
    
    return Response(userd)
    

def signup(request):
        username = request.POST["username"]
        fname = request.POST["fname"]
        lname = request.POST["lname"]
        email = request.POST["email"]
        password = request.POST["pass"]
        con_password = request.POST["con_pass"]
        
        myuser = User.objects.create_user(username,email,password)
        myuser.first_name = fname
        myuser.last_name = lname

        myuser.save()

        #messages.success(request, "Account created succesfully")
        
        return messages.success(request, "Account created succesfully")