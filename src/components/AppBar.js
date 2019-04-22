import React from 'react';
import {
  Button,
  themes,
  List,
  ListItem,
  Divider,
  AppBar,
  Toolbar,
  TextField,
  Menu,
  Window,
  WindowHeader,
  WindowContent
} from 'react95';

import About from './About'
import Project from './Project'

class Home extends React.Component {

  state = {
    window: 0
  }

  handleChange = async (number) => {
    this.setState({
      window: number
    })
  }

  render() {
    return (
      <div
      style={{
        padding: '5rem',
        background: 'teal',
        height: '100vh'
      }}
    >
      <AppBar>
        <Toolbar
          style={{
            justifyContent: 'flex-start'
          }}
        >
          <div
            style={{
              background: 'teal'
            }}
          >
            <Button onClick={() => this.handleChange(0)
            }>About </Button>{' '}
          </div>{' '}
          <div
            style={{
              background: 'teal'
            }}
          >
            <Button onClick={() => this.handleChange(1)}>Projects </Button>{' '}
          </div>{' '}
          <div
            style={{
              background: 'teal'
            }}
          >
            <Button>default </Button>{' '}
          </div>{' '}
        </Toolbar>
      </AppBar>{' '}
   {
     this.state.window === 0 && (<About></About>)
   }
   {
     this.state.window === 1 && (<Project></Project>)
   }
        
    </div>
    )
  }
}

export default Home;
