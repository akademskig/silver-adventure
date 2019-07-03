import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorHandler from './errorHandler';
import rootReducer from "./redux"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(
    <ErrorHandler >
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ErrorHandler>
    , document.getElementById('root'));

serviceWorker.unregister();
