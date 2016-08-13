import React from 'react'
import {Route} from 'react-router'

import AuthLayout from './app/components/auth/Layout'
import LoginForm from './app/components/auth/LoginForm'
import RegisterForm from './app/components/auth/RegisterForm'

export default (
    <Route component={AuthLayout}>
        <Route path="/" components={{main: LoginForm}}/>
        <Route path="/login" components={{main: LoginForm}}/>
        <Route path="/register" components={{main: RegisterForm}}/>
    </Route>
)


