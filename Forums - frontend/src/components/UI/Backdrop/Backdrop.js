import React from 'react';
import './Backdrop.css'


const Backdrop = ({showModal, toggleModal, showDropdown, toggleDropdown}) => {
    return (
        <div>
            {

                showModal === 'New Topic' || showModal === 'Reply' || showModal === 'Timeline' ?
                    <div
                        onClick={() => toggleModal()}
                        className="Backdrop">
                    </div>

                    : null
            }
            {
                showDropdown ? 
                <div
                        onClick={() => toggleDropdown()}
                        className="Dropdown-backdrop">
                    </div>
                    : null
            }
            </div>
    )
    
}

export default Backdrop