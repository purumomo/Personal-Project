import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Space, TimePicker } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import './SearchStyless.css'

const SearchBar = () => (
    <div className='SearchElement'>   
        <div className='searchform' action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">
                </span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search your trip"
                name="s" 
            />
            <Button icon={<SearchOutlined />} type="submit" size="large" href="https://www.google.com" />
        </div>
        

       
    </div>
);

export default SearchBar;