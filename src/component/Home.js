import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Home extends React.Component {
  state = {
    count: null,
    offers: []
  };
  render() {
    if (this.state.offers.length !== 0) {
      return (
        <div>
          <div>
            <Link to="/about">Lien vers About</Link>
            <Link to="/article/5b4e54a72f9b3af3dff32c2f">
              Lien vers un article
            </Link>
          </div>
          <div>
            {this.state.offers.map((offer, index) => {
              return (
                <div className="offer-div">
                  <div className="image-div">Affichera l'image</div>
                  <div>
                    <div key={index}>{offer.title}</div>
                    <p>{offer.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <p>Loading............</p>;
    }
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/api/offer/with-count"
    );
    this.setState({
      count: response.data.count,
      offers: response.data.offers
    });
  }
}

export default Home;
