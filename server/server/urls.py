from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import  staticfiles_urlpatterns
from .image_view import ImageView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('api.urls')),
    path('api/',include('events.urls')),
    path('api/',include('teams.urls')),
    path('api/images/<str:drive_file_id>/', ImageView.as_view(), name='team-profile-image'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns  += staticfiles_urlpatterns()
