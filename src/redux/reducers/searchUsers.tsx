import {
    SEARCH_USERS,
} from '../actions/searchUsers'

import { Reducer } from 'react';
import { FetchUsersAction } from '../types';

const initialState = {
    users: [],
    user: null,
    filtered_users: [],
    loading: false,
    error: null
}

const searchReducer: Reducer<any, any> = (state = initialState, action: FetchUsersAction) => {
    switch (action.type) {
      
        case SEARCH_USERS: {
            return {
                ...state,
                loading: false,
                error: action.payload ? action.payload.error : null,
                filtered_users: action.payload ? action.payload.filtered_users : [],
            }
        }
      

        default: return state
    }
}

export default searchReducer