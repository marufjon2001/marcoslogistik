import { Box } from '@mui/material';
import React, { Component } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Zaregistirovat from "./Component/Zaregistirovat/Zaregistirvoat"


class App extends Component {
  render() {
    return (
      <Box>
        <Navbar/>
        {/* <Home/> */}
        {/* <Footer/> */}
        <Zaregistirovat/>
      </Box>
    );
  }
}

export default App;
