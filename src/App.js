import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "./component/Header";
import Home from "./component/Home";
import Compte from "./component/Compte";
import Connexion from "./component/Connexion";
import OfferItemPage from "./component/OfferItemPage";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />

        <div>
          <Route exact path="/" component={Home} />
          <Route path="/offer/:id" component={OfferItemPage} />
          <Route path="/compte" component={Compte} />
          <Route path="/connexion" component={Connexion} />

          {/* <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
