import React, { Component } from "react";
import "./Hello.css";

class Hello extends Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello World</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

// if we want another file to use it, we must export
// default means we are only exporting one thing
export default Hello;
