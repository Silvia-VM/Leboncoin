import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
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
          <Route path="/compte" component={OfferItemPage} />

          {/* <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
