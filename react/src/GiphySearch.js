import React from 'react';
import './GiphySearch.css';

export default class GiphySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchstring: props.searchstring};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {    
    this.setState({searchstring: event.target.value});  
  }

  handleClick(event) {
    this.props.textChange(this.state.searchstring)
  }

  render() {
    return (
      <div className="giphy-search">
      <h1>Search Giphy for images</h1>
      <input type="text" placeholder='Enter search string' value={this.state.searchstring} onChange={this.handleChange} />        
      <input type="button" value="Search" onClick={this.handleClick}/>
      <br/>
      A maximum of 50 images will be returned
      </div>
    );
  }
}
  