// src/api/apiConfig.js
import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:3001", // Mude essa URL conforme necessário
});
