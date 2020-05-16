import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://sv443.net/jokeapi/v2',
});
apiClient.interceptors.request.use((config) => {
        return ({
            ...config,
            headers: {
            },
        })
    },
    error => Promise.reject(error),
);

apiClient.interceptors.response.use((response) =>
        response,
    async (error) => {
        return Promise.reject(error.response.data);
    },
);

const {get, post, put, delete: destroy} = apiClient;
export {get, post, put, destroy};