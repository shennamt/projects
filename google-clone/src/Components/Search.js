import React from 'react'
import './Search.css'
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className='search'>
        <div className='search__input'>
            <h6>Search</h6>
            <input/>
            <h6>Mic</h6>
        </div>
        <div className='search__buttons'>
            <button>Google Search</button>
            <button>I'm Feeling Lucky</button>
        </div>
    </div>
  )
}

export default Search
