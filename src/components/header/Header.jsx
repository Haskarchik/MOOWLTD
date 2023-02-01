import React from 'react';
import headerStyle from '../header/header.module.css';
import HeaderNavigation from './HeaderNavigation';
import HederContent from './HederContent';
const Header = () => {
    return (
      <header className={headerStyle.header}>
        <div className="wrapper">

       
        <div className={headerStyle.wrapper}>
        <HeaderNavigation/> 
        <HederContent/>
        </div>
        </div>
      </header>
    );
}

export default Header;
