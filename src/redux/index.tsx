import { combineReducers } from "redux"
import { fetchUsers, searchUsers } from "./reducers"
import { reducer as formReducer } from 'redux-form'
import contactFormReducer from "./reducers/contactForm";

const rootReducer = combineReducers({
    fetchUsers,
    searchUsers,
    contactFormReducer,
    form: formReducer
})

export default rootReducer


