import React from 'react';
// import SearchBox from './SearchBox/SearchBox'
import './Navigation.css'

import gearpng from './bitmap1.png'
import peoplepng from './people.png'
import glasspng from './g8732.png'
import messagepng from './message.png'
import blogpng from './Write2.png'

import { Link } from 'react-router-dom';

const Navigation = (props) => {
const { isSignedIn, toggleDropdown } = props

if (isSignedIn) {
    // ALl sign in logic goes here
    return (
        
        <div>
         <nav className='navBar shadow-2'> 
                {               
                        <div className="b center" style={{display: 'inline-block'}}>
                    {/* <SearchBox
                          onInputChange={onInputChange} />  */}
                    </div>               
                }
                
             <Link to={{
                   pathname: "/home"
                    }}>
            </Link>
         <div className="menu-icons"> {//tabIndex used to specify in which order the tab is used for navigating
                                        }
            <div className="icons"><img className="pic" alt="pic" src={glasspng} width="30px" height="30px"/></div>
            <div className="icons"><img className="pic" alt="pic" src={blogpng} width="30px" height="30px"/></div>
            <div className="icons"><img className="pic" alt="pic" src={peoplepng} width="30px" height="30px"/></div>
            <div className="icons"><img className="pic" alt="pic" src={messagepng} width="30px" height="30px"/></div>
            <div className="icons" onClick={()=>toggleDropdown()}><img className="pic" alt="pic" src={gearpng} width="30px" height="30px"/></div>
        </div>

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