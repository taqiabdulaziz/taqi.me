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
  WindowContent,
  Fieldset
} from 'react95';

export default class Project extends React.Component {
  render() {
    return (
      <div
        style={{
          background: 'teal',
          height: '100vh',
          width: '100vh'
        }}
      >
        <Window
          style={{
            width: 400
          }}
        >
          <WindowHeader>project1.exe </WindowHeader>{' '}
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
            <Fieldset label="Djoernal">Djoernal is an accounting mobile app which can be used by individuals as a personal revenue & expense tracker or used by micro-to-medium scale business for booking keeping with proper accounting procedures.</Fieldset>
          </WindowContent>{' '}
        </Window>{' '}
        <Window
          style={{
            width: 400
          }}
        >
          <WindowHeader>myproject.exe </WindowHeader>{' '}
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
            <Fieldset label="Label here">Some content here 😍</Fieldset>
          </WindowContent>{' '}
        </Window>{' '}
      </div>
    );
  }
}
