from utils.db import db

class Product(db.Model):
    __tablename__ = "tbl_product"
    
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(200),nullable=False)
    description = db.Column(db.String(254),nullable=True)
    price = db.Column(db.Double,default=0)
    image = db.Column(db.String(254),default='https://ingoodcompany.asia/images/products_attr_img/matrix/default.png')
    stock = db.Column(db.Integer,default=0)
    
    def __init__(self,name):
        self.name = name
        
    @staticmethod
    def get_all():
        return Product.query.all()