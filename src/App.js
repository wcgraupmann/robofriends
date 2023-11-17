import React, { Component } from "react";
import CardList from "./CardList";
// import { robots } from "./robots";
import SearchBox from "./SearchBox";
// import { render } from "react-dom";
import "./App.css";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super(); // need to call super() in order to use this
    // state lives in App, only App can make changes to state
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  // use arrow functions so that "this" refers to App
  // everytime the input in SearchBox changes, we get an event
  // this function changes the state so that the searchfield always gets updated
  // passed into SearchBox as a prop, the callback function is called onChange to the SearchBox
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    // filters robots state with updated searchfield state as condition
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    // check for slow fetch
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
