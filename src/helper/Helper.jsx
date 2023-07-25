import axios from "axios";

let adminUrl = 'https://api.escuelajs.co/api/v1/';


export const baseURL = adminUrl;

let axiosInstance = axios.create({
    baseURL,
})

axiosInstance.interceptors.request.use(
    async function (config) {
        const token =
            localStorage.getItem("token");
        if (token !== null || token !== undefined) {
            config.headers["x-access-token"] = token;
        }
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

export default axiosInstance;