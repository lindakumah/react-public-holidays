import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import Reducers from './reducers';
 


const store = createStore(Reducers, applyMiddleware(reduxThunk));

export default store