import React, { useState, useContext, useEffect, } from 'react'
import AuthContext from '../../context/auth/authContext'
import AlertContext from '../../context/alert/alertContext'


const Register = props => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)
    
    const { register, error, clearErrors, isAuthenticated, } = authContext
    const { setAlert, } = alertContext

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }

        if (error === 'User already exists.') {
            setAlert(error, 'danger')
            clearErrors()
        }
    // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        if (name === '' || email === '' || password === '') {
            setAlert('Please enter all fields.', 'danger')
        } else if (password !== password2) {
            setAlert('Passwords do not match', 'danger')
        } else {
            register({
                name,
                email,
                password,
            })
        }
    } 

    const { name, email, password, password2, } = user


    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Register</span>
            </h1>

            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        onChange={onChange}
                        value={name}
                        name='name'
                        type='text'
                        required />
                </div>

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
                        minLength='6'
                        required />
                </div>

                <div className='form-group'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input 
                        onChange={onChange}
                        value={password2}
                        name='password2'
                        type='password'
                        required />
                </div>

                <input 
                    value='Register'
                    type='submit'
                    className='btn btn-primary btn block' />
            </form>
        </div>
    )
}


export { Register }
