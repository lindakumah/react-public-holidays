import {combineReducers} from 'redux'
import authReducer from './AuthReducer'
import homeReducer from './HomeReducer'

const Reducers = combineReducers({
    auth: authReducer,
    home: homeReducer
})

export default  Reducers