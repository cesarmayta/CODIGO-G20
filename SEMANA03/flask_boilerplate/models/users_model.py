from db import db
from sqlalchemy import Column, Integer, String, Text

class UsersModel(db.Model):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(200))
    email = Column(String(100))
    password = Column(Text)