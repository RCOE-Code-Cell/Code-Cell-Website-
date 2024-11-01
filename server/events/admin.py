from django.contrib import admin
from .models import Event, Image, EventsRegistered

class ImageInline(admin.TabularInline):
    model = Image
    extra = 1  # Number of empty forms to display for adding new images

class EventAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'location', 'registration_fees')  # Display fields in the list view
    search_fields = ('name', 'description')  # Enable search on these fields
    inlines = [ImageInline]  # Include the inline for images

# Register the Event model with the custom EventAdmin
admin.site.register(Event, EventAdmin)
# Register the Image model (optional, as it's managed through the Event admin)
admin.site.register(Image)
admin.site.register(EventsRegistered)