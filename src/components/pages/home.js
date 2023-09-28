import React from 'react'
import Spacer from '../basecomponent/spacer.js';
import Homehero from '../home/homehero.js';

function Home() {
    return  (
        <>
            <div className='min-h-screen'>
                <Spacer />
                    <Homehero />
                <Spacer />
            </div>
        </>
    )
}

export default Home;