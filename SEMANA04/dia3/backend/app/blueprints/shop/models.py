from utils.db import db

class Category(db.Model):
    __tablename__ = "tbl_category"
    
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(200),nullable=False)
    products = db.relationship("Product",backref='category',lazy=True)
    
    def __init__(self,name):
        self.name = name
        
    @staticmethod
    def get_all():
        return Category.query.all()
    
    @staticmethod
    def get_by_id(id):
        return Category.query.get(id)
    
    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Product(db.Model):
    __tablename__ = "tbl_product"
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(254), nullable=True)
    price = db.Column(db.Double, default=0)
    image = db.Column(db.String(254), default='https://ingoodcompany.asia/images/products_attr_img/matrix/default.png')
    stock = db.Column(db.Integer, default=0)
    category_id = db.Column(db.Integer,db.ForeignKey('tbl_category.id'),nullable=True)
    
    def __init__(self, name):
        self.name = name
        
    @staticmethod
    def get_all():
        return Product.query.all()
    
    @staticmethod
    def get_by_id(id):
        return Product.query.get(id)
    
    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()
        