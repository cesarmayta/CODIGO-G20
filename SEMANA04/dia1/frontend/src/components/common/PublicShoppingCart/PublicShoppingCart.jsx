import "./PublicShoppingCart.scss";
import { MdClose } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PublicShoppingCart = ({ showShopping, handleShowShopping }) => {

  const navigate = useNavigate()
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
  ]);

  const redirectToPayment = () => {
    handleShowShopping()
    navigate("/pe/pagar")
  }

  return (
    <div
      className={`Shopping-Cart ${showShopping === false && "Shooping-Cart-hidden"
        }`}
    >
      <div className="Shopping-Cart-content">
        <MdClose className="Shopping-Cart-close" onClick={handleShowShopping} />
        <h3 className="Shopping-Cart-title">Carrito de compras</h3>
        <ul className="Shopping-Cart-menu">
          {shoppingItems &&
            shoppingItems.map((item, index) => (
              <li className="Shopping-Cart-item" key={index}>
                <div className="Shopping-Cart-item-image">
                  {/* <img src={item.imagen} alt="Imagen Producto" /> */}
                </div>
                <span className="Shopping-Cart-item-name">{item.nombre}</span>
                <span className="Shopping-Cart-item-amount">
                  {item.cantidad}
                </span>
                <span className="Shopping-Cart-item-price">{item.precio}</span>
                <FaTrash className="Shopping-Cart-item-trash" />
              </li>
            ))}
        </ul>
        <button
          type="button"
          className="Shopping-Cart-button"
          onClick={redirectToPayment}
        >
          Comprar ahora
        </button>
      </div>
    </div>
  );
};
