import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import tranck from "../images/Home/tranck.png"

const Home = () => {
    return (
        <Box sx={{backgroundColor: '#FFFFFF'}}>
            {/* tanck img */}
           <Box width={'100%'} height={'100%'} position={'relative'}>
            <Box sx={{display: 'flex',justifyContent: 'center'}}>
            <Box position={'absolute'} width={'86%'} mt={12}>
                <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '35px',lineHeight: '40px',color: '#FFFFFF',}}>Решения для практически <br /> бесконечного числа <br /> потребностей в логистике</Typography>
                <br />
                <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '20px',lineHeight: '28px',color: '#FFFFFF'}}>MarcosLogistics представлена более чем в 20 городах и <br /> территориях России и Узбекистана</Typography>
                <br /><br /><br />
                <Button style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '16px',alignItems: 'center',color: '#23262F',backgroundColor: '#FCFCFD',padding: '12px, 16px, 12px, 16px',height: '40px',width: "130px"}}>Подробнее</Button>
            </Box>
            </Box>
            <img style={{width: '100%',height: '100%'}} src={tranck} alt="" />
           </Box>
           <Box display={'flex'} justifyContent={'center'}>
             <Box width={'86%'} border={1}> 
                <Box></Box>
                <Box></Box>
             </Box>
           </Box>
        </Box>
    );
}

export default Home;
