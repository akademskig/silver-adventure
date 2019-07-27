import { combineReducers } from "redux"
import { users, contactFormReducer, modal, pagination } from "./reducers"
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    users,
    contactFormReducer,
    form: formReducer,
    modal,
    pagination
})

export default rootReducer


