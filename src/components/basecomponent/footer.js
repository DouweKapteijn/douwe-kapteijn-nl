import React from 'react';
import logo from '../images/dkLogo.png';

function Footer() {
    return  (
        <footer className="bg-gradient-to-r from-translightpurple via-baselightpurple to-baselightpurple mt-auto">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-5 lg:py-6">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <img src={logo} className="h-8 mr-3" alt="FlowBite Logo" />
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 text-[12px] sm:text-[14px] md:text-[16px]">
                    <div>
                        <h2 className="mb-4 md:text-[14px] font-semibold text-ultradarkpurple">E-mail</h2>
                        <ul className="text-ultradarkpurple font-medium">
                            <li>
                                douwiaan@gmail.com<br />
                                of<br />
                                97087647@st.deltion.nl
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 md:text-[14px] font-semibold text-ultradarkpurple">Telefoon</h2>
                        <ul className="text-ultradarkpurple font-medium">
                            <li>
                                (+31) 06 33 86 18 66
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-5 sm:mx-auto border-ultradarkpurple lg:my-6" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-ultradarkpurple sm:text-center ">
                    Douwe Kapteijn
                </span>
                <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    <a target='_blank' href="https://github.com/DouweKapteijn" className="text-ultradarkpurple hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                        </svg>
                        <span className="sr-only">GitHub account</span>
                    </a>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;