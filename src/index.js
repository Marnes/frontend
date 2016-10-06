import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'

import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import thunk from 'redux-thunk'

import rootReducer from './app/reducers/rootReducer'
import routes from './routes'

import {setAuthorizationToken, setBaseURL} from './app/utils/setAxiosDefaults'

import './index.css'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

setBaseURL();
setAuthorizationToken(localStorage.jwtToken);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);