import * as React from "react";
import "./../css/navBar.css";

interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  return (
    <div id="NavBar">
      <a href="#">Home</a>
      <a href="#">Collections</a>
      <a href="#">Blog</a>
    </div>
  );
};

export default NavBar;
