from django.urls import  path
from .views import  EventViews

urlpatterns = [
    path('event', EventViews.as_view()),
]
