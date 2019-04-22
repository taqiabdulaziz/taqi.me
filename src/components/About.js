import React from 'react'
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

class About extends React.Component {
  render() {
    return (
      <div
      style={{
        background: 'teal'
      }}
    >
      <Window
        style={{
          width: 600,
        }}
      >
        <WindowHeader>aboutme.exe </WindowHeader>{' '}
        <Toolbar>
          <Button flat size="sm">
            File{' '}
          </Button>{' '}
          <Button flat size="sm">
            Edit{' '}
          </Button>{' '}
          <Button flat size="sm">
            Save{' '}
          </Button>{' '}
        </Toolbar>{' '}
        <WindowContent>
          <p>I'm Muhammad Taqi. a Full Stack Developer, coffee consumer, reader, currently working at Full Stack Developer at Axiata Digital Services Indonesia, living in South Tangerang - Indonesia</p>
        </WindowContent>{' '}
      </Window>{' '}
    </div>
    )
  }
}
export default About
