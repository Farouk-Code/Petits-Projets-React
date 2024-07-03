/* eslint-disable react/prop-types */
import { Component } from "react";
import Car from "./Car";
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";

class Mycars extends Component {
  state = {
    cars: ["Ford", "BMW", "Peugeot"],
  };
  render() {
    const { title } = this.props;
    const { color } = this.props;

    return (
      <div>
        <Wrapper>
          <MyHeader myStyle={color}>{title}</MyHeader>
          {/* <h1 style={{ color: color }}>{title}</h1> */}
        </Wrapper>
        <Car color="white">{this.state.cars[0]}</Car>
        <Car>{this.state.cars[1]}</Car>
        <Car color="green">{this.state.cars[2]}</Car>
      </div>
    );
  }
}

export default Mycars;
