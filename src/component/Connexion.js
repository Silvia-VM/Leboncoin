import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Compte extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = event => {
    this.setState({ email: event.target.value });
  };
  handleChange2 = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post(`https://leboncoin-api.herokuapp.com/api/user/log_in`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
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
            <br />
            <button type="submit">Se connecter</button>
            <p>Vous n'avez pas de compte</p>
            <button>
              <Link to="/compte"> Se connecter</Link>
            </button>
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
