import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Typography } from "@material-ui/core";
import { styles } from 'ansi-colors';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

// Components
import test from './components/test'

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

  state = {
    article: [
      {
        title: "Djoernal",
        desc: "Djoernal is an accounting mobile app which can be used by individuals as a personal revenue & expense tracker or used by micro-to-medium scale business for booking keeping with proper accounting procedures.",
      },
      {
        title: "PEKMA VII Official Android App",
        desc: "Pekan Mahasiswa VII or PEKMA VII is the biggest sport, academic, and art competition in PKN STAN which is organized by PKN STAN, cooperating with some enthusiastic, creative, and innovative students."
      },
      {
        title: "Money Rain",
        desc: "Simple arcade game built using Firebase & VueJS"
      },
      {
        title: "Kanban",
        desc: "Mini Kanban built using Firebase & VueJS"
      }
    ]
  }

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
          <Typography variant="h4" component="h4" gutterBottom>Hi.</Typography>
          <Typography variant="h5" component="h5" gutterBottom>I'm Muhammad Taqi. a Full Stack Developer, coffee consumer, reader, currently working at Full Stack Developer at <a href="http://" style={style.a}>Axiata Digital Services Indonesia</a>, living in South Tangerang - Indonesia</Typography>
        </Grid>

        <Grid
          style={style.child}
        >
          <Typography variant="h4" component="h4" gutterBottom>Projects</Typography>
          <Grid
            justify="flex-start"
            alignItems="flex-start"
            container
            spacing={10}
          >
            {
              this.state.article.map((item, i) => {
                return (
                  <Grid style={{width: "20%", marginBottom: "1%"}} item xs={6}>
                    <Typography variant="h5" component="h5" gutterBottom><a href="http://" style={style.a}>{item.title}</a></Typography>
                    <Typography variant="subtitle1" component="subtitle1" style={{maxWidth: "90%"}}>{item.desc}</Typography>
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
        <Grid
          style={style.child}
        >
          <Typography variant="h4" component="h4" gutterBottom>Contact</Typography>
          <Typography variant="h6">Drop me a line at <a style={style.a} href="mailto:muhammad.taqi@myboost.id">muhammad.taqi@myboost.id</a></Typography>
        </Grid>
        <Grid
          style={style.child}
        >
          <a href="https://www.linkedin.com/in/muhammad-taqi-a-92002589/">
            <img style={{margin: "10px"}} src={require('../src/asset/icons/linkedin-logo-1.svg')} width="4%"></img>
          </a>
          <a href="https://github.com/taqiabdulaziz">
            <img style={{margin: "10px"}} src={require('../src/asset/icons/github-logo.svg')} width="4%"></img>
          </a>
          <a href="https://www.instagram.com/taqi.mp3/?hl=en">
            <img style={{margin: "10px"}} src={require('../src/asset/icons/instagram.png')} width="4%"></img>
          </a>
          <a href="https://www.facebook.com/ANNEXIV">
            <img style={{margin: "10px"}} src={require('../src/asset/icons/facebook-logo.svg')} width="4%"></img>
          </a>
        </Grid>
      </Grid>
    );
  }
}

export default App;