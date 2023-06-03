from models.countrys_model import CountrysModel

class CountrysController:
    
    def __init__(self):
        self.model = CountrysModel

    def getAll(self):
        records = self.model.query.all()
        response = []
        for record in records:
            response.append({
                'id': record.id,
                'name': record.name,
                'image': record.image
            })
        return response, 200
    
    def create(self):
        pass