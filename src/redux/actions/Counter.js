import ActionType from './ActionType'

export function increaseAction() {
    return {
        type: ActionType.INCREASE
    }
}

export function decreseAction() {
    return {
        type: ActionType.DECRESE
    }
}

export function resetAction() {
    return {
        type: ActionType.RESET
    }
}
