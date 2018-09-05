import Counter from './reducers/Counter';
import UserInfo from './reducers/UserInfo';

export default function combineReducers(state = {}, action) {
    return {
        counter: Counter(state.counter, action),
        userInfo: UserInfo(state.userInfo, action)
    }
}
