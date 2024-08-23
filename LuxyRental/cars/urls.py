from django.contrib import admin
from django.urls import path
from cars import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('cars/', views.cars, name='cars'),
    path('contact/', views.contact, name='contact'),
    path('my_page/', views.my_page, name='my_page'),
    path('basket/', views.basket, name='basket'),
    path('audi_r8_sup/', views.audi_r8_sup, name='audi_r8_sup'),
    path('ferrari_488/', views.ferrari_488, name='ferrari_488'),
    path('lamborghini_aventador/', views.lamborghini_aventador, name='lamborghini_aventador'),
    path('maserati_gran/', views.maserati_gran, name='maserati_gran'),
    path('mercedes_gt/', views.mercedes_gt, name='mercedes_gt'),
    path('porsche_911/', views.porsche_911, name='porsche_911'),
]