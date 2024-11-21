// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:300'; // Replace with your backend's base URL

// Product Endpoints
export const getProducts = () => axios.get(`${API_URL}/products`);
export const getProductById = (id) => axios.get(`${API_URL}/products/${id}`);
export const createProduct = (product) => axios.post(`${API_URL}/products`, product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/products/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);

// User Endpoints
export const getUsers = () => axios.get(`${API_URL}/users`);
export const getUserById = (id) => axios.get(`${API_URL}/users/${id}`);
export const createUser = (user) => axios.post(`${API_URL}/users`, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

// Shopping Cart
export const getUserCart = (id) => axios.get(`${API_URL}/users/cart/${id}`);
export const addToCart = (userId, productId) =>
    axios.post(`${API_URL}/users/addTocart/${userId}/${productId}`);
export const removeFromCart = (userId, productId) =>
    axios.put(`${API_URL}/users/removeFromcart/${userId}/${productId}`);
export const checkout = (id) => axios.get(`${API_URL}/users/checkout/${id}`);
