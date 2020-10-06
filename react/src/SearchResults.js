import React from 'react';
import './SearchResults.css';


export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [], errorState: false};
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchstring !== prevProps.searchstring) {
      fetch("http://api.giphy.com/v1/gifs/search?q=" + this.props.searchstring + "&api_key=lhUmHMnPyydyZGRQdK59hl4MncCmYK6A&limit=50")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({results:result.data, errorState: false})
        },
        (error) => {
          this.setState( { errorState: true })
        }
      )
    }
  }

  render() {
    if (this.state.errorState) {
      return <div className='message'>Unable to connect to Giphy. Please try again later.</div>
    }
    if (this.props.searchstring === '') {
      return <div></div>
    }
    if (this.state.results.length === 0) {
      return <div className='message'>No images found!</div>
    }

    const listitems = this.state.results.map((result) =>
      <div className="col"><img src={result.images.fixed_height.url} alt={result.title}/><br />{result.title}</div>
    );
    return <div className='row'>{listitems}</div>
  }
}
  