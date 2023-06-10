from utils.db import ma
from marshmallow_sqlalchemy import (
    SQLAlchemyAutoSchema
)
from marshmallow import fields

from .models import Product,Category

class ProductSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Product
        
class CategorySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Category
        
class ProductPublicSchema(ma.Schema):
    id = fields.Integer()
    name = fields.String()
    description = fields.String()
    price = fields.Float()
    image = fields.String()
    stock = fields.Integer()
    category = fields.Nested(CategorySchema)
