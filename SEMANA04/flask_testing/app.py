from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/users')
def getAllUsers():
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

if __name__ == '__main__':
    app.run(debug=True)