import axios from 'axios'
import {BASE_URL, BASE_URL_2} from '../constants'


function get(url,payload) {
    return axios.get(`${BASE_URL}${url}`,{
        params:payload
    })
}

function getList(url,payload) {
    return axios.get(`${BASE_URL_2}${url}`,{
        params:payload
    })
}

function update(url,payload) {
    return axios.put(`${BASE_URL}${url}`,payload)
}
function remove(url) {
    return axios.delete(`${BASE_URL}${url}`)
}
function post(url,payload) {
    return axios.put(`${BASE_URL}${url}`,payload)
}

const requests = {
    get,
    update,
    getList,
    remove,
    post
}

export default requests
