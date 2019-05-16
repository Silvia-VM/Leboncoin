import React from "react";
import axios from "axios";

class OfferItemPage extends React.Component {
  state = {
    offer: null,
    error: false
  };

  render() {
    const { offer, error } = this.state;
    if (error !== false) {
      return <div>Invalid item</div>;
    }
    if (offer === null) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>
          {offer.title} - {offer.price}€
        </h1>
        <p>{offer.description}</p>
      </div>
    );
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/api/offer/` +
          this.props.match.params.id
      );
      this.setState({ offer: response.data });
    } catch (error) {
      this.setState({ error: error });
    }
  }
}

export default OfferItemPage;
