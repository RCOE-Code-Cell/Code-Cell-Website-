from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import TechTeam, ManagementTeam, MarketingTeam
from server.google_drive import upload_to_drive  # Assuming you have this function to upload files

@receiver(post_save, sender=TechTeam)
@receiver(post_save, sender=ManagementTeam)
@receiver(post_save, sender=MarketingTeam)
def upload_image_to_drive(sender, instance, created, **kwargs):
    """
    Signal to automatically upload the profile image to Google Drive when a TechTeam, ManagementTeam, or MarketingTeam instance is created or updated.
    """
    if instance.profile_image:  # Check if profile_image is set
        # Only upload if the drive_file_id is not already set or if it's a new image
        if not instance.drive_file_id:
            file_path = instance.profile_image.path
            drive_file_id = upload_to_drive(file_path, instance.name)  # Upload function, assumes it returns file ID

            # Update the model with the Google Drive file ID
            instance.drive_file_id = drive_file_id
            instance.save(update_fields=['drive_file_id'])  # Save only the updated field
