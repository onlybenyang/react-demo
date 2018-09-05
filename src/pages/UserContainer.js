'use strict'

import {
    connect
} from 'react-redux';
import User from './User';
import {
    getUserAction,
    getUserSuccessAction,
    getUserErrorAction
} from '../redux/actions/User';


export default connect(state => {
        return {
            user: state.user
        }
    },
    dispatch => {
        return {
            getUser: () => {
                dispatch(getUserAction())
            },
            getUserSuccess: () => {
                dispatch(getUserSuccessAction())
            },
            getUserError: () => {
                dispatch(getUserErrorAction())
            }
        }
    })(User)
