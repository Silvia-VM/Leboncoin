import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Home extends React.Component {
  state = {
    count: null,
    offers: [],
    skip: 0,
    limit: 25
  };
  render() {
    if (this.state.offers.length !== 0) {
      return (
        <div>
          <div>Annonces :</div>
          <div>
            {this.state.offers.map((offer, index) => {
              return (
                <div className="offer-div" key={index}>
                  <div className="image-div" key={index}>
                    Affichera l'image
                  </div>

                  <div key={offer._id}>
                    <Link to={"/offer/" + offer._id}>
                      {offer.title}-{offer.price}€
                    </Link>
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
      "https://leboncoin-api.herokuapp.com/api/offer/with-count",
      {
        params: {
          skip: 0,
          limit: 25
        }
      }
    );
    this.setState({
      count: response.data.count,
      offers: response.data.offers
    });
  }
}

export default Home;
