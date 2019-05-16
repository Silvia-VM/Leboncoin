import React from "react";
import ReactFileReader from "react-file-reader";
import axios from "axios";
class Publish extends React.Component {
  state = {
    files: [],
    title: "",
    description: "",
    price: ""
  };
  handleChange = event => {
    this.setState({ title: event.target.value });
  };
  handleChange1 = event => {
    this.setState({ description: event.target.value });
  };
  handleChange2 = event => {
    this.setState({ price: event.target.value });
  };
  handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/api/offer/publish",
        {
          title: this.state.title,
          description: this.state.description,
          files: this.state.files,
          price: Number(this.state.price)
        },
        {
          headers: {
            authorization: "Bearer " + this.props.user.token
          }
        }
      );
      console.log("response.data", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  handleFiles = files => {
    console.log(files);
    const newFiles = [...this.state.files, ...files.base64];
    this.setState({
      files: newFiles
    });
  };
  render() {
    const filesArray = [];
    for (let i = 0; i < this.state.files.length; i++) {
      filesArray.push(
        <img
          key={i}
          onClick={() => {
            // En cliquant sur l'image, le fichier sera supprimé
            const newFiles = [...this.state.files];
            newFiles.splice(i, 1);
            this.setState({ files: newFiles });
          }}
          src={this.state.files[i]}
          alt="Annonce"
        />
      );
    }
    return (
      <div>
        <h2>Votre annonce</h2>
        <form onSubmit={this.handleSubmit} id="formulaire">
          <h3>Titre de l'annonce</h3>
          <input
            placeholder="Title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <h3>Texte de l'annonce</h3>
          <textarea
            name="message de l'annonce"
            cols="80"
            rows="15"
            placeholder="Écrivez votre message sur l'annonce ici..."
            value={this.state.description}
            onChange={this.handleChange1}
          />
          <div>
            <ReactFileReader
              fileTypes={[".png", ".jpg"]}
              base64={true}
              multipleFiles={true} // `false si une seule image`
              handleFiles={this.handleFiles}
            >
              <button>
                <span>Choisir des images</span>
              </button>
            </ReactFileReader>

            {filesArray}
          </div>
          <br />
          <h3>Prix</h3>
          <input
            placeholder="price €"
            type="text"
            value={this.state.price}
            onChange={this.handleChange2}
          />
          <br />
          <br />
          <button type="submit">Valider 😃👍 </button>
        </form>
      </div>
    );
  }
}

export default Publish;
