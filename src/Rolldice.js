import React, { Component } from "react";
import Die from "./Die";
import "./Rolldice.css";

export default class Rolldice extends Component {
  // our default props
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      die3: "one",
      isRolling : false
    };
  }

  roll = () => {
    // pick two rolls
    const newDie1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDie2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDie3 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    // set state with 2 new rolls

    this.setState({ die1: newDie1, die2: newDie2, die3: newDie3, isRolling: true });

    // set a timer 

    setTimeout(()=> {
        this.setState({isRolling: false})
    }, 1000)

  };

  render() {
    return (
      <div className="Rolldice">
        <div className="Rolldice-container">
          <Die face={this.state.die1}  rolling = {this.state.isRolling}/>
          <Die face={this.state.die2}  rolling = {this.state.isRolling}/>
          <Die face={this.state.die3}  rolling = {this.state.isRolling}/>
        </div>

        <button onClick={this.roll} disabled={this.state.isRolling}>
            {this.state.isRolling ? 'Rolling' : 'Roll dice'}
        </button>
      </div>
    );
  }
}
