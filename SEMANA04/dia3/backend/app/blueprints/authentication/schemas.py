from utils.db import ma
from marshmallow import fields

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id','email')