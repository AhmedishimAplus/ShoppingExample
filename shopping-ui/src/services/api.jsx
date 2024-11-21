import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your backend URL.

export const getProducts = () => axios.get(`${API_URL}/products`);
export const getProductById = (id) => axios.get(`${API_URL}/products/${id}`);
export const getUsers = () => axios.get(`${API_URL}/users`);
export const getUserById = (id) => axios.get(`${API_URL}/users/${id}`);
export const getCartByUserId = (id) => axios.get(`${API_URL}/users/cart/${id}`);
