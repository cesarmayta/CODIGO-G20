from flask import jsonify, render_template
import json
from flask_restful import Resource, Api
from .. import shop

api = Api(shop)

class IndexResource(Resource):
    
    def get(self):
        context = {
            'status':True,
            'content':'api rest activo'
        }
        
        return context
    
class SwaggerResource(Resource):
    def get(self):
        with open('swagger.json') as f:
            return jsonify(json.load(f))

api.add_resource(SwaggerResource,'/swagger.json')
api.add_resource(IndexResource,'/')