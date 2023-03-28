from rest_framework.response import Response
import requests
import json

def retrieve_user(request):
    user_email = request.email
    user_password = request.password
    user_dict= { "email" : user_email, "password" : user_password }
    print(user_dict["email"], user_dict["password"])
    return Response(user_dict)
    
    