import axios from "axios";

const api = axios.create({
    baseURL: "https://sorteio-api.jos3duardo.com.br/api/v1/sorteio/",
    // baseURL: "http://localhost/api/v1/sorteio/",
});

export default api;