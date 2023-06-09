import { Box, Typography,Fab } from '@mui/material';
import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';


const Navbar1 = () => {
    return (
        <Box width={"100%"} sx={{backgroundColor: '#FFFFFF',zIndex: '1000'}}>
      <Box width={'100%'} display={'flex'} justifyContent={'center'} sx={{padding: '10px'}}>
      <Box width={'87%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Box sx={{display: 'flex',gap: '30px'}}>
          <Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#000000',flex: 'none',order: '0',flexGrow: '0',cursor: 'pointer'}}>
          О компании
          </Typography>
          <Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#000000',flex: 'none',order: '0',flexGrow: '0',cursor: 'pointer'}}>
          Частые вопросы
          </Typography>
          <Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#000000',flex: 'none',order: '0',flexGrow: '0',cursor: 'pointer'}}>
          Сотрудничество
          </Typography>
        </Box>
        <Box sx={{display: 'flex',alignItems: 'center',gap: '15px'}}>
        <Fab style={{backgroundColor: '#F2F4F5',flex: 'none',order: '0',flexGrow: '0',width: '35px',height: '17px',boxShadow: 'none'}} color="primary" aria-label="add">
         <PhoneIcon style={{fontSize: '22px',color: "#23262F"}}/>
        </Fab>
        <Typography style={{fontStyle: 'Inter',fontWeight: '500',fontSize: '15px',lineHeight: '16px',color: '#000000',flex: 'none',order: '1',flexGrow: '0'}}> +998 (77) 777-46-00</Typography>
        </Box>
      </Box>
      </Box>
      </Box>
    );
}

export default Navbar1;
