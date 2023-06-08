import './Payments.scss'
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export const Payments = () => {
  const [shoppingItems, setShoppingItems] = useState([
    {
      imagen: "",
      nombre: "Zapatillas Adidas",
      cantidad: 1,
      precio: 100.2,
    },
    {
      imagen: "",
      nombre: "Zapatillas Pumba",
      cantidad: 2,
      precio: 150.0,
    },
  ])

  return (
    <div className="Payments">
      <div className="u_wrapper">
        <div className='Payments-container'>
          <div className='Payments-card-data'>
            <h3>Datos de pagos</h3>
            <form>
              <div className="Payments-form-control">
                <label htmlFor="tarjeta">Numero de tarjeta</label>
                <input type="text" id='tarjeta' />
              </div>
              <div className='Payments-form-control'>
                <label htmlFor="ccv">ccv</label>
                <input type="text" id='ccv' />
              </div>
              <button
                type='button'
                className="Payments-form-button"
              // onClick={}
              >
                Confirmar compra
              </button>
            </form>
          </div>
          <div className='Payments-menu-items'>
            <h3>Carrito de compra</h3>
            <ul>
              {shoppingItems &&
                shoppingItems.map((item, index) => (
                  <li className="Payments-item" key={index}>
                    <div className="Payments-item-image">
                      {/* <img src={item.imagen} alt="Imagen Producto" /> */}
                    </div>
                    <span className="Payments-item-name">{item.nombre}</span>
                    <span className="Payments-item-amount">
                      {item.cantidad}
                    </span>
                    <span className="Payments-item-price">{item.precio}</span>
                    <FaTrash className="Payments-item-trash" />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
