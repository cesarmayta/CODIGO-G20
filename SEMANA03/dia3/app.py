from flask import Flask, request, jsonify
import mysql.connector
import psycopg2

app = Flask(__name__)

mysql_db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="codigo"
)

postgres_db = psycopg2.connect(
    host="localhost",
    user="postgres",
    password="root",
    database="codigo",
    port="5432"
)

mysql_cursor = mysql_db.cursor()
postgres_cursor = postgres_db.cursor()

@app.route('/')
def index():
    return 'La API funciona correctamente 😎'

@app.route('/mysql/registrar-alumno', methods=['POST', 'GET'])
def registrar_alumno():
    method = request.method
    if method == 'GET':
        try:
          sql = 'SELECT * FROM codigo.alumnos'
          mysql_cursor.execute(sql)
          record = mysql_cursor.fetchall()
          response = []
          for alumno in record:
             response.append({
                'id': alumno[0],
                'nombre': alumno[1],
                'apellido': alumno[2]
             })
          return response, 200
        except Exception as e:
          return {
             'message': 'Error',
             'error': str(e)
          }, 400
    else:
      try:
        json = request.get_json()
        sql = 'INSERT INTO codigo.alumnos (nombre, apellido) VALUES (%s,%s)'
        values = (json['nombre'], json['apellido'])
        mysql_cursor.execute(sql, values)
        mysql_db.commit()
        return {
           'message': 'Alumno registrado exitosamente'
        }, 200
      except Exception as e:
          return {
             'message': 'Error',
             'error': str(e)
          }, 500
    
@app.route('/postgres/registrar-alumno', methods=['POST', 'GET'])
def registrar_alumno_postgres():
    method = request.method
    if method == 'GET':
      try:
        sql = 'SELECT * FROM public.alumnos'
        postgres_cursor.execute(sql)
        record = postgres_cursor.fetchall()
        response = []
        for alumno in record:
          response.append({
              'id': alumno[0],
              'nombre': alumno[1],
              'apellido': alumno[2]
          })
        return response, 200
      except Exception as e:
         return {
            'message': 'Error',
            'error': str(e)
         }, 400
    else:
      try:
        json = request.get_json()
        sql = 'INSERT INTO codigo.alumnos (nombre, apellido) VALUES (%s,%s)'
        values = (json['nombre'], json['apellido'])
        postgres_cursor.execute(sql, values)
        postgres_db.commit()
        return {
           'message': 'Alumno registrado exitosamente'
        }, 200
      except Exception as e:
          return {
            'message': 'Error',
            'error': str(e)
         }, 500
    

if __name__ == '__main__':
    app.run(debug=True)