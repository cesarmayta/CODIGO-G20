# Crear Api 

## Descripción

Crear una api con las siguiente rutas
- Para poder traer la lista de productos, GET: productos/<int:tipo_producto>
- Para poder crear un producto, POST: productos/
- Para poder crear y traer los tipos de producto, POST y GET: tipo-producto/
- Para poder ver los detalles de un producto, GET: producto/<int:id_producto>

## Detalles

Todas las rutas deben tener el siguiente formato en el (Response)
```json
{
    "success": true,
    "message": "Los productos se han cargado correctamente",
    "content": {
        [
            {
                "productId": 1,
                "productName": "Producto 1",
                "productPrice": 100.00,
                "productDescription": "Descripción del producto 1",
                "productImage": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                "productCategory": 0
            }
        ]
    }
}
```
## Imagenes de la aplicación
![Hero](https://github.com/12aptor/Codigo-Challenge/blob/main/public/first-page-ss.png)
![Products](https://github.com/12aptor/Codigo-Challenge/blob/main/public/second-page-ss.png)
![Admin](https://github.com/12aptor/Codigo-Challenge/blob/main/public/third-page-ss.png)
