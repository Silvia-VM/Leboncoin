import logo from "../image/Leboncoin.png";
import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  onLogOut = event => {
    this.props.logOut();
    this.props.history.push("/");
  };

  render() {
    if (this.props.user.id) {
      return (
        <div className="entete">
          <Link to="/">
            <img className="leboncoin" src={logo} alt="logo leboncoin" />
          </Link>
          <Link to="/Publish">DEPOSER UNE ANNONCE </Link>
          <Link to="/"> OFFRES</Link>
          <h3>{this.props.user.username}</h3>
          <Link onClick={this.onLogOut} to="/logout">
            Deconnexion
          </Link>
          <hr />
        </div>
      );
    }

    return (
      <div className="entete">
        <Link to="/">
          <img className="leboncoin" src={logo} alt="logo leboncoin" />
        </Link>
        <Link to="/connexion">DEPOSER UNE ANNONCE </Link>
        <Link to="/"> OFFRES</Link>
        <div>
          <Link to="/compte">Creer un compte </Link>
          <Link to="/connexion"> Se connecter</Link>
        </div>
        <hr />
      </div>
    );
  }
}
export default Header;
