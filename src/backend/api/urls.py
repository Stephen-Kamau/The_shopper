from django.urls import path
from django.urls import include
from django.conf.urls import url
from . import views
urlpatterns = [
    path('api/v1', views.index , name ='index'),
    path('api/v1/register', views.user_registration , name ='register'),
    path('api/v1/login', views.user_login , name ='register'),
    path('api/v1/profile', views.user_profile , name ='register'),
]
