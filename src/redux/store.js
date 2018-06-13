import {
    createStore
} from 'redux';
import combineReducers from './rootReducer.js';

let store = createStore(combineReducers);

export default store;
