import React from 'react'
import { ContactForm, Contacts, ContactFilter, } from '../contacts'


const Home = () => {
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
