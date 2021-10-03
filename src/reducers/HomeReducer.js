import types from './../types';

let initialState = {
    holidays: '',
}

export const homeReducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case types.HOLIDAYS:
            
            return {
                ...state,
                holidays: payload,
            }

        default: return state;
    }

}

export default homeReducer;