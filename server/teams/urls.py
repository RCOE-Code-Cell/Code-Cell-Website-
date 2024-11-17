from django.urls import path
from .views import TeamMemberListView, ProffesorHeadListView
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('team/<str:team_type>/<str:role_type>/', TeamMemberListView.as_view(), name='team-member-list'),
    path('team/<str:proffession_type>/',ProffesorHeadListView.as_view(), name='proffession-type-list'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += staticfiles_urlpatterns()
