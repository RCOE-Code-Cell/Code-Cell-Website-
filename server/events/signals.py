from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Event, Image
from server.google_drive import upload_to_drive , download_from_drive # Assuming you have this function to upload files


@receiver(post_save, sender=Event)

def upload_image_to_drive(sender, instance, created,raw, **kwargs):
    """
    Signal to automatically upload the profile image to Google Drive when a TechTeam, ManagementTeam, or MarketingTeam instance is created or updated.
    """
    if raw:  # Skip the signal during loaddata
        return
    if instance.profile_image:  # Check if profile_image is set
        # Only upload if the drive_file_id is not already set or if it's a new image
        if not instance.drive_file_id:
            file_path = instance.profile_image.path
            drive_file_id = upload_to_drive(file_path, instance.name)  # Upload function, assumes it returns file ID

            # Update the model with the Google Drive file ID
            instance.drive_file_id, _ = download_from_drive(drive_file_id)
            instance.save(update_fields=['drive_file_id'])  # Save only the updated field

@receiver(post_save, sender=Image)

def upload_image_to_drive(sender, instance, created,raw, **kwargs):
    """
    Signal to automatically upload the profile image to Google Drive when a TechTeam, ManagementTeam, or MarketingTeam instance is created or updated.
    """
    if raw:  # Skip the signal during loaddata
        return
    if instance.image:  # Check if profile_image is set
        # Only upload if the drive_file_id is not already set or if it's a new image
        if not instance.drive_file_id:
            file_path = instance.image.path
            event_name = instance.gallery.name  # Corresponding event's name
            event_id = instance.id      # Corresponding event's ID
            file_name = f"{event_name}_{event_id}"
            drive_file_id = upload_to_drive(file_path, file_name)  # Upload function, assumes it returns file ID

            # Update the model with the Google Drive file ID
            instance.drive_file_id, _= download_from_drive(drive_file_id)
            instance.save(update_fields=['drive_file_id'])  # Save only the updated field
