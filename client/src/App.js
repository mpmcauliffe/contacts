import React, { Fragment, } from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import ContactState from './context/contact/ContactState'
import { About, Home, } from './components/pages'
import { Navbar, } from './components/layouts'
import './App.css'


const App = () => {
    return (
        <ContactState>
            <Router>
                <Fragment>
                    <Navbar />

                    <div className="container">
                        <Switch>
                            <Route 
                                exact 
                                path='/'
                                component={Home} />

                            <Route 
                                exact 
                                path='/about'
                                component={About} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>   
        </ContactState>
    )
}


export default App