import React from "react";
import logo from "../image/Leboncoin.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="entete">
        <img className="leboncoin" src={logo} alt="logo leboncoin" />
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>

        <hr />
      </div>
    );
  }
}
export default Header;
