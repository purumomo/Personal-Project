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
        <h1>Galaxy.Travel.</h1>
        <p>Lets use Scropo to fly.</p>
        
   
    <div>
    <Link to='/trainning' className='btn'>Trainning</Link>
    <Link to='/contact' className='btn btn-light'>Launch</Link>
    </div>
    </div>
    </div>
  )
}
