from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = [
            'id',
            'name',
            'description',
            'date',
            # 'time',
            'location',
            'profile_image',
            'registration_fees',
            ]