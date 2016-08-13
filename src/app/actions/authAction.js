import axios from 'axios'
import setAuthorizationToken from '../utils/setAxiosDefaults'

import {SET_CURRENT_USER} from '../constants/authConstants'

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function userLoginRequest(loginData) {
    return dispatch => {
        return axios.post('/login', loginData).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            // dispatch(setCurrentUser(jwt.decode(token));
        });
    }
}

export function userRegisterRequest(registerData) {
    return dispatch => {
        return axios.post('/register', registerData)
    }
}
