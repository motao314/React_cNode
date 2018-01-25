import React from 'react';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import Reducers from "./reducers/index"
import ReactDOM from 'react-dom';
import App from "./view/app";
import "./index.css";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
const store = createStore(Reducers,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
