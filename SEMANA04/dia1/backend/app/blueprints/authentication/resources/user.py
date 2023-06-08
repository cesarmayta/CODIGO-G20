from flask_restful import Resource, Api
from flask import request
from .. import authentication
from ..models import User

from werkzeug.security import generate_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token

api = Api(authentication)

class UserResource(Resource):
    
    def get(self):
        pass
    
    def post(self):
        try:
            json = request.get_json()
            hashed_pwd = generate_password_hash(json['password'])
            exists_email = User.query.filter_by(email=json['email']).first()
            if not exists_email:
                record = User(name=json['name'], email=json['email'], password=hashed_pwd)
                record.save()
                access_token = create_access_token(identity=record.id)
                refresh_token = create_refresh_token(identity=record.id)
                return {
                    'status': True,
                    'access_token': access_token,
                    'refresh_token': refresh_token
                }, 201
            return {
                'status': False,
                'message': 'El email ya esta registrado'
            }, 400
        except Exception as e:
            return {
                'message': str(e),
                'status': False
            }, 500
        

api.add_resource(UserResource, '/user')