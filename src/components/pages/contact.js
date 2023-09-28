import React from 'react';
import Spacer from '../basecomponent/spacer';
import ContactPage from '../contact/contactpage';  

function Contact() {
    return  (
        <>
            <div className='min-h-screen'>
                <Spacer />
                    <ContactPage />
                <Spacer />
            </div>
        </>
    )
}

export default Contact;