from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from server.google_drive import download_from_drive

class ImageView(APIView):
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

