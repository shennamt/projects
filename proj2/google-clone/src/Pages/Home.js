import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Home() {
    return (
        <div className='home'>
            <h1>Homepage</h1>

            <div className='home__header'>
                {/* using links intead of a tags to avoid refresh */}
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>

                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <AccountCircleIcon />
                </div>
            </div>

            <div className='home__body'>
                {/* google logo, search bars and buttons */}
            </div>
        </div>
    )
}

export default Home
