import Counter from './actions/Counter';

export default function combineReducers(state = {}, action) {
    return {
        counter: Counter(state, action)
    }
}
