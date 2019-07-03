import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorHandler from './errorHandler';

ReactDOM.render(
    <ErrorHandler>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ErrorHandler>
    , document.getElementById('root'));

serviceWorker.unregister();
