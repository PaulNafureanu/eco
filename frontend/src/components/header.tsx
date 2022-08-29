import * as React from "react";
import NavBar from "./navBar";
import "./../css/header.css";
import CustomerMenu from "./customerMenu";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <div id="Header">
      <div className="container">
        <NavBar />
        <div id="Logo">
          <h1>Eco Logo</h1>
        </div>
        <CustomerMenu />
      </div>
    </div>
  );
};

export default Header;
