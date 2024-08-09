"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)
@api.route('/register', methods=['POST'])
def register():
    request_body = request.get_json()
    if request_body is None:
        return jsonify({"msg": "Missing JSON in request"}), 400
    if "email" not in request_body:
        return jsonify({"msg": "Missing email parameter"}), 400
    if "password" not in request_body:
        return jsonify({"msg": "Missing password parameter"}), 400
    
    user = User()
    user.create_user(request_body["email"], request_body["password"])
    return jsonify(user.serialize()), 200

@api.route('/login', methods=['POST'])
def login():
    request_body = request.get_json()
    if request_body is None:
        return jsonify({"msg": "Missing JSON in request"}), 400
    if "email" not in request_body:
        return jsonify({"msg": "Missing email parameter"}), 400
    if "password" not in request_body:
        return jsonify({"msg": "Missing password parameter"}), 400
    
    user = User.query.filter_by(email=request_body["email"]).first()
     
    if user and user.check_password(request_body["password"]) is True:
        access_token = create_access_token(identity=user.serialize())

        return jsonify({"msg": "User logged in", "user": user.serialize(), "access_token": access_token}), 200
    else:
        return jsonify({"msg": "Incorrect email or password"}), 401
  

