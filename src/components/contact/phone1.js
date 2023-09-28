import React from 'react'
import Phonepic from '../images/phone.jpg';

function Phone() {
    return  (
    
    <section>
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                <h2 className='w-[272px] h-[72px] p-2 pt-6 text-3xl'>
                    Telefoon
                </h2>
                <p className='w-[272px] h-[100px] p-2 pt-4 text-2xl'>
                    (+31) 06 33 86 18 66
                </p>
                <img src={Phonepic} className='w-[272px] h-[400px]' alt='' />
            </div>
        </div>
    </section>

    )
}

export default Phone;