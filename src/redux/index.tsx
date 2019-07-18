import { combineReducers } from "redux"
import { users, contactFormReducer } from "./reducers"
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    users,
    contactFormReducer,
    form: formReducer
})

export default rootReducer


