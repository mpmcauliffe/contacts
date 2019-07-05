import React, { useContext, useRef, useEffect, } from 'react'
import ContactContext from '../../context/contact/contactContext'


const ContactFilter = () => {
    const contactContext = useContext(ContactContext)
    const { filterContacts, clearFilter, filtered } = contactContext

    const text = useRef('')

    useEffect(() => {
        if (filtered === null) {
            text.current.value = ''
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
            filterContacts(e.target.value)
        } else {
            clearFilter()
        }
    }


    return (
        <form>
            <input 
                onChange={onChange}
                ref={text}

                type='text'
                placeholder='Filter Contacts. . .' />
        </form>
    )
}


export { ContactFilter }
