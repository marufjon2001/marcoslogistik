import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, false)}

    >
    </Box>
  );

  return (
    <Box>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
        <Box onClick={toggleDrawer(anchor, true)}>
salonm
        </Box>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box sx={{display: 'flex',justifyContent: 'center'}}>
              <Box sx={{width: '85%',border: '1px solid black'}}>
               <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '18px',lineHeight: '18px',color: '#23262F'}}>Номер заказа:NHJ78652365</Typography>
               <hr />
               <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '18px',lineHeight: '18px',color: '#23262F'}}>Статус</Typography>
               <Typography style={{display: 'flex',alignItems: 'center',gap: '15px'}}><Checkbox {...label} defaultChecked /><Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '14px',color: '#23262F'}}>Заказ подтвержден</Typography><span style={{fontWeight: '500',fontSize: '12px',color: '#777E90'}}>13:00</span></Typography>
               <Typography style={{display: 'flex',alignItems: 'center',gap: '15px'}}><Checkbox {...label} /><Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '14px',color: '#777E90'}}>Заказ подтвержден</Typography></Typography>
               <Typography style={{display: 'flex',alignItems: 'center',gap: '15px'}}><Checkbox {...label} /><Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '14px',color: '#777E90'}}>Заказ подтвержден</Typography></Typography>
               <hr />
              </Box>
            </Box>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Box>
  );
}