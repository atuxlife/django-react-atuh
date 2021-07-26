from django.db import models

# Create your models here.

class Company(models.Model):
    id = models.AutoField(primary_key=True)
    nit = models.CharField(max_length=20)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    address = models.TextField(null=True, blank=True)
    notes = models.TextField(null=True, blank=True)

    def __str__(self):
        return "%s - %s" % (self.nit, self.name, )