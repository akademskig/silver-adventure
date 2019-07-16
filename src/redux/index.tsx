import { combineReducers } from "redux"
import {fetchUsers, searchUsers} from "./reducers"
import { reducer as formReducer } from 'redux-form'

const rootReducer =  combineReducers({
    fetchUsers,
    searchUsers,
    form: formReducer
})

export default rootReducer


