import React from 'react'
import Sidebar from '../components/Sidebar'
import Right from '../components/Right'
import './Mypage.css'

const Mypage = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Right/>
            </div>
        </div>
    )
}

export default Mypage