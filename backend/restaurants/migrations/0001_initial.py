# Generated by Django 4.1.7 on 2023-04-18 20:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cuisine', models.CharField(max_length=100)),
                ('budget', models.IntegerField(default=1)),
                ('ambiance', models.CharField(max_length=200)),
                ('outdoor_indoor', models.CharField(max_length=100)),
                ('fast_slow', models.CharField(max_length=30)),
                ('name', models.CharField(max_length=100, null=True)),
                ('longitude', models.FloatField(default=0, null=True)),
                ('latitude', models.FloatField(default=0, null=True)),
                ('town', models.CharField(max_length=100, null=True)),
            ],
        ),
    ]
