/* eslint-disable react/prop-types */
import { Component } from "react";
import Car from "./Car";

class Mycars extends Component {
  styledTitle = (e) => {
    e.target.classList.toggle("styled");
  };

  render() {
    return (
      <div>
        <h1 onMouseOver={this.styledTitle}>{this.props.title}</h1>

        <Car color="red">Ford</Car>
        <Car>Mercedes</Car>
        <Car color="green"></Car>
      </div>
    );
  }
}

export default Mycars;
