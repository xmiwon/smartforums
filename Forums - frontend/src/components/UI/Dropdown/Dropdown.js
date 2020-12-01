//Make this dropdown a usable component, meaning there's no need to create another dropdown list later on.import React from 'react';
import React from 'react'
import './Dropdown.css'
import Backdrop from '../Backdrop/Backdrop'

const Dropdown = (props) => {
    const { onRouteChange } = props
    return (
        <div>
            <Backdrop
                showDropdown={props.showDropdown}
                toggleDropdown={props.toggleDropdown}
            />
            <div className="box"
                style={{ // using inline style just to practice but this is achievable with css too
                    transform: props.showDropdown ? 'translateY(0)' : 'translateY(0)',
                    opacity: props.showDropdown ? '1' : '0',
                    visibility: props.showDropdown ? '' : 'hidden'
                }}>

                <nav className="top-bar">
                    <div
                        onClick={() => onRouteChange('signout')}
                        className='signoff'> Log Out
                    </div>

                </nav>
                {props.children}
            </div>
        </div>
    )
    
};

export default Dropdown;