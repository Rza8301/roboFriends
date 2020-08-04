import React from 'react';

const SearchBar = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2' >
        <input className='pa3 ba b--green bg-lightest-blue' 
        type='Search' 
        placeholder='Search Here'
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBar;