# serializers.py
from rest_framework import serializers
from .models import TechTeam, ManagementTeam, MarketingTeam

class TechTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechTeam
        fields = ['id', 'name', 'profile_image', 'about', 'is_head', 'is_core']

class ManagementTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManagementTeam
        fields = ['id', 'name', 'profile_image', 'about', 'is_head', 'is_core']

class MarketingTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarketingTeam
        fields = ['id', 'name', 'profile_image', 'about', 'is_head', 'is_core']
