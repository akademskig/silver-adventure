import { combineReducers } from "redux"
import { users, contactFormReducer, modal } from "./reducers"
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    users,
    contactFormReducer,
    form: formReducer,
    modal
})

export default rootReducer


