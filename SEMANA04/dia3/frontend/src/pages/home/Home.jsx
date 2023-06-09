import "./Home.scss";
import dress from "@assets/dress.png";
import { ProductCard } from "@components/products/productCard/ProductCard";
import { getAllProducts } from "../../services/productsServices";
import { useEffect, useState } from "react";

export const Home = () => {
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://127.0.0.1:5000/product");
      const json = await response.json();
      if (json.status === true) {
        setListOfProducts(json.content);
      } else {
        console.log("error");
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="NewHero">
        <div className="u_wrapper">
          <div className="NewHero-container">
            <div className="NewHero-content">
              <p className="NewHero-text">
                Absolutely hot collections <span>🔥</span>
              </p>
              <h1 className="NewHero-title">
                The Best Place To Find And Buy Amazing <span>Products</span>
              </h1>
              <p className="NewHero-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo voluptatum optio accusantium molestiae saepe.
              </p>
              <div className="NewHero-button">
                <button>Explore Now</button>
              </div>
              <div className="NewHero-indicators">
                <div className="NewHero-indicator-container">
                  <div className="NewHero-indicator-number">20k+</div>
                  <div className="NewHero-indicator-text">Collections</div>
                </div>
                <div className="NewHero-indicator-container">
                  <div className="NewHero-indicator-number">16k</div>
                  <div className="NewHero-indicator-text">Users</div>
                </div>
              </div>
            </div>
            <div className="NewHero-art">
              <img src={dress} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="Show-products">
        <div className="u_wrapper">
          <div className="Show-products-container">
            {listOfProducts.length > 0 &&
              listOfProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
