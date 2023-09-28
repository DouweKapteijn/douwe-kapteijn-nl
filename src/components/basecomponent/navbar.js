import React from 'react';
import logo from '../images/dkLogo.png';
import { Collapse } from 'flowbite';

function Navbar() {
    return  (   
        <nav className="bg-gradient-to-r from-translightpurple via-baselightpurple to-baselightpurple">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto gap-y-2 p-4">
                <a href="/" className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="dkLogo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-ultradarkpurple rounded-lg md:hidden hover:bg-translightpurple" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-0 rounded-lg md:flex-row md:space-x-8">
                        <li>
                            <a href="/" className="block py-2 pl-1 pr-6 hover:text-white text-ultradarkpurple">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/CV" className="block py-2 pl-1 pr-6 hover:text-white text-ultradarkpurple">
                                CV
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 pl-1 pr-6 hover:text-white text-ultradarkpurple">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/showcase" className="block py-2 pl-1 pr-6 hover:text-white text-ultradarkpurple">
                                Showcase
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;