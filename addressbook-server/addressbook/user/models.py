from django.contrib.auth.models import AbstractUser
from company.models import Company
from django.db import models

# Create your models here.
class User(AbstractUser):
    company_id = models.ForeignKey(Company, models.CASCADE, default=1)
    # company_id = models.IntegerField(default=1)