import "./Right.css"
import React from 'react'
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Right = () =>{
    return(
        <div className='Right'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search.."/>
                    <ManageSearchOutlinedIcon/>
                </div>
                <div className="item">
                    <LanguageOutlinedIcon/>
                    English
                </div>
            </div>
        </div>
    )
}

export default Right