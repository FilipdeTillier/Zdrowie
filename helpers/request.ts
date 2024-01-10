import axios from "axios";

const { BACKEND_URL = "http://localhost:3004" } = process.env;

export const request = axios.create({
  baseURL: BACKEND_URL,
});
