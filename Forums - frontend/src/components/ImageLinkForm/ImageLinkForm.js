import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
      <div>
        <p className='f3'>
            {'This Magic Robot will detect faces in your pictures. Git it a try.'}
        </p>
        <p className='f7'>https://i.pinimg.com/474x/1b/d4/63/1bd463bc9b8b86a6f5d2fe6a6bab2822.jpg
</p>
        <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                 <button 
                  className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                  onClick={onButtonSubmit}>
                  Detect</button>
            </div>
        </div>
      </div>
    )
}

export default ImageLinkForm;