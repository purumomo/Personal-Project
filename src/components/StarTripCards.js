import React from 'react';
import './StarTripCardsStyles.css';
import {Link} from 'react-router-dom'



const StarTrip = () => {
    return(//onClick={handleCardClicked} 可以加入点击图片进入卡片的效果
        <div classname='trip-card' > 
            <div className ='image-container'>
            <img src={require('../assets/cardimage.jpg')} alt="Avatar"  />
            </div>

            <div className = 'trip-card-container'>
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
        
        
        
 
    )
}

export default StarTrip