import React from 'react';
import './StarTripCardsStyles.css';
import {Link} from 'react-router-dom'



const StarTrip = () => {
    return(//onClick={handleCardClicked} 可以加入点击图片进入卡片的效果
        <div className='trip-card'>
            <div className = 'card-container-wrapper' >
                <div className ='image-container'>

                <img src={require('../assets/cardimage.jpg')} alt="Avatar"  />
                    <div className='section-container'>
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                     </div>
                </div>
                <div className ='image-container'>
                <img src={require('../assets/cardimage.jpg')} alt="Avatar"  />
                    <div className='section-container'>
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                     </div>
                </div>
                <div className ='image-container'>
                <img src={require('../assets/cardimage.jpg')} alt="Avatar"  />
                    <div className='section-container'>
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                     </div>
                </div>
                <div className ='image-container'>
                <img src={require('../assets/cardimage.jpg')} alt="Avatar"  />
                    <div className='section-container'>
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                     </div>
                </div>
            </div>
        </div>
        
        
 
    )
}

export default StarTrip