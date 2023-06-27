"""
ASGI config for intsureview_be project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

# Django uses the DJANGO_SETTINGS_MODULE environment variable to locate the appropriate settings module
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "intsureview_be.settings")

# ASGI has you supply an application callable which the application server uses to communicate with your code
application = get_asgi_application()
