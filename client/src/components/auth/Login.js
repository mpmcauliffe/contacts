import React, { useState, useContext, useEffect, } from 'react'
import AuthContext from '../../context/auth/authContext'
import AlertContext from '../../context/alert/alertContext'


const Login = props => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)
    
    const { login, error, clearErrors, isAuthenticated, } = authContext
    const { setAlert, } = alertContext

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }

        if (error === 'Invalid credentials') {
            setAlert(error, 'danger')
            clearErrors()
        }
    // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        if (email === '' || password === '') {
            setAlert('Please fill in all fields.', 'danger')
        } else {
            login({
                email,
                password,
            })
        }
    } 

    const { email, password, } = user


    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Account Login</span>
            </h1>

            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        onChange={onChange}
                        value={email}
                        name='email'
                        type='email' 
                        required />
                </div>

                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input 
                        onChange={onChange}
                        value={password}
                        name='password'
                        type='password'
                        required />
                </div>

                <input 
                    value='Login'
                    type='submit'
                    className='btn btn-primary btn block' />
            </form>
        </div>
    )
}


export { Login }
