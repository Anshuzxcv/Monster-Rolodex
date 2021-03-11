import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handlechange}) =>{
    return <input 
        className="search"
        placeholder={placeholder} 
        type="search" 
        onChange={handlechange}
    />
}