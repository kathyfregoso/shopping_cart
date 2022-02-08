import axios from "axios";

const baseUrl = "http://localhost:3001/api/";

const getProducts = async () => {
  const request = axios.get(`${baseUrl}products`);
  // console.log(request.data)
  return request.then((response) => response.data);
};

const getProduct = async (id) => {
  const request = await axios.get(`${baseUrl}products/${id}`);
  return request.data;
  // return request.then((response) => response.data)
};

// product to add
const addProduct = async (newProduct) => {
  const request = axios.post(`${baseUrl}products`, { ...newProduct });
  return request.then((response) => response.data);
};

const editProduct = async (id, updatedObject) => {
  const request = axios.put(`${baseUrl}products/${id}`, { ...updatedObject });
  return request.then((response) => response.data);
};

export default {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
};
