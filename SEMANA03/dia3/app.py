from flask import Flask
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

@app.route('/mysql/registrar-alumno', methods=['POST'])
def registrar_alumno():
    try:
      # Opcion 1
      # sql = 'INSERT INTO alumnos (id, nombre, apellido) VALUES (11, "Earling", "Haland")'
      # mysql_cursor.execute(sql)
      # Opcion 2
      sql = 'INSERT INTO public.alumnos (id, nombre, apellido) VALUES (%s,%s,%s)'
      values = (11, "Earling", "Haland")
      mysql_cursor.execute(sql, values)
      mysql_db.commit()
      return 'Alumno registrado correctamente'
    except Exception as e:
        return str(e)
    
@app.route('/postgres/registrar-alumno', methods=['POST'])
def registrar_alumno_postgres():
    try:
      sql = 'INSERT INTO public.alumnos (id, nombre, apellido) VALUES (%s,%s,%s)'
      values = (11, "Earling", "Haland")
      postgres_cursor.execute(sql, values)
      postgres_db.commit()
      return 'Alumno registrado correctamente'
    except Exception as e:
        return str(e)
    

if __name__ == '__main__':
    app.run(debug=True)