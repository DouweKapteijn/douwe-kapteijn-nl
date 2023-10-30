import React from 'react';
import Spacer from '../basecomponent/spacer.js';
import CvPage from '../cv/cvpage.js'

function CV() {
    return  (
        <div className='min-h-screen'>
            <Spacer />
                <CvPage />
            <Spacer />
        </div>
    )
}

export default CV;