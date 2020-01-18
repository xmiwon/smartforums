import React from 'react';
import SearchBox from './SearchBox/SearchBox'
import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation = (props) => {
const { onRouteChange, isSignedIn, onInputChange, hideTopic } = props

if (isSignedIn) {
    // ALl sign in logic goes here
    return (
        
        <div>
         <nav className='navBar shadow-5'> 
                {
                    
                    <div className="b center" style={{display: 'inline-block'}}>
                    <SearchBox
                          onInputChange={onInputChange} /> 
                    </div>
                    
                }
                
                {

             }       
             <Link to={{
                   pathname: "/home"
                    }}>
            <button 
                onClick={()=>onRouteChange('signout')} 
                className='signOff white b pv3 ph2  dib  bn hover-shadow-inner pointer href="#0"'> Sign Out
            </button>
         </Link>
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
                <Link to={{
                   pathname: "/start"
                    }}>
                    <p 
                    className='pointer br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" href="#0" fw6 ph0 mh0 white'> Sign In
                    </p>
                </Link>

                <Link to={{
                   pathname: "/register"
                    }}>
                    <p                                                 
                        className='pointer br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" href="#0" fw6 ph0 mh0 white'> Register
                    </p>  
                </Link>
            </nav>
            )
            
        }
}

export default Navigation;