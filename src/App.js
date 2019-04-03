import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from "@material-ui/core";

const style = {
  container: {
    maxWidth: "60%",
    minWidth: "60%"
  },
  child: {
    flex: 1
  }
}

class App extends Component {
  render() {
    return (
      <Grid
      className="body"
        container
        alignItems="center"
        justify="center"
      >
        <Grid
          direction="column"
          alignItems="center"
          justify="center"
          style={style.container}
        >
          <h1 className="heading">Hi.</h1>
          <h2 className="subheading">I'm Muhammad Taqi, a full stack developer at <a href="https://www.axiatadigital.com/">Axiata Digital Services Indonesia</a>, coffee consumer, reader, living in South Tangerang - Indonesia</h2>
          <h1 className="heading">Hi. Projects</h1>
        </Grid>
      </Grid>
    );
  }
}

export default App;
