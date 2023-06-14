from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/users', methods=['GET', 'POST'])
def getAllUsers():
    method = request.method
    if method =='GET':
      try:
        response = [{
            'name': "Eduardo",
            'email': "eduardo@gmail.com"
        }]
        return response, 200
      except Exception as e:
          return {
              'message': 'Internal server error',
              'error': str(e)
          }, 500
    elif method == 'POST':
       try:
          json = request.get_json()
          return {
             'id': 1,
             'name': json['name'],
             'email': json['email']
          }, 201
       except Exception as e:
          return {
              'message': 'Internal server error',
              'error': str(e)
          }, 500

if __name__ == '__main__':
    app.run(debug=True)