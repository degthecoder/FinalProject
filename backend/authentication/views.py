from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
import json

@api_view(['POST'])
def retrieve_user(request):
   
    userd= request.data  
    user_email=userd["email"]
    user_password=userd["password"] 
    user_dict= { "email" : user_email, "password" : user_password }
    print(user_dict["email"], user_dict["password"])
    
    
    return Response(userd)
    
    