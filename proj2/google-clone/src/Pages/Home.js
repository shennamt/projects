import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <h1>Homepage</h1>

            <div className='home__header'>
                {/* about, store, all the way to avatar */}
                <div className='home__headerLeft'>
                    {/* About Link */}
                    {/* Store Link */}
                </div>

                <div className='home__headerRight'>
                    {/* Gmail Link */}
                    {/* Images Link */}
                    {/* Icon */}
                    {/* Avatar */}
                </div>
            </div>

            <div className='home__body'>
                {/* google logo, search bars and buttons */}
            </div>
        </div>
    )
}

export default Home
