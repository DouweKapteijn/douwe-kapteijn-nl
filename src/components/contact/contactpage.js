import React from 'react';
import Spacer from '../basecomponent/spacer';

function Contact() {
    return  (
        <>

            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col w-full">
                    <div>
                        <h1 className='sm:text-6xl text-4xl font-bold text-ultradarkpurple'>Contact Info</h1>
                        <Spacer />
                    </div>
                    <div className='flex w-full flex-wrap place-content-around gap-y-8'>
                        <div>
                            <div className="flex items-start">
                                <div className="inline-block rounded-md p-4 text-ultradarkpurple">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-16 w-16 lg:h-24 lg:w-24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                    </svg>
                                </div>
                                <div className="p-4 my-auto">
                                    <p className="mb-2 font-bold text-xl lg:text-3xl text-ultradarkpurple">
                                        Telefoon
                                    </p>
                                    <p className="font-[350] text-md lg:text-xl text-gray-600">
                                        <a href="tel:+310633861866">(+31) 06 33 86 18 66</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start">
                                <div className="inline-block rounded-md p-4 text-ultradarkpurple">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 24 24" className="h-16 w-16 lg:h-24 lg:w-24">
                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                        d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z"/>
                                    </svg>
                                </div>
                                <div className="p-4 my-auto">
                                    <p className="mb-2 font-bold text-xl lg:text-3xl text-ultradarkpurple">
                                        Privé mail
                                    </p>
                                    <p className="font-[350] text-md lg:text-xl text-gray-600">
                                        <a href='mailto:douwiaan@gmail.com'>douwiaan@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start">
                                <div className="inline-block rounded-md p-4 text-ultradarkpurple">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" fill='currentColor' className="h-16 w-16 lg:h-24 lg:w-24">
                                    <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
                                </svg>
                                </div>
                                <div className="p-4 my-auto">
                                    <p className="mb-2 font-bold text-xl lg:text-3xl text-ultradarkpurple">
                                        School mail
                                    </p>
                                    <p className="font-[350] text-md lg:text-xl text-gray-600">
                                        <a href="mailto:9708647@st.deltion.nl">9708647@st.deltion.nl</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                        

                </div>
            </div>

        </>
    )
}

export default Contact;
