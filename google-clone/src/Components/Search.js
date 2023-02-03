import React, {useState} from 'react'
import './Search.css'
import { Link } from "react-router-dom";

const Search = () => {
    // whatever is keyed into the search box is captured in input
    const [input, setInput] = useState('');

    const search = (e) => {
        e.preventDefault();
        console.log('search button was clicked >>', input)
    }
    return (
        <form className='search'>
            <div className='search__input'>
                <h6>Search</h6>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <h6>Mic</h6>
            </div>

            <div className='search__buttons'>
                <button type='submit' onClick={search}>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
        </form>
    )
}

export default Search
