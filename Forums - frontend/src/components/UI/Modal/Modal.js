import React from 'react';
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => (
    <div>
        <Backdrop 
            showModal={props.showModal}
            toggleModal={props.toggleModal}
            />
        <div
            className="Modal"
            style={{ // using inline style just to practice but this is achievable with css too
                transform: props.showModal ? 'translateY(0)' : 'translateY(0)',
                opacity: props.showModal ? '1' : '0',
                visibility: props.showModal ? '': 'hidden'
            }}>
           
            {props.children}
        </div>
    </div>
);

export default Modal;