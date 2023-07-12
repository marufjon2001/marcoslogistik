import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import map from "../../images/Lichniy/map.png"
import Radio from '@mui/material/Radio';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  const [text,settext] = React.useState([
    {
      nomer: '1231313',
      status: 'Заказ подтвержден',
      adres: 'Инициативная улица, 11, Москва, Россия, 121357',
      tip: 'До пункта выдачи',
      data: '21.12.2021',
      trecknomer: 'NHJ78652365',
      color: 'secondary'
    },
    {
      nomer: '1231313',
      status: 'Заказ подтвержден',
      adres: 'Инициативная улица, 11, Москва, Россия, 121357',
      tip: 'До пункта выдачи',
      data: '21.12.2021',
      trecknomer: 'NHJ78652365',
      color: 'success'
    },
    {
      nomer: '1231313',
      status: 'Заказ подтвержден',
      adres: 'Инициативная улица, 11, Москва, Россия, 121357',
      tip: 'До пункта выдачи',
      data: '21.12.2021',
      trecknomer: 'NHJ78652365',
      color: 'warning'
    },
    {
      nomer: '1231313',
      status: 'Заказ подтвержден',
      adres: 'Инициативная улица, 11, Москва, Россия, 121357',
      tip: 'До пункта выдачи',
      data: '21.12.2021',
      trecknomer: 'NHJ78652365',
      color: 'info'
    },
  ])

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
        {
          text.map((item,index)=>(
            <Box onClick={toggleDrawer(anchor, true)}sx={{display: 'flex',alignItems: 'center',cursor: 'pointer',padding: '2px',gap: '40px'}}>
         <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',color: '#252426'}}>{item.nomer}</Typography>
         <Typography style={{display: 'flex',alignItems: 'center'}}><Radio
        value="b"
        defaultChecked
        color={item.color}
        inputProps={{ 'aria-label': 'B' }}
      /><Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '14px',color: '#23262F'}}>{item.status}</Typography></Typography>
         <Box width={"20%"}>
         <Typography style={{display: 'flex',alignItems: 'center'}}><Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#23262F',}}>{item.adres}</Typography></Typography>
         </Box>
         <Typography style={{display: 'flex',alignItems: 'center'}}><Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '14px',color: '#23262F',}}>{item.tip}</Typography></Typography>
         <Typography style={{display: 'flex',alignItems: 'center'}}><Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '14px',color: '#23262F'}}>{item.data}</Typography></Typography>
         <Typography style={{display: 'flex',alignItems: 'center'}}><Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '14px',color: '#23262F'}}>{item.trecknomer}</Typography></Typography>
        </Box>
          ))
        }
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box sx={{display: 'flex',justifyContent: 'center',padding: '10px'}}>
              <Box sx={{width: '85%',}}>
               <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '18px',lineHeight: '18px',color: '#23262F'}}>Номер заказа:NHJ78652365</Typography>
               <hr />
               <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '18px',lineHeight: '18px',color: '#23262F'}}>Статус</Typography>
               <Typography style={{display: 'flex',alignItems: 'center',gap: '15px'}}><Checkbox {...label} defaultChecked /><Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '14px',color: '#23262F'}}>Заказ подтвержден</Typography><span style={{fontWeight: '500',fontSize: '12px',color: '#777E90'}}>13:00</span></Typography>
               <Typography style={{display: 'flex',alignItems: 'center',gap: '15px'}}><Checkbox {...label} /><Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '14px',color: '#777E90'}}>Заказ отправлен</Typography></Typography>
               <Typography style={{display: 'flex',alignItems: 'center',gap: '15px'}}><Checkbox {...label} /><Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '14px',color: '#777E90'}}>В пункте распределения</Typography></Typography>
               <Typography style={{display: 'flex',alignItems: 'center',gap: '15px'}}><Checkbox {...label} /><Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '14px',color: '#777E90'}}>Заказ прибыл в место назначение</Typography></Typography>
               <hr />
               <Box sx={{display: 'flex',justifyContent: 'center',flexDirection: 'column',alignItems: 'center'}}>
               <Typography style={{display: 'flex',alignItems: 'center',gap: '15px'}}><Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '22px',color: '#777E90',justifyContent: 'center'}}>Примерная дата доставки: 31:12:2021</Typography></Typography><br />
               <img src={map} alt="" /><br />
               <Button style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '14px',color: '#23262F',height: '40px',border: '2px solid #CDD3D9'}}>Отменить заказ</Button>
               </Box>
              </Box>
            </Box>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Box>
  );
}