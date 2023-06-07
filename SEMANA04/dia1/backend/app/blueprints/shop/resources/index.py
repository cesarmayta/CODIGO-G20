from flask import request
from flask_restful import Resource,Api
from .. import shop

api = Api(shop)

class IndexResource(Resource):
    
    def get(self):
        context = {
            'status':True,
            'content':'api rest activo'
        }
        
        return context
    
api.add_resource(IndexResource,'/')