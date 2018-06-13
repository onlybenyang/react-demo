import Counter from './reducers/Counter';

export default function combineReducers(state = {}, action) {
    return {
        counter: Counter(state.counter, action)
    }
}
