import React from 'react';
import { search } from '../Assets';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div class="search">
            <img src={search} alt='search' />
            <input type="text" placeholder="Search" />
        </div>
    );
};

export default SearchBar;
