import React from 'react';
import Spacer from '../basecomponent/spacer.js';
import ShowcasePage from '../showcase/showcasepage.js';

function Home() {
    return  (
        <>
            <div className='min-h-screen'>
                <Spacer />
                    <ShowcasePage />
                <Spacer />
            </div>
        </>
    )
}

export default Home;