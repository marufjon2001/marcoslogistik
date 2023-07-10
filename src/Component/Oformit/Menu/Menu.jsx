import { Box } from '@mui/material';
import React from 'react';
import Navbarwhite from "../../Navbar/Navbarwhite/Navbarwhite"
import Posilku from '../Posilku/Posilku';
import Tovar from "../Posilku/Tovar/Tovar"
import Oplata from '../../Oplata/Oplata';
const Menu = () => {
    return (
        <Box>
            <Navbarwhite/>
            {/* <Posilku/> */}
            {/* <Tovar/> */}
            <Oplata/>
        </Box>
    );
}

export default Menu;
