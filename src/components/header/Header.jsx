import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import HederContent from "./HederContent";
import './header.css'

const Header = () => {
  return (
    <header className="header_header">
      <div className="header_wrapper">
          <HeaderNavigation />
          <HederContent />
      </div>
    </header>
  );
};

export default Header;
