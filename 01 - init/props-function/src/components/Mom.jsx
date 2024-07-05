import { Component } from "react";
import Toto from "./Toto";

class Mom extends Component {
  state = {
    momMessage: null,
    totosMessage: null,
  };

  momsOrder = () => {
    this.setState({
      momMessage: "Va ranger ta chambre",
    });
  };

  totosResponse = () => {
    this.setState({
      totosMessage: "D'accord maman",
    });
  };

  render() {
    return (
      <div>
        <h1>Maman</h1>
        <button onClick={this.momsOrder}>Ordre</button>
        <p>{this.state.momMessage}</p>
        <hr />
        <Toto name="Toto" totosResponse={this.totosResponse} theState={this.state} />
      </div>
    );
  }
}

export default Mom;
