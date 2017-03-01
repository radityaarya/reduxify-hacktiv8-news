import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import Form from './Form';
// import List from './List';

import { actionSearch } from '../../action/index';

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
          <input
            placeholder="search here"
            onChange={event => this.props.actionSearch(event.target.value)}
            value={this.props.news_search}
            ></input>
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
    news: state.news.filter(newsList => newsList.name.toLowerCase().match(state.newsSearch.toLowerCase())),
    news_search: state.newsSearch
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({actionSearch}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
