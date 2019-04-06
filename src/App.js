import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Typography } from "@material-ui/core";
import { styles } from 'ansi-colors';

const style = {
  container: {
    margin: "4%"
  },
  child: {
    maxWidth: "70%",
    minWidth: "70%",
    margin: "40px"
  },
  a: {
    color: "#c25400"
  }
}

class App extends Component {
  render() {
    return (
      <Grid
        className="body"
        container
        alignContent="center"
        justify="center"
        style={style.container}
      >
        <Grid
          style={style.child}
        >
          <Typography variant="h3" component="h3" gutterBottom>Hi.</Typography>
          <Typography variant="h5" component="h5" gutterBottom>I'm Muhammad Taqi. a Full Stack Developer, coffee consumer, reader, currently working at Full Stack Developer at <a href="http://" style={style.a}>Axiata Digital Services Indonesia</a>, living in South Tangerang - Indonesia</Typography>
        </Grid>

        <Grid
          style={style.child}
        >
          <Typography variant="h3" component="h3" gutterBottom>Projects</Typography>
          <Grid
            justify="flex-start"
            alignItems="center"
            container
          >
            <Grid style={{width: "20%"}} item xs={6}>
              <Typography variant="h5" component="h5">test</Typography>
              <Typography variant="h6" component="h5">Djoernal is an accounting mobile app which can be used by individuals as a personal revenue & expense tracker or used by micro-to-medium scale business for booking keeping with proper accounting procedures. This app allows the users to accurately see their incomes and expenses without possessing any prior accounting knowledge</Typography>
            </Grid>
            <Grid style={{width: "20%"}} item xs={6} direction="column" alignItems="flex-start" justify="flex-start">
              <Typography variant="h5" component="h5">test</Typography>
              <Typography variant="h6" component="h6">test</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
