from tkinter import  *
from tkinter import ttk

app = Tk()
app.geometry('650x300')

tree = ttk.Treeview(app)
tree['columns'] = ('Nombre','Email','Celular')

tree.column('#0',width=0,stretch=NO)
tree.column('Nombre')
tree.column('Email')
tree.column('Celular')

tree.heading('#0',text='id')
tree.heading('Nombre',text='Nombre')
tree.heading('Email',text='Email')
tree.heading('Celular',text='Celular')

tree.grid(row=0,column=0,pady=20,padx=20)
tree.insert('',END,'1',values=('cesar mayta','cesarmayta@gmail.com','897979'))
tree.insert('',END,'2',values=('ana garcia','anita@gmail.com','89794479'))

app.mainloop()