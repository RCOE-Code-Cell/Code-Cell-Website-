# views.py
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import TechTeam, ManagementTeam, MarketingTeam
from .serializers import TechTeamSerializer, ManagementTeamSerializer, MarketingTeamSerializer

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

        # Serialize and return the data
        serializer = serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
