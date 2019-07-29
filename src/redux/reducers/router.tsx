import { LOCATION_CHANGE } from 'react-router-redux';
import { Action, Reducer } from 'redux';

let prevPathname = '';

export const reduxRouterMiddleware = () => (next: any) => (action: ActionR) => {
    if (action.type === LOCATION_CHANGE) {
        const newAction = {
            ...action,
            payload: {
                ...action.payload,
                prevPathname,
            },
        };
        prevPathname = action.payload.location.pathname;
       
        return next(newAction);
    }
    return next(action);
};

interface ActionR extends Action {
    payload: any
}

export const routerReducer: Reducer<any, any> = (state= {},action: any) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            return {
                ...state,
                location: action.payload.location.pathname,
                prevPathname: action.payload.prevPathname
            }
        }
        default: return state
    }
}

export default routerReducer