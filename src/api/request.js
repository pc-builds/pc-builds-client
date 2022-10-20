import axios from "axios";

const request = (url, method) => axios({
    method: method,
    url: url
})

export const _get = (url) => request(url, 'GET');