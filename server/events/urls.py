from django.urls import  path
from .views import  EventListView, EventGalleryView, EventRegisteredViews
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import  staticfiles_urlpatterns



urlpatterns = [
    path('event', EventListView.as_view()),
    path('event/<int:pk>/', EventGalleryView.as_view(), name='event-gallery'),
    path('event/<int:pk>/registered/', EventRegisteredViews.as_view(), name='event'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns  += staticfiles_urlpatterns()

