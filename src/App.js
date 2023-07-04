import { Box } from '@mui/material';
import React, { Component } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Zaregistirovat from "./Component/Zaregistirovat/Zaregistirvoat"
import Navbarwhite from "./Component/Navbar/Navbarwhite/Navbarwhite"
import Menu from './Component/Oformit/Menu/Menu';


class App extends Component {
  render() {  
    return (
      <Box>
        {/* <Navbar/> */}
        {/* <Home/> */}
        <Menu/>
        <Zaregistirovat/>
        <Footer/>
      </Box>
    );
  }
}

export default App;
