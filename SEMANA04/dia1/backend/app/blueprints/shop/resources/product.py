from flask_restful import Resource,Api
from flask import request

from .. import shop

from ..models import Product
from ..schemas import ProductSchema

api = Api(shop)

class ProductResource(Resource):
    
    def get(self):
        data = Product.get_all()
        data_schema = ProductSchema(many=True)
        
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context
    
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
    
api.add_resource(ProductResource,'/product')