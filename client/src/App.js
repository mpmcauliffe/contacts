import React, { Fragment, } from 'react'
import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import { Register, Login } from './components/auth'
import { About, Home, } from './components/pages'
import { Navbar, Alerts } from './components/layouts'
import PrivateRoute from './components/routing/PrivateRoute'
import './App.css'


if(localStorage.token) {
    setAuthToken(localStorage.token)
}

const App = () => {
    return (
        <AuthState>
            <ContactState>
                <AlertState>
                    <Router>
                        <Fragment>
                            <Navbar />

                            <div className="container">
                                <Alerts />
                                <Switch>
                                    <PrivateRoute
                                        exact
                                        path='/'
                                        component={Home} />

                                    <Route 
                                        exact 
                                        path='/about'
                                        component={About} />

                                    <Route 
                                        exact 
                                        path='/register'
                                        component={Register} />

                                    <Route 
                                        exact 
                                        path='/login'
                                        component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>   
                </AlertState>
            </ContactState>
        </AuthState>
    )
}


export default App
