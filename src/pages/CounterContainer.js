'use strict';

import {
    connect
} from 'react-redux';
import Counter from './Counter';
import {
    increaseAction,
    decreseAction,
    resetAction
} from '../redux/actions/Counter';

export default connect(state => {
        return {
            counter: state.counter
        }
    },
    dispatch => {
        return {
            increase: () => {
                dispatch(increaseAction())
            },
            decrease: () => {
                dispatch(decreseAction())
            },
            reset: () => {
                dispatch(resetAction())
            }
        }
    })(Counter)
