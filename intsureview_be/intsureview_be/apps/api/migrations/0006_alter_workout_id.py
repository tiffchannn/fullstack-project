# Generated by Django 4.1.9 on 2023-06-29 21:02

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0005_alter_workout_completed_alter_workout_location_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="workout",
            name="id",
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
