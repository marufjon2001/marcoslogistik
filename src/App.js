import { Box } from '@mui/material';
import React, { Component } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Zaregistirovat from "./Component/Zaregistirovat/Zaregistirvoat"
// import Navbarwhite from "./Component/Navbar/Navbarwhite/Navbarwhite"
import Menu from './Component/Oformit/Menu/Menu';
import Posilku from "./Component/Oformit/Posilku/Posilku"
import { Route,Routes } from 'react-router-dom';
import Tovar from "./Component/Oformit/Posilku/Tovar/Tovar"
import Oplata from "./Component/Oplata/Oplata"
import Lichniy from './Component/Lichniy/Lichniy';
import Draver from "./Component/Lichniy/Draver/Draver"
import Otslejevaniy from './Component/Otslejevaniy/Otslejevaniy';



class App extends Component {
  render() { 
    return (
      <Box>
        {/* <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/menu/posilku' element={<Posilku/>}/>
          <Route path='/menu/Tovar' element={<Tovar/>}/>
          <Route path='/menu/Oplata' element={<Oplata/>}/>
        </Routes> */}
        {/* <Lichniy/> */}
        <Otslejevaniy/>
        {/* <Zaregistirovat/> */}
        <Footer/>
      </Box>
    );
  }
}

export default App;
