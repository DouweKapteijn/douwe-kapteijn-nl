import React from 'react'
import Devpic from '../images/dev.png'
import Typewriter from 'typewriter-effect';

function Homehero() {
    return  (

        <section className="bg-transparent">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="order-2 lg:order-1 lg:mt-0 lg:col-span-5 flex">
                    <img className='mx-auto' src={Devpic} alt="mockup" />
                </div>  
                <div className="order-1 lg:order-2 mx-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl bg-clip-text text-transparent bg-gradient-to-t from-ultradarkpurple via-[70%] via-purple to-purple">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Douwe Kapteijn.")
                                    .pauseFor(500)
                                    .deleteAll()
                                    .typeString("Development zonder limiet.")
                                    .start();
                            }}
                        />
                    </h1>
                    <p className="max-w-2xl mb-6 font-[350] lg:mb-8 md:text-lg lg:text-xl text-gray-600">
                        Douwe Kapteijn is een jonge developer uit Amersfoort die graag aan het werk gaat om nieuwe manieren van development te leren.
                        Ik studeer momenteel software development op het Deltion college in Zwolle op MBO niveau 4.
                        <br />
                        Ik hou mij vooral bezig met frontend development, maar ik ben ook niet vies van een beetje backend.
                    </p>
                </div>              
            </div>
        </section>

    )
}

export default Homehero;