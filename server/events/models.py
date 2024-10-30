from django.db import models

# Create your models here.
class Event(models.Model):
    name  = models.CharField(max_length=255)
    description  = models.TextField()
    date  = models.DateField()
    domain =  models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    profile_image = models.ImageField(upload_to='events/')
    registeration_fees =  models.DecimalField( max_digits=10, decimal_places=3)

    def __str__(self):
        return self.name