# Generated by Django 4.2.2 on 2023-06-28 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_workout_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workout',
            name='completed',
            field=models.CharField(max_length=4),
        ),
        migrations.AlterField(
            model_name='workout',
            name='location',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='workout',
            name='workout_length',
            field=models.CharField(max_length=30),
        ),
    ]