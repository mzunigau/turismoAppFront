"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Sitio
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

@api.route('/usuarios', methods=['POST'])
def createUser():
    body = request.get_json() # get the request body content
    userNew = User(username=body['email'], nombre=body['nombre'], 
    email=body['email'],edad=body['edad'],password=body['password'])
    db.session.add(userNew)
    db.session.commit()
    #genera token
    #access_token = create_access_token(identity=user.id)
    return jsonify(serialize(userNew)), 200    

@api.route('/usuarios/<int:id>', methods=['PUT'])
def updateUser(id):
    body = request.get_json()
    user1 = usuario.query.get(id)
    if user1 is None:
        raise APIException('User not found', status_code=404)
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

@api.route('/sitios', methods=['GET'])
@jwt_required()
def indexSitios():
    sitios = Sitio.query.all()
    sitios = list(map(lambda x: x.serialize(), sitios))
    return jsonify(sitios), 200

@api.route('/sitios/<int:id>', methods=['DELETE'])
def deleteSitios(id):
    sitio = Sitio.query.get(id)
    if sitio is None:
        raise APIException('Site not found', status_code=404)
    db.session.delete(sitio)
    db.session.commit()
    return jsonify(sitio), 200
