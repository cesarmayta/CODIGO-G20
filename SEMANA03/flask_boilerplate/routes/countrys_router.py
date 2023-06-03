from flask import Blueprint, request
from controllers.countrys_controller import CountrysController

countrys_router = Blueprint('countrys', __name__)

@countrys_router.route('/countrys', methods=['GET'])
def getAllCountrys():
    controller = CountrysController()
    return controller.getAll()

@countrys_router.route('/countrys', methods=['POST'])
def createCountrys():
    controller = CountrysController()
    return controller.create(request.get_json())