import { Component } from "react";
import Mycars from "./components/Mycars";
import "./App.css";

class App extends Component {
  state = {
    titre: "Mon Catalogue Voitures",
  };

  changeTitleParam = (titre) => {
    this.setState({
      titre: titre,
    });
  };

  changeInput = (e) => {
    this.setState({
      titre: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre} />
        <button onClick={() => this.changeTitleParam("Nouveau Titre")}>Changer le titre via un paramètre</button> <br />
        <input type="text" onChange={this.changeInput} value={this.state.titre} />
      </div>
    );
  }
}

export default App;
