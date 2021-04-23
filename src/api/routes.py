"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Sitio
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/register/<username>', methods=['POST'])
def handle_register_user(username):

    headers = {
        "Content-Type": "application/json"
    }
    #Chequeando si el usuario 
    
    requesting_user = User.query.filter_by(username=username).first()
    if requesting_user:
        username_id = requesting_user.id
    else : 
        username_id = None 

           
    if request.method == 'POST':
        
        print("HELLO Creando Usuario POST")
                
        if username_id:
            
            response_body = {
                "status": "HTTP_400_BAD_REQUEST. Usuario ya existe..."
            }
            status_code = 400
        
        else:
            print("Creando usuario")
            user_pack = request.json
            new_user = User(username,user_pack["email"],user_pack["nombre"],user_pack["password"],user_pack["edad"])
            db.session.add(new_user)
            db.session.commit()
            response_body = {
                "status": "Ok"
            }
            status_code = 200
      
    return make_response(
        jsonify(response_body),
        status_code,
        headers
    )

@api.route("/login", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    # Query your database for username and password
    
    user = User.query.filter_by(username=username, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })


@api.route('/sitios', methods=['GET'])
#@jwt_required()
def indexUsers():
    usuarios = Sitio.query.all()
    usuarios = list(map(lambda x: x.serialize(), usuarios))
    return jsonify(usuarios), 200
