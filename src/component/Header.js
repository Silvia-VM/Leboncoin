import React from "react";
import logo from "../image/Leboncoin.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="entete">
        <Link to="/">
          <img className="leboncoin" src={logo} alt="logo leboncoin" />
        </Link>
        <Link to="/form">DEPOSER UNE ANNONCE </Link>
        <Link to="/"> OFFRES</Link>
        <div>
          <Link to="/compte">Creer un compte </Link>
          <Link to="/connection"> Se connecter</Link>
        </div>
        <hr />
      </div>
    );
  }
}
export default Header;
