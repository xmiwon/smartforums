import React from 'react';
import './Card.css'

const Card = ({name, about, tag, likes, date, members, fetchPages, posts }) => {
    return (
        <div onClick={()=>fetchPages('http://localhost:3000/community-topics')} className="community-card">       
            <div className="community-wrap1">
                <div className="community-inner-wrap1">
                    <div className="community-name">
                        {name}
                    </div>
                    <div className="community-tag">
                        {tag}
                    </div>
                </div>
                <div className="community-about">
                    {
                        about
                    }
                </div>
                <div className="community-wrap3">
                    <div className="community-members">
                        Members: {members}
                    </div>
                    <div className="community-likes">
                        Likes: {likes}
                    </div>
                    <div className="community-posts">
                        Posts: {posts}
                    </div>
                </div>
                    <div className="community-date">
                        Created on {date}
                    </div>
                
            </div>
            
        </div>
    )
}

export default Card;