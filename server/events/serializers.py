from rest_framework import serializers
from .models import Event, Image, EventsRegistered

class ImageSerializer(serializers.ModelSerializer):
    # drive_file_url = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ['id', 'drive_file_id']


class EventsRegisteredSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventsRegistered
        fields = [
            'id',
            'event',
            'user',
            'registration_date',
            'registration_status',
            'payment_status',
            'payment_date',
            'payment_method',
        ]
        read_only_fields = ['registration_date']  # Make registration_date read-only
        extra_kwargs = {
            'registration_status': {'required': False, 'allow_null': True},
            'payment_status': {'required': False, 'allow_null': True},
            'payment_date': {'required': False, 'allow_null': True},
            'payment_method': {'required': False, 'allow_null': True},
        }


class EventSerializer(serializers.ModelSerializer):
    # event_registered_event = EventsRegisteredSerializer()
    images = ImageSerializer(many=True, read_only=True)  # Include images in the event serializer


    class Meta:
        model = Event
        fields = [
            'id',
            'name',
            'description',
            'date',
            'location',
            # 'profile_image',
            'drive_file_id',
            'registration_fees',
            'images',
            'status'
            # 'event_registered_event',
        ]
