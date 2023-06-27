from django.contrib import admin
from .models import Workout

# This admin.py will tell admin that Workout has an admin interface
# workout app will be modifiable in the admin

# class WorkoutAdmin(admin.ModelAdmin):
    # list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Workout)