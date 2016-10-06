import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {setAuthorizationToken} from '../utils/setAxiosDefaults'

import {SET_CURRENT_USER} from '../constants/authConstants'

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user: user
    }
}

export function userLoginRequest(loginData) {
    return dispatch => {
        return axios.post('/login', loginData).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);

            var decoded = jwt_decode(token);
            console.log(decoded);
            dispatch(setCurrentUser(jwt_decode(token)));
        });
    }
}

export function userRegisterRequest(registerData) {
    return dispatch => {
        return axios.post('/register', registerData)
    }
}
