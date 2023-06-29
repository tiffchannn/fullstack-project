from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from intsureview_be.apps.api.serializers import WorkoutSerializer
from intsureview_be.apps.api.models import Workout

# Provides the implementation for CRUD operations by default
class WorkoutView(viewsets.ModelViewSet):
    """
    API endpoint that allows workouts to be viewed or edited.
    """
    serializer_class = WorkoutSerializer
    queryset = Workout.objects.all()
