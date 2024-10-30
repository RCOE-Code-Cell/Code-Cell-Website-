from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    domain = models.CharField(max_length=255, null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    profile_image = models.ImageField(upload_to='events/', null=True, blank=True)
    registration_fees = models.DecimalField(max_digits=10, decimal_places=3, null=True, blank=True)

    def __str__(self):
        return self.name
