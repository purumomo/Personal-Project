import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Space, TimePicker } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import './SearchStyless.css'

const SearchBar = () => (
    <div className='SearchElement'>
        <div className='SearchButton'>
        <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
        </Tooltip>

        <Button type="dashed" icon={<SearchOutlined />} size="large">
         Search
        </Button>
        <Button icon={<SearchOutlined />} size="large" href="https://www.google.com" />

        </div>
        
        <form action="/" method="get">
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
            <button type="submit" className='searchbutton-1'><SearchOutlinedIcon/></button>
        </form>
    </div>
);

export default SearchBar;