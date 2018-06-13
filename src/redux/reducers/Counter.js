import ActionType from '../ActionType'

const initState = {
    count: 0
}

export default function(state = initState, action) {
    switch (action.type) {
        case ActionType.INCREASE:
            return {
                // ...state,
                count: state.count + 1
            }
            break;
        case ActionType.DECREASE:
            return {
                // ...state,
                count: state.count - 1
            }
            break;
        case ActionType.RESET:
            return {
                // ...state,
                count: 0
            }
            break;
        default:
            return state;
    }
}
