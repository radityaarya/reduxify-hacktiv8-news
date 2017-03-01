import React, { Component } from 'react';
import { connect } from 'react-redux'
// import Form from './Form';
// import List from './List';

class News extends Component {
  renderList(){
    console.log(this.props);
    return this.props.people.map((newsList, index) => {
      return (
        <li key={index}>{newsList.name}</li>
      )
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps)(News)
