from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

roles_usuarios= db.Table('roles_usuarios', db.Column("usuario_id", db.Integer, db.ForeignKey("usuarios.id")),db.Column("role_id", db.Integer, db.ForeignKey("roles.id")))
sitios_usuarios= db.Table('sitios_usuarios', db.Column("usuario_id", db.Integer, db.ForeignKey("usuarios.id")),db.Column("sitio_id", db.Integer, db.ForeignKey("sitios.id")))

categorias_usuarios= db.Table('categorias_usuarios', db.Column("usuario_id", db.Integer, db.ForeignKey("usuarios.id")),db.Column("categoria_id", db.Integer, db.ForeignKey("categorias.id")))
categorias_sitios= db.Table('categorias_sitios', db.Column("sitio_id", db.Integer, db.ForeignKey("sitios.id")),db.Column("categoria_id", db.Integer, db.ForeignKey("categorias.id")))


class Usuario(db.Model):
    __tablename__='usuarios'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    edad = db.Column(db.Integer)
    roles = db.relationship("Rol", secondary= roles_usuarios)
    categorias = db.relationship("Categoria", secondary= categorias_usuarios)
    sitios_favoritos = db.relationship("Sitio", secondary= sitios_usuarios)
    comentarios = db.relationship("Comentario")
    calificaciones = db.relationship("Calificacion")
    

    def __repr__(self):
        return '<Usuario %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "edad": self.edad,
            "roles": list(map(lambda x: x.serialize(), self.roles)),
            "categorias": list(map(lambda x: x.serialize(), self.categorias))
            # do not serialize the password, its a security breach
        }
class Sitio(db.Model):
    __tablename__='sitios'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    categorias = db.relationship("Categoria", secondary= categorias_sitios)
    dificultad_id = db.Column(db.Integer, db.ForeignKey('dificultades.id'))
    provincia_id = db.Column(db.Integer, db.ForeignKey('provincias.id'))
    comentarios = db.relationship("Comentario")
    calificaciones = db.relationship("Calificacion")

    def __repr__(self):
        return '<Sitio %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "dificultad_id": self.dificultad_id,
            "provincia_id": self.provincia_id,
            "categorias": list(map(lambda x: x.serialize(), self.categorias))
            # do not serialize the password, its a security breach
        }

class Provincia(db.Model):
    __tablename__='provincias'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    sitios = db.relationship("Sitio")

    def __repr__(self):
        return '<Provincia %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "sitios": list(map(lambda x: x.serialize(), self.sitios))           
        }

class Dificultad(db.Model):
    __tablename__='dificultades'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    sitios = db.relationship("Sitio")

    def __repr__(self):
        return '<Dificultad %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "sitios": list(map(lambda x: x.serialize(), self.sitios))           
        }

class Rol(db.Model):
    __tablename__='roles'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<Rol %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre            
        }

class Categoria(db.Model):
    __tablename__='categorias'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<Categoria %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre            
        }

class Comentario(db.Model):
    __tablename__='comentarios'
    id = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.String(120), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'))
    sitio_id = db.Column(db.Integer, db.ForeignKey('sitios.id'))
    fecha = db.Column(db.Date,nullable=False)

    def __repr__(self):
        return '<Comentario %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "descripcion": self.nombre,
            "usuario_id": self.usuario_id,
            "sitio_id": self.sitio_id,
            "fecha": self.fecha           
        }

class Calificion(db.Model):
    __tablename__='calificaciones'
    id = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.String(120), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'))
    sitio_id = db.Column(db.Integer, db.ForeignKey('sitios.id'))
    numero = db.Column(db.Integer,nullable=False)

    def __repr__(self):
        return '<Comentario %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "descripcion": self.nombre,
            "usuario_id": self.usuario_id,
            "sitio_id": self.sitio_id,
            "numero": self.numero           
        }








