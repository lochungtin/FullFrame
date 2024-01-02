# Django

<p align="center"><b>🚧 FRAMEWORK STILL IN DEVELOPMENT 🚧</b></p>

## Initialisation

Command I used to create initial the project directory.

```bash
python -m pip install Django
django-admin startproject django
```

The name for the project `django` was not allow dued to it clashing with an existing Python module.

## Thoughts During Development

The command I used to launch the application.

```
python manage.py runserver
```

A local server was start at port `8000`.

But after running the command, I was met with an error message claiming I have `18 unapplied migration(s)` even thought I have setup my application according to the official documentation. I had to close down the development server and run the command `python manage.py migrate` before rerunning the launch command to fix the issue.

## Final Thoughts

## Versions and Details

`Django 4`
