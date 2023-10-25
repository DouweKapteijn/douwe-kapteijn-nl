import React from 'react'
import Spacer from '../basecomponent/spacer.js';

function P404() {
    return  (
        <>
            <div className='min-h-screen'>
                <Spacer />
                    <section className='max-w-screen-xl mx-auto px-4'>
                        <h1 className='sm:text-6xl text-4xl font-bold text-ultradarkpurple'>
                            De pagina die je zoekt bestaat niet.
                        </h1>
                    </section>
                <Spacer />
            </div>
        </>
    )
}

export default P404;