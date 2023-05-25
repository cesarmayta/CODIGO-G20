import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("token.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

col_proyectos = db.collection('proyectos')
doc_proyectos = col_proyectos.get()

for proyecto in doc_proyectos:
    print(proyecto.to_dict())
