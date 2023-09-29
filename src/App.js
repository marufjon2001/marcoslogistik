import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home"
import Footer from './Components/Footer/Footer';
import Zaregistr from "./Components/Zaregistr/Zaregistr"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Zaregistr/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
