from flask_restful import Resource,Api
from flask import request

from .. import shop

from ..models import Product
from ..schemas import ProductSchema

from flask_jwt_extended import jwt_required

api = Api(shop)

class ProductResource(Resource):
    
    #@jwt_required()
    def get(self):
        data = Product.get_all()
        data_schema = ProductSchema(many=True)
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context
    
    @jwt_required()
    def post(self):
        data = request.get_json()
        name = data['name']
        description = data['description']
        price = data['price']
        
        new_product = Product(name)
        new_product.price = price
        new_product.description = description
        new_product.save()
        
        data_schema = ProductSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(new_product)
        }
        
        return context
    
    @jwt_required()
    def put(self,id):
        data = request.get_json()
        name = data['name']
        price = data['price']
        description = data['description']
        
        upd_product = Product.get_by_id(id)
        upd_product.name = name
        upd_product.price = price
        upd_product.save()
        
        data_schema = ProductSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(upd_product)
        }
        
        return context
    
    @jwt_required()
    def delete(self,id):
        
        del_product = Product.get_by_id(id)
        del_product.delete()
        
        
        context = {
            'status':True,
            'content':'registro eliminado'
        }
        
        return context
        
    
api.add_resource(ProductResource,'/product')
api.add_resource(ProductResource,'/product/<id>', endpoint='product')