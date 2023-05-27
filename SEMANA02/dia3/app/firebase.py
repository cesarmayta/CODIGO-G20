import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

class FirebaseAdmin:
    
    def __init__(self):
        cred = credentials.Certificate('app/token.json')
        firebase_admin.initialize_app(cred)
        self.db = firestore.client()
        
    def get_collection(self,col_name):
        list_collection = []
        col_values = self.db.collection(col_name)
        doc_values = col_values.get()
        index = 1
        for doc in doc_values:
            dic_col = doc.to_dict()
            dic_col.update({'id':doc.id})
            dic_col.update({'index':index})
            list_collection.append(dic_col)
            index += 1
            
        return list_collection
    
    def insert_document(self,col_name,data):
        doc_value = self.db.collection(col_name).document().set(data)
        return doc_value
    
    
#fb = FirebaseAdmin()
#print(fb.get_collection('proyectos'))