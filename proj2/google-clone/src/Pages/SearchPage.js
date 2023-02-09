import React from 'react'
import { useStateValue } from '../StateProvider'
import './SearchPage.css'

const SearchPage = () => {
    
    // when grabbing values from the data layer, it gives us a state and dispatch
    // destructure the state to get the search term
    const [{ term }, dispatch] = useStateValue();

    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                {/* checking if the value pushes through */}
                <h1>{term}</h1>
            </div>

            <div className='searchPage__results'>

            </div>

        </div>
    )
}

export default SearchPage
