"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Sitio, Provincia, Dificultad, Categoria, Comentario, Calificacion, Rol
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
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

##### USUARIOS #####

@api.route('/usuarios', methods=['POST'])
def createUser():
    body = request.get_json() 
    userNew = Usuario(username=body['email'], nombre=body['nombre'], 
    email=body['email'],edad=body['edad'],password=body['password'])
    db.session.add(userNew)
    db.session.commit()
    #genera token
    #access_token = create_access_token(identity=user.id)
    return jsonify(serialize(userNew)), 200    

@api.route('/usuarios/<int:id>', methods=['PUT'])
def updateUsuario(id):
    body = request.get_json()
    usuario = Usuario.query.get(person_id)
    if usuario is None:
        raise APIException('Usuario not found', status_code=404)
    if "nombre" in body:
        sitio.nombre = body["nombre"]
    if "roles" in body:
        sitio.nombre = body["nombre"]


    db.session.commit()
 
    return "OK", 200

@api.route('/usuarios/<int:id>', methods=['GET'])
def getUser(id):
    user = Usuario.query.get(id)
    return jsonify(serialize(user)), 200        

@api.route('/usuarios/<int:id>', methods=['DELETE'])
def deleteUsers(id):
    user = Usuario.query.get(id)
    if user is None:
        raise APIException('User not found', status_code=404)
    db.session.delete(user)
    db.session.commit()
    return jsonify(user), 200

###### Sitios ######

@api.route('/sitios', methods=['GET'])
#@jwt_required()
def listSitios():
    sitios = Sitio.query.all()
    sitios = list(map(lambda x: x.serialize(), sitios))
    return jsonify(sitios), 200

@api.route('/sitios', methods=['POST'])
def createSitio():
    body = request.get_json() # get the request body content
    sitioNew = Sitio(nombre=body['nombre'], dificultad=body['nombre'], 
    email=body['email'],edad=body['edad'],password=body['password'])
    db.session.add(sitioNew)
    db.session.commit()
    #genera token
    #access_token = create_access_token(identity=user.id)
    return jsonify(serialize(sitioNew)), 200 

@api.route('/sitios/<int:id>', methods=['PUT'])
def updateSitio(id):
    body = request.get_json()
    sitio = Sitio.query.get(person_id)
    if sitio is None:
        raise APIException('Sitio not found', status_code=404)
    if "nombre" in body:
        sitio.nombre = body["nombre"]
    db.session.commit()
    #genera token
    #access_token = create_access_token(identity=user.id)
    return jsonify(serialize(sitio)), 200 
    
@api.route('/sitios/<int:id>', methods=['GET'])
def getSitio(id):
    user = Usuario.query.get(id)
    return jsonify(serialize(user)), 200   

@api.route('/sitios/<int:id>', methods=['DELETE'])
def deleteSitio(id):
    sitio = Sitio.query.get(id)
    if sitio is None:
        raise APIException('Site not found', status_code=404)
    db.session.delete(sitio)
    db.session.commit()
    return jsonify(sitio), 200

###### Provincia ######

@api.route('/provincias', methods=['GET'])
#@jwt_required()
def listProvincias():
    provincias = Provincia.query.all()
    provincias = list(map(lambda x: x.serialize(), provincias))
    return jsonify(provincias), 200

@api.route('/provincias', methods=['POST'])
def createProvincia():
    body = request.get_json() # get the request body content
    provinciaNew = Provincia(nombre=body['nombre'])
    db.session.add(provinciaNew)
    db.session.commit()
    #genera token
    #access_token = create_access_token(identity=user.id)
    return jsonify(Provincia.serialize(provinciaNew)), 200  

@api.route('/provincias/<int:id>', methods=['DELETE'])
def deleteProvincia(id):
    provincia = Provincia.query.get(id)
    if provincia is None:
        raise APIException('Provincia not found', status_code=404)
    db.session.delete(provincia)
    db.session.commit()
    response_body = {
        "status": "OK"
        }
    return response_body, 200  

###### Dificultad ######

@api.route('/dificultades', methods=['GET'])
#@jwt_required()
def listDificultades():
    dificultades = Dificultad.query.all()
    dificultades = list(map(lambda x: x.serialize(), dificultades))
    return jsonify(dificultades), 200



###### Rol ######


###### Categoria ######

@api.route('/categorias', methods=['GET'])
#@jwt_required()
def listCategorias():
    categorias = Categoria.query.all()
    categorias = list(map(lambda x: x.serialize(), categorias))
    return jsonify(categorias), 200

@api.route('/categorias', methods=['POST'])
def createCategoria():
    body = request.get_json() # get the request body content
    sitioNew = Sitio(nombre=body['nombre'], dificultad=body['nombre'], 
    email=body['email'],edad=body['edad'],password=body['password'])
    db.session.add(sitioNew)
    db.session.commit()
    #genera token
    #access_token = create_access_token(identity=user.id)
    return jsonify(serialize(sitioNew)), 200 

@api.route('/categorias/<int:id>', methods=['PUT'])
def updateCategoria(id):
    sitio = Sitio.query.get(person_id)
    if sitio is None:
        raise APIException('Sitio not found', status_code=404)
    if "nombre" in body:
        sitio.nombre = body["nombre"]
    db.session.commit()
    #genera token
    #access_token = create_access_token(identity=user.id)
    return jsonify(serialize(sitio)), 200 
    
@api.route('/categorias/<int:id>', methods=['GET'])
def getCategoria(id):
    cat = Categoria.query.get(id)
    return jsonify(serialize(cat)), 200   

@api.route('/categorias/<int:id>', methods=['DELETE'])
def deleteCategoria(id):
    cat = Categoria.query.get(id)
    if cat is None:
        raise APIException('Category not found', status_code=404)
    db.session.delete(cat)
    db.session.commit()
    response_body = {
        "status": "OK"
        }
    return response_body, 200







