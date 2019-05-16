import React from "react";
import axios from "axios";

class Compte extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmé: ""
  };

  handleChange = event => {
    this.setState({ username: event.target.value });
  };
  handleChange1 = event => {
    this.setState({ email: event.target.value });
  };
  handleChange2 = event => {
    this.setState({ password: event.target.value });
  };
  handleChange3 = event => {
    this.setState({ passwordConfirmé: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/api/user/sign_up",
        {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        }
      );
      console.log(response.data);
      // L'utilisateur est authentifié, on envoie les infos à App
      this.props.setUser({
        id: response.data._id,
        token: response.data.token,
        username: response.data.account.username
      });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    return (
      <div>
        <div>
          <h2>Créez un compte</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <h3>Pseudo</h3>
              <input
                placeholder="Username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <h3>Adresse email</h3>
              <input
                placeholder="Email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange1}
              />
            </div>
            <div>
              <h3>Mot de passe</h3>
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange2}
              />
              <h3>Confirmer le mot de passe</h3>
              <input
                placeholder="PasswordConfirmé"
                type="password"
                name="passwordConfirmé"
                value={this.state.passwordConfirmé}
                onChange={this.handleChange3}
              />
            </div>
            <br />
            <div>
              <input
                type="checkbox"
                id="offresPartenaires"
                name="Partenaire"
                value="newsletter"
              />
              <label>
                Je souhaite recevoir des offres des partenaires du site
                leboncoin susceptibles de m'intéresser
              </label>
              <br />
              <input
                type="checkbox"
                id="conditionsGenerales"
                name="condition"
                value="newsletter"
              />
              <label>"J'accepte les Condition Générales de Vente"</label>
              <br />
              <button type="submit">Créer mon Compte Personnel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Compte;
