from utils.db import ma
from marshmallow_sqlalchemy import (
    SQLAlchemyAutoSchema
)

from .models import Product

class ProductSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Product