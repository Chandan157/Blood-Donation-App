import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItems("token")) {
    req.headers.Authorisation = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export default API;
