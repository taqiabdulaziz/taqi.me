import React, { Component } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { uiConfig, firebase, db } from '../db/db';
import { firestore } from 'firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import style from '../styles/style';

class Home extends Component {
  state = {
    article: [
      {
        title: 'Djoernal',
        desc:
          'Djoernal is an accounting mobile app which can be used by individuals as a personal revenue & expense tracker or used by micro-to-medium scale business for booking keeping with proper accounting procedures.',
        link: 'https://github.com/djoernal'
      },
      {
        title: 'PEKMA VII Official Android App',
        desc:
          'Pekan Mahasiswa VII or PEKMA VII is the biggest sport, academic, and art competition in PKN STAN which is organized by PKN STAN, cooperating with some enthusiastic, creative, and innovative students.',
        link: 'https://play.google.com/store/apps/details?id=id.pekma.pekmavii'
      },
      {
        title: 'Money Rain',
        desc: 'Simple arcade game built using Firebase & VueJS',
        link: 'https://tangkapduit.firebaseapp.com/'
      },
      {
        title: 'Kanban',
        desc: 'Mini Kanban built using Firebase & VueJS',
        link: 'https://kanban-24700.firebaseapp.com/#/'
      }
    ]
  };

  render() {
    return (
      <Grid container justify="center" alignContent="center" style={style.body}>
        <Paper style={style.centerPaper} elevation={20}>
          <Grid
            container
            direction="column"
            justify="space-between"
            style={{ height: '100%', width: '100%' }}
          >
            <Grid item style={{ width: '100%', height: "80%", padding: "20px" }}>
              <Grid style={{background: "brown", width: "100%", height: "100%"}}></Grid>
            </Grid>
            <Grid item style={{ width: '100%', height: "20%" }}>
              <Paper style={{height: "100%", background: "#09cb78"}}>a</Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }

  async componentWillMount() {
    db.collection('data').onSnapshot(querySnapshot => {});
  }
}

export default Home;
