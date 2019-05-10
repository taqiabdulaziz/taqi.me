import React, { Component } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { uiConfig, firebase, db } from '../db/db';
import { firestore } from 'firebase';

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
            <Grid item style={{ width: '100%', height: "85%", padding: "50px" }}>
              <Grid container style={{width: "100%", height: "100%"}}>
                <Grid item xs={6} container justify="center" alignContent="center">
                  <Grid style={{width: "100%", height: "100%"}}>
                    <img src={"https://avatars0.githubusercontent.com/u/30410316?s=460&v=4"} style={style.profilePicture}/>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h3" style={style.text}>Hi</Typography>
                  <Typography variant="h4" style={style.text}>I'm Muhammad Taqi</Typography>
                  <Typography variant="h4" style={style.text}>Full Stack Developer</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ width: '100%', height: "15%" }}>
              <Paper style={{height: "100%", background: "#09cb78"}}>
                <Grid container justify="space-evenly" alignContent="center" alignItems="center" style={{height: "100%", width: "100%"}}>
                  <a href='https://google.comw'>
                    <img src={require('../asset/icons/instagram.png')} style={style.socialMediaLogo}></img>
                  </a>
                  <img src={require('../asset/icons/linkedin-logo-1.svg')} style={style.socialMediaLogo}></img>
                  <img src={require('../asset/icons/github-logo.svg')} style={style.socialMediaLogo}></img>
                </Grid>
              </Paper>
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
