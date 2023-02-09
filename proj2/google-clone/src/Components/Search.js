import React from 'react'
import './Search.css'
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Search = () => {
    return (
        <div className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input />
                <MicIcon />
                <CameraAltIcon />
            </div>

            <div className='search__buttons'>
                <Button variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </div>
    )
}

export default Search