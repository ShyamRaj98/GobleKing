import React from 'react';
import { Link } from 'react-router-dom';

function ThankPage() {
    return (
        <div className='ty_container'>
            <div id="thankyou">
                <h2 id="h2thankyou">Thank you!</h2>
            </div>
            <div><Link id="linkback" to="/">Take me back please!</Link></div>
        </div>
    )
}

export default ThankPage
