# Generated by Django 3.2.4 on 2021-07-26 07:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='company_id',
            field=models.IntegerField(null=True),
        ),
    ]
