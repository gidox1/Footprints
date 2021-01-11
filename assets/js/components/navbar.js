import React from 'react';

const Navbar = () => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
            <a href="/" className="navbar-brand">Footprints</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggle-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/posts/new" className="nav-link">New Post</a>
                    </li>
                </ul>
            </div>
        </div>
        {console.log("REACT HERE")}
    </nav>
);

export default Navbar;