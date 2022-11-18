import React from 'react';
import Navbar from './Navbar';
import '../styles/header.css';
import image from '../images/head_icon.png';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <Navbar />
    <img src={image} alt="head_icon" id="head-icon" />
  </header>
);

export default Header;
