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
    
api.add_resource(ProductResource,'/product')