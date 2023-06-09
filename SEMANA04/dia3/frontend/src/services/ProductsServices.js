import { API_URL } from "@lib/Enviroments";

export const getAllProducts = async (token) => {
  // let query_params = new URLSearchParams()
  // if (preferencia_id) {
  //   query_params.append('preferencia', preferencia_id)
  // }
  // const response = await fetch(`${API_URL}/productos/productos/list?${query_params}`)
  const response = await fetch(`${API_URL}/product`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const status = response.status;
  const data = await response.json();
  return { data, status };
};

export const getAllPublicProducts = async (token) => {
  const response = await fetch(`${API_URL}/product/public`);
  const status = response.status;
  const data = await response.json();
  return { data, status };
};

export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/productos/productos/${id}`);
  const data = await response.json();
  return data;
};

export const postProduct = async (product, image, token) => {
  /*let formData = new FormData();
  formData.append("name", product.name);
  formData.append("description", product.description);
  formData.append("price", product.price);
  formData.append("image", product.image);
  formData.append("stock", product.stock);
  //formData.append("category_id", product.category_id);
  const response = await fetch(`${API_URL}/product`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const data = await response.json();
  return data;*/
  console.log(product)
  const response = await fetch(`${API_URL}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  });
  const status = response.status;
  const data = await response.json();
  return { data, status };
};



export const uploadProductImage = async (image) => {
  console.log("subiendo imagen...")
  let formData = new FormData();
  formData.append("file", image);
  const response = await fetch(`${API_URL}/uploadimage`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};
