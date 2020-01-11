import { AUTHENTICATION, LOGOUT } from '../actions/auth'

const initialState = {
    isAuth: false
}


export default (state = initialState, action) => {
    switch (action.type) {

        case AUTHENTICATION:
            return {
                ...state,
                isAuth: action.isAuth
            };

        case LOGOUT:
            return initialState;

        default:
            return state;
    }
}