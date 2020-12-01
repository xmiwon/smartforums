import React from 'react'
import './StatusFeed.css'



const StatusFeed = ({ DBtimeline, userInfo, onInputChange, typing }) => {
     return (
            <div className="status-feed">
                <div className="container">
                    <div className="left-container">
                        <img src="http://tachyons.io/img/avatar_1.jpg" className="image timeline-picture br-100 h3 w3" alt="Kitty" />
                        <div className="name">{userInfo.name}</div>
                    </div>
                    <div className="right-container">
                    <textarea onChange={onInputChange} className="status-post" placeholder="What's happening?" maxLength="150"></textarea>
                    <div className="typing-length">{typing.length}/150</div>
                    
                    </div>
                    <div className="components-holder">
                    
                            <div className="button-submit">
                                <button className="button-submit">Submit</button>
                            </div>
                        </div>
                </div>
                

                <div className="bottom-container">
                    <div className="status-box">
                        {
                            DBtimeline.map((status, id) => {
                                return (
                                    <div className="post-container" key={id}>
                                    <div className="name-box">{status.sender_email}</div>
                                            <div className="date-box">{status.date}</div>
                                        <div className="post-box">{status.timeline_message}
                                            
                                        </div>
                                    </div>

                                   
                                )
                            })
                        }
                    </div>
                </div>
                        
            </div>
            )
  
    
}

export default StatusFeed;
