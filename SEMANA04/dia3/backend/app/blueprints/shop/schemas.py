from utils.db import ma
from marshmallow_sqlalchemy import (
    SQLAlchemyAutoSchema
)

from .models import Product,Category

class ProductSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Product
        
class CategorySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Category