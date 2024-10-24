import { Container } from '@mui/material'
import React from 'react'

function AboutStates() {
    return (
        <Container maxWidth={'lg'}>
            <div className='about_state'>
                <div className='as_state_box'>
                    <h1 className='as_count'>20</h1>
                    <p className='as_text'>Offices</p>
                </div>
                <div className='as_state_box'>
                    <h1 className='as_count'>475+</h1>
                    <p className='as_text'>LEED-Certified Projects</p>
                </div>
                <div className='as_state_box'>
                    <h1 className='as_count'>450+</h1>
                    <p className='as_text'>Team Members</p>
                </div>
            </div>
        </Container>
    )
}

export default AboutStates
