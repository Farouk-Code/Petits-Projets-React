import { Component } from "react";
import Car from "./Car";

class Mycars extends Component {
  render() {
    const { title } = this.props;
    const { color } = this.props;

    return (
      <div>
        <h1 style={{ color: color }}>{title}</h1>
        <Car color="white"></Car>
        <Car>BMW</Car>
        <Car color="green">Peugeot</Car>
      </div>
    );
  }
}

export default Mycars;
