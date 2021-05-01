  
import os
from flask_admin import Admin
from .models import db, Usuario, Sitio, Provincia, Dificultad, Categoria, Comentario, Calificacion, Rol, Galeria, Facilidad
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(Usuario, db.session))
    admin.add_view(ModelView(Sitio, db.session))
    admin.add_view(ModelView(Provincia, db.session))
    admin.add_view(ModelView(Dificultad, db.session))
    admin.add_view(ModelView(Categoria, db.session))
    admin.add_view(ModelView(Comentario, db.session))
    admin.add_view(ModelView(Calificacion, db.session))
    admin.add_view(ModelView(Rol, db.session))
    admin.add_view(ModelView(Facilidad, db.session))
    admin.add_view(ModelView(Galeria, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))