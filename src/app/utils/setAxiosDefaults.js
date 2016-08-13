import axios from 'axios';

export function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export function setBaseURL() {
    axios.defaults.baseURL = 'http://localhost.com:3005';
    axios.defaults.headers.post['Content-Type'] = 'application/vnd.api+json';
}