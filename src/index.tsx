import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorHandler from './errorHandler';
import rootReducer from "./redux"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { reduxRouterMiddleware } from './redux/reducers/router';


const history = createBrowserHistory()

const store = createStore(rootReducer(history), composeWithDevTools(
    applyMiddleware(
        thunk,
        routerMiddleware(history),
        reduxRouterMiddleware
    )))

ReactDOM.render(
    <ErrorHandler >
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter >
        </Provider>
    </ErrorHandler>
    , document.getElementById('root'));

serviceWorker.unregister();
