import axios from "axios";

export const api = axios.create({
  baseURL: "https://ltp-3tp.herokuapp.com",
});
