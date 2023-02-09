import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../Components/Search';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__header'>
                {/* using links intead of a tags to avoid refresh */}
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon style={{ marginRight: '20px'}} />
                    <AccountCircleIcon />
                </div>
            </div>

            <div className='home__body'>
                {/* google logo, search bars and buttons */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt=""/>
                <div className='home__inputContainer'>
                    <Search hideButtons />
                </div>
            </div>
        </div>
    )
}

export default Home
