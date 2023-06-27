from django.db import models

# Create your models here.

class Workout(models.Model):
    type = models.CharField(max_length=120) # type of workout
    completed = models.BooleanField(default=False) # did you workout today
    date = models.DateTimeField()
    location = models.TextField()
    workout_length = models.TextField()

    def _str_(self):
        return self.title
