from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

roles_usuarios= db.Table('roles_usuarios', db.Column("usuario_id", db.Integer, db.ForeignKey("usuarios.id")),db.Column("role_id", db.Integer, db.ForeignKey("roles.id")))
sitios_usuarios= db.Table('sitios_usuarios', db.Column("usuario_id", db.Integer, db.ForeignKey("usuarios.id")),db.Column("sitio_id", db.Integer, db.ForeignKey("sitios.id")))

categorias_usuarios= db.Table('categorias_usuarios', db.Column("usuario_id", db.Integer, db.ForeignKey("usuarios.id")),db.Column("categoria_id", db.Integer, db.ForeignKey("categorias.id")))
categorias_sitios= db.Table('categorias_sitios', db.Column("sitio_id", db.Integer, db.ForeignKey("sitios.id")),db.Column("categoria_id", db.Integer, db.ForeignKey("categorias.id")))

galerias_sitios= db.Table('galerias_sitios', db.Column("sitio_id", db.Integer, db.ForeignKey("sitios.id")),db.Column("galeria_id", db.Integer, db.ForeignKey("galerias.id")))
facilidades_sitios= db.Table('facilidades_sitios', db.Column("sitio_id", db.Integer, db.ForeignKey("sitios.id")),db.Column("facilidad_id", db.Integer, db.ForeignKey("facilidades.id")))

class Usuario(db.Model):
    __tablename__='usuarios'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    edad = db.Column(db.Integer)
    roles = db.relationship("Rol", secondary= roles_usuarios, back_populates="usuarios")
    categorias = db.relationship("Categoria", secondary= categorias_usuarios)
    sitios_favoritos = db.relationship("Sitio", secondary= sitios_usuarios)
    comentarios = db.relationship("Comentario", backref="usuario")
    calificaciones = db.relationship("Calificacion", backref="usuario")
    country_id = db.Column(db.Integer, db.ForeignKey('countries.id'))

    def __repr__(self):
        return '<Usuario %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "edad": self.edad,
            "country_id": self.country_id,
            "roles": list(map(lambda x: x.serialize(), self.roles)),
            "categorias": list(map(lambda x: x.serialize(), self.categorias)),
            "sitios_favoritos": list(map(lambda x: x.serialize(), self.sitios_favoritos)),
            "comentarios": list(map(lambda x: x.serialize(), self.comentarios)),
            "calificaciones": list(map(lambda x: x.serialize(), self.calificaciones))
        }

class Country(db.Model):
    __tablename__='countries'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    usuarios = db.relationship("Usuario", backref="country")

    def __repr__(self):
        return '<Country %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre   
        }

class Rol(db.Model):
    __tablename__='roles'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    usuarios = db.relationship("Usuario", secondary= roles_usuarios, back_populates="roles")

    def __repr__(self):
        return '<Rol %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre            
        }

#############   SITIOS   ###############################
#############            ###############################

class Sitio(db.Model):
    __tablename__='sitios'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(255), nullable=False)
    portada = db.Column(db.String(255))
    ubicacion = db.Column(db.String(1000))
    tipo_costo = db.Column(db.Boolean)
    costo_min = db.Column(db.Integer)
    costo_max = db.Column(db.Integer)
    lat = db.Column(db.String(255))
    lon = db.Column(db.String(255))
    gmaps = db.Column(db.String(255))
    dificultad_id = db.Column(db.Integer, db.ForeignKey('dificultades.id'))
    provincia_id = db.Column(db.Integer, db.ForeignKey('provincias.id'))
    comentarios = db.relationship("Comentario", backref="sitio")
    calificaciones = db.relationship("Calificacion", backref="sitio")
    galerias = db.relationship("Galeria", secondary= galerias_sitios, back_populates="sitios")
    facilidades = db.relationship("Facilidad", secondary= facilidades_sitios, back_populates="sitios")

    def __repr__(self):
        return '<Sitio %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "portada": self.portada,
            "ubicacion": self.ubicacion,
            "tipo_costo": self.tipo_costo,
            "costo_min": self.costo_min,
            "costo_max": self.costo_max,
            "lat": self.lat,
            "lon": self.lon,
            "gmaps": self.gmaps,
            "dificultad_id": self.dificultad_id,
            "provincia_id": self.provincia_id,
            "comentarios": list(map(lambda x: x.serialize(), self.comentarios)),
            "calificaciones": list(map(lambda x: x.serialize(), self.calificaciones)),
            "galerias": list(map(lambda x: x.serialize(), self.galerias)),
            "facilidades": list(map(lambda x: x.serialize(), self.facilidades))
        }


class Facilidad(db.Model):
    __tablename__='facilidades'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    url = db.Column(db.String(120))
    sitios = db.relationship("Sitio", secondary= facilidades_sitios, back_populates="facilidades")

    def __repr__(self):
        return '<Facilidad %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "url": self.url         
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
            "nombre": self.nombre          
        }

class Galeria(db.Model):
    __tablename__='galerias'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(255), nullable=False)
    sitios = db.relationship("Sitio", secondary= galerias_sitios, back_populates="galerias")

    def __repr__(self):
        return '<Galeria %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre      
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
            "nombre": self.nombre         
        }

class Categoria(db.Model):
    __tablename__='categorias'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    sitios = db.relationship("Sitio", secondary= categorias_sitios)

    def __repr__(self):
        return '<Categoria %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "sitios": list(map(lambda x: x.serialize(), self.sitios))
        }

class Comentario(db.Model):
    __tablename__='comentarios'
    id = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.String(120), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'))
    sitio_id = db.Column(db.Integer, db.ForeignKey('sitios.id'))
    fecha = db.Column(db.Date)

    def __repr__(self):
        return '<Comentario %r>' % self.descripcion

    def serialize(self):
        return {
            "id": self.id,
            "descripcion": self.descripcion,
            "usuario_id": self.usuario_id,
            "sitio_id": self.sitio_id,
            "fecha": self.fecha           
        }

class Calificacion(db.Model):
    __tablename__='calificaciones'
    id = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.String(120), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'))
    sitio_id = db.Column(db.Integer, db.ForeignKey('sitios.id'))
    numero = db.Column(db.Integer,nullable=False)

    def __repr__(self):
        return '<Calificacion %r>' % self.descripcion

    def serialize(self):
        return {
            "id": self.id,
            "descripcion": self.nombre,
            "usuario_id": self.usuario_id,
            "sitio_id": self.sitio_id,
            "numero": self.numero           
        }








