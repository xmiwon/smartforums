import React from 'react'

const Profile = ({ name, entries}) => {
    return (
        
        <div className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
    <div className='tc'>
    <img 
        src="http://tachyons.io/img/avatar_1.jpg" 
        className="br-100 h3 w3 dib" 
        title="Kitty" />
    <h1 className="f4">Welcome, {name}!</h1>
    <hr className="mw3 bb bw1 b--black-10"></hr>
  
            <p className="black">Your entries: {entries}</p>
   
            </div>
        </div>

    )
}

export default Profile;

