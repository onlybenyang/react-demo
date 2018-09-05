'use strict';

import ActionType from '../ActionType';

export function getUserAction() {
    return {
        type: ActionType.GET_USER
    }
}

export function getUserSuccessAction() {
    return {
        type: ActionType.GET_USER_SUCCESS
    }
}

export function getUserErrorAction() {
    return {
        type: ActionType.GET_USER_ERROR
    }
}
