import React from 'react'

const Profile = ({ name, entries}) => {
    return (
        <div className='Card1 f3 br3 pa1 ma2 bw2 bg-gray shadow-5'>
        <h2 className="white">Welcome {name}!</h2>
        <p className="white">Your entries: {entries}</p>
        </div>
    )
}

export default Profile;