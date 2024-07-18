import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://frontapi.praguebest.cz/api-products/',
    headers: {
        'accept': 'application/json',
    },
});

export default apiClient;
