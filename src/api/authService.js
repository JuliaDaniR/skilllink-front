import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const login = async (email, password) => {
  const response = await axios.post(`${API}/login`, { email, password });
  return response.data;
};

export const register = async (user) => {
  const response = await axios.post(`${API}/user/register`, user);
  return response.data;
};
