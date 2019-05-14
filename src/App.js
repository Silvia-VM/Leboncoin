import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />

        <div>
          <Route exact path="/" component={Home} />

          {/* <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
