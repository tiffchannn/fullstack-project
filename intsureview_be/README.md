# BE Scaffolding

## Notes

- Everything in this project is yours to blow away or build around
- A default superuser with username `admin` and password `password` is in the db.sqlite3 example db
- Enter the `intsureview_be` directory and type `poetry install` to gather all requirements
- Run demo server with `poetry run python manage.py runserver`
- Go to http://localhost:8000 to view the HTML interface for the django rest framework
- A .envrc file will auto load the virtual environment for python if you're using `direnv`
- With direnv, you do not need `poetry run` before your python commands

- Activate venv: `source intsureview_be-Gc3GHPLU/bin/activate` or `source /Users/tiffanychan/.local/share/virtualenvs/intsureview_be-Gc3GHPLU/bin/activate`
- ❯ source ~/.bashrc
- Installed corsheaders: django-cors-headers is a Python library that will prevent the errors that you would normally get due to CORS rules. In the CORS_ORIGIN_WHITELIST code, you whitelisted localhost:3000 because you want the frontend (which will be served on that port) of the application to interact with the API.
- Created Migrations File: python manage.py makemigrations api
- Apply DB changes: python manage.py migrate api
- user --> superuser
