import React from 'react'
import { Button } from './Button'
import './HeroSection.css'



function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Adventure Awaits</h1>
            <p>What Are you Waiting For?</p> 
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>Get Started</Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>Watch Trailer <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    );
}

export default HeroSection;
