
import { Reducer } from 'react';
import { PAGE, SET_MAX_PAGE, SET_MAX_ITEMS } from '../actions/pagination';

const initialState = {
    currentPage: 1,
    maxItems: 5,
    offset: 0,
    maxPage: 1
}

const pagination: Reducer<any, any> = (state = initialState, action: any) => {
    switch (action.type) {
        case PAGE: {
            return {
                ...state,
                currentPage: action.payload ? action.payload.currentPage : null
            }
        }
        case SET_MAX_PAGE: {
            return {
                ...state,
                maxPage: action.payload ? action.payload.maxPage : 1
            }
        }
        case SET_MAX_ITEMS: {
            return {
                ...state,
                maxItems: action.payload ? action.payload.maxItems : 5
            }
        }

        default: return state
    }
}

export default pagination