import React from 'react';
import {Button } from './Button';
import './Hero.css';
import '../App.css';
const Hero = () => {
    return (
        <div className='hero-container'>
           <video src="./videos/video-2.mp4" autoPlay loop muted ></video>
        <h1 >ADVENTURE AWAITS</h1>
        <p >What Are You Waiting For?</p>
        <div className="hero-btns">

<Button className ='btns' buttonStyle ='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
<Button className ='btns' buttonStyle ='btn--primary' buttonSize='btn--large'>Watch Trailer<i className ='far fa-play-circle'></i></Button>



        </div>

        
        </div>
    )
}

export default Hero

