from tkinter import *
from tkinter.ttk import Treeview
import sqlite3

conn = sqlite3.connect('empresas.db')
cursor = conn.cursor()

cursor.execute("""
               CREATE TABLE if not exists empresas (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    ruc TEXT(20),
                    rsocial TEXT
                );
               """)


class Empresa:
    def __init__(self,window):
        self.wind = window
        self.wind.title='CRUD EMPRESAS'
        self.wind.geometry('520x490')
        self.wind.configure(bg='#49A')
        
        #frame
        frame = LabelFrame(self.wind,text='Registro de Nueva Empresa')
        frame.grid(row=0,column=0,columnspan=3,pady=20,padx=20)
        
        #ruc
        lb_ruc = Label(frame,text='RUC : ')
        lb_ruc.grid(row=1,column=0)
        self.txt_ruc = Entry(frame)
        self.txt_ruc.grid(row=1,column=1)
        
        #razon social
        lb_rsocial = Label(frame,text='Razón Social :')
        lb_rsocial.grid(row=1,column=2)
        self.txt_rsocial = Entry(frame)
        self.txt_rsocial.grid(row=1,column=3)
        
        #boton insertar nueva empresa
        btn_insertar = Button(frame,text='Insertar',command=self.insertar_empresa)
        btn_insertar.grid(row=1,column=4)
        
        #treeview
        self.trv_empresas = Treeview(height=10,columns=2)
        self.trv_empresas.grid(row=2,column=0,padx=10)
        self.trv_empresas.heading('#0',text='RUC',anchor=CENTER)
        self.trv_empresas.heading('#1',text='Razón Social',anchor=CENTER)
        
    def insertar_empresa(self):
        rsocial = self.txt_rsocial.get()
        print(rsocial)
        self.trv_empresas.insert('',END,text=self.txt_ruc.get(),values=(rsocial)) 
        
wind_empresa = Tk()
app = Empresa(wind_empresa)
wind_empresa.mainloop()