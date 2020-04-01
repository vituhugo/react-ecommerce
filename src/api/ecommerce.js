import axios from "axios";

let api = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {'Content-Type': 'application/json'}
})

api.interceptors.request.use(function(config) {
    config.auth = JSON.parse(sessionStorage.getItem("credenciais"))
    return config;
});

api.interceptors.response.use(null, (error) => {
    if (error.response.status === 401) {
        window.location.href = "/login";
    }
});
export default api;