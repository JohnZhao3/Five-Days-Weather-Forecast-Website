import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };

    this.OnInputChange = this.OnInputChange.bind(this);
    this.OnFormSubmit = this.OnFormSubmit.bind(this);
  }

  OnInputChange(event){
  this.setState({term: event.target.value});
  }

  OnFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render(){
    return (
      <form className="input-group" onSubmit={this.OnFormSubmit}>
      <input
      className="form-control"
      placeholder="Get a five days forecast in your cities"
      value={this.state.term}
      onChange={this.OnInputChange} />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather },dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
