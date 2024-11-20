from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
import jwt
import datetime
from django.utils import timezone
from .models import User
from .serializer import UserSerializer,PasswordResetRequestSerializer,PasswordResetSerializer
from django.core.mail import send_mail
from django.utils.crypto import get_random_string
from django.core.cache import cache
import ssl
from django.template.loader import render_to_string
from django.utils.html import strip_tags
# Disable SSL verification
ssl._create_default_https_context = ssl._create_unverified_context
class RegisterView(APIView):
    @csrf_exempt
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'OTP sent to your email. Please verify to complete registration.'})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @csrf_exempt
    def put(self, request):
        email = request.data.get('email')
        otp = request.data.get('otp')
        user = User.objects.filter(email=email).first()

        if user and user.otp == otp and user.otp_expiration > timezone.now():
            user.is_active = True
            user.otp = None
            user.otp_expiration = None
            user.save()
            html_message = render_to_string('emails/welcome.html', {'name': user.name})
            plain_message = strip_tags(html_message)

        # Send email with OTP
            send_mail(
            f'Welcome {user.name},',
            plain_message,
            'codecell@eng.rizvi.edu.in',  # Replace with your email
            [user.email],
            fail_silently=False,
            html_message=html_message,
            )

            return Response({'message': 'User verified successfully'})
        else:
            return Response({'error': 'Invalid OTP or OTP expired'}, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    @csrf_exempt
    def post(self, request):
        email = request.data['email']

        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User Not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect Password')

        if not user.is_active:
            raise AuthenticationFailed('Account not activated. Please verify your email.')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()
        response.data = {
            'jwt': token  # No "Bearer" prefix
        }

        return response


class LogoutView(APIView):
    @csrf_exempt
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': "Logged out successfully"
        }
        return response



# views.py



class PasswordResetRequestView(APIView):
    def post(self, request):
        serializer = PasswordResetRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['email']

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"error": "User with this email does not exist."}, status=status.HTTP_400_BAD_REQUEST)

        otp = get_random_string(length=6, allowed_chars='0123456789')
        cache.set(f'otp_{email}', otp, timeout=300)  # OTP valid for 5 minutes
        html_message = render_to_string('emails/password_reset.html', {'otp': otp, 'name': user.name})
        plain_message = strip_tags(html_message)

        send_mail(
            f'Password reset request',
            plain_message,
            'codecell@eng.rizvi.edu.in',  # Replace with your email
            [email],
            fail_silently=False,
            html_message=html_message,
            )
        return Response({"message": "OTP sent to your email."}, status=status.HTTP_200_OK)


class PasswordResetView(APIView):
    def post(self, request):
        serializer = PasswordResetSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['email']
        otp = serializer.validated_data['otp']
        new_password = serializer.validated_data['new_password']

        cached_otp = cache.get(f'otp_{email}')
        if cached_otp != otp:
            return Response({"error": "Invalid or expired OTP."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
            user.set_password(new_password)
            user.save()
            cache.delete(f'otp_{email}')
            html_message = render_to_string('emails/password_reset_successful.html', {'name': user.name})
            plain_message = strip_tags(html_message)

            send_mail(
            f'Password reset succesfully',
            plain_message,
            'codecell@eng.rizvi.edu.in',  # Replace with your email
            [email],
            fail_silently=False,
            html_message=html_message,
            )


            return Response({"message": "Password reset successful."}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "User with this email does not exist."}, status=status.HTTP_400_BAD_REQUEST)



class OAuthLoginView(APIView):
    @csrf_exempt
    def post(self, request):
        email = request.data.get('email')
        name = request.data.get('name')

        if not email or not name:
            return Response({"error": "Email and name are required"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.filter(email=email).first()

        if not user:
            # Create a new user if the email does not exist in the database
            user = User.objects.create_user(email=email, name=name, password=None)
            user.is_active = True  # Ensure the user is marked as active
            user.save()

            html_message = render_to_string('emails/welcome.html', { 'name': user.name})
            plain_message = strip_tags(html_message)

            send_mail(
            f'Welcome {user.name},',
            plain_message,
            'codecell@eng.rizvi.edu.in',  # Replace with your email
            [user.email],
            fail_silently=False,
            html_message=html_message,
            )

        # Generate JWT token
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7),
            'iat': datetime.datetime.utcnow()
        }
        token = jwt.encode(payload, 'secret', algorithm='HS256')

        return Response({'jwt': token}, status=status.HTTP_200_OK)
