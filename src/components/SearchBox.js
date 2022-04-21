import React from 'react';
import '../containers/App.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
            className='tc pa3 ba b--green bg-light-blue'
            type='search' 
            placeholder='write your name'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
