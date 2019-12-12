import React from 'react';
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import TextRouter from '../NewMessage/TextRouter'

const Modal = ({showModal, toggleModal, hideTopic}) => (
    <div>
        <Backdrop 
            showModal={showModal}
            toggleModal={toggleModal}
            />
        <div
            className="Modal"
            style={{ // using inline style just to practice but this is achievable with css too
                transform: showModal ? 'translateY(0)' : 'translateY(0)',
                opacity: showModal ? '1' : '0',
                visibility: showModal ? '': 'hidden'
            }}>
          <TextRouter
             hideTopic={hideTopic} 
          />
           

        </div>
    </div>
);

export default Modal;