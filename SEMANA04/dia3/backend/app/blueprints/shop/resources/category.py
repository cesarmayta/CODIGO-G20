from flask_restful import Resource ,Api
from flask import request

from .. import shop

from ..models import Category
from ..schemas import CategorySchema

from flask_jwt_extended import jwt_required

api = Api(shop)

class CategoryResource(Resource):
    
    def get(self):
        try:
          data = Category.get_all()
          data_schema = CategorySchema(many=True)
          
          context = {
              'status':True,
              'content':data_schema.dump(data)
          }
          
          return context, 200
        except Exception as e:
          return {
              'status': False,
              'message': str(e)
          }, 500
        
    @jwt_required()
    def post(self):
        try:
          data = request.get_json()
          name = data['name']
          
          new_category = Category(name)
          new_category.save()
          
          data_schema = CategorySchema()
          
          context = {
              'status':True,
              'content': data_schema.dump(new_category)
          }
          
          return context, 201
        except Exception as e:
          return {
              'status': False,
              'message': str(e)
          }, 500
    
    @jwt_required()
    def put(self,id):
        try:
          data = request.get_json()
          name = data['name']
          
          upd_category = Category.get_by_id(id)
          if not upd_category:
             return {
                'status': False,
                'message': 'No existe el registro'
             }, 400
          upd_category.name = name
          upd_category.save()
          
          data_schema = CategorySchema()
          
          context = {
              'status':True,
              'content':data_schema.dump(upd_category)
          }
          
          return context, 201
        except Exception as e:
          return {
              'status': False,
              'message': str(e)
          }, 500
    
    @jwt_required()
    def delete(self,id):
        try:
          del_category = Category.get_by_id(id)
          if not del_category:
             return {
                'status': False,
                'message': 'No existe el registro'
             }, 400
          del_category.delete()
          
          context = {
              'status':True,
              'content':'registro eliminado'
          }
          
          return context, 201
        except Exception as e:
          return {
              'status': False,
              'message': str(e)
          }, 500
        
api.add_resource(CategoryResource,'/category')
api.add_resource(CategoryResource,'/category/<id>',endpoint='category')
    
    
    