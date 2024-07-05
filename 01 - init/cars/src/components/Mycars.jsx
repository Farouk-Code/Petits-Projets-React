/* eslint-disable react/prop-types */
import { Component } from "react";
import Car from "./Car";

class Mycars extends Component {
  state = {
    cars: [
      { name: "Ford", color: "red", year: 2002 },
      { name: "Mercedes", color: "black", year: 2023 },
      { name: "Peugeot", color: "green", year: 2024 },
    ],
  };

  addTenYears = () => {
    const updatedStateYear = this.state.cars.map((param) => {
      return (param.year -= 10);
    });

    this.setState({
      updatedStateYear,
    });
  };

  getAge = (year) => {
    const now = new Date().getFullYear();
    const age = now - year;

    let frenchYearStr = "";

    if (age === 1) {
      frenchYearStr = "an";
    } else if (age > 1) {
      frenchYearStr = "ans";
    }

    return `${age} ${frenchYearStr}`;
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <button onClick={this.addTenYears}>+ 10 ans</button>

        {this.state.cars.map(({ name, color, year }, index) => {
          return (
            <div key={index}>
              <Car name={name} color={color} year={this.getAge(year)} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Mycars;
