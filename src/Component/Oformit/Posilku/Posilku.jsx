import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Posilku1 from "../../images/Posilku/Posilku.svg"

const Posilku = () => {
    return (
        <Box>
            <img style={{width: '100%'}} src={Posilku1} alt="" />
            <Box sx={{display: 'flex',justifyContent: 'center'}} mt={5}>
                <Box sx={{width: '85%',border: '2px solid black'}}>
                    <Typography variant='p' style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '32px',color: '#23262F'}}>Тип посылки</Typography>
                    <br /><br />
                    <Box sx={{display: 'flex',gap: '20px'}}>
                        <Button style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '12px',lineHeight: '16px',color: 'white',padding: '12px, 16px, 12px, 16px',backgroundColor: '#23262F',height: '40px',width: '200px'}}>Автомобил</Button>
                        <Button style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '12px',lineHeight: '16px',color: 'black',padding: '12px, 16px, 12px, 16px',height: '40px',width: '200px',border: '2px solid #E6E8EC'}}> Товары</Button>
                    </Box>
                    <br></br><br />
                    <Box>
                    <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '32px',color: '#23262F'}}>Вес и габариты</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Posilku;
