import ActionType from '../ActionType'

export function increaseAction() {
    return {
        type: ActionType.INCREASE
    }
}

export function decreseAction() {
    return {
        type: ActionType.DECREASE
    }
}

export function resetAction() {
    return {
        type: ActionType.RESET
    }
}
