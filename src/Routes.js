import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBarExampleIcon from './app/components/Welcome'

export default (
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path="/" component={AppBarExampleIcon}/>
            <Route path="/test" component={AppBarExampleIcon}/>
        </Router>
    </MuiThemeProvider>
);


