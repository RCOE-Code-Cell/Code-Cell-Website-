from django.contrib import admin
from .models import TechTeam, ManagementTeam, MarketingTeam, Head , Professors

admin.site.register(TechTeam)
admin.site.register(ManagementTeam)
admin.site.register(MarketingTeam)
admin.site.register(Head)
admin.site.register(Professors)
