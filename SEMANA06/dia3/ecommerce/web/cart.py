class Cart:
    def __init__(self,request):
        self.request = request
        self.session = request.session
        
        cart = self.session.get("cart")
        if not cart:
            cart = self.session['cart'] = {}
            
        self.cart = cart
        
    def add(self,producto,cantidad):
        self.cart[producto.id] = {
            "producto_id":producto.id,
            "nombre":producto.nombre,
            "cantidad":cantidad,
            "precio":str(producto.precio),
            "imagen":producto.imagen.url,
            "categoria":producto.categoria.nombre,
            "subtotal": str(cantidad * producto.precio)
        }
        self.save()
        
    def save(self):
        self.session["cart"] = self.cart
        self.session.modified = True