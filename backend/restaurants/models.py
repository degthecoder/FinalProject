from django.db import models

# Create your models here.
class Restaurant(models.Model):
    # id field is written automatically by Django
    cuisine = models.CharField(max_length=100, null=False)
    budget = models.IntegerField(null=False, default=1)
    ambiance = models.CharField(max_length=200, null=False)
    outdoor_indoor = models.CharField(max_length=100, null=False)
    fast_slow = models.CharField(max_length=30, null=False)

    # extra fields that are not used by the ML model
    name = models.CharField(max_length=100, null=True)
    longitude = models.FloatField(default=0, null=True)
    latitude = models.FloatField(default=0, null=True)
    town = models.CharField(max_length=100, null=True)