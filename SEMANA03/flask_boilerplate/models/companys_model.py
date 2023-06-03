from db import db
from sqlalchemy import Column, Integer, String, Text

class CompanysModel(db.Model):
    __tablename__ = 'companys'
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    image = Column(Text)