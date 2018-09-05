'use strict'

import Counter from './reducers/Counter';
import User from './reducers/User';

export default function combineReducers(state = {}, action) {
    return {
        counter: Counter(state.counter, action),
        user: User(state.user, action)
    }
}
