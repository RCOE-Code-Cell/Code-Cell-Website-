from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import TechTeam, ManagementTeam, MarketingTeam
from .serializers import TechTeamSerializer, ManagementTeamSerializer, MarketingTeamSerializer
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

        # Update profile_image field with the endpoint URL
        for member in serializer.data:
            profile_image_id = member.get('drive_file_id')  # Assuming this field exists
            if profile_image_id:
                member['drive_file_id'] = f'/api/teams/{profile_image_id}'
            else:
                member['drive_file_id'] = None  # Fallback if no image

        return Response(serializer.data, status=status.HTTP_200_OK)


class TeamProfileImageView(APIView):
    def get(self, request, drive_file_id, *args, **kwargs):
        """
        Retrieve an image from Google Drive using its file ID.
        """
        try:
            # Download the file from Google Drive
            file_content, file_metadata = download_from_drive(drive_file_id)
            mime_type = file_metadata.get('mimeType', 'application/octet-stream')

            # Return the image data as an HTTP response
            return HttpResponse(file_content, content_type=mime_type)

        except Exception as e:
            # Handle errors gracefully
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)