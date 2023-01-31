import React from "react";
import headerStyle from '../header/header.module.css';

const HeaderNavigation = () => {
  return (
    <div >
      <nav className={headerStyle.navigation}> 
       <div  > <img className={headerStyle.logo} src="/image/icons/logo.png" alt="" /></div>
      
        <ul className={headerStyle.nav_list}>
            <a href="#"><li>Про сервіс</li></a >
            <a href="#"><li>Команда</li></a >
            <a href="#"><li>FAQ</li></a >
        </ul>
    <button className={headerStyle.button}>До веб-версії MOOW</button>
      
      <div className={headerStyle.nav_languages}>
        Укр
      </div>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
