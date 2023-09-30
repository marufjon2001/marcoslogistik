import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Zaregistr from "./Components/Zaregistr/Zaregistr";

const App = () => {
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);

  const handleOpen = () => setModalOne(true);
  const handleClose = () => setModalOne(false); 
  const clickTwo = () => {setModalTwo(true); handleClose();};
  const clickCloseTwo = () => setModalTwo(false);

  return (
    <div>
      <Navbar modalOne={modalOne} handleOpen={handleOpen} handleClose={handleClose} clickTwo={clickTwo} />
      <Home />
      <Footer />
      <Zaregistr modalTwo={modalTwo} clickCloseTwo={clickCloseTwo} clickTwo={clickTwo} />
    </div>
  );
};

export default App;
