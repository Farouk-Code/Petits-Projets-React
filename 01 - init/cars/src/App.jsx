import { Component } from "react";
import Mycars from "./components/Mycars";
import "./App.css";

class App extends Component {
  state = {
    titre: "Mon Catalogue Voitures",
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
        <input type="text" onChange={this.changeInput} value={this.state.titre} />
      </div>
    );
  }
}

export default App;
