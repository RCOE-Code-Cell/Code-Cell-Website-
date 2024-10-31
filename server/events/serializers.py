from rest_framework import serializers
from .models import Event, Image

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image']

class EventSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)  # Include images in the event serializer

    class Meta:
        model = Event
        fields = [
            'id',
            'name',
            'description',
            'date',
            'location',
            'profile_image',
            'registration_fees',
            'images',  # Add images to the event serializer
        ]
