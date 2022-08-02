import React, { Component } from "react"; // react has a class call component in the library, so we are importing them here as well.
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // super means we have a parent class and we have a grandparent class, if you want to access the method and properties from the grandparents class, you have to "supersede the parent" and take the properties and method down

    this.state = {
      //here the {} is an object
      isClicked: true,
      inputValue: "",
      listOfTodos: [],
    };
  }

  handleClick = () => {
    this.state.isClicked
      ? this.setState({ isClicked: false })
      : this.setState({ isClicked: true });
  }; //Line 15-17 means: if this.state.isClicked is true, this.setState isClick be false;  if this.state.isClicked is false, this.setState isClick be true

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      listOfTodos: [...this.state.listOfTodos, this.state.inputValue],
    });
    this.setState({ inputValue: "" });
  };

  render() {
    // when we use the class base method, we have to use the render method
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Submit</button>
          </form>
          <ol>
            {this.state.listOfTodos.map((todo, index) => {
              return <li key={index}>{todo}</li>;
            })}
          </ol>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
