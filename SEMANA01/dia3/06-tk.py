from tkinter import *
from tkinter import messagebox
#instanciar un objeto de la clase Tk
app = Tk()
app.geometry('300x100')
app.title('Mi Primera App con Tk')
def saludar():
    nombre_saludo = txt_nombre.get()
    messagebox.showinfo("mensaje","Hola " + nombre_saludo)
    
#agregamos un frame
frame = LabelFrame(app,text='Nueva Ventana')
frame.grid(row=0,column=0,columnspan=3,pady=20,padx=20)
#agregamos una etiqueta
lb_nombre = Label(frame,text='Nombre : ')
lb_nombre.grid(row=1,column=0)
#agregamos caja de texto
txt_nombre = Entry(frame)
txt_nombre.grid(row=1,column=1)
#agregamos un botón
btn_saludo = Button(frame,text='saludar',command=saludar)
btn_saludo.grid(row=1,column=2)

app.mainloop()