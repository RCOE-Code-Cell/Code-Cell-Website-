from django.db import models

# Base model for different teams
class Teams(models.Model):
    name = models.CharField(max_length=255)
    profile_image = models.ImageField(upload_to='teams/', null=True, blank=True, default='/default_profile_image.jpg')  # Default image path
    drive_file_id = models.CharField(max_length=255, blank=True, null=True)
    about = models.CharField(max_length=250, default='Team Member', blank=True)  # Default bio text
    is_head = models.BooleanField(default=False)
    is_core = models.BooleanField(default=False)

    class Meta:
        abstract = True  # Ensures Teams does not create a separate database table


# Inherited models for specific teams
class TechTeam(Teams):
    def __str__(self):
        return self.name


class ManagementTeam(Teams):
    def __str__(self):
        return self.name


class MarketingTeam(Teams):
    def __str__(self):
        return self.name


class Head(Teams):
    def __str__(self):
        return self.name


class Professors(Teams):
    def __str__(self):
        return self.name

