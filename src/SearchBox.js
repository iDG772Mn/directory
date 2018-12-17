import React from 'react';

const SearchBox = ({onSearch}) => {
	return (
        <div className='ma3'>
            <input className='bw1 b--orange bg-washed-green' 
                   type='search' 
                   placeholder='search directory' 
                   onChange={onSearch} />
        </div>
    );
}

export default SearchBox;