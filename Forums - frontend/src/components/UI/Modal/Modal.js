import React from 'react';
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => (
    <div>
        <Backdrop 
            showModal={props.showModal}
            toggleModal={props.toggleModal}
            />
        <div
            className={
                props.showModal === 'Timeline' ? classes.Timeline : classes.Modal
            }
            style={{ // using inline style just to practice but this is achievable with css too
                transform: props.showModal === 'New Topic' || props.showModal === 'Reply' || props.showModal === 'Timeline'? 'translateY(0)' : 'translateY(0)',
                opacity: props.showModal === 'New Topic' || props.showModal === 'Reply' || props.showModal === 'Timeline' ? '1' : '0',
                visibility: props.showModal === 'New Topic' || props.showModal === 'Reply' || props.showModal === 'Timeline'? '': 'hidden'
            }}>
           
            {props.children}
        </div>
    </div>
);

export default Modal;