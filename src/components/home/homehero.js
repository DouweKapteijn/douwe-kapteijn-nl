import React from 'react'
import Devpic from '../images/dev.png'
import Typewriter from 'typewriter-effect';

function Homehero() {
    return  (

        <section className="bg-transparent">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={Devpic} alt="mockup" />
                </div>  
                <div className="mx-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-ultradarkpurple">
                        {/* Douwe Kapteijn. Development zonder limiet. */}
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
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
                        Douwe Kapteijn is een jonge developer uit Amersfoort die graag aan het werk gaat om nieuwe manieren van development te leren.
                        Hij Studeert momenteel software development op het Deltion college in Zwolle op MBO niveau 4.
                        <br />
                        Hij houd zich vooral bezig met frontend development, maar is ook niet vies van een beetje backend.
                    </p>
                </div>              
            </div>
        </section>

    )
}

export default Homehero;