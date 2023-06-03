from db import db
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey

class JobsModel(db.Model):
    __tablename__ = 'jobs'
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    description = Column(String(100))
    status = Column(Boolean, default=True)
    salary = Column(String(50))
    type = Column(String(50))
    country_id = Column(Integer, ForeignKey('countrys.id'))
    company_id = Column(Integer, ForeignKey('companys.id'))
