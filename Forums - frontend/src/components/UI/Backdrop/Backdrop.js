import React from 'react';

import './Backdrop.css'
const Backdrop = ({showModal, toggleModal}) => {
    return (
         showModal ?
         <div
            onClick={()=> toggleModal()}
            className="Backdrop">
         </div> : null
            
    )
    
}

export default Backdrop