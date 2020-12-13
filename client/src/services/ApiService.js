import axios from "axios";

export default class ApiService {

    /**
     *
     * @param { string } endpoint
     * @return {Promise<AxiosResponse<any>>}
     */
    static get(endpoint) {
        return axios.get(ApiService.getApiRoute(endpoint))
    }

    /**
     *
     * @param { string } endpoint
     * @param {object} body
     * @return {Promise<AxiosResponse<any>>}
     */
    static post(endpoint, body) {
        return axios.post(ApiService.getApiRoute(endpoint), body)
    }

    /**
     *
     * @param { string } endpoint
     * @param {object} body
     * @return {Promise<AxiosResponse<any>>}
     */
    static put(endpoint, body) {
        return axios.put(ApiService.getApiRoute(endpoint), body)
    }

    /**
     *
     * @param { string } endpoint
     * @param body
     * @return {Promise<AxiosResponse<any>>}
     */
    static delete(endpoint, body) {
        return axios.delete(ApiService.getApiRoute(endpoint))
    }

    static getApiRoute(endpoint) {
        return `http://localhost:8000/api${endpoint}`
    }

}