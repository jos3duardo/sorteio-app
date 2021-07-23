import React from "react";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost/api/sorteio/",
});

export default api;