import { combineReducers } from "redux"
import { users, contactFormReducer, modal, pagination,routerReducer } from "./reducers"
import { reducer as formReducer } from 'redux-form'
import {connectRouter} from "connected-react-router"
import { History } from "history";
const rootReducer = (history: History<any>)=> combineReducers({
    users,
    contactFormReducer,
    form: formReducer,
    modal,
    pagination,
    router: connectRouter(history),
    routerReducer
})

export default rootReducer


