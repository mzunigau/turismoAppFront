"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import random
import string
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Sitio, Provincia, Dificultad, Categoria, Comentario, Calificacion, Rol, Facilidad, Galeria
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity

api = Blueprint('api', __name__)
@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query your database for username and password
    
    user = Usuario.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity={"email":email})
    return jsonify({ "token": access_token, "user_id": user.id })

##### USUARIOS #####

@api.route('/usuarios', methods=['GET'])
@jwt_required()
def listUsuarios():
    user = get_jwt_identity()
    usuario = Usuario.query.all()
    usuario = list(map(lambda x: x.serialize(), usuario))
    return jsonify(usuario), 200

@api.route('/usuarios', methods=['POST'])
def createUser():
    body = request.get_json() 

    if "nombre" in body:
        nombre = body["nombre"]

    if "email" in body:
        email = body["email"]

    if "password" in body:
        password = body["password"]

    if "edad" in body:
        edad = body["edad"]

    if "country_id" in body:
        country_id = body["country_id"]

    userNew = Usuario(nombre, email, password)
    db.session.add(userNew)
    db.session.commit()
    return jsonify(serialize(userNew)), 200    

@api.route('/usuarios/<int:id>', methods=['PUT'])
@jwt_required()
def updateUsuario(id):
    user = get_jwt_identity()
    body = request.get_json()
    usuario = Usuario.query.get(id)
    if usuario is None:
        raise APIException('Usuario not found', status_code=404)
    if "nombre" in body:
        usuario.nombre = body["nombre"]

    if "email" in body:
        usuario.email = body["email"]

    if "password" in body:
        usuario.password = body["password"]

    if "edad" in body:
        usuario.edad = body["edad"]

    if "country_id" in body:
        usuario.country_id = body["country_id"]

    if "roles" in body:
        for rol in body["roles"]:
            rolAdd = Rol.query.get(rol["id"])
            usuario.roles.append(rolAdd)

    if "calificaciones" in body:
        for cal in body["calificaciones"]:
            calAdd = Calificacion.query.get(cal["id"])
            usuario.calificaciones.append(calAdd)
    
    if "categorias" in body:
        for cat in body["categorias"]:
            catAdd = Categoria.query.get(cat["id"])
            usuario.categorias.append(catAdd)

    if "sitios_favoritos" in body:
        for fav in body["sitios_favoritos"]:
            favAdd = Sitio.query.get(fav["id"])
            usuario.sitios_favoritos.append(favAdd)

    if "comentarios" in body:
        for comentarios in body["comentarios"]:
            comentarioAdd = Comentario.query.get(comentarios["id"])
            usuario.comentarios.append(comentarioAdd)

    db.session.commit()
    return jsonify(Usuario.serialize(usuario)), 200

@api.route('/usuarios/roles/<int:id>', methods=['PUT'])
@jwt_required()
def deleteRolUsuario(id):
    user = get_jwt_identity()
    body = request.get_json()
    usuario = Usuario.query.get(id)
    if usuario is None:
        raise APIException('Usuario not found', status_code=404)
    if "id" in body:
        rol = Rol.query.get(id)
        usuario.roles.remove(rol)
    db.session.commit()
    return jsonify(Usuario.serialize(usuario)), 200

@api.route('/usuarios/categorias/<int:id>', methods=['PUT'])
@jwt_required()
def deleteCatUsuario(id):
    user = get_jwt_identity()
    body = request.get_json()
    usuario = Usuario.query.get(id)
    if usuario is None:
        raise APIException('Usuario not found', status_code=404)
    if "id" in body:
        cat = Categoria.query.get(id)
        usuario.categorias.remove(cat)
    db.session.commit()
    return jsonify(Usuario.serialize(usuario)), 200

@api.route('/usuarios/sitios/<int:id>', methods=['PUT'])
@jwt_required()
def deleteSitio_Usuario(id):
    user = get_jwt_identity()
    body = request.get_json()
    usuario = Usuario.query.get(id)
    if usuario is None:
        raise APIException('Usuario not found', status_code=404)
    if "id" in body:
        sitio = Sitio.query.get(id)
        usuario.sitios_favoritos.remove(sitio)
    db.session.commit()
    return jsonify(Usuario.serialize(usuario)), 200

