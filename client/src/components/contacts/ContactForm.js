import React, { useState, useContext, useEffect, } from 'react'
import ContactContext from '../../context/contact/contactContext'


const ContactForm = () => {
    const contactContext = useContext(ContactContext)
    const { addContact, updateContact, current, clearCurrent, } = contactContext 

    useEffect(() => {
        if (current !== null) {
            setContact(current)
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal',
            })
        }
    }, [contactContext, current])

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
    })

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        if (current === null) {
            addContact(contact)

        } else {
            updateContact(contact)
        }
        clearAll()
    }

    const clearAll = () => {
        clearCurrent()
    }

    const { name, email, phone, type, } = contact

    
    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>
                {current ? 'Edit Contact' : 'Add Contact'}
            </h2>
            
            <input 
                value={name}
                onChange={onChange}
                name='name'

                type='text'
                placeholder='Name' />

            <input 
                value={email}
                onChange={onChange}
                name='email'

                type='text'
                placeholder='Email' />

            <input 
                value={phone}
                onChange={onChange}
                name='phone'

                type='text'
                placeholder='phone' />

            <h5>Contact Type</h5>
            <input
                type='radio'
                name='type'
                value='personal'
                checked={type === 'personal'}
                onChange={onChange}
 
            />  {' '}Personal{' '}

            <input
                type='radio' 
                name='type'
                value='professional'
                checked={type === 'professional'}
                onChange={onChange}

            />  {' '}Professional

            <div>
                <input 
                    value={current ? 'Update Contact' : 'Add Contact'}

                    type='submit'
                    className='btn btn-primary btn-block' />
            </div>
            {current && (
                <div>
                    <button 
                        onClick={clearAll}
                        className='btn btn-light btn-block'
                        
                    >   Clear
                    </button>
                </div>
            )}
        </form>
    )
}


export { ContactForm }
