import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
const timeout = +process.env.REACT_APP_BASE_TIMEOUT || 20000;

const axiosInstance = axios.create({
    baseURL,
    timeout,
});
console.log("Base URL:", baseURL);
axiosInstance.interceptors.request.use(
    function(config) {
        config.headers["Content-Type"] = "application/json"; 
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function(response) {
        if(response.data){
            return response.data;
        }
        return response;
    },
    function(error) {
      
        return Promise.reject(error);
    }
);

export default axiosInstance;