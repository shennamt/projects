// this is a hook!

import { useState, useEffect} from 'react';
import API_KEY from './keys';

// from google's programmable search engine
const CONTEXT_KEY = 'a55c23f5e52794b27';

const useGoogleSearch = (term) => {
    // create a state called data
    const [data, setData] = useState(null);

    // when using this hook, it'll fire off the useEffect that's dependant on the term (typed input)
    // if term (a data layer variable) changes, run the function inside useEffect
    useEffect(() => {
        const fetchData = async () => {
            // string interpolation with key, context, and query
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            // when recieving response, change to get json to response
            .then(response => response.json())
            //set the data to the result
            .then(result => {
                setData(result)
            })
        }
        // execute function
        fetchData();

    }, [term])
    // returns object
    return  { data }
}

export default useGoogleSearch
