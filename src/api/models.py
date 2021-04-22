from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

roles_usuarios= db.Table('roles_usuarios', db.Column("usuario_id", db.Integer, db.ForeignKey("usuarios.id")),db.Column("role_id", db.Integer, db.ForeignKey("roles.id")))
categorias_usuarios= db.Table('categorias_usuarios', db.Column("usuario_id", db.Integer, db.ForeignKey("usuarios.id")),db.Column("categoria_id", db.Integer, db.ForeignKey("categorias.id")))
categorias_sitios= db.Table('categorias_sitios', db.Column("sitio_id", db.Integer, db.ForeignKey("sitios.id")),db.Column("categoria_id", db.Integer, db.ForeignKey("categorias.id")))


class Usuario(db.Model):
    __tablename__='usuarios'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    edad = db.Column(db.Integer)
    roles = db.relationship("Rol", secondary= roles_usuarios)
    categorias = db.relationship("Categoria", secondary= categorias_usuarios)
    

    def __repr__(self):
        return '<Usuario %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "edad": self.edad
            # do not serialize the password, its a security breach
        }
class Sitio(db.Model):
    __tablename__='sitios'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    edad = db.Column(db.Integer)
    categorias = db.relationship("Categoria", secondary= categorias_usuarios)
    dificultad_id = Column(Integer, ForeignKey('dificultades.id'))

    def __repr__(self):
        return '<Usuario %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "edad": self.edad
            # do not serialize the password, its a security breach
        }

class Provincia(db.Model):
    __tablename__='provincias'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Provincia %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre            
        }

class Dificultad(db.Model):
    __tablename__='dificultades'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    sitios = relationship("Sitio")

    def __repr__(self):
        return '<Dificultad %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre            
        }

class Rol(db.Model):
    __tablename__='roles'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Roles %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre            
        }

class Categoria(db.Model):
    __tablename__='categorias'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Categorias %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre            
        }