@api.route('/usuarios/<int:id>', methods=['GET'])
@jwt_required()
def getUsuario(id):
    user = get_jwt_identity()
    usuario = Usuario.query.get(id)
    return jsonify(Usuario.serialize(usuario)), 200        

@api.route('/usuarios/<int:id>', methods=['DELETE'])
@jwt_required()
def deleteUser(id):
    token = get_jwt_identity()
    usuario = Usuario.query.get(id)
    if usuario is None:
        raise APIException('User not found', status_code=404)
    db.session.delete(usuario)
    db.session.commit()
    response_body = {
        "status": "OK"
        }
    return response_body, 200

#################################################
##############    SITIOS   ######################
#################################################


#LISTAR POR CATEGORIA
@api.route('/sitios/categoria/<int:cat_id>', methods=['GET'])
@jwt_required()
def listSitiosByCategoria(cat_id):
    token = get_jwt_identity()
    query = db.session.query(Sitio).filter(Sitio.categorias.any(id=cat_id))
    sitios = list(map(lambda x: x.serialize(), query))
    return jsonify(sitios), 200

#LISTAR TODOS LOS SITIOS
@api.route('/sitios', methods=['GET'])
@jwt_required()
def listSitios():
    token = get_jwt_identity()
    sitios = Sitio.query.all()
    sitios = list(map(lambda x: x.serialize(), sitios))
    return jsonify(sitios), 200

# CREAR UN SITIO
@api.route('/sitios', methods=['POST'])
@jwt_required()
def createSitio():
    token = get_jwt_identity()
    body = request.get_json()
    sitioNew = Sitio(
        nombre=body['nombre'], 
        portada=body['portada'],
        ubicacion=body['ubicacion'],
        tipo_costo= body['tipo_costo'],
        costo_min= body['costo_min'],
        costo_max= body['costo_max'],
        lat= body['lat'],
        lon= body['lon'],
        gmaps= body['gmaps'],
        dificultad_id= body['dificultad_id'],
        provincia_id= body['provincia_id'],
        )
    db.session.add(sitioNew)
    db.session.commit()
    return jsonify(Sitio.serialize(sitioNew)), 200 

#ACTUALIZAR SITIO / ACTUALIZAR Y AGREGAR CATEGORIAS
@api.route('/sitios/<int:id>', methods=['PUT'])
@jwt_required()
def updateSitio(id):
    token = get_jwt_identity()
    body = request.get_json()
    sitio = Sitio.query.get(id)
    if sitio is None:
        raise APIException('Sitio not found', status_code=404)
    if "nombre" in body:
        sitio.nombre = body["nombre"]

    if "portada" in body:
        sitio.portada = body["portada"]

    if "ubicacion" in body:
        sitio.ubicacion = body["ubicacion"]
    
    if "tipo_costo" in body:
        sitio.tipo_costo = body["tipo_costo"]

    if "costo_min" in body:
        sitio.costo_min = body["costo_min"]

    if "costo_max" in body:
        sitio.costo_max = body["costo_max"]

    if "lat" in body:
        sitio.lan = body["lan"]

    if "lon" in body:
        sitio.lon = body["lon"]

    if "gmaps" in body:
        sitio.gmaps = body["gmaps"]

    if "dificultad_id" in body:
        sitio.dificultad_id = body["dificultad_id"]
    
    if "provincia_id" in body:
        sitio.provincia_id = body["provincia_id"]

    if "comentarios" in body:
        for com in body["comentarios"]:
            comAdd = Comentario.query.get(com["id"])
            sitio.comentarios.append(comAdd)

    if "calificaciones" in body:
        for cal in body["calificaciones"]:
            calAdd = Calificacion.query.get(cal["id"])
            sitio.calificaciones.append(calAdd)
    
    if "categorias" in body:
        for cat in body["categorias"]:
            catAdd = Categoria.query.get(cat["id"])
            sitio.categorias.append(catAdd)
    
    if "galerias" in body:
        for gal in body["galerias"]:
            galAdd = Galeria.query.get(gal["id"])
            sitio.galerias.append(galAdd)

    if "facilidades" in body:
        for fac in body["facilidades"]:
            facAdd = Facilidad.query.get(fac["id"])
            sitio.facilidades.append(facAdd)

    db.session.commit()
    return jsonify(Sitio.serialize(sitio)), 200 
    
