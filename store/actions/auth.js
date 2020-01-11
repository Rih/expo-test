export const LOGOUT = 'LOGOUT';
export const AUTHENTICATION = 'AUTHENTICATION';

export const dummyAction = (data) => {
    return {
        auth: data.isAuth
    }
}

export const logout = () => {
    return { type: LOGOUT };
};

export const login = () => {

    return async dispatch => {
        dispatch({
            type: AUTHENTICATION,
            isAuth: true
        });
    }
}
