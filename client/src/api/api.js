import axios from "axios";

console.log("API URL =", import.meta.env.VITE_API_URL);

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://127.0.0.1:5000/api",
});

export default API;