import axios from "axios";

// Calling API (cloud function)
const instance = axios.create({
  baseURL: "...",
});

export default instance;
