# Generated by Django 4.1.7 on 2023-04-20 08:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0002_rename_name_restaurant_restaurant_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='restaurant',
            old_name='restaurant_name',
            new_name='name',
        ),
    ]
