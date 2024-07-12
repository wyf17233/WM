import axios from "axios";
const instance = axios.create();

// instance.defaults.timeout = 2500;
//前端路径
// instance.defaults.baseURL = "http://localhost:3001";
instance.defaults.headers["authorization"] = "token"

instance.interceptors.request.use(function (config) {
    if (localStorage.getItem("token")) {
        config.headers["Authorization"] = localStorage.getItem("token");
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default instance;