# Generated by Django 3.2.4 on 2021-07-26 08:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_alter_user_company_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='company_id',
            field=models.IntegerField(default=1),
        ),
    ]