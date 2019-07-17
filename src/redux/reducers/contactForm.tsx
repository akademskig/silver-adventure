
import { Reducer } from 'react';
import { ADD_PHONE_NUMBER, ADD_INITIAL_VALUES, UPDATE_USERS } from '../actions/contactForm';

const initialState = {
    user: null,
    userToEdit: null
}

const contactFormReducer: Reducer<any, any> = (state = initialState, action: any) => {
    switch (action.type) {
      
        case ADD_PHONE_NUMBER: {
            return {
                ...state,
                userToEdit: action.payload ? Object.assign({}, state.userToEdit, {phones: action.payload.numbers}): null,
            }
        }
        case ADD_INITIAL_VALUES:{
            return{
                ...state,
                userToEdit: action.payload ? action.payload.userToEdit: null
            }
        }
        case UPDATE_USERS:{
            return {
                ...state,
                users: action.payload.users
            }
        }
      

        default: return state
    }
}

export default contactFormReducer