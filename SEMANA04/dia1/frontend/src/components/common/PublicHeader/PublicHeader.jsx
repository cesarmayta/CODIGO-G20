import "./PublicHeader.scss";
import { BiSearch } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { RiShoppingBag3Line, RiUser3Line } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { PublicRegister } from "../PublicRegister/PublicRegister";
import { PublicLogin } from "../PublicLogin/PublicLogin";
import { PublicShoppingCart } from "../PublicShoppingCart/PublicShoppingCart";

export const PublicHeader = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showShopping, setShowShopping] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseRegister = () => setShowRegister(false);

  const handleChangeLoginToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleChangeRegisterToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const handleShowShopping = () => {
    setShowRegister(false);
    setShowLogin(false);
    setShowShopping(!showShopping);
  };

  return (
    <>
      <div className="Header">
        <div className="u_wrapper">
          <nav className="Header-container">
            <div className="Header-icon">
              <Link to={"/pe"}>MODA</Link>
            </div>
            <ul className="Header-nav-list">
              <li>
                <NavLink
                  to={"/pe/buscar"}
                  className={(estatus) =>
                    estatus.isActive
                      ? "Header-nav-item active"
                      : "Header-nav-item"
                  }
                >
                  Todos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/pe/buscar/novedades"}
                  className={(estatus) =>
                    estatus.isActive
                      ? "Header-nav-item active"
                      : "Header-nav-item"
                  }
                >
                  Novedades
                </NavLink>
              </li>
              <li>
                <NavLink
                  // to={"/pe/buscar/destacados"}
                  to={"/admin-panel/products"}
                  className={(estatus) =>
                    estatus.isActive
                      ? "Header-nav-item active"
                      : "Header-nav-item"
                  }
                >
                  Destacados
                </NavLink>
              </li>
            </ul>
            <div className="Header-search-product">
              <div className="Header-search-container">
                <BiSearch className="Header-search-icon" />
                <input
                  className="Header-search-input"
                  type="text"
                  placeholder="Buscar producto"
                />
              </div>
            </div>
            <div className="Header-shoping-cart">
              <RiShoppingBag3Line onClick={handleShowShopping} />
            </div>
            <div className="Header-user">
              <RiUser3Line onClick={() => setShowLogin(true)} />
            </div>
            <div className="Header-burger-button">
              <HiOutlineMenuAlt3 />
            </div>
          </nav>
        </div>
      </div>

      <PublicRegister
        showRegister={showRegister}
        handleCloseRegister={handleCloseRegister}
        handleChangeRegisterToLogin={handleChangeRegisterToLogin}
      />
      <PublicLogin
        showLogin={showLogin}
        handleCloseLogin={handleCloseLogin}
        handleChangeLoginToRegister={handleChangeLoginToRegister}
      />

      <PublicShoppingCart
        showShopping={showShopping}
        handleShowShopping={handleShowShopping}
      />
    </>
  );
};
