import axios from 'axios';

export function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export function setBaseURL() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
}