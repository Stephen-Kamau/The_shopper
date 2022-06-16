from django.db import models
from django.utils import timezone

class User(models.Model):
    class Meta:
        db_table = "app_user_table"
    user_id = models.CharField(max_length=500,unique=True)
    firstname = models.CharField(max_length=30,verbose_name="Firstname",blank=True)
    lastname = models.CharField(max_length=30,verbose_name="Lastname",blank=True)
    email = models.EmailField(max_length=90, unique=True,verbose_name="Email")
    user_password = models.TextField(max_length=200,verbose_name="Password")
    date_added = models.DateTimeField(default=timezone.now)
