import os
import werkzeug

from flask_restful import Resource,Api,reqparse
from flask import request

from .. import shop

from ..models import Product
from ..schemas import ProductSchema,ProductPublicSchema

from flask_jwt_extended import jwt_required

api = Api(shop)

class UploadImage(Resource):
    
    def post(self):
        parse = reqparse.RequestParser()
        parse.add_argument('file',type=werkzeug.datastructures.FileStorage,location='files')
        args = parse.parse_args()
        
        image_file = args['file']
        image_file.save(os.path.join(os.getcwd(),'app','static','uploads',image_file.filename))
        
        url_path = request.host_url + "static/uploads/" + str(image_file.filename)
        
        context = {
            'status':True,
            'content':url_path
        }
        
        return context

class ProductResource(Resource):
    
    @jwt_required()
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
        image = data['image']
        category_id = data['category_id']
        
        new_product = Product(name)
        new_product.price = price
        new_product.description = description
        new_product.image = image
        new_product.category_id = category_id
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
        upd_product.description = description
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
    
class ProductPublicResource(Resource):
    
    def get(self):
        data = Product.get_all()
        data_schema = ProductPublicSchema(many=True)
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context
        
    
api.add_resource(ProductResource,'/product')
api.add_resource(ProductPublicResource,'/product/public')
api.add_resource(ProductResource,'/product/<id>', endpoint='product')
api.add_resource(UploadImage,'/uploadimage')