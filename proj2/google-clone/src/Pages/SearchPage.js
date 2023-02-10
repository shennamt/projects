import React from 'react'
import { useStateValue } from '../StateProvider'
import './SearchPage.css'
import useGoogleSearch from '../useGoogleSearch'

const SearchPage = () => {
    
    // when grabbing values from the data layer, it gives us a state and dispatch
    // destructure the state to get the search term
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    // when i hit enter, it'll redirect us to the searchpage, push tesla search term into data layeR
    // then we pull it using useStateValue, the term will pass through the hook useGoogleSearch
    // then the API returns the result as an object
    console.log(data);

    return (
        <div className='searchPage'>
            <div className='searchPage__header'>

                {/* checking if the value pulls through */}
                <h1>{term}</h1>

            </div>

            <div className='searchPage__results'>

            </div>

        </div>
    )
}

export default SearchPage
