import React from 'react';
import Spacer from '../basecomponent/spacer';
import Phone1 from '../contact/phone1.js';
import Phone2 from '../contact/phone2.js';

function Contact() {
    return  (
        <>
            <div className='min-h-screen'>
                <Spacer />
                <h1 className='sm:text-6xl text-4xl font-bold text-ultradarkpurple'>Contact Info</h1>
                <Spacer />
                <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 text-[12px] sm:text-[14px] md:text-[16px]">
                    <div>
                        <Phone1 />
                        <div className='h-[40px] sm:h-0' />
                    </div>
                    <div>
                        <Phone2 />
                    </div>
                </div>
                <p className='mt-4 text-xs'>*Ik ben geen UX designer</p>
                <Spacer />
            </div>
        </>
    )
}

export default Contact;