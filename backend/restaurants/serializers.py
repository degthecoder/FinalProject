from rest_framework import serializers
from restaurants.models import Restaurant, Flavor, Ambiance

class FlavorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flavor
        fields = '__all__'

class AmbianceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambiance
        fields = '__all__'

class RestaurantSerializer(serializers.ModelSerializer):
    flavors = FlavorSerializer(many = True)
    ambiance = AmbianceSerializer(many = True)
    class Meta:
        model = Restaurant
        fields = '__all__'