@api.route('/sitios/<int:id>', methods=['GET'])
@jwt_required()
def getSitio(id):
    token = get_jwt_identity()
    sitio = Sitio.query.get(id)
    return jsonify(Sitio.serialize(sitio)), 200   

@api.route('/sitios/<int:id>', methods=['DELETE'])
@jwt_required()
def deleteSitio(id):
    token = get_jwt_identity()
    sitio = Sitio.query.get(id)
    if sitio is None:
        raise APIException('Site not found', status_code=404)
    db.session.delete(sitio)
    db.session.commit()
    response_body = {
        "status": "OK"
        }
    return response_body, 200

##########   PROVINCIA   ##############
#######################################

@api.route('/provincias', methods=['GET'])
@jwt_required()
def listProvincias():
    token = get_jwt_identity()
    provincias = Provincia.query.all()
    provincias = list(map(lambda x: x.serialize(), provincias))
    return jsonify(provincias), 200

@api.route('/provincias/<int:id>', methods=['GET'])
@jwt_required()
def getProvincia(id):
    token = get_jwt_identity()
    pro = Provincia.query.get(id)
    return jsonify(Provincia.serialize(pro)), 200  

@api.route('/provincias', methods=['POST'])
@jwt_required()
def createProvincia():
    token = get_jwt_identity()
    body = request.get_json() 
    provinciaNew = Provincia(nombre=body['nombre'])
    db.session.add(provinciaNew)
    db.session.commit()
    return jsonify(Provincia.serialize(provinciaNew)), 200  

@api.route('/provincias/<int:id>', methods=['DELETE'])
@jwt_required()
def deleteProvincia(id):
    token = get_jwt_identity()
    provincia = Provincia.query.get(id)
    if provincia is None:
        raise APIException('Provincia not found', status_code=404)
    db.session.delete(provincia)
    db.session.commit()
    response_body = {
        "status": "OK"
        }
    return response_body, 200  

########## DIFICULTADES  ##############
#######################################

@api.route('/dificultades', methods=['GET'])
@jwt_required()
def listDificultades():
    token = get_jwt_identity()
    dificultades = Dificultad.query.all()
    dificultades = list(map(lambda x: x.serialize(), dificultades))
    return jsonify(dificultades), 200

@api.route('/dificultades/<int:id>', methods=['GET'])
@jwt_required()
def getDif(id):
    token = get_jwt_identity()
    dif = Dificultad.query.get(id)
    return jsonify(Dificultad.serialize(dif)), 200  

@api.route('/dificultades', methods=['POST'])
@jwt_required()
def createDif():
    token = get_jwt_identity()
    body = request.get_json() 
    difNew = Dificultad(nombre=body['nombre'])
    db.session.add(difNew)
    db.session.commit()
    #genera token
    #access_token = create_access_token(identity=user.id)
    return jsonify(Dificultad.serialize(difNew)), 200  

##########    ROLES       #############
#######################################

@api.route('/roles', methods=['GET'])
@jwt_required()
def listRoles():
    token = get_jwt_identity()
    roles = Rol.query.all()
    roles = list(map(lambda x: x.serialize(), roles))
    return jsonify(roles), 200

@api.route('/roles/<int:id>', methods=['GET'])
@jwt_required()
def getRol(id):
    token = get_jwt_identity()
    roles = Rol.query.get(id)
    return jsonify(Rol.serialize(roles)), 200  

