import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider, AppBar, Toolbar, TextField, Menu } from 'react95';
import Home from './components/AppBar'

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default props =>
  <div className="App">
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
      <Home></Home>
    </ThemeProvider>
  </div>