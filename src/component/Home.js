import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/about">Lien vers About</Link>
        <Link to="/article/5b4e54a72f9b3af3dff32c2f">Lien vers un article</Link>
      </div>
    );
  }
}

export default Home;
