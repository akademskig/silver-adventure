import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    FETCH_USER
} from '../actions/fetchUsers'
import { Reducer } from 'react';
import { FetchUsersAction } from '../types';
import { UPDATE_USERS } from '../actions/contactForm';

const initialState = {
    users: [],
    user: null,
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
                ...state,
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
        case FETCH_USER: {
            return {
                ...state,
                loading: false,
                error: action.payload ? action.payload.error : null,
                user: action.payload ? action.payload.user : {}
            }
        }
        case UPDATE_USERS: {
            return {
                ...state,
                users: action.payload ? action.payload.users : [],
                filtered_users: action.payload ? action.payload.users : [],
            }
        }

        default: return state
    }
}

export default usersReducer