from django.db import models

# Create your models here.
class Flavor(models.Model):
    name = models.CharField(max_length=100)

class Ambiance(models.Model):
    name = models.CharField(max_length=100)

class Restaurant(models.Model):
    # name to be added
    cuisine = models.CharField(max_length = 100)
    flavors = models.ManyToManyField(Flavor)
    budget = models.IntegerField()
    # profile to be added
    ambiance = models.ManyToManyField(Ambiance)

