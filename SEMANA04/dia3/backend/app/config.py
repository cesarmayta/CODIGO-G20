from datetime import timedelta
class Config:
    SQLALCHEMY_DATABASE_URI='mysql://root:@localhost/db_shop_g20'
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    JWT_SECRET_KEY='asdfhasdfhlkasdfl32h'
    JWT_ACCESS_TOKEN_EXPIRES=timedelta(hours=1)