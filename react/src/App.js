import React from 'react';
import './App.css';
import GiphySearch from "./GiphySearch";
import SearchResults from "./SearchResults";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchstring: ''};
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(searchstring) {
    this.setState({searchstring});
  }

  render() {
    const searchstring = this.state.searchstring;
    return (
      <div>
        <GiphySearch textChange={this.handleSearchChange} searchstring={searchstring} />
        <SearchResults searchstring={searchstring}/>
      </div>
    );
  }
}
