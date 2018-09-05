'use strict';

import ActionType from '../ActionType';

const initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: ''
}

export default function(state, action) {
    switch (action.type) {
        case ActionType.GET_USER:
            return {
                ...state,
                isLoading: true,
                userInfo: {},
                errorMsg: ''
            };
            break;
        case ActionType.GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userInfo: action.user,
                errorMsg: 'get user info successfully'
            };
            break;
        case ActionType.GET_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                userInfo: {},
                errorMsg: 'get user info failed'
            };
            break;
        default:
            return state;
    }
}
