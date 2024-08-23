from django.shortcuts import render

def index(request):
    print("Index view called")
    return render(request, 'index.html')

def about(request):
    return render(request, 'About.html')

def cars(request):
    return render(request, 'Sport.html')

def contact(request):
    return render(request, 'Contact.html')

def my_page(request):
    print("My Page view called")
    return render(request, 'MyPage.html')

def basket(request):
    return render(request, 'Basket/basket.html')

def audi_r8_sup(request):
    return render(request, 'AUDI R8 sup.html')

def ferrari_488(request):
    return render(request, 'Ferrari 488.html')

def lamborghini_aventador(request):
    return render(request, 'Lamborghini Aventador.html')

def maserati_gran(request):
    return render(request, 'Maserati Gran.html')

def mercedes_gt(request):
    return render(request, 'Mercedes GT.html')

def porsche_911(request):
    return render(request, 'porsche 911.html')