import { useEffect, useContext } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { AdminContext } from "../../../contexts/AdminContext";
import { getAllProducts } from "../../../services/productsServices";
import "./Search.scss";

export const Search = () => {
  const { productsList, handleProductsList, setProductsFiltered } =
    useContext(AdminContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    getAllProducts().then((response) => {
      handleProductsList("products", response);
      setProductsFiltered(response);
    });
  }, []);

  const updateProductsList = (route, preferencia_id) => {
    getAllProducts(preferencia_id)
      .then((response) => {
        handleProductsList("products", response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        navigate(`/pe/buscar/${route}`);
      });
  };

  const filterProducts = (products, filter) => {
    if (filter === "a-z") {
      const productsFiltered = [...products].sort((a, b) => {
        if (a.productoNombre < b.productoNombre) {
          return -1;
        }
        if (a.productoNombre > b.productoNombre) {
          return 1;
        }
        return 0;
      });
      navigate(`${pathname}?clasificar=a-z`, { replace: true });
      return setProductsFiltered(productsFiltered);
    } else if (filter === "z-a") {
      const productsFiltered = [...products].sort((a, b) => {
        if (a.productoNombre > b.productoNombre) {
          return -1;
        }
        if (a.productoNombre < b.productoNombre) {
          return 1;
        }
        return 0;
      });
      navigate(`${pathname}?clasificar=z-a`, { replace: true });
      return setProductsFiltered(productsFiltered);
    } else if (filter === "precio-asc") {
      const productsFiltered = [...products].sort(
        (a, b) => a.productoPrecio - b.productoPrecio
      );
      navigate(`${pathname}?clasificar=precio-asc`, { replace: true });
      return setProductsFiltered(productsFiltered);
    } else {
      const productsFiltered = [...products]
        .sort((a, b) => a.productoPrecio - b.productoPrecio)
        .reverse();
      navigate(`${pathname}?clasificar=precio-desc`, { replace: true });
      return setProductsFiltered(productsFiltered);
    }
  };

  const isPathActive = (path) => {
    const pathname = window.location.pathname;
    return pathname.includes(path);
  };

  const isQueryActive = (query) => {
    const search = window.location.search;
    return search.includes(query);
  };

  return (
    <div className="All-products">
      <div className="u_wrapper">
        <div className="All-products-container">
          <div className="All-products-nav">
            <h5
              className="All-products-nav-title"
              onClick={() => updateProductsList("", null)}
            >
              Categorias
            </h5>
            <ul className="All-products-nav-content">
              <li
                className={`All-products-nav-content-item ${
                  isPathActive("/novedades") ? "active" : ""
                }`}
                onClick={() => updateProductsList("novedades", 1)}
              >
                Novedades
              </li>
              <li
                className={`All-products-nav-content-item ${
                  isPathActive("/destacados") ? "active" : ""
                }`}
                onClick={() => updateProductsList("destacados", 2)}
              >
                Destacados
              </li>
            </ul>
          </div>
          <div className="All-products-content">
            <h6 className="All-products-content-title">
              Se ha encontrado 5 resultados
            </h6>
            <div className="All-products-content-content">
              <Outlet />
            </div>
          </div>
          <div className="All-products-filter">
            <h5 className="All-products-filter-title">Relevancia</h5>
            <ul className="All-products-filter-content">
              <li
                className={`All-products-filter-content-item ${
                  isQueryActive("?clasificar=a-z") ? "active" : ""
                }`}
                onClick={() => filterProducts(productsList.products, "a-z")}
              >
                Orden alfabetico A-Z
              </li>
              <li
                className={`All-products-filter-content-item ${
                  isQueryActive("?clasificar=z-a") ? "active" : ""
                }`}
                onClick={() => filterProducts(productsList.products, "z-a")}
              >
                Orden alfabetico Z-A
              </li>
              <li
                className={`All-products-filter-content-item ${
                  isQueryActive("?clasificar=precio-asc") ? "active" : ""
                }`}
                onClick={() =>
                  filterProducts(productsList.products, "precio-asc")
                }
              >
                Precio: Menor a mayor
              </li>
              <li
                className={`All-products-filter-content-item ${
                  isQueryActive("?clasificar=precio-desc") ? "active" : ""
                }`}
                onClick={() =>
                  filterProducts(productsList.products, "precio-desc")
                }
              >
                Precio: Mayor a menor
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
