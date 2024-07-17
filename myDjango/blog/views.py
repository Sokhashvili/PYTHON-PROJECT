from django.shortcuts import render

from .models import BlogPost

def main_page(request):
    posts = BlogPost.objects.all()
    return render(request, 'blog/main_page.html', {'posts': posts})
