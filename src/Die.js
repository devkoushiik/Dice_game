import React, { Component } from "react";
import "./DIe.css"

class Die extends Component {
  render() {
    let cls = `Die fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ''}`;
    return (
      <>
        <i className={cls}></i>
      </>
    );
  }
}

export default Die;
