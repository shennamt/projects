import React from 'react'
import { useStateValue } from '../StateProvider'
import './SearchPage.css'
import useGoogleSearch from '../useGoogleSearch'
import Response from '../response'
import { Link } from 'react-router-dom'
import Search from '../Components/Search'

const SearchPage = () => {
    
    // when grabbing values from the data layer, it gives us a state and dispatch
    // destructure the state to get the search term
    const [{ term }, dispatch] = useStateValue();

    // Live API Call
    // const { data } = useGoogleSearch(term);

    // Mock API Result
    const data = Response;

    // when i hit enter, it'll redirect us to the searchpage, push tesla search term into data layeR
    // then we pull it using useStateValue, the term will pass through the hook useGoogleSearch
    // then the API returns the result as an object
    console.log(data);

    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                {/* checking if the value pulls through */}
                {/* <h1>{term}</h1> */}

                <Link to='/'>
                    <img className='searchPage__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt=""/>
                </Link>

                <div className='searchPage__headerBody'>
                    <Search hideButtons />
                </div>

            </div>

            <div className='searchPage__results'>

            </div>

        </div>
    )
}

export default SearchPage
