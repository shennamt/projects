import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import Search from '../Components/Search';

// import AppsIcon from '@mui/icons-material/Apps';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerLeft'>
                    {/* Use a link tag instead of a tag to avoid refresh */}
                    <Link to='about'>About</Link>
                    <Link to='store'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='gmail'>Gmail</Link>
                    <Link to='images'>Images</Link>
                    <Link to='apps'>Apps</Link>
                    <Link to='avatar'>Avatar</Link>
                </div> 

            </div>

            <div className='home__body'>
                <img
                    src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png' alt=''
                />
                <div className='home__inputContainer'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home