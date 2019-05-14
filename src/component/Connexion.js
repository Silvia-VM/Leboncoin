import React from "react";
import axios from "axios";

class Compte extends React.Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <div>
        <h2>Connexion</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3>Adresse email</h3>
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <h3>Mot de passe</h3>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button type="submit">Créer mon Compte Personnel</button>
          </div>
        </form>
      </div>
    );
  }

  // async componentDidMount() {
  //   try {
  //     const response = await axios.post(
  //       "https://leboncoin-api.herokuapp.com/api/user/sign_up"
  //     );
  //     this.setState({});
  //   } catch (error) {
  //     this.setState({});
  //   }
  // }
}

export default Compte;
