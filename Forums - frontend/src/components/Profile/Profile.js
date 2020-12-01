import React from 'react'
import './Profile.css'
import duck from './duck.jpg'
// import ProfilePage from './ProfilePage/ProfilePage'

const Profile = ({ name, entries, toggleModal, fetchTimeline }) => {


    return (
       
        <div className='Profile-Card'>

            
            
            <div 
                onClick={()=> {
                    toggleModal('Timeline')
                    fetchTimeline()
                    }} 
                className='Profile-Content'>                  
                
                    <div className="Profile-container">

                    <div className="Profile-avatar">
                        <img src={duck} className="br-100 h3 w3 dib" alt="Ducky" />          
                        <h1 className="f4">{name}</h1>
                    </div>
                        <hr className="mw3 bb bw1 b--black-10"></hr>

                        <div className="component-holder">
                            <div className="profile-posts">
                                {entries}
                                <p className="profile-text">Posts</p>
                            </div>
                            <div className="profile-likes">
                                {5080}
                                <p className="profile-text">Likes</p>
                            </div>
                            <div className="profile-friends">
                                {'25'}
                                <p className="profile-text">Friends</p>
                            </div>
                            <div className="profile-level">{'Level 5'}</div>
                        </div>
                        
                    </div>
              
            </div>
           
        </div>

    )
}

export default Profile;

