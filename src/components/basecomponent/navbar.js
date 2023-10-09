import React from 'react';
import logo from '../images/dkLogo.webp';
// import { Collapse } from 'flowbite';

function Navbar() {
    return  (   
        <nav className="bg-gradient-to-r from-translightpurple via-baselightpurple to-baselightpurple">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto gap-y-2 p-4">
                <a href="/" className="flex items-center order-2 md:order-none">
                    <img src={logo} height={1000} width={1000} className="h-8 w-8 mr-3" alt="dkLogo" />
                </a>
                <div className="dropdown h-full md:hidden">
                    <div className='relative'>
                        <label tabIndex="0" className="btn btn-ghost h-full text-ultradarkpurple">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 16 16"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </label>
                        <div className='dropdown-content z-[1]'>
                            <ul tabIndex="0" className="text-start text-ultradarkpurple rounded-md text-lg mt-6 px-6 py-4 w-[200px] bg-translightpurple ">
                                <li>
                                    <a href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/CV">
                                        CV
                                    </a>
                                </li>
                                <li>
                                    <a href="/showcase">
                                        Showcase
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-0 rounded-lg md:flex-row md:space-x-8">
                        <li>
                            <a href="/" className="block py-2 pl-1 pr-6 hover:text-white duration-150 text-ultradarkpurple">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/CV" className="block py-2 pl-1 pr-6 hover:text-white duration-150 text-ultradarkpurple">
                                CV
                            </a>
                        </li>
                        <li>
                            <a href="/showcase" className="block py-2 pl-1 pr-6 hover:text-white duration-150 text-ultradarkpurple">
                                Showcase
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 pl-1 pr-6 hover:text-white duration-150 text-ultradarkpurple">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;