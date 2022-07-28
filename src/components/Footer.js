import React from "react";
import { FaFacebook,FaLinkedinIn,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter } from "react-icons/fa";
import './FooterStyles.css';


const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{color:'#ffffff',marginRight:'2rem'}} />
                        <div>
                        <p>Our street 123 Acme St.</p>
                        <h4>Chongqing.CN</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{color:'#ffffff',marginRight:'2rem'}} /> 1-234-5678</h4>
                    </div> 
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{color:'#ffffff',marginRight:'2rem'}} /> 1-234-5678</h4><h4> trips@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>this is a good site</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                        <FaSearchLocation size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                        <FaLinkedinIn size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>

                    </div>
                </div>
            </div>
        
        </div>
    )

}

export default Footer