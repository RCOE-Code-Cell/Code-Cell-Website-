from django.db import models
from api.models import User

class Event(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    domain = models.CharField(max_length=255, null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    profile_image = models.ImageField(upload_to='events/', null=True, blank=True)
    drive_file_id = models.CharField(max_length=255, blank=True, null=True)
    registration_fees = models.DecimalField(max_digits=10, decimal_places=3, null=True, blank=True)
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Image(models.Model):
    gallery = models.ForeignKey(Event, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='galleries/', null=True, blank=True)
    drive_file_id = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"Image for {self.gallery.name}"


class EventsRegistered(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='event_registered_event')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='event_registered')
    registration_date = models.DateField(auto_now_add=True)
    registration_status = models.CharField(max_length=255, null=True, blank=True)
    payment_status = models.CharField(max_length=255, null=True, blank=True)
    payment_date = models.DateField(null=True, blank=True)
    payment_method = models.CharField(max_length=255, null=True, blank=True)

    def  __str__(self):
        return f"{self.user.email} registered for {self.event.name}"
