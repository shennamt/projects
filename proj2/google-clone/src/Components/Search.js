import React from 'react'
import './Search.css'
import MicNoneIcon from '@mui/icons-material/MicNone';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <div className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input />
                <MicNoneIcon />
            </div>
        </div>
    )
}

export default Search