@api.route('/roles', methods=['POST'])
@jwt_required()
def createRoles():
    token = get_jwt_identity()
    body = request.get_json() 
    rolNew = Rol(nombre=body['nombre'])
    db.session.add(rolNew)
    db.session.commit()
    #genera token
    #access_token = create_access_token(identity=user.id)
    return jsonify(Rol.serialize(rolNew)), 200  

@api.route('/roles/<int:id>', methods=['DELETE'])
@jwt_required()
def deleteRoles(id):
    token = get_jwt_identity()
    rol = Rol.query.get(id)
    if rol is None:
        raise APIException('rol not found', status_code=404)
    db.session.delete(rol)
    db.session.commit()
    response_body = {
        "status": "OK"
        }
    return response_body, 200

##########   CATEGORIA   ##############
#######################################

@api.route('/categorias', methods=['GET'])
@jwt_required()
def listCategorias():
    token = get_jwt_identity()
    categorias = Categoria.query.all()
    categorias = list(map(lambda x: x.serialize(), categorias))
    return jsonify({"result":{"categorias": categorias}}), 200

@api.route('/categorias', methods=['POST'])
@jwt_required()
def createCategoria():
    token = get_jwt_identity()
    body = request.get_json() # get the request body content
    catNew = Categoria(nombre=body['nombre'])
    db.session.add(catNew)
    db.session.commit()
    return jsonify(Categoria.serialize(catNew)), 200 

@api.route('/categorias/<int:id>', methods=['PUT'])
@jwt_required()
def updateCategoria(id):
    token = get_jwt_identity()
    cat = Categoria.query.get(id)
    if cat is None:
        raise APIException('categoria not found', status_code=404)
    if "nombre" in body:
        cat.nombre = body["nombre"]
    db.session.commit()
    return jsonify(Categoria.serialize(cat)), 200 
    
@api.route('/categorias/<int:id>', methods=['GET'])
@jwt_required()
def getCategoria(id):
    token = get_jwt_identity()
    cat = Categoria.query.get(id)
    return jsonify(Categoria.serialize(cat)), 200   

@api.route('/categorias/<int:id>', methods=['DELETE'])
@jwt_required()
def deleteCategoria(id):
    token = get_jwt_identity()
    cat = Categoria.query.get(id)
    if cat is None:
        raise APIException('Category not found', status_code=404)
    db.session.delete(cat)
    db.session.commit()
    response_body = {
        "status": "OK"
        }
    return response_body, 200



##########   COMENTARIOS ##############
#######################################

@api.route('/comentarios/<int:id>', methods=['DELETE'])
@jwt_required()
def deleteComentario(id):
    token = get_jwt_identity()
    comentario = Comentario.query.get(id)
    if comentario is None:
        raise APIException('comentario not found', status_code=404)
    db.session.delete(comentario)
    db.session.commit()
    response_body = {
        "status": "OK"
        }
    return response_body, 200


##########  CALIFICACIONES ##############
#########################################

@api.route('/calificaciones/<int:id>', methods=['DELETE'])
@jwt_required()
def deleteCalificacion(id):
    token = get_jwt_identity()
    calificacion = Calificacion.query.get(id)
    if calificacion is None:
        raise APIException('calificacion not found', status_code=404)
    db.session.delete(calificacion)
    db.session.commit()
    response_body = {
        "status": "OK"
        }
    return response_body, 200


##########  EMAIL RECOVERY  #############
#########################################


# URL GENERE UN NUEVO PASSWORD y ENVIE UN CORREO PARA CAMBIAR LA CONTRASEÑA
def get_random_string(length):
    # choose from all lowercase letter
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(length))
    print("Random string of length", length, "is:", result_str)

@api.route('/email/<int:email>', methods=['PUT'])
def passwordRecovery(email):
    body = request.get_json()
    usuario = Usuario.query.filter_by(email=email)
    if usuario is None:
        raise APIException('Usuario not found', status_code=404)
    usuario.password = get_random_string(6)
    db.session.commit()
    #Enviar email con el password y el endpoint para cambiar el password

    return jsonify(Usuario.serialize(usuario)), 200




