import React from 'react';
import Navbar from './navbar'
import InputComponent from './inputfield';
import PostsComponent from './posts'

const HomeComponent = () => (
    <div>
        <Navbar/>
        <div className="mainContainer">
            <div>
            <label className="labelText">Create a footprint</label>

            </div>
            <PostsComponent/>
        </div>
    </div>
);

export default HomeComponent;