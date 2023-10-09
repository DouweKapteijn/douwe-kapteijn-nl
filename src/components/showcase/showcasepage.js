import React from 'react';
import Spacer from '../basecomponent/spacer.js';

function Contact() {
    return  (
        <>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div>
                    <h1 className='sm:text-6xl text-4xl font-bold text-ultradarkpurple'>
                        Waar werk ik mee?
                    </h1>
                    <p className="max-w-3xl mx-auto font-[350] lg:my-8 my-5 text-lg md:text-xl text-gray-600">
                        Deze website is gemaakt met een React frontend, met TailwindCSS als css framework. Er zitten ook packages in van DaisyUI en TypewriterJS.
                        <br />
                        Met deze website heb ik vooral op de SEO en lighthouse score gelet, maar ook veel op responsiveness.
                    </p>
                    <h2 className='sm:text-6xl text-4xl font-bold text-ultradarkpurple'>
                        Alle middelen waarmee ik werk
                    </h2>
                    <Spacer />
                    <div className="hidden rounded-box md:grid grid-cols-6 lg:gap-8 gap-4 px-16">
                        <div className="flex flex-col lg:gap-8 gap-4">
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/HTML.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/CSS.svg" alt="alt" />
                        </div>
                        <div className="flex flex-col lg:gap-8 gap-4">
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/JavaScript.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/PHP-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/MySQL-Dark.svg" alt="alt" />
                        </div>
                        <div className="flex flex-col lg:gap-8 gap-4">
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/JQuery.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Laravel-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Linux-Dark.svg" alt="alt" />
                        </div>
                        <div className="flex flex-col lg:gap-8 gap-4">
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Postman.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/VueJS-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/React-Dark.svg" alt="alt" />
                        </div>
                        <div className="flex flex-col lg:gap-8 gap-4">
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Python-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/TailwindCSS-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Wordpress.svg" alt="alt" />
                        </div>
                        <div className="flex flex-col lg:gap-8 gap-4">
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/RaspberryPi-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Arduino.svg" alt="alt" />
                        </div>
                    </div>
                    <div className="md:hidden rounded-box grid grid-cols-3 gap-4 px-4">
                        <div className="flex flex-col gap-4">
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/HTML.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/CSS.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/JavaScript.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/PHP-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/MySQL-Dark.svg" alt="alt" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/JQuery.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Laravel-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Linux-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Postman.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/VueJS-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/React-Dark.svg" alt="alt" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Python-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/TailwindCSS-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Wordpress.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/RaspberryPi-Dark.svg" alt="alt" />
                            <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Arduino.svg" alt="alt" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;