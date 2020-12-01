import React from 'react';
import './Page.css'

const Page = ({ title, image, text }) => {
    return (
        <div>
            <div className="community-page-body">
                <div className="community-page-card">

                <div className="community-page-title">
                    {title}
                </div>
                    <div>
                        <img
                            className="community-page-img"
                            src={image}
                            height="auto"
                            alt="pic">
                        </img>
                    </div>

                    <div className="community-page-text">
                        {text}
                    </div>
            </div>
        </div>      
    </div>
    )
}

export default Page;
