import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// CONTAINERS
import Home from './containers/Home'
import Ask from './containers/Ask'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <Route path="/" exact component={Home}/>
          <Route path="/ask" exact component={Ask}/>
        </nav>
      </Router>
    )
  }
}