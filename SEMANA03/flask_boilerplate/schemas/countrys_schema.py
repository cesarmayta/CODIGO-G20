from ma import ma
from models.countrys_model import CountrysModel

# class CountrysSchema(ma.Schema):
#     class Meta:
#         fields =('id', 'name', 'image')

class CountrysSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = CountrysModel
        # exclude = ('id',)