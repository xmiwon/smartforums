import React from 'react';
import SearchBox from './SearchBox/SearchBox'
import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation = ({ onRouteChange, isSignedIn, onInputChange, hideTopic}) => {

if (isSignedIn) {
    // ALl sign in logic goes here
    return (
        <div>
         <nav className='shadow-5' style={
             {
                 display: 'flex',
                 justifyContent: 'flex-end',
                 backgroundColor: '#c3c6c7'             
             }}> 
                {
                    hideTopic === false ?
                    <div className="b center" style={{display: 'inline-block'}}>
                    <SearchBox
                          onInputChange={onInputChange} /> 
                    </div>: null
                    
                }
                
                {

             }       

            <button 
                onClick={()=>onRouteChange('signout')} 
                className='white b pv3 ph2 bg-gray dib hover-bg-mid-gray bn hover-shadow-inner pointer href="#0"'> Sign Out
            </button>
         
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
                <Link to="/signin">
                    <p 
                    onClick={()=>onRouteChange('signin')} 
                    className='pointer br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" href="#0" fw6 ph0 mh0 white'> Sign In
                    </p>
                </Link>

                <Link to="/register">
                    <p 
                        onClick={()=>onRouteChange('register')}                          
                        className='pointer br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" href="#0" fw6 ph0 mh0 white'> Register
                    </p>  
                </Link>
            </nav>
            )
            
        }
}

export default Navigation;