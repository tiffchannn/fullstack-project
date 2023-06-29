from rest_framework import serializers
from intsureview_be.apps.api.models import Workout

# converts model instances to JSON so that the frontend can work with the received data.

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = ("id",
            "type",
            "completed",
            "date",
            "location",
            "workout_length")
