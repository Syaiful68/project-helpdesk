import axios from "axios";

const Api = axios.create({
    baseURL: 'http://rest-api.test/api',
    timeout:1000
})

export default Api