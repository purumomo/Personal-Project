import React from "react";
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";
import HeroImage from '../components/HeroImage'
import StarTripCards from "../components/StarTripCards";
import SearchBar from "../components/Search";

const StarTrip = () =>{
    return (
        <div>
        <Navbar/>
        <HeroImage heading='StarTrip' text='Choose your StarTrip.' />
        <SearchBar />
        <StarTripCards/>
        <Footer/>
        </div>
    )
}

export default StarTrip;