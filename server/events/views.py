from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Event, EventsRegistered
from .serializers import EventSerializer, EventsRegisteredSerializer

class EventListView(APIView):
    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
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
