import types from './../types';


export const serverLogin = (data) => {
    return (dispatch) => {
        return dispatch({
            type: types.LOGIN_SUCCESS,
            payload: data
        })

    }
}