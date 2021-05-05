"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import random
import string
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from flask_jwt_extended import JWTManager
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from flask_mail import Message
from flask_mail import Mail


#SENDGRID_KEY='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'
ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
if os.getenv("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)

# Allow CORS requests to this API
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET") # Change this!
jwt = JWTManager(app)
CORS(app)

app.config['SECRET_KEY']='top-secret!'
app.config['MAIL_SERVER']='smtp.sendgrid.net'
app.config['MAIL_PORT']='587'
app.config['MAIL_USE_TLS']='True'
app.config['MAIL_USERNAME']='apikey'
app.config['MAIL_PASSWORD']=os.environ.get('SENDGRID_KEY')
app.config['MAIL_DEFAULT_SENDER']='mzunigau@outlook.com'

mail = Mail(app)


# add the admin
setup_admin(app)

#Recuperar contrasena
@app.route('/email', methods=['POST'])
def restore():
    body = request.get_json()

    email= body['email']
    newPassword = ''.join(random.choice(string.ascii_letters) for i in range(10))
    usuario = Usuario.query.filter_by(email=email).first()
    if usuario is None:
        raise APIException('Usuario not found', status_code=404)
    usuario.password = newPassword
    db.session.commit()
    back = os.environ.get('BACKEND_URL')
    front = back.replace("3001", "3000")
    passresetPage= front + "/reset/" + email 
    msg = Message('Reestrablecer contraseña', recipients=[email])
    msg.html=f'''<!doctype html>
<html lang="en-US">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Reset Password Email Template</title>
    <meta name="description" content="Reset Password Email Template.">
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
        <tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>

                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                            Usted tiene una solicitud de cambio de contraseña</h1>
                                        <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2>Esta es su nueva contraseña:</h2>
                                        <strong>{newPassword}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="{passresetPage}" style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Resetear
                                            contraseña</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">
                                        &nbsp;</td>
                                </tr>
                            </table>
                        </td>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>

                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                </table>
            </td>
            </tr>
    </table>
</body>

</html>
   '''
    mail.send(msg)
    return "OK", 200

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
