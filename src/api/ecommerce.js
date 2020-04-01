import axios from "axios";

let api = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {'Content-Type': 'application/json'}
})

//Intercepta a requisição feita por esse Objeto api.
//Ao interceptar executa a função no caso de erro
api.interceptors.request.use(function(config) {
    config.auth = JSON.parse(sessionStorage.getItem("credenciais"))
    return config;
});

//Intercepta a resposta de toda requisição feita por esse Objeto.
//Ao interceptar executa a função no caso de erro
api.interceptors.response.use(null, (error) => {
    if (error.response.status === 401) {
        window.location.href = "/login";
    }
});

export default api;