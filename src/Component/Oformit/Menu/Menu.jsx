import { Box } from '@mui/material';
import React from 'react';
import Navbarwhite from "../../Navbar/Navbarwhite/Navbarwhite"
import Posilku from '../Posilku/Posilku';
import Tovar from "../Posilku/Tovar/Tovar"
const Menu = () => {
    return (
        <Box>
            <Navbarwhite/>
            {/* <Posilku/> */}
            <Tovar/>
        </Box>
    );
}

export default Menu;
