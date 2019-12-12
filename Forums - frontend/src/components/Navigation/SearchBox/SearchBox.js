import React from 'react'
import './SearchBox.css'

const SearchBox = ({onInputChange}) => {
    return (
        <div className="form dib">
            <input 
                className='searchTopic' 
                type='text'
                placeholder="Search topic"
                onChange={onInputChange}
             /> 
        </div>
        
       
    )
}

export default SearchBox;