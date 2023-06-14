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
        response = client.get('/users')
        assert response.status_code == 200
        assert response.json == [{
            'name': "Eduardo",
            'email': "eduardo@gmail.com"
        }]