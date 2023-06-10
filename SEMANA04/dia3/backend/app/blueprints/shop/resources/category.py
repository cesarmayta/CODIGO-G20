from flask_restful import Resource ,Api
from flask import request

from .. import shop

from ..models import Category
from ..schemas import CategorySchema

from flask_jwt_extended import jwt_required

api = Api(shop)

class CategoryResource(Resource):
    
    def get(self):
        data = Category.get_all()
        data_schema = CategorySchema(many=True)
        
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context
        
    @jwt_required()
    def post(self):
        data = request.get_json()
        name = data['name']
        
        new_category = Category(name)
        new_category.save()
        
        data_schema = CategorySchema()
        
        context = {
            'status':True,
            'content': data_schema.dump(new_category)
        }
        
        return context
    
    @jwt_required()
    def put(self,id):
        data = request.get_json()
        name = data['name']
        
        upd_category = Category.get_by_id(id)
        upd_category.name = name
        upd_category.save()
        
        data_schema = CategorySchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(upd_category)
        }
        
        return context
    
    @jwt_required()
    def delete(self,id):
        
        del_category = Category.get_by_id(id)
        del_category.delete()
        
        context = {
            'status':True,
            'content':'registro eliminado'
        }
        
        return context
        
api.add_resource(CategoryResource,'/category')
api.add_resource(CategoryResource,'/category/<id>',endpoint='category')
    
    
    