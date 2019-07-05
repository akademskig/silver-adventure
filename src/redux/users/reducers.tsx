import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    SEARCH_USERS
} from './actions'
import { Reducer } from 'react';
import { FetchUsersAction } from './types';

const initialState = {
    users: [],
    filtered_users: [],
    loading: false,
    error: null
}

const usersReducer: Reducer<any, any> = (state = initialState, action: FetchUsersAction) => {
    switch (action.type) {
        case FETCH_USERS_BEGIN: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_USERS_SUCCESS: {
            return {
                users: action.payload ? action.payload.users : [],
                filtered_users: action.payload ? action.payload.users : [],
                loading: false
            }
        }
        case FETCH_USERS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload ? action.payload.error : null,
                users: []
            }
        }
        case SEARCH_USERS:{
            return {
                ...state,
                loading: false,
                error: action.payload ? action.payload.error : null,
                filtered_users: action.payload  ? action.payload.filtered_users : [],
            }
        }

        default: return state
    }
}

export default usersReducer