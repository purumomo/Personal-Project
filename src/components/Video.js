import React from 'react';
import './VideoStyles.css';
import{Link} from 'react-router-dom'

import spaceVideo from '../assets/Space.mp4'

export const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type='video/mp4'/>
        </video>
    <div className='content'>
        <h1>interstellar travel</h1>
        <p>Start your space trainning</p>
        
   
    <div>
    <Link to='/register' className='btn'>Register</Link>
    <Link to='/contact' className='btn btn-light'>Launch</Link>
    </div>
    </div>
    </div>
  )
}
