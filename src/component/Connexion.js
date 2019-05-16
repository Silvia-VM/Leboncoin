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

  handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/api/user/log_in",
        {
          email: this.state.email,
          password: this.state.password
        }
      );
      console.log(response.data);
      this.props.logIn({
        id: response.data._id,
        token: response.data.token,
        username: response.data.account.username
      });
      this.props.getUser(response.data.token, response.data.account.username);
    } catch (error) {
      this.setState({ error: error });
    }
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h2>Connexion</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3>Adresse email</h3>
            <input
              type="email"
              name="email"
              required={true}
              value={this.state.email}
              onChange={this.handleChange}
            />
            <h3>Mot de passe</h3>
            <input
              type="password"
              name="password"
              required={true}
              value={this.state.password}
              onChange={this.handleChange2}
            />
            <br />
            <button type="submit">Se connecter</button>
            <p>Vous n'avez pas de compte? 🤔</p>
            <button>
              <Link to="/compte"> Creer un compte </Link>
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
