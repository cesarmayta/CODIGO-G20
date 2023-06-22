class Cart:
    
    def __init__(self,request):
        self.request = request
        self.session = request.session
        
        cart = self.session.get("cart")
        if not cart:
            cart = self.session['cart'] = {}
            
        self.cart = cart
        
    def add(self,producto,cantidad):
        if str(producto.id) not in self.cart.keys():
            self.cart[producto.id] = {
                "producto_id":producto.id,
                "nombre":producto.nombre,
                "cantidad":cantidad,
                "precio":str(producto.precio),
                "imagen":producto.imagen.url,
                "categoria":producto.categoria.nombre,
                "subtotal": str(cantidad * producto.precio)
            }
        else:
            #actualizamos el producto en el carrito
            for key,value in self.cart.items():
                if key == str(producto.id):
                    nueva_cantidad = int(value['cantidad']) + cantidad
                    value["cantidad"] = str(nueva_cantidad)
                    nuevo_subtotal = float(value['cantidad']) * float(value['precio'])
                    value["subtotal"] = str(nuevo_subtotal)
                    break
                
        self.save()
        
    def save(self):
        self.session["cart"] = self.cart
        self.session.modified = True