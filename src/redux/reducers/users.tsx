import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    FETCH_USER,
    SEARCH_USERS,
    UPDATE_USERS,
    FILTER_BY_FAVORITE
} from '../actions/users'
import { PAGINATE } from '../actions/pagination';
import { Reducer } from 'react';
import { UsersAction } from '../types';

const initialState = {
    users: [],
    user: null,
    filtered_users: [],
    loading: false,
    error: null
}

const usersReducer: Reducer<any, any> = (state = initialState, action: UsersAction) => {
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
        case SEARCH_USERS: {
            return {
                ...state,
                loading: false,
                error: action.payload ? action.payload.error : null,
                filtered_users: action.payload ? action.payload.filtered_users : [],
            }
        }
        case PAGINATE: {
            return {
                ...state,
                page_users: action.payload ? action.payload.page_users : null
            }
        }
        case FILTER_BY_FAVORITE: {
            return {
                ...state,
                filtered_by_favorite: action.payload ? action.payload.filtered_by_favorite : null,
                filtered_users: action.payload ? action.payload.filtered_by_favorite : null
            }
        }

        default: return state

    }
}

export default usersReducer