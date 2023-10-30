import React from 'react';
import Spacer from '../basecomponent/spacer.js';
import ShowcasePage from '../showcase/showcasepage.js';

function Showcase() {
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

export default Showcase;