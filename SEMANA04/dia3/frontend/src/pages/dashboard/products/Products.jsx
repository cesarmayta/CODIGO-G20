import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../contexts/AdminContext";
import { getAllCategoriesService } from "../../../services/categoriesServices";
import { getToken } from "../../../services/authServices";
import {
  getAllProducts,
  postProduct,
  uploadProductImage,
} from "../../../services/productsServices";
import { IoIosArrowDown } from "react-icons/io";
import "./Products.scss";

export const Products = () => {
  const { setAdminTitle } = useContext(AdminContext);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [listOfCategories, setListOfCategories] = useState([]);
  const [image, setImage] = useState();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0.0,
    stock: 0,
    image:'',
    category_id: 0,
  });
  const [bandera, setBandera] = useState(false);
/*
  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      const response = await getAllCategoriesService(token);
      if (response.status === 200) {
        setListOfCategories(response.data.data);
      }
    };
    fetchData();
  }, []);
*/
  useEffect(() => {
    setAdminTitle("Products");
    const fetchData = async () => {
      const token = getToken();
      const response = await getAllProducts(token);
      console.log(response.data.content)
      setListOfProducts(response.data.content);
    };
    fetchData();
  }, [bandera]);

  const createProduct = async (event) => {
    event.preventDefault();
    try {
      const token = getToken();
      const response = await postProduct(product, image, token);
      console.log(response);
      if (response.status) {
        setBandera(!bandera);
      
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "price") {
      return setProduct({ ...product, [name]: parseFloat(value) });
    } else if (name === "category_id") {
      return setProduct({ ...product, [name]: parseInt(value) });
    } else if (name === "stock") {
      return setProduct({ ...product, [name]: parseInt(value) });
    } else if (name === "image") {
      return setProduct({ ...product, [name]: event.target.files[0] });
    } else {
      return setProduct({ ...product, [name]: value });
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    try {
      const response = await uploadProductImage(file);
      if (response.status) {
        console.log(response.content)
        return setProduct({ ...product, image: response.content });
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="Products">
      <h4 className="Products-subtitle">All products</h4>
      <div className="Products-table">
        <table>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Product description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listOfProducts.length > 0 &&
              listOfProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>S/ {product.price}</td>
                  <td>
                    <img
                      src={product.image}
                      alt="Product Preview"
                      loading={"lazy"}
                    />
                  </td>
                  <td>{product.stock}</td>
                  <td>
                    <button>
                      Details
                      <IoIosArrowDown />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <h4 className="Products-subtitle">Create product</h4>
      <form className="Products-create-form" onSubmit={createProduct}>
        <div className="form-group">
          <label htmlFor="productoNombre">Product name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productoDescripcion">Product description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productoPrecio">Product price</label>
          <input
            type="number"
            min={0}
            step={0.1}
            name="price"
            id="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productoImagen">Product image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productoImagen">Product stock</label>
          <input
            type="number"
            min={0}
            step={1}
            name="stock"
            id="stock"
            value={product.stock}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoriaId">Product category</label>
          <select
            name="category_id"
            id="category_id"
            value={product.category_id}
            onChange={handleInputChange}
          >
            <option value="">Elegir Categoria</option>
            {listOfCategories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="Products-create-button">
            Create product
          </button>
        </div>
      </form>
    </div>
  );
};
