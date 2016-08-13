import {SET_CURRENT_USER} from '../constants/authConstants'

const initialState = {
    user: {},
    isAuthenticated: false
};

const authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        default:
            return state
    }
};

export default authReducer;