import ActionType from '../ActionType'

const initState = {
    isLoading: false,
    user: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case ActionType.GET_USER_INFO_REQUEST:
            return {
                // ...state,
                isLoading: true,
                user: {},
                errorMsg: ''
            };
        case ActionType.GET_USER_INFO_SUCCESS:
            return {
                // ...state,
                isLoading: false,
                user: action.userInfo,
                errorMsg: ''
            };
        case ActionType.GET_USER_INFO_FAIL:
            return {
                // ...state,
                isLoading: false,
                user: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}