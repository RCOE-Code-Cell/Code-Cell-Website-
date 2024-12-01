from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import TechTeam, ManagementTeam, MarketingTeam , Head, Professors
from .serializers import TechTeamSerializer, ManagementTeamSerializer, MarketingTeamSerializer , HeadSerializer , ProfessorsSerializer
from django.http import HttpResponse
from server.google_drive import download_from_drive

class TeamMemberListView(APIView):
    def get(self, request, team_type, role_type):
        # Map team_type to models and serializers
        model_serializer_map = {
            'tech': (TechTeam, TechTeamSerializer),
            'management': (ManagementTeam, ManagementTeamSerializer),
            'marketing': (MarketingTeam, MarketingTeamSerializer),
        }
        model, serializer_class = model_serializer_map.get(team_type, (None, None))

        if not model or not serializer_class:
            return Response(
                {"error": "Invalid team type"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Determine filter based on role_type
        filter_criteria = {}
        if role_type == 'member':
            filter_criteria = {'is_head': False, 'is_core': False}
        elif role_type == 'core':
            filter_criteria = {'is_core': True}
        elif role_type == 'head':
            filter_criteria = {'is_head': True}
        else:
            return Response(
                {"error": "Invalid role type"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Get queryset based on filter criteria
        queryset = model.objects.filter(**filter_criteria)

        # Serialize data
        serializer = serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



class ProffesorHeadListView(APIView):
    def get(self, request, proffession_type):
        # Map team_type to models and serializers
        model_serializer_map = {
            'head': (Head, HeadSerializer),
            'professors': (Professors, ProfessorsSerializer),
        }
        model, serializer_class = model_serializer_map.get(proffession_type, (None, None))

        if not model or not serializer_class:
            return Response(
                {"error": "it is not head or not proffesors"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Get queryset based on filter criteria
        queryset = model.objects.all()

        # Serialize data
        serializer = serializer_class(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
