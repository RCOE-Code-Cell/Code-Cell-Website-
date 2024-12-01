from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Event, EventsRegistered
from .serializers import EventSerializer, EventsRegisteredSerializer
from django.http import HttpResponse
from server.google_drive import download_from_drive

class EventListView(APIView):
    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        # for member in serializer.data:
        #     profile_image_id = member.get('drive_file_id')  # Assuming this field exists
        #     if profile_image_id:
        #         member['drive_file_id'] = f'/api/images/{profile_image_id}'
        #     else:
        #         member['drive_file_id'] = None  # Fallback if no image

        return Response(serializer.data)

class EventGalleryView(APIView):
    def get(self, request, pk):
        try:
            event = Event.objects.get(pk=pk)
            serializer = EventSerializer(event)
            return Response(serializer.data)
        except Event.DoesNotExist:
            return Response({"detail": "Event not found."}, status=status.HTTP_404_NOT_FOUND)


class EventRegisteredViews(APIView):
    def  get(self, request, pk):
        try:
            event = Event.objects.get(pk=pk)
            registered = EventsRegistered.objects.filter(event=event)
            serializer = EventsRegisteredSerializer(registered, many=True)
            return Response(serializer.data)
        except Event.DoesNotExist:
            return Response({"detail": "Event not found."}, status=status.HTTP_404_NOT_FOUND)
