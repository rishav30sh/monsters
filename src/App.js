import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/searchbox/searchbox";
import CardList from "./components/cardlist/cardlist.jsx";
class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      searchField: ""
    };
    
  }

  handlechange = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ names: users }));
  }

  render() {
    const { names, searchField } = this.state;
    const filteredNames = names.filter(temp =>
      temp.name.toLowerCase().includes(searchField.toLowerCase())
    );
    

    return (
      <div className="App">
        <h1 className='h'> Monsters </h1>
        <SearchBox placeholder="search peeps .." handlechange={this.handlechange} />
        <CardList list={filteredNames} />
      </div>
    );
  }
}

export default App;
