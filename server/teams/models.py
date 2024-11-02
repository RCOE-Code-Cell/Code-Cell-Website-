from django.db import models

# Base model for different teams
class Teams(models.Model):
    name = models.CharField(max_length=255)
    profile_image = models.ImageField(upload_to='teams/', null=True, blank=True)
    about = models.CharField(max_length=250)
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
