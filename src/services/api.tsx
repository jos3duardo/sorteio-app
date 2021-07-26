import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_LINK_API,
    // baseURL: "http://localhost/api/v1/sorteio/",
});

export default api;