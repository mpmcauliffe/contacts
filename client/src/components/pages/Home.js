import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import { ContactForm, Contacts, ContactFilter, } from '../contacts'


const Home = () => {
    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser()
   
    // eslint-disable-next-line 
    }, [])


    return (
        <div className='grid-2'>
            <div>
                <ContactForm />
            </div>

            <div>
                <ContactFilter />
                <Contacts />
            </div>
        </div>
    )
}


export { Home }
