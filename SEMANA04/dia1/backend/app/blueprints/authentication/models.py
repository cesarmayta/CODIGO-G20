from utils.db import db

class User(db.Model):
    __tablename__ = "tbl_user"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(200), nullable=False, unique=True)
    password = db.Column(db.Text, nullable=False)
    status = db.Column(db.Boolean, default=True)

    @staticmethod
    def get_all():
        return User.query.all()
    
    @staticmethod
    def get_by_id(id):
        return User.query.get(id)

    def save(self):
        if not self.id:
          db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()