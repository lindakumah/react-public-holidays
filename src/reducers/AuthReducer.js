import types from './../types';

let initialState = {
    email: '',
    password: '',
}

export const authReducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case types.LOGIN_SUCCESS:
            
            return {
                ...state,
                email: payload.email,
                password: payload.password
            }

        default: return state;
    }

}

export default authReducer;