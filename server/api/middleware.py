# middleware.py
from django.http import JsonResponse

class RestrictLoginOriginMiddleware:
    ALLOWED_ORIGINS = ['http://localhost:3000']  # Add your frontend URL here

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.method == 'POST' and request.path == '/api/oauth2/login':
            origin = request.META.get('HTTP_ORIGIN')
            if origin not in self.ALLOWED_ORIGINS:
                return JsonResponse({'error': 'Forbidden'}, status=403)

        return self.get_response(request)
