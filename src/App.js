import React from 'react';
import logo from './logo.svg';
import News from './components/News/News.js'
import './App.css';
import People from './components/People/People'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <div>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Hacktiv8</h2>
      </div>
    </div>
    <Router>
      <div>
        <ul className="ul-nav">
          <li className="li-nav"><Link to="/">News</Link></li>
          <li className="li-nav"><Link to="/people">People</Link></li>
          {/* <li><Link to="/film">Film</Link></li> */}

        </ul>

        <hr/>

        <Route exact path="/" component={News}/>
        <Route path="/people" component={People}/>
        {/* <Route path="/film" component={Film}/> */}

      </div>
    </Router>
  </div>
)

export default App;
