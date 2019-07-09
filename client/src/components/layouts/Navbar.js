import React, { Fragment, useContext, } from 'react'
import { Link, } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'
import PropTypes from 'prop-types'


const Navbar = ({ title, icon, }) => {
    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext)

    const { logout, user, isAuthenticated, } = authContext
    const { clearContacts, } = contactContext

    const onLogout = () => {
        logout()
        clearContacts()
    }

    const authLinks = (
        <Fragment>
            <li>Hello { user && user.name }</li>

            <li>
                <a 
                    onClick={onLogout}
                    href='#!'
                    
                >   <i className='fas fa-sign-out-alt' /> {' '} <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    )


    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>

            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
}

Navbar.prototypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt',
}


export { Navbar }


/**
 * 
 * <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
 */