import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../..//images/YouTube-Logo.svg'
import SearchBar from '../SearchBar/SearchBar';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navStack'>
            <Link className='link' to='/'>
                <img src={logo} alt="logo" height={90} />
            </Link>
            <SearchBar className="searchBar" />
        </div>
    );
};

export default Navbar;