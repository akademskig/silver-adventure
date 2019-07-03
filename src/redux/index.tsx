import { combineReducers } from "redux"
import usersReducer from "./users/reducers"

const rootReducer =  combineReducers({
    usersReducer
})

export default rootReducer