import React from 'react';
import SearchBox from './SearchBox/SearchBox'
import './Navigation.css'
import Modal from '../UI/Modal/Modal'

const Navigation = ({ onRouteChange, isSignedIn, onInputChange, hideTopic, toggleModal, showModal }) => {

if (isSignedIn) {
    // ALl sign in logic goes here
    return (
        <div>
        <Modal
            hideTopic={hideTopic} 
            toggleModal={toggleModal}
            showModal={showModal}/>
         <nav className='shadow-5' style={
             {
                 display: 'flex',
                 justifyContent: 'flex-end',
                 backgroundColor: '#c3c6c7'             
             }}> 
                {
                    hideTopic === false ?
                    <div className="br2 b pv3 ph4" style={{display: 'inline-block'}}>
                    <SearchBox
                          onInputChange={onInputChange} /> 
                    </div>: null
                    
                }
                
                {
                    hideTopic === false ?
                    ( 
                        <p 
                        onClick={toggleModal}
                        className="white b pv2 ph2 bg-gray hover-bg-mid-gray bn hover-shadow-inner pointer">New Topic</p>
                    )   
                        :   
                    (
                        <p 
                            onClick={toggleModal}
                            className="white b pv2 ph2 bg-gray dib hover-bg-mid-gray bn hover-shadow-inner pointer">Reply</p>   
                    )
             }       
            
            <p 
                onClick={()=>onRouteChange('signout')} 
                className='white b pv2 ph2 bg-gray dib hover-bg-mid-gray bn hover-shadow-inner pointer href="#0"'> Sign Out
            </p>
        </nav>
        </div>
            )
           
        } else {
            // All sign off logic goes here
            return (
              <nav style={
                  {
                    display: 'flex',
                   justifyContent: 'flex-end'
                   }}>
                <p 
                 onClick={()=>onRouteChange('signin')} 
                 className='pointer br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" href="#0" fw6 ph0 mh0 white'> Sign In
                </p>
                <p 
                    onClick={()=>onRouteChange('register')} 
                    className='pointer br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" href="#0" fw6 ph0 mh0 white'> Register
                </p>  
            </nav>
            )
            
        }
}

export default Navigation;