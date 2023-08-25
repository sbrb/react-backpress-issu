import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <h1>Home Page</h1>
            <Link to="/blog" className="link">
                Go to Blog
            </Link>
        </div>
    );
};

export default Home;
