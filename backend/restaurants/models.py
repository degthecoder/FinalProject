from django.db import models

# Create your models here.
class Restaurant(models.Model):
    # ID field is written automatically by Django
    cuisine = models.CharField(max_length=100, null=False)
    budget = models.IntegerField(null=False, default=1)
    ambiance = models.CharField(max_length=200, null=False)
    outdoor_indoor = models.CharField(max_length=100, null=False)
    fast_slow = models.CharField(max_length=30, null=False)

    # Extra fields that are not used by the ML model
    name = models.CharField(max_length=100, null=True)
    longitude = models.FloatField(default=0, null=True)
    latitude = models.FloatField(default=0, null=True)
    town = models.CharField(max_length=100, null=True)

    # Restaurant Filtering Method
    @classmethod
    def filter_restaurants(cls, field, operation, value, order_by):
        print("Field: ", field, "Operation: ", operation, "  Value: ", value, "  Order by: ", order_by)
        # Get all Restaurants
        restaurants = Restaurant.objects.all()

        # Filter on field name based on Operator
        if operation == 'e':
            return cls.objects.filter(**{field: value}).order_by(order_by)
        elif operation in ['lte','lt','gte', 'gt']:
            field_name = field + '__' + operation
            return cls.objects.filter(**{field_name: value}).order_by(order_by) 

        
        
        
        
