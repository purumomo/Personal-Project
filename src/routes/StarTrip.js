import React from "react";
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";
import HeroImage from '../components/HeroImage'
import StarTripCards from "../components/StarTripCards";


const StarTrip = () =>{
    return (
        <div>
        <Navbar/>
        <HeroImage heading='StarTrip' text='Choose your StarTrip.' />
        <StarTripCards/>
        <Footer/>
        </div>
    )
}

export default StarTrip;