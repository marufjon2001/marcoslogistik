import { Box } from '@mui/material';
import React, { Component } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';


class App extends Component {
  render() {
    return (
      <Box>
        <Navbar/>
        <Home/>
      </Box>
    );
  }
}

export default App;
