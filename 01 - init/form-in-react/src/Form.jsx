import { Component } from "react";
import CarImg from "./CarImg";

class Form extends Component {
  state = {
    username: "",
    color: "",
    colors: ["", "red", "green", "blue", "black"],
    comments: "",
  };

  handleName = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleColor = (e) => {
    this.setState({
      color: e.target.value,
    });
  };

  handleComments = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(`Pseudo : ${this.state.username}\nCouleur : ${this.state.color}\nCommentaire : ${this.state.comments}`);
    this.setState({
      username: "",
      color: "",
      comments: "",
    });
  };

  render() {
    return (
      <div>
        <CarImg color={this.state.color} height="200px" />
        <h1>Commentaire</h1>
        <form onSubmit={this.handleSubmitForm}>
          <div>
            <label>Pseudo : </label>
            <input type="text" value={this.state.username} onChange={this.handleName} />
          </div>
          <div>
            <label>Couleur : </label>
            <select value={this.state.color} onChange={this.handleColor}>
              {this.state.colors.map((color, index) => {
                return (
                  <option key={index} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label>Commentaire : </label>
            <br />
            <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
          </div>
          <button>Valider</button>
        </form>
      </div>
    );
  }
}

export default Form;
