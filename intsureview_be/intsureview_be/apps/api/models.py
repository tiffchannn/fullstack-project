from django.db import models

# Create your models here.
class Workout(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.CharField(max_length=120) # type of workout
    completed = models.CharField(max_length=4) # select input
    date = models.DateField()
    location = models.CharField(max_length=50)
    workout_length = models.CharField(max_length=30)

    def _str_(self):
        return self.title
