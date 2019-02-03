import React, { Component } from 'react';
import Article from './Pages/Article';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './Pages/HomePage';

class App extends Component {

  state = {
    hasError: false
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/articles/:search" component={Article} />
        </div>
      </Router>
    );
  }
}

export default App;
