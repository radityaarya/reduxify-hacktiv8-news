import React, {Component} from 'react';
import { connect } from 'react-redux'
// import Form from './Form';
// import List from './List';

class News extends Component {
  renderList(){
    return this.props.news.map((newsList, index) => {
      return (
        <li key={index}>{newsList.name}</li>
      )
    })
  }
  render() {
    return (
      <div>
        <form>
          <input placeholder="search here"></input>
        </form>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps)(News)
