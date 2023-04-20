from django.db import models
from customer.models import Customer
from restaurants.models import Restaurant


# Create your models here.
class ResReview(models.Model):
    # ID field is written automatically by Django
    review_customer = models.ForeignKey(Customer, on_delete=models.CASCADE, default=0)
    review_restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, default=0)
    
    ambiance_rating = models.IntegerField(null=False, default=1)
    taste_rating = models.IntegerField(null=False, default=1)
    service_rating = models.IntegerField(null=False, default=1) 
    customer_need_fast_slow = models.CharField(max_length=30)
    reason_of_visit = models.CharField(max_length=50)
    overall_rating = models.FloatField(null=False, default=1)  