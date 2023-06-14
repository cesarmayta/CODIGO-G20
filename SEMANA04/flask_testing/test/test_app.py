from flask import Flask
import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
      yield client

class Test:
    def test_app(self, client: Flask):
        response = client.get('/')
        assert response.data == b'Hello, World!'

    def test_users_get(self, client: Flask):
        "Listar todos los usuarios"
        response = client.get('/users')
        assert response.status_code == 200
        assert response.json == [{
            'name': "Eduardo",
            'email': "eduardo@gmail.com"
        }]

    def test_users_post(self, client: Flask):
        """Crear un usuario"""
        response = client.post('/users',json={
            'name': 'Cesar Mayta',
            'email': 'cesar@gmail.com'
        })
        assert response.status_code == 201
        assert response.json == {
            'id': 1,
            'name': 'Cesar Mayta',
            'email': 'cesar@gmail.com'
        }

    def test_users_post_error(self, client: Flask):
        """Error al crear un usuario"""
        response = client.post('/users', json={
          'name': 'Cesar Mayta'
        })
        assert response.status_code == 500
        assert 'message' in response.json
        assert 'error' in response.json
        assert response.json['message'] == 'Internal server error'
        assert isinstance(response.json['error'], str)
        assert response.json['error'] != ''