import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "./component/Header";
import Home from "./component/Home";
import Compte from "./component/Compte";
import Connexion from "./component/Connexion";
import OfferItemPage from "./component/OfferItemPage";
import Publish from "./component/Publish";
import "./App.css";

class App extends React.Component {
  state = {
    user: {
      token: Cookies.get("token") || "",
      username: Cookies.get("username") || "",
      _id: Cookies.get("_id") || ""
    }
  };

  logIn = user => {
    Cookies.set("token", user.token);
    Cookies.set("username", user.username);
    Cookies.set("_id", user._id);

    this.setState({ user: user });
  };

  logOut = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    Cookies.remove("_id");

    this.setState({
      user: {
        token: "",
        username: "",
        _id: ""
      }
    });
  };

  getUser = (token, username) => {
    this.setState({
      user: { ...this.state.user, token: token, username: username }
    });
  };

  render() {
    const { user } = this.state;

    return (
      <Router>
        <Header user={user} logOut={this.logOut} />
        <div className="container">
          <Route
            exact
            path="/"
            render={props => <Home {...props} user={user} />}
          />
          <Route
            exact
            path="/Publish"
            render={props => <Publish {...props} user={user} />}
          />

          <Route
            path="/compte"
            render={props => (
              <Compte
                {...props}
                user={user}
                logIn={this.logIn}
                getUser={this.getUser}
              />
            )}
          />
          <Route
            path="/connexion"
            render={props => (
              <Connexion {...props} user={user} logIn={this.logIn} />
            )}
          />
          <Route
            path="/offer/:id"
            render={props => <OfferItemPage {...props} user={user} />}
          />
          {/* <Route
            path="/publish"
            render={props => <Publish {...props} user={user} />}
          /> */}
        </div>
      </Router>
      //  {/* <Route exact path="/" component={Home} />
      //  <Route path="/offer/:id" component={OfferItemPage} />
      //  <Route path="/compte" component={Compte} />
      //  <Route path="/connexion" component={Connexion} /> */}
    );
  }
}

export default App;
