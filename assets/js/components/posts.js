import React from 'react';

const PostsComponent = ({title, body}) => (
    <div class="card maincard">
        <div class="card-header">
            Footprints
        </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <div className="flexbanner">
                <img src="https://res.cloudinary.com/passionpolisapi/image/upload/v1561540978/appImages/8186-min_vpiiop.jpg" className="imgtag"/>
                <p class="card-text ">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
);

export default PostsComponent;