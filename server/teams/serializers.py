# serializers.py
from rest_framework import serializers
from .models import TechTeam, ManagementTeam, MarketingTeam , Head, Professors

class TechTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechTeam
        fields = ['id', 'name', 'drive_file_id', 'about', 'is_head', 'is_core']

class ManagementTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManagementTeam
        fields = ['id', 'name', 'drive_file_id', 'about', 'is_head', 'is_core']

class MarketingTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarketingTeam
        fields = ['id', 'name', 'drive_file_id', 'about', 'is_head', 'is_core']

class HeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Head
        fields = ['id', 'name', 'drive_file_id', 'about']

class ProfessorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professors
        fields = ['id', 'name', 'drive_file_id', 'about']